export default function DocsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)_200px] gap-10">
        <aside className="hidden lg:block" aria-hidden>
          <div className="sticky top-20 space-y-2">
            <SkeletonBlock w="60%" h={12} />
            <SkeletonBlock w="85%" h={14} />
            <SkeletonBlock w="70%" h={14} />
            <SkeletonBlock w="80%" h={14} />
            <div className="h-3" />
            <SkeletonBlock w="55%" h={12} />
            <SkeletonBlock w="75%" h={14} />
            <SkeletonBlock w="65%" h={14} />
            <div className="h-3" />
            <SkeletonBlock w="50%" h={12} />
            <SkeletonBlock w="80%" h={14} />
            <SkeletonBlock w="70%" h={14} />
            <SkeletonBlock w="60%" h={14} />
          </div>
        </aside>

        <article className="min-w-0" aria-busy="true" aria-label="Loading">
          <SkeletonBlock w="55%" h={36} />
          <div className="h-3" />
          <SkeletonBlock w="80%" h={16} />
          <div className="h-10" />
          <SkeletonBlock w="100%" h={14} />
          <div className="h-2" />
          <SkeletonBlock w="95%" h={14} />
          <div className="h-2" />
          <SkeletonBlock w="90%" h={14} />
          <div className="h-8" />
          <SkeletonBlock w="40%" h={22} />
          <div className="h-4" />
          <SkeletonBlock w="100%" h={14} />
          <div className="h-2" />
          <SkeletonBlock w="92%" h={14} />
          <div className="h-2" />
          <SkeletonBlock w="85%" h={14} />
          <div className="h-2" />
          <SkeletonBlock w="78%" h={14} />
          <div className="h-8" />
          <SkeletonBlock w="100%" h={120} radius={8} />
        </article>

        <aside className="hidden xl:block" aria-hidden>
          <div className="sticky top-20 space-y-2">
            <SkeletonBlock w="60%" h={12} />
            <SkeletonBlock w="80%" h={12} />
            <SkeletonBlock w="70%" h={12} />
            <SkeletonBlock w="65%" h={12} />
          </div>
        </aside>
      </div>
    </div>
  );
}

function SkeletonBlock({
  w,
  h,
  radius = 4,
}: {
  w: string | number;
  h: number;
  radius?: number;
}) {
  return (
    <div
      style={{
        width: typeof w === 'number' ? `${w}px` : w,
        height: h,
        borderRadius: radius,
        background:
          'linear-gradient(90deg, var(--bg-subtle) 0%, var(--bg-panel) 50%, var(--bg-subtle) 100%)',
        backgroundSize: '200% 100%',
        animation: 'navprog-shimmer 1.4s ease-in-out infinite',
      }}
    />
  );
}
