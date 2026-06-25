"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { Patient } from "@/types/api";
import { Button } from "@/components/ui/Button";

const patientSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  dateOfBirth: z.string().optional().or(z.literal("")),
  medicalRecordNumber: z.string().optional().or(z.literal("")),
});

type PatientFormValues = z.infer<typeof patientSchema>;

type PatientFormProps = {
  initialValues?: Partial<Patient>;
  onSubmit: (values: PatientFormValues) => void;
  submitLabel: string;
  isSubmitting?: boolean;
};

export function PatientForm({
  initialValues,
  onSubmit,
  submitLabel,
  isSubmitting = false,
}: PatientFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientFormValues>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      firstName: initialValues?.firstName ?? "",
      lastName: initialValues?.lastName ?? "",
      email: initialValues?.email ?? "",
      phone: initialValues?.phone ?? "",
      dateOfBirth: initialValues?.dateOfBirth ?? "",
      medicalRecordNumber: initialValues?.medicalRecordNumber ?? "",
    },
  });

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          First name
          <input
            {...register("firstName")}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
          {errors.firstName ? (
            <p className="mt-1 text-sm text-red-600">
              {errors.firstName.message}
            </p>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Last name
          <input
            {...register("lastName")}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
          {errors.lastName ? (
            <p className="mt-1 text-sm text-red-600">
              {errors.lastName.message}
            </p>
          ) : null}
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            {...register("email")}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
          {errors.email ? (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Phone
          <input
            {...register("phone")}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Date of birth
          <input
            type="date"
            {...register("dateOfBirth")}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Medical record number
          <input
            {...register("medicalRecordNumber")}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
        </label>
      </div>
      <Button type="submit" isSubmitting={isSubmitting}>
        {submitLabel}
      </Button>
    </form>
  );
}
