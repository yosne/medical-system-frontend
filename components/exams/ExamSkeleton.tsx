export function ExamSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="animate-pulse">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-6 border-b border-slate-100 px-6 py-5"
          >
            <div className="h-4 w-40 rounded bg-slate-200" />

            <div className="h-4 w-36 rounded bg-slate-200" />

            <div className="h-4 flex-1 rounded bg-slate-200" />

            <div className="h-8 w-24 rounded-full bg-slate-200" />

            <div className="h-4 w-24 rounded bg-slate-200" />

            <div className="ml-auto flex gap-2">
              <div className="h-9 w-16 rounded-xl bg-slate-200" />
              <div className="h-9 w-16 rounded-xl bg-slate-200" />
              <div className="h-9 w-20 rounded-xl bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
