import type { Patient } from "@/types/api";
import { Button } from "@/components/ui/Button";
import { Table } from "@/components/ui/Table";

type PatientTableProps = {
  patients: Patient[];
  onEdit: (patient: Patient) => void;
  onDelete: (patient: Patient) => void;
  onView?: (patient: Patient) => void;
};

export function PatientTable({
  patients,
  onEdit,
  onDelete,
}: PatientTableProps) {
  const rows = patients.map((patient) => (
    <tr key={patient.id} className="hover:bg-slate-50">
      <td className="px-6 py-4 font-medium text-slate-900">
        {patient.firstName} {patient.lastName}
      </td>
      <td className="px-6 py-4 text-slate-700">
        {patient.medicalRecordNumber ?? "—"}
      </td>
      <td className="px-6 py-4 text-slate-700">{patient.id ?? "—"}</td>
      <td className="px-6 py-4 text-slate-700">{patient.phone ?? "—"}</td>
      <td className="px-6 py-4 text-slate-700">{patient.email ?? "—"}</td>
      <td className="px-6 py-4 text-slate-700">{patient.gender ?? "—"}</td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {onView ? (
            <Button
              type="button"
              variant="secondary"
              onClick={() => onView(patient)}
            >
              Ver
            </Button>
          ) : null}
          <Button
            type="button"
            variant="secondary"
            onClick={() => onEdit(patient)}
          >
            Editar
          </Button>
          <Button
            type="button"
            variant="danger"
            onClick={() => onDelete(patient)}
          >
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  ));

  return (
    <Table
      headers={[
        "Nombre",
        "MRN",
        "ID",
        "Teléfono",
        "Email",
        "Género",
        "Acciones",
      ]}
      rows={rows}
    />
  );
}
