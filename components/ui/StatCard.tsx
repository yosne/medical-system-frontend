import type { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: string | number;
  delta?: string;
  icon?: ReactNode;
  description?: string;
};

export function StatCard({
  title,
  value,
  delta,
  icon,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            {title}
          </div>
          <div className="mt-2 flex items-baseline gap-3">
            <div className="text-3xl font-semibold text-slate-900">{value}</div>
            {delta ? (
              <div className="text-sm text-green-600">{delta}</div>
            ) : null}
          </div>
          {description ? (
            <div className="mt-2 text-sm text-slate-600">{description}</div>
          ) : null}
        </div>
        {icon ? <div className="text-slate-500">{icon}</div> : null}
      </div>
    </div>
  );
}
