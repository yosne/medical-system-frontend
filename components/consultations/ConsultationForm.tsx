"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { Consultation } from "@/types/api";
import { Button } from "@/components/ui/Button";

const consultationSchema = z.object({
  patientName: z.string().min(2, "El paciente es obligatorio"),
  doctorName: z.string().min(2, "El médico es obligatorio"),
  specialtyName: z.string().min(2, "La especialidad es obligatoria"),
  consultationDate: z.string().min(1, "La fecha es obligatoria"),
  reasonForVisit: z.string().min(5, "El motivo de la consulta es obligatorio"),
  currentIllness: z.string().optional(),
  physicalExamination: z.string().optional(),
  mainDiagnosisCode: z.string().optional(),
  evolutionNotes: z.string().optional(),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

type ConsultationFormProps = {
  initialValues?: Partial<Consultation>;
  onSubmit: (values: ConsultationFormValues) => void;
  submitLabel: string;
  isSubmitting?: boolean;
};

export function ConsultationForm({
  initialValues,
  onSubmit,
  submitLabel,
  isSubmitting = false,
}: ConsultationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      patientName: initialValues?.patientName ?? "",
      doctorName: initialValues?.doctorName ?? "",
      specialtyName: initialValues?.specialtyName ?? "",
      consultationDate: initialValues?.consultationDate?.slice(0, 10) ?? "",
      reasonForVisit: initialValues?.reasonForVisit ?? "",
      currentIllness: initialValues?.currentIllness ?? "",
      physicalExamination: initialValues?.physicalExamination ?? "",
      mainDiagnosisCode: initialValues?.mainDiagnosisCode ?? "",
      evolutionNotes: initialValues?.evolutionNotes ?? "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Paciente
          <input
            {...register("patientName")}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
          {errors.patientName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.patientName.message}
            </p>
          )}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Médico
          <input
            {...register("doctorName")}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
          {errors.doctorName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.doctorName.message}
            </p>
          )}
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Especialidad
          <input
            {...register("specialtyName")}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
          {errors.specialtyName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.specialtyName.message}
            </p>
          )}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Fecha de la consulta
          <input
            type="date"
            {...register("consultationDate")}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
          {errors.consultationDate && (
            <p className="mt-1 text-sm text-red-600">
              {errors.consultationDate.message}
            </p>
          )}
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Motivo de la consulta
        <textarea
          rows={3}
          {...register("reasonForVisit")}
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        />
        {errors.reasonForVisit && (
          <p className="mt-1 text-sm text-red-600">
            {errors.reasonForVisit.message}
          </p>
        )}
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Enfermedad actual
        <textarea
          rows={3}
          {...register("currentIllness")}
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Examen físico
        <textarea
          rows={3}
          {...register("physicalExamination")}
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Código de diagnóstico
        <input
          {...register("mainDiagnosisCode")}
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Notas de evolución
        <textarea
          rows={4}
          {...register("evolutionNotes")}
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        />
      </label>

      <Button type="submit" isLoading={isSubmitting}>
        {submitLabel}
      </Button>
    </form>
  );
}
