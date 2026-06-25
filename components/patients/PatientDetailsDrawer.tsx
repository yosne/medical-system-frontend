"use client";

import type { Patient } from "@/types/api";

type Props = {
  open: boolean;
  patient: Patient | null;
  onClose: () => void;
};

export function PatientDetailsDrawer({ open, patient, onClose }: Props) {
  if (!open || !patient) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1" onClick={onClose} />
      <aside className="w-full max-w-md border-l border-slate-200 bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {patient.firstName} {patient.lastName}
            </h2>
            <p className="mt-1 text-sm text-slate-500">Patient details</p>
          </div>
          <button onClick={onClose} className="text-sm text-slate-500">
            Close
          </button>
        </div>

        <div className="mt-6 space-y-4 text-sm text-slate-700">
          <div>
            <div className="font-medium text-slate-900">ID Number</div>
            <div>{patient.medicalRecordNumber ?? patient.id}</div>
          </div>
          <div>
            <div className="font-medium text-slate-900">Phone</div>
            <div>{patient.phone ?? "—"}</div>
          </div>
          <div>
            <div className="font-medium text-slate-900">Email</div>
            <div>{patient.email ?? "—"}</div>
          </div>
          <div>
            <div className="font-medium text-slate-900">Date of birth</div>
            <div>{patient.dateOfBirth ?? "—"}</div>
          </div>
          <div>
            <div className="font-medium text-slate-900">Gender</div>
            <div>{patient.gender ?? "—"}</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
