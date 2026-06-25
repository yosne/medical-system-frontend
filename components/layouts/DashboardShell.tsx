import { ReactNode } from "react";
import { Sidebar } from "@/components/layouts/Sidebar";
import { Topbar } from "@/components/layouts/Topbar";

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto min-h-screen max-w-[1800px]">
        <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:min-h-screen">
          <Sidebar />
          <main className="min-h-screen border-l border-slate-200/70 bg-white/90 lg:border-l-transparent">
            <Topbar />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
              <div className="mx-auto w-full max-w-7xl">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
