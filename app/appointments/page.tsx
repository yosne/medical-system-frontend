"use client";

import { useState } from "react";
import { AppointmentTable } from "@/components/appointments/AppointmentTable";
import { CalendarSection } from "@/components/appointments/CalendarSection";
import { UpcomingAppointmentsCard } from "@/components/appointments/UpcomingAppointmentsCard";
import { useMockAppointments } from "@/components/appointments/useMockAppointments";
import { Button } from "@/components/ui/Button";
import { AppointmentStatusBadge } from "@/components/appointments/AppointmentStatusBadge";

export default function AppointmentsPage() {
  const { appointments, upcoming, remove } = useMockAppointments();
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-950">Citas</h1>
            <p className="mt-2 text-slate-600">
              Programar y gestionar las citas de la clínica.
            </p>
          </div>
          <div className="flex gap-3">
            <Button type="button">Nueva cita</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <AppointmentTable
              appointments={appointments}
              onView={(a) => setSelected(a)}
              onDelete={(a) => remove.mutate(a.id)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <UpcomingAppointmentsCard
            upcoming={upcoming}
            onView={(a) => setSelected(a)}
          />
          <CalendarSection appointments={appointments} />
        </div>
      </div>

      {selected ? (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1" onClick={() => setSelected(null)} />
          <aside className="w-full max-w-md border-l border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  {selected.patientName}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {new Date(selected.dateTime).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-sm text-slate-500"
              >
                Cerrar
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="font-medium">Doctor</div>
              <div>{selected.clinician}</div>

              <div className="font-medium">Ubicación</div>
              <div>{selected.location ?? "—"}</div>

              <div className="font-medium">Motivo</div>
              <div>{selected.reason ?? "—"}</div>

              <div className="font-medium">Estado</div>
              <div>
                <AppointmentStatusBadge status={selected.status} />
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
