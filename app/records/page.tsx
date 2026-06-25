import { Card } from "@/components/ui/Card";

export default function RecordsPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-4xl border border-(--border) bg-(--surface) p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-(--muted)">
            Registros clínicos
          </p>
          <h1 className="text-3xl font-semibold text-(--text)">
            Historial de pacientes
          </h1>
          <p className="max-w-2xl text-sm text-(--muted)">
            Navega, busca y administra los registros médicos de tus pacientes
            desde un solo lugar.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card
          title="Resumen"
          description="Visualiza los registros médicos recientes y notas clínicas."
        />
        <Card
          title="Documentos"
          description="Accede a archivos, exámenes y documentos de pacientes."
        />
        <Card
          title="Plantillas"
          description="Crea y reutiliza formularios de registro clínico estándar."
        />
      </div>
    </div>
  );
}
