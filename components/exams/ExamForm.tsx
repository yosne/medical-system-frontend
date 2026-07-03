"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import type { Exam } from "@/types/api";
import { Button } from "@/components/ui/Button";

const examSchema = z.object({
  patientName: z.string().min(2, "El paciente es obligatorio"),
  examType: z.string().min(2, "El tipo de examen es obligatorio"),
  requestDescription: z.string().min(5, "La solicitud es obligatoria"),
  specificResults: z.string().optional(),
  status: z.string(),
});

type ExamFormValues = z.infer<typeof examSchema>;

type ExamFormProps = {
  initialValues?: Partial<Exam>;
  onSubmit: (values: ExamFormValues) => void;
  submitLabel: string;
  isSubmitting?: boolean;
};

export function ExamForm({
  initialValues,
  onSubmit,
  submitLabel,
  isSubmitting = false,
}: ExamFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExamFormValues>({
    resolver: zodResolver(examSchema),
    defaultValues: {
      patientName: initialValues?.patientName ?? "",
      examType: initialValues?.examType ?? "",
      requestDescription: initialValues?.requestDescription ?? "",
      specificResults: initialValues?.specificResults ?? "",
      status: initialValues?.status ?? "Pending",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Paciente
          <input
            {...register("patientName")}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3"
          />
          {errors.patientName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.patientName.message}
            </p>
          )}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Tipo de examen
          <input
            {...register("examType")}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3"
          />
          {errors.examType && (
            <p className="mt-1 text-sm text-red-600">
              {errors.examType.message}
            </p>
          )}
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Solicitud del examen
        <textarea
          rows={3}
          {...register("requestDescription")}
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3"
        />
        {errors.requestDescription && (
          <p className="mt-1 text-sm text-red-600">
            {errors.requestDescription.message}
          </p>
        )}
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Resultados
        <textarea
          rows={4}
          {...register("specificResults")}
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3"
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Estado
        <select
          {...register("status")}
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3"
        >
          <option value="Pending">Pendiente</option>
          <option value="Completed">Completado</option>
          <option value="Cancelled">Cancelado</option>
        </select>
      </label>

      <Button type="submit" isLoading={isSubmitting}>
        {submitLabel}
      </Button>
    </form>
  );
}
