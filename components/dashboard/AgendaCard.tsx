"use client";

import React from "react";
import { Button } from "@/components/ui/Button";

type Appointment = {
  id: string;
  time: string;
  patient: string;
  location?: string;
};

export function AgendaCard({ items = [] }: { items?: Appointment[] }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">Agenda del día</h3>
        <Button type="button" variant="secondary">
          Ver agenda
        </Button>
      </div>

      <ul className="mt-4 space-y-3">
        {items.length === 0 ? (
          <li className="text-sm text-slate-500">No hay citas para hoy.</li>
        ) : (
          items.map((it) => (
            <li key={it.id} className="flex items-center justify-between">
              <div>
                <div className="font-medium text-slate-900">{it.patient}</div>
                <div className="text-sm text-slate-500">
                  {it.time} · {it.location ?? "—"}
                </div>
              </div>
              <div className="text-sm text-slate-500">
                {/* actions placeholder */}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default AgendaCard;
