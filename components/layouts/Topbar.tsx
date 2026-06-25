import { Fragment } from "react";

export function Topbar() {
  return (
    <div className="border-b border-slate-200/70 bg-white/95 px-4 py-4 shadow-sm backdrop-blur-sm sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Panel
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            Resumen operativo clínico
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-4">
          <div className="w-full sm:w-auto">
            <label className="relative block">
              <span className="sr-only">Buscar</span>
              <input
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                placeholder="Buscar pacientes, citas, registros..."
                aria-label="Buscar"
              />
            </label>
          </div>
          <button className="inline-flex items-center justify-center rounded-3xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-cyan-600/20 transition hover:bg-cyan-700">
            Nueva cita
          </button>
        </div>
      </div>
    </div>
  );
}
