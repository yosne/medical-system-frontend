"use client";

import React from "react";

type Item = { id: string; label: string; icon?: React.ReactNode };

export function Sidebar({
  items = [],
  activeId,
}: {
  items?: Item[];
  activeId?: string;
}) {
  return (
    <nav className="w-64 bg-transparent pr-4">
      <div className="sticky top-4">
        <div className="mb-6 px-2">
          <div className="text-sm font-semibold text-[var(--text)]">
            Sistema Clínico
          </div>
          <div className="text-xs text-[var(--muted)]">Panel interno</div>
        </div>

        <ul className="space-y-1">
          {items.map((it) => (
            <li key={it.id}>
              <a
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${activeId === it.id ? "bg-[var(--primary)]/10 text-[var(--primary)] font-medium" : "text-[var(--muted)] hover:bg-slate-50"}`}
                href="#"
              >
                <span className="h-5 w-5 text-[var(--muted)]">
                  {it.icon ?? "•"}
                </span>
                <span className="text-sm">{it.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
