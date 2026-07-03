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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-slate-900">
          Eliminar consulta
        </h2>

        <p className="mt-3 text-sm text-slate-600">
          ¿Está seguro de que desea eliminar esta consulta? Esta acción no se
          puede deshacer.
          <strong>{consultationName}</strong>?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>

          <Button variant="danger" isLoading={isLoading} onClick={onConfirm}>
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
}
