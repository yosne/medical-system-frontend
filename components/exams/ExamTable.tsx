import type { Exam } from "@/types/api";
import { Button } from "@/components/ui/Button";
import { Table } from "@/components/ui/Table";

type ExamTableProps = {
  exams: Exam[];
  onView: (exam: Exam) => void;
  onEdit: (exam: Exam) => void;
  onDelete: (exam: Exam) => void;
};

export function ExamTable({ exams, onView, onEdit, onDelete }: ExamTableProps) {
  const rows = exams.map((exam) => (
    <tr key={exam.id} className="hover:bg-slate-50">
      <td className="px-6 py-4 font-medium text-slate-900">
        {exam.patientName}
      </td>

      <td className="px-6 py-4 text-slate-700">{exam.examType}</td>

      <td className="px-6 py-4 text-slate-700">{exam.requestDescription}</td>

      <td className="px-6 py-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            exam.status === "Completed"
              ? "bg-green-100 text-green-700"
              : exam.status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
          }`}
        >
          {exam.status === "Completed"
            ? "Completado"
            : exam.status === "Pending"
              ? "Pendiente"
              : "Cancelado"}
        </span>
      </td>

      <td className="px-6 py-4 text-slate-700">{exam.createdAt}</td>

      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => onView(exam)}>
            Ver
          </Button>

          <Button variant="secondary" onClick={() => onEdit(exam)}>
            Editar
          </Button>

          <Button variant="danger" onClick={() => onDelete(exam)}>
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
        "Tipo de examen",
        "Solicitud",
        "Estado",
        "Fecha",
        "Acciones",
      ]}
      rows={rows}
    />
  );
}
