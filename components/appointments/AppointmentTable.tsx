"use client";

import { Appointment } from "./mockAppointments";
import { Button } from "@/components/ui/Button";
import { AppointmentStatusBadge } from "./AppointmentStatusBadge";
import { Table } from "@/components/ui/Table";

type Props = {
  appointments: Appointment[];
  onView?: (a: Appointment) => void;
  onEdit?: (a: Appointment) => void;
  onDelete?: (a: Appointment) => void;
};

export function AppointmentTable({
  appointments,
  onView,
  onEdit,
  onDelete,
}: Props) {
  const rows = appointments.map((a) => (
    <tr key={a.id} className="hover:bg-slate-50">
      <td className="px-6 py-4 text-slate-800">
        {new Date(a.dateTime).toLocaleString()}
      </td>
      <td className="px-6 py-4 font-medium text-slate-900">{a.patientName}</td>
      <td className="px-6 py-4 text-slate-700">{a.clinician}</td>
      <td className="px-6 py-4 text-slate-700">{a.location ?? "—"}</td>
      <td className="px-6 py-4">
        {" "}
        <AppointmentStatusBadge status={a.status} />
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          {onView ? (
            <Button type="button" variant="secondary" onClick={() => onView(a)}>
              Ver
            </Button>
          ) : null}
          {onEdit ? (
            <Button type="button" variant="secondary" onClick={() => onEdit(a)}>
              Editar
            </Button>
          ) : null}
          {onDelete ? (
            <Button type="button" variant="danger" onClick={() => onDelete(a)}>
              Eliminar
            </Button>
          ) : null}
        </div>
      </td>
    </tr>
  ));

  return (
    <Table
      headers={[
        "Hora",
        "Paciente",
        "Doctor",
        "Ubicación",
        "Estado",
        "Acciones",
      ]}
      rows={rows}
    />
  );
}
