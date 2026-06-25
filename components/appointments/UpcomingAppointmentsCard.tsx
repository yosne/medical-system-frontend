"use client";

import { Appointment } from "./mockAppointments";
import { Button } from "@/components/ui/Button";

type Props = {
  upcoming: Appointment[];
  onView?: (a: Appointment) => void;
};

export function UpcomingAppointmentsCard({ upcoming, onView }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Próximas citas</h3>
      <p className="mt-1 text-sm text-slate-500">Siguientes visitas programadas</p>

      <div className="mt-4 space-y-3">
        {upcoming.slice(0, 5).map((a) => (
          <div key={a.id} className="flex items-center justify-between gap-4">
            <div>
              <div className="font-medium text-slate-900">{a.patientName}</div>
              <div className="text-sm text-slate-500">
                {new Date(a.dateTime).toLocaleString()} · {a.clinician}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button type="button" onClick={() => onView?.(a)}>Ver</Button>
            </div>
          </div>
        ))}
        {upcoming.length === 0 && (
          <div className="text-sm text-slate-500">No hay próximas citas</div>
        )}
      </div>
    </div>
  );
