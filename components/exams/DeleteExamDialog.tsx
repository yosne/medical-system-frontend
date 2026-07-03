"use client";

import { Button } from "@/components/ui/Button";

type DeleteExamDialogProps = {
  open: boolean;
  examName: string;
  onCancel: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
};

export function DeleteExamDialog({
  open,
  examName,
  onCancel,
  onConfirm,
  isLoading = false,
}: DeleteExamDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
      <div className="w-full max-w-lg rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
        <div className="space-y-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Confirmar eliminación
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-950">
              Eliminar examen
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-600">
            ¿Seguro que deseas eliminar el examen de
            <span className="font-semibold text-slate-950"> {examName}</span>?
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
