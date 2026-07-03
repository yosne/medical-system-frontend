import type { Consultation } from "@/types/api";
import { Button } from "@/components/ui/Button";
import { Table } from "@/components/ui/Table";

type Props = {
  consultations: Consultation[];
  onView: (consultation: Consultation) => void;
  onEdit: (consultation: Consultation) => void;
  onDelete: (consultation: Consultation) => void;
};

export function ConsultationTable({
  consultations,
  onView,
  onEdit,
  onDelete,
}: Props) {
  const rows = consultations.map((consultation) => (
    <tr key={consultation.id} className="hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4 font-medium">{consultation.patientName}</td>

      <td className="px-6 py-4">{consultation.doctorName}</td>

      <td className="px-6 py-4">{consultation.specialtyName}</td>

      <td className="px-6 py-4">{consultation.mainDiagnosisCode ?? "—"}</td>

      <td className="px-6 py-4">{consultation.consultationDate}</td>

      <td className="px-6 py-4">
        <div className="flex gap-2 flex-wrap">
          <Button variant="secondary" onClick={() => onView(consultation)}>
            Ver
          </Button>

          <Button variant="secondary" onClick={() => onEdit(consultation)}>
            Editar
          </Button>

          <Button variant="danger" onClick={() => onDelete(consultation)}>
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  ));

  return (
    <Table
      headers={[
        "Paciente",
        "Médico",
        "Especialidad",
        "Motivo",
        "Fecha",
        "Acciones",
      ]}
      rows={rows}
    />
  );
}
