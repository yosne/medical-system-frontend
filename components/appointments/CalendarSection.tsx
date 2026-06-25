"use client";

import { Appointment } from "./mockAppointments";

type Props = { appointments: Appointment[] };

export function CalendarSection({ appointments }: Props) {
  // Simplified calendar: group by date and list
  const grouped = appointments.reduce<Record<string, Appointment[]>>(
    (acc, a) => {
      const day = new Date(a.dateTime).toLocaleDateString();
      acc[day] = acc[day] || [];
      acc[day].push(a);
      return acc;
    },
    {},
  );

  const days = Object.keys(grouped).sort(
    (x, y) => new Date(x).getTime() - new Date(y).getTime(),
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Calendario</h3>
      <p className="mt-1 text-sm text-slate-500">Citas por día</p>

      <div className="mt-4 space-y-4 max-h-96 overflow-auto">
        {days.map((day) => (
          <div key={day}>
            <div className="font-medium text-slate-800">{day}</div>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              {grouped[day].map((a) => (
                <li key={a.id} className="flex items-center justify-between">
                  <div>
                    {new Date(a.dateTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    — {a.patientName} ({a.clinician})
                  </div>
                  <div className="text-slate-500">{a.location ?? "—"}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {days.length === 0 ? (
          <div className="text-sm text-slate-500">No se encontraron citas</div>
        ) : null}
      </div>
    </div>
  );
}
