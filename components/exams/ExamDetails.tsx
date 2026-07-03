import type { Exam } from "@/types/api";
import { Card } from "@/components/ui/Card";

type Props = {
  exam: Exam;
};

export function ExamDetails({ exam }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card
        title="Información del examen"
        description="Datos generales del examen solicitado"
      >
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Paciente:</span> {exam.patientName}
          </p>

          <p>
            <span className="font-semibold">Tipo de examen:</span>{" "}
            {exam.examType}
          </p>

          <p>
            <span className="font-semibold">Fecha:</span> {exam.createdAt}
          </p>

          <p>
            <span className="font-semibold">Estado:</span>{" "}
            {exam.status === "Pending"
              ? "Pendiente"
              : exam.status === "Completed"
                ? "Completado"
                : "Cancelado"}
          </p>
        </div>
      </Card>

      <Card title="Resultados" description="Información clínica">
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold">Solicitud</p>

            <p className="text-slate-600">{exam.requestDescription}</p>
          </div>

          <div>
            <p className="font-semibold">Resultados</p>

            <p className="text-slate-600">
              {exam.specificResults || "Sin resultados registrados."}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
