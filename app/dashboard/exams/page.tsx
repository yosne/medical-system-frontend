"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import type { Exam } from "@/types/api";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

import { ExamTable } from "@/components/exams/ExamTable";
import { ExamFilters } from "@/components/exams/ExamFilters";
import { ExamSkeleton } from "@/components/exams/ExamSkeleton";

import { useExams } from "@/hooks/use-exams";

export default function ExamsPage() {
  const router = useRouter();

  const { exams, loading } = useExams();

  const [search, setSearch] = useState("");

  const filteredExams = useMemo(() => {
    const value = search.toLowerCase();

    return exams.filter(
      (exam) =>
        exam.patientName.toLowerCase().includes(value) ||
        exam.examType.toLowerCase().includes(value),
    );
  }, [search, exams]);

  const handleView = (exam: Exam) => {
    console.log(exam);
  };

  const handleEdit = (exam: Exam) => {
    router.push(`/dashboard/exams/${exam.id}/edit`);
  };

  const handleDelete = (exam: Exam) => {
    console.log("Eliminar", exam);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Exámenes</h1>

            <p className="mt-2 text-slate-500">
              Gestiona las solicitudes y resultados de exámenes.
            </p>
          </div>

          <Button onClick={() => router.push("/dashboard/exams/new")}>
            Nuevo examen
          </Button>
        </div>

        <ExamFilters search={search} onSearchChange={setSearch} />

        <Card
          title="Listado de exámenes"
          description="Solicitudes y resultados registrados"
        >
          {loading ? (
            <ExamSkeleton />
          ) : (
            <ExamTable
              exams={filteredExams}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </Card>
      </div>
    </div>
  );
}
