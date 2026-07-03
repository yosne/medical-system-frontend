import type { Consultation } from "@/types/api";
import { Card } from "@/components/ui/Card";

type Props = {
  consultation: Consultation;
};

export function ConsultationDetails({ consultation }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card
        title="Información del paciente"
        description="Datos generales de la consulta"
      >
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Paciente:</span>{" "}
            {consultation.patientName}
          </p>

          <p>
            <span className="font-semibold">Médico:</span>{" "}
            {consultation.doctorName}
          </p>

          <p>
            <span className="font-semibold">Especialidad:</span>{" "}
            {consultation.specialtyName}
          </p>

          <p>
            <span className="font-semibold">Fecha:</span>{" "}
            {consultation.consultationDate}
          </p>
        </div>
      </Card>

      <Card
        title="Información clínica"
        description="Detalles registrados durante la consulta"
      >
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold">Motivo de la consulta</p>

            <p className="text-slate-600">{consultation.reasonForVisit}</p>
          </div>

          <div>
            <p className="font-semibold">Enfermedad actual</p>

            <p className="text-slate-600">
              {consultation.currentIllness || "—"}
            </p>
          </div>

          <div>
            <p className="font-semibold">Examen físico</p>

            <p className="text-slate-600">
              {consultation.physicalExamination || "—"}
            </p>
          </div>

          <div>
            <p className="font-semibold">Código de diagnóstico</p>

            <p className="text-slate-600">
              {consultation.mainDiagnosisCode || "—"}
            </p>
          </div>

          <div>
            <p className="font-semibold">Notas de evolución</p>

            <p className="text-slate-600">
              {consultation.evolutionNotes || "—"}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
