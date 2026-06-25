"use client";

import { Header } from "@/components/ui/Header";
import { KpiCard } from "@/components/ui/KpiCard";
import { AgendaCard } from "@/components/dashboard/AgendaCard";
import { AlertsCard } from "@/components/dashboard/AlertsCard";
import { RecentPatientsCard } from "@/components/dashboard/RecentPatientsCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { Card } from "@/components/ui/Card";

const placeholder = {
  totalPatients: 1248,
  totalDoctors: 56,
  todaysAppointments: 34,
  medicalRecords: 5421,
};

export default function DashboardPage() {
  return (
    <div className="space-y-8 bg-[#F8FAFC] min-h-screen p-6">
      <section className="rounded-4xl border border-transparent bg-transparent px-0 py-0 md:px-0">
        <div className="max-w-7xl mx-auto">
          <Header userName="Dra. Pérez" notifications={3} />

          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            <KpiCard
              title="Pacientes activos"
              value={placeholder.totalPatients}
              tone="primary"
            />
            <KpiCard
              title="Citas programadas hoy"
              value={placeholder.todaysAppointments}
              tone="primary"
            />
            <KpiCard
              title="Doctores disponibles"
              value={placeholder.totalDoctors}
              tone="success"
            />
            <KpiCard title="Casos urgentes" value={3} tone="danger" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-10">
        <div className="lg:col-span-7 space-y-4">
          <AgendaCard
            items={[
              {
                id: "1",
                time: "10:30",
                patient: "María Rodríguez",
                location: "Consultorio 2",
              },
              {
                id: "2",
                time: "11:00",
                patient: "Jorge Pérez",
                location: "Consultorio 1",
              },
            ]}
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <div>
              <Card
                title="Próximas citas"
                description="Siguientes visitas programadas"
              >
                <div className="mt-4">
                  {" "}
                  {/* could reuse UpcomingAppointmentsCard here */}
                  <p className="text-sm text-slate-500">
                    Ver ajustes de agenda
                  </p>
                </div>
              </Card>
            </div>
            <div>
              <Card
                title="Pacientes recientes"
                description="Últimos registros añadidos"
              >
                <RecentPatientsCard
                  patients={[
                    { id: "p1", name: "Lucía Moreno", lastVisit: "2026-06-24" },
                  ]}
                />
              </Card>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-3 space-y-4">
          <AlertsCard
            alerts={[
              "Paciente con alergia a penicilina",
              "Laboratorio: resultados pendientes (3)",
            ]}
          />
          <Card
            title="Pendientes administrativos"
            description="Tareas por completar"
          >
            <ul className="mt-3 text-sm text-slate-700">
              <li>Validar facturas pendientes</li>
              <li>Revisar consentimientos firmados</li>
            </ul>
          </Card>
        </aside>
      </section>

      <section className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-2">
        <RecentPatientsCard
          patients={[
            { id: "p2", name: "Carlos Ruiz", lastVisit: "2026-06-23" },
          ]}
        />
        <ActivityFeed
          events={[
            "Usuario A añadió resultado de laboratorio",
            "Cita #234 reprogramada",
          ]}
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card
          title="Próximas citas"
          description="Sigue las consultas más urgentes y organizadas."
        >
          <div className="mt-5 space-y-3">
            <div className="rounded-3xl border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    María Rodríguez
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    10:30 — Chequeo general
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  Consultorio 2
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Jorge Pérez
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    11:00 — Consulta cardiológica
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  Consultorio 1
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Lucía Moreno
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    11:30 — Seguimiento
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  Consultorio 4
                </span>
              </div>
            </div>
          </div>
        </Card>

        <Card
          title="Registros recientes"
          description="Documentos nuevos y resultados clave."
        >
          <div className="mt-5 space-y-3">
            <div className="rounded-3xl border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-900">
                Resultado de laboratorio — María Rodríguez
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Añadido hace 2 horas
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-900">
                Informe de imagen — Jorge Pérez
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Añadido hace 4 horas
              </p>
            </div>
          </div>
        </Card>

        <Card
          title="Estado del equipo"
          description="Resumen de la disponibilidad y operaciones."
        >
          <div className="mt-5 space-y-3 text-sm text-slate-700">
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">
                Doctores disponibles
              </p>
              <p className="mt-1">14</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">
                Consultorios operativos
              </p>
              <p className="mt-1">6</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">
                Pacientes pendientes
              </p>
              <p className="mt-1">3</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
