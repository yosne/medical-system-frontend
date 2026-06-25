"use client";

import React from "react";

type Props = {
  title: string;
  value: string | number;
  tone?: "primary" | "success" | "warning" | "danger";
  subtitle?: string;
};

const toneMap: Record<string, string> = {
  primary: "text-blue-600",
  success: "text-green-600",
  warning: "text-amber-600",
  danger: "text-red-600",
};

export function KpiCard({ title, value, tone = "primary", subtitle }: Props) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
      <p className="text-xs text-slate-500">{title}</p>
      <div className="mt-2 flex items-baseline gap-3">
        <span className={`text-2xl font-semibold ${toneMap[tone]}`}>
          {value}
        </span>
        {subtitle && <span className="text-sm text-slate-400">{subtitle}</span>}
      </div>
    </div>
  );
}

export default KpiCard;
