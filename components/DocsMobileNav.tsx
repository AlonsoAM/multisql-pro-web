'use client';

import { useState } from 'react';
import { DocsSidebar } from './DocsSidebar';
import { MenuIcon, CloseIcon } from './Icons';

export function DocsMobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden inline-flex items-center gap-2 px-3 py-2 rounded-md text-[12.5px]"
        style={{
          background: 'var(--bg-panel)',
          border: '1px solid var(--border)',
          color: 'var(--fg)',
        }}
      >
        <MenuIcon size={14} />
        Documentation menu
      </button>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.5)' }}
          />
          <div
            className="absolute left-0 top-0 bottom-0 w-[280px] p-5 overflow-y-auto"
            style={{
              background: 'var(--bg-panel)',
              borderRight: '1px solid var(--border)',
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <p
                className="mono text-[11px] uppercase tracking-[0.08em]"
                style={{ color: 'var(--fg-muted)' }}
              >
                Documentation
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-7 h-7 inline-flex items-center justify-center rounded"
                style={{ border: '1px solid var(--border)' }}
              >
                <CloseIcon size={14} />
              </button>
            </div>
            <DocsSidebar onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
