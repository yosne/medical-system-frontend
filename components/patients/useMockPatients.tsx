"use client";

import { useEffect, useMemo, useState } from "react";
import type { Patient } from "@/types/api";
import { MOCK_PATIENTS } from "./mockPatients";

function persistKey() {
  return "ms:mock:patients";
}

export function useMockPatients() {
  const [patients, setPatients] = useState<Patient[]>(() => {
    try {
      const raw = localStorage.getItem(persistKey());
      if (raw) return JSON.parse(raw) as Patient[];
    } catch (e) {
      // ignore
    }
    return MOCK_PATIENTS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(persistKey(), JSON.stringify(patients));
    } catch (e) {
      // ignore
    }
  }, [patients]);

  const createPatient = (values: Partial<Patient>) => {
    const newPatient: Patient = {
      id: `p_${Date.now()}`,
      firstName: values.firstName ?? "",
      lastName: values.lastName ?? "",
      email: values.email ?? "",
      phone: values.phone ?? "",
      dateOfBirth: values.dateOfBirth ?? "",
      medicalRecordNumber:
        values.medicalRecordNumber ??
        `MRN-${Math.floor(Math.random() * 10000)}`,
      gender: (values as any).gender ?? "",
    };
    setPatients((s) => [newPatient, ...s]);
  };

  const updatePatient = (id: string, values: Partial<Patient>) => {
    setPatients((s) => s.map((p) => (p.id === id ? { ...p, ...values } : p)));
  };

  const deletePatient = (id: string) => {
    setPatients((s) => s.filter((p) => p.id !== id));
  };

  return {
    patients,
    isLoading: false,
    error: null as null | Error,
    createPatient: { mutate: createPatient, isLoading: false },
    updatePatient: { mutate: updatePatient, isLoading: false },
    deletePatient: { mutate: deletePatient, isLoading: false },
  } as const;
}
