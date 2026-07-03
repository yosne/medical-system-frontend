"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import type { Consultation } from "@/types/api";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

import { ConsultationTable } from "@/components/consultations/ConsultationTable";
import { ConsultationFilters } from "@/components/consultations/ConsultationFilters";
import { ConsultationSkeleton } from "@/components/consultations/ConsultationSkeleton";
import { ConsultationDetails } from "@/components/consultations/ConsultationDetails";
import { DeleteConsultationDialog } from "@/components/consultations/DeleteConsultationDialog";

import { useConsultations } from "@/hooks/use-consultations";

export default function ConsultationsPage() {
  const router = useRouter();

  const { consultations, loading } = useConsultations();

  const [search, setSearch] = useState("");

  const [selectedConsultation, setSelectedConsultation] =
    useState<Consultation | null>(null);

  const [consultationToDelete, setConsultationToDelete] =
    useState<Consultation | null>(null);

  const filteredConsultations = useMemo(() => {
    const value = search.toLowerCase();

    return consultations.filter(
      (consultation) =>
        consultation.patientName.toLowerCase().includes(value) ||
        consultation.doctorName.toLowerCase().includes(value) ||
        consultation.specialtyName.toLowerCase().includes(value) ||
        consultation.reasonForVisit.toLowerCase().includes(value),
    );
  }, [consultations, search]);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Consultas</h1>

            <p className="mt-2 text-slate-500">
              Administra las consultas médicas registradas en el sistema.
            </p>
          </div>

          <Button onClick={() => router.push("/dashboard/consultations/new")}>
            Nueva consulta
          </Button>
        </div>

        <ConsultationFilters search={search} onSearchChange={setSearch} />

        {loading ? (
          <ConsultationSkeleton />
        ) : (
          <ConsultationTable
            consultations={filteredConsultations}
            onView={setSelectedConsultation}
            onEdit={(consultation) =>
              router.push(`/dashboard/consultations/${consultation.id}/edit`)
            }
            onDelete={setConsultationToDelete}
          />
        )}

        {selectedConsultation && (
          <Card
            title="Detalle de la consulta"
            description="Información clínica"
          >
            <ConsultationDetails consultation={selectedConsultation} />
          </Card>
        )}
      </div>

      <DeleteConsultationDialog
        open={!!consultationToDelete}
        consultationName={consultationToDelete?.patientName ?? ""}
        onCancel={() => setConsultationToDelete(null)}
        onConfirm={() => {
          console.log("Delete", consultationToDelete);

          setConsultationToDelete(null);
        }}
      />
    </div>
  );
}
