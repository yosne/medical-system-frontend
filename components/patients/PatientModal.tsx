"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type PatientModalProps = {
  title: string;
  description: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function PatientModal({
  title,
  description,
  open,
  onClose,
  children,
}: PatientModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
      <div className="w-full max-w-2xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
            <p className="mt-1 text-sm text-slate-600">{description}</p>
          </div>
          <Button type="button" variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
