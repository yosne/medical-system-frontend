"use client";

import React from "react";

export function AlertsCard({ alerts = [] }: { alerts?: string[] }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
      <h3 className="text-sm font-semibold text-slate-900">Alertas clínicas</h3>
      <ul className="mt-3 space-y-2">
        {alerts.length === 0 ? (
          <li className="text-sm text-slate-500">Sin alertas críticas.</li>
        ) : (
          alerts.map((a, i) => (
            <li key={i} className="text-sm text-amber-700">
              {a}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default AlertsCard;
