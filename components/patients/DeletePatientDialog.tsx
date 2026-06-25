"use client";

import { Button } from "@/components/ui/Button";

type DeletePatientDialogProps = {
  open: boolean;
  patientName: string;
  onCancel: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
};

export function DeletePatientDialog({
  open,
  patientName,
  onCancel,
  onConfirm,
  isLoading = false,
}: DeletePatientDialogProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
      <div className="w-full max-w-lg rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
        <div className="space-y-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Confirm delete
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">
              Delete patient
            </h2>
          </div>
          <p className="text-sm leading-7 text-slate-600">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-slate-950">{patientName}</span>?
            This action cannot be undone.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button type="button" variant="secondary" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              type="button"
              variant="danger"
              onClick={onConfirm}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete patient"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
