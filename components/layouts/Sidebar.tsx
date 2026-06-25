"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Inicio", href: "/dashboard" },
  { label: "Pacientes", href: "/patients" },
  { label: "Citas", href: "/appointments" },
  { label: "Registros", href: "/records" },
  { label: "Configuración", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full flex-col border-r border-slate-800/40 bg-slate-950 px-6 py-8 text-slate-100 lg:flex lg:w-72">
      <div className="flex h-full flex-col">
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500 text-lg font-bold text-white shadow-lg shadow-cyan-500/20">
            HM
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Gestión médica
            </p>
            <h1 className="text-xl font-semibold text-white">Portal clínico</h1>
          </div>
        </div>

        <nav className="flex-1 space-y-2" aria-label="Navegación principal">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-slate-950 shadow-lg shadow-white/10"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 rounded-3xl border border-slate-800/60 bg-slate-900/95 p-5 text-slate-300 shadow-inner shadow-slate-950/30">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Conexión rápida
          </p>
          <p className="mt-3 text-sm text-slate-200">
            Mantén el control de turnos, pacientes y alertas en un solo lugar.
          </p>
        </div>
      </div>
    </aside>
  );
}
