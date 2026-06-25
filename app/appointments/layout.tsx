import { ReactNode } from "react";
import { DashboardShell } from "@/components/layouts/DashboardShell";
import { AuthGuard } from "@/components/auth/AuthGuard";

export default function AppointmentsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AuthGuard>
      <DashboardShell>{children}</DashboardShell>
    </AuthGuard>
  );
}
