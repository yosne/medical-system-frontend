export function PatientSkeleton() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-4">
        <div className="h-6 w-3/5 rounded-full bg-slate-200" />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="h-12 rounded-3xl bg-slate-200" />
          <div className="h-12 rounded-3xl bg-slate-200" />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="h-10 rounded-3xl bg-slate-200" />
          <div className="h-10 rounded-3xl bg-slate-200" />
          <div className="h-10 rounded-3xl bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
