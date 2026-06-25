"use client";

type Props = { status: "Scheduled" | "Completed" | "Cancelled" };

export function AppointmentStatusBadge({ status }: Props) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium";
  if (status === "Scheduled")
    return (
      <span className={`${base} bg-yellow-100 text-yellow-800`}>
        Programada
      </span>
    );
  if (status === "Completed")
    return (
      <span className={`${base} bg-green-100 text-green-800`}>Completada</span>
    );
  return <span className={`${base} bg-red-100 text-red-800`}>Cancelada</span>;
}
