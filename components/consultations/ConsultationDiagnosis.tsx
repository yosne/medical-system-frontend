"use client";

import { Button } from "@/components/ui/Button";

type DeleteConsultationDialogProps = {
  open: boolean;
  consultationName: string;
  onCancel: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
};

export function DeleteConsultationDialog({
  open,
  consultationName,
  onCancel,
  onConfirm,
  isLoading = false,
}: DeleteConsultationDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
      <div className="w-full max-w-lg rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
        <div className="space-y-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Confirmación
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-950">
              Eliminar consulta
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-600">
            ¿Está seguro de que desea eliminar la consulta del paciente{" "}
            <span className="font-semibold text-slate-950">
              {consultationName}
            </span>
            ?
          </p>

          <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
            Esta acción no se puede deshacer.
          </p>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="secondary" onClick={onCancel}>
              Cancelar
            </Button>

            <Button variant="danger" isLoading={isLoading} onClick={onConfirm}>
              Eliminar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
