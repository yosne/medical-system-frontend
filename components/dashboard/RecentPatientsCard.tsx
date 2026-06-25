"use client";

import React from "react";

type Patient = { id: string; name: string; lastVisit: string };

export function RecentPatientsCard({
  patients = [],
}: {
  patients?: Patient[];
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
      <h3 className="text-sm font-semibold text-slate-900">
        Pacientes recientes
      </h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {patients.length === 0 ? (
          <li className="text-sm text-slate-500">
            No hay registros recientes.
          </li>
        ) : (
          patients.map((p) => (
            <li key={p.id} className="flex items-center justify-between">
              <div>
                <div className="font-medium text-slate-900">{p.name}</div>
                <div className="text-xs text-slate-500">
                  Última visita: {p.lastVisit}
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default RecentPatientsCard;
