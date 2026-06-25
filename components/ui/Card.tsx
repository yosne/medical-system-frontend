import { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function Card({ title, description, children }: CardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
        {title}
      </div>
      <p className="text-sm leading-6 text-slate-600">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}
