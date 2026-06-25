"use client";

import React from "react";

export function ActivityFeed({ events = [] }: { events?: string[] }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
      <h3 className="text-sm font-semibold text-slate-900">
        Actividad reciente
      </h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {events.length === 0 ? (
          <li className="text-sm text-slate-500">Sin actividad reciente.</li>
        ) : (
          events.map((e, i) => (
            <li key={i} className="text-sm text-slate-700">
              {e}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ActivityFeed;
