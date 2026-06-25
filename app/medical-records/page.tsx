import { Card } from "@/components/ui/Card";

export default function MedicalRecordsPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-950">
          Medical Records
        </h1>
        <p className="mt-3 text-slate-600">
          A safe and organized place for medical history, documentation, and
          patient charts.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card
          title="Records"
          description="Placeholder for medical notes, labs, and attachments."
        />
        <Card
          title="History"
          description="Placeholder for patient history and summaries."
        />
        <Card
          title="Templates"
          description="Placeholder for record templates and forms."
        />
      </div>
    </div>
  );
}
