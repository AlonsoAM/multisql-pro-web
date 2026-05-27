'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const COMPLETE_HOLD = 180;
const FADE_OUT = 260;
const TICK_INTERVAL = 100;

export function NavProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const completeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPathRef = useRef<string>(pathname);
  const activeRef = useRef<boolean>(false);

  function clearTimers() {
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
    if (completeRef.current) {
      clearTimeout(completeRef.current);
      completeRef.current = null;
    }
    if (fadeRef.current) {
      clearTimeout(fadeRef.current);
      fadeRef.current = null;
    }
  }

  function start() {
    if (activeRef.current) return;
    activeRef.current = true;
    clearTimers();
    setVisible(true);
    setProgress(8);
    tickRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 88) return p;
        const delta = Math.max(1, (95 - p) * 0.12);
        return Math.min(88, p + delta);
      });
    }, TICK_INTERVAL);
  }

  function finish() {
    if (!activeRef.current) return;
    activeRef.current = false;
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
    setProgress(100);
    completeRef.current = setTimeout(() => {
      setVisible(false);
      fadeRef.current = setTimeout(() => setProgress(0), FADE_OUT);
    }, COMPLETE_HOLD);
  }

  useEffect(() => {
    function onClick(ev: MouseEvent) {
      if (ev.defaultPrevented) return;
      if (ev.button !== 0) return;
      if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
      const target = ev.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      if (anchor.target && anchor.target !== '' && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;
      if (href.startsWith('#')) return;
      if (href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (/^https?:\/\//i.test(href)) {
        try {
          const url = new URL(href, window.location.href);
          if (url.origin !== window.location.origin) return;
        } catch {
          return;
        }
      }
      const next = new URL(href, window.location.href);
      if (
        next.pathname === window.location.pathname &&
        next.search === window.location.search
      ) {
        return;
      }
      start();
    }

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true } as EventListenerOptions);
  }, []);

  useEffect(() => {
    if (pathname !== lastPathRef.current) {
      lastPathRef.current = pathname;
      finish();
    }
  }, [pathname]);

  useEffect(() => {
    return () => clearTimers();
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 100,
        pointerEvents: 'none',
        opacity: visible ? 1 : 0,
        transition: visible ? 'opacity 100ms ease-out' : `opacity ${FADE_OUT}ms ease-out`,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'var(--accent)',
          boxShadow: '0 0 12px var(--accent), 0 0 6px var(--accent)',
          transition: 'width 180ms ease-out',
        }}
      />
    </div>
  );
}
