"use client";

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import { ConsultationForm } from "@/components/consultations/ConsultationForm";

import { mockConsultations } from "@/mocks/consultations";

export default function EditConsultationPage() {
  const router = useRouter();

  const consultation = mockConsultations[0];

  function handleSubmit(values: unknown) {
    console.log(values);

    // TODO:
    // consultationService.update(id, values);

    router.push("/dashboard/consultations");
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Edit Consultation
            </h1>

            <p className="mt-2 text-slate-500">
              Update consultation information.
            </p>
          </div>

          <Button variant="secondary" onClick={() => router.back()}>
            Back
          </Button>
        </div>

        <Card
          title="Consultation"
          description="Edit the selected consultation."
        >
          <ConsultationForm
            initialValues={consultation}
            submitLabel="Update Consultation"
            onSubmit={handleSubmit}
          />
        </Card>
      </div>
    </div>
  );
}
