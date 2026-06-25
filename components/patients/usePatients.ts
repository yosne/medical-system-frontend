"use client";

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Patient } from "@/types/api";
import { patientsAPI } from "@/lib/api";

export function usePatients() {
  const queryClient = useQueryClient();
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Patient | null>(null);

  const {
    data: patients = [],
    isLoading,
    error,
  } = useQuery<Patient[]>({
    queryKey: ["patients"],
    queryFn: patientsAPI.list,
  });

  const createPatient = useMutation<Patient, Error, Omit<Patient, "id">>({
    mutationFn: patientsAPI.create,
    onSuccess: (newPatient) => {
      queryClient.setQueryData<Patient[]>(["patients"], (existing) =>
        existing ? [newPatient, ...existing] : [newPatient],
      );
      setIsCreateOpen(false);
    },
  });

  const updatePatient = useMutation<
    Patient,
    Error,
    { id: string; values: Partial<Omit<Patient, "id">> }
  >({
    mutationFn: ({ id, values }) => patientsAPI.update(id, values),
    onSuccess: (updated) => {
      queryClient.setQueryData<Patient[]>(["patients"], (existing) =>
        existing
          ? existing.map((patient) =>
              patient.id === updated.id ? updated : patient,
            )
          : [updated],
      );
      setIsEditOpen(false);
      setSelectedPatient(null);
    },
  });

  const deletePatient = useMutation<
    void,
    Error,
    string,
    { previous?: Patient[] }
  >({
    mutationFn: patientsAPI.remove,
    onMutate: async (patientId: string) => {
      await queryClient.cancelQueries({ queryKey: ["patients"] });
      const previous = queryClient.getQueryData<Patient[]>(["patients"]);
      queryClient.setQueryData<Patient[]>(["patients"], (old) =>
        old ? old.filter((patient) => patient.id !== patientId) : [],
      );
      return { previous };
    },
    onError: (_error, _variables, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["patients"], context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["patients"] });
      setDeleteTarget(null);
    },
  });

  return {
    patients,
    isLoading,
    error,
    selectedPatient,
    isCreateOpen,
    isEditOpen,
    deleteTarget,
    setSelectedPatient,
    setIsCreateOpen,
    setIsEditOpen,
    setDeleteTarget,
    createPatient,
    updatePatient,
    deletePatient,
  };
}
