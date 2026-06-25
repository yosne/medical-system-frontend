"use client";

import { useMemo, useState } from "react";
import { PatientTable } from "@/components/patients/PatientTable";
import { PatientForm } from "@/components/patients/PatientForm";
import { PatientModal } from "@/components/patients/PatientModal";
import { DeletePatientDialog } from "@/components/patients/DeletePatientDialog";
import { PatientSkeleton } from "@/components/patients/PatientSkeleton";
import { Button } from "@/components/ui/Button";
import { useMockPatients } from "@/components/patients/useMockPatients";

export default function PatientsPage() {
  const {
    patients,
    isLoading,
    error,
    createPatient,
    updatePatient,
    deletePatient,
  } = useMockPatients();

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<any | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<any | null>(null);

  const content = useMemo(() => {
    if (isLoading) {
      return (
        <div className="grid gap-4">
          <PatientSkeleton />
          <PatientSkeleton />
          <PatientSkeleton />
        </div>
      );
    }

    if (error) {
      return (
        <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">
          No se pueden cargar los pacientes. Intenta nuevamente.
        </div>
      );
    }

    if (patients.length === 0) {
      return (
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center text-slate-700">
          <p className="text-lg font-semibold text-slate-950">
            No hay pacientes
          </p>
          <p className="mt-2 text-sm">
            Crea un paciente nuevo para comenzar a gestionar registros.
          </p>
          <div className="mt-6 flex justify-center">
            <Button type="button" onClick={() => setIsCreateOpen(true)}>
              Añadir primer paciente
            </Button>
          </div>
        </div>
      );
    }

    return (
      <PatientTable
        patients={patients}
        onEdit={(patient) => {
          setSelectedPatient(patient);
          setIsEditOpen(true);
        }}
        onDelete={(patient) => setDeleteTarget(patient)}
        onView={(patient) => setSelectedPatient(patient)}
      />
    );
  }, [error, isLoading, patients]);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-950">Pacientes</h1>
            <p className="mt-2 text-slate-600">
              Gestiona registros de pacientes, citas y detalles clínicos en un
              solo lugar.
            </p>
          </div>
          <Button type="button" onClick={() => setIsCreateOpen(true)}>
            Nuevo paciente
          </Button>
        </div>
      </div>

      <div className="space-y-4">{content}</div>

      <PatientModal
        title="Paciente nuevo"
        description="Añade un paciente a la base de datos."
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      >
        <PatientForm
          submitLabel="Crear paciente"
          onSubmit={(values) => {
            createPatient.mutate(values as any);
            setIsCreateOpen(false);
          }}
          isSubmitting={createPatient.isLoading}
        />
      </PatientModal>

      <PatientModal
        title="Editar paciente"
        description="Actualiza los datos del paciente."
        open={isEditOpen && selectedPatient !== null}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedPatient(null);
        }}
      >
        {selectedPatient ? (
          <PatientForm
            initialValues={selectedPatient}
            submitLabel="Guardar cambios"
            onSubmit={(values) => {
              updatePatient.mutate(selectedPatient.id, values as any);
              setIsEditOpen(false);
              setSelectedPatient(null);
            }}
            isSubmitting={updatePatient.isLoading}
          />
        ) : null}
      </PatientModal>

      <DeletePatientDialog
        open={deleteTarget !== null}
        patientName={
          deleteTarget
            ? `${deleteTarget.firstName} ${deleteTarget.lastName}`
            : ""
        }
        onCancel={() => setDeleteTarget(null)}
        onConfirm={() => {
          if (deleteTarget) {
            deletePatient.mutate(deleteTarget.id);
            setDeleteTarget(null);
          }
        }}
        isLoading={deletePatient.isLoading}
      />
    </div>
  );
}
