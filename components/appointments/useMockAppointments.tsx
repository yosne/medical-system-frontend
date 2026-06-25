"use client";

import { useEffect, useMemo, useState } from "react";
import { MOCK_APPOINTMENTS, type Appointment } from "./mockAppointments";

function key() {
  return "ms:mock:appointments";
}

export function useMockAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const raw = localStorage.getItem(key());
      if (raw) return JSON.parse(raw) as Appointment[];
    } catch (e) {}
    return MOCK_APPOINTMENTS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key(), JSON.stringify(appointments));
    } catch (e) {}
  }, [appointments]);

  const create = (values: Partial<Appointment>) => {
    const appt: Appointment = {
      id: `a_${Date.now()}`,
      patientName: values.patientName ?? "",
      clinician: values.clinician ?? "",
      dateTime: values.dateTime ?? new Date().toISOString(),
      location: values.location ?? "",
      reason: values.reason ?? "",
      status: (values.status as any) ?? "Scheduled",
    };
    setAppointments((s) => [appt, ...s]);
  };

  const update = (id: string, values: Partial<Appointment>) =>
    setAppointments((s) =>
      s.map((a) => (a.id === id ? { ...a, ...values } : a)),
    );

  const remove = (id: string) =>
    setAppointments((s) => s.filter((a) => a.id !== id));

  const upcoming = useMemo(() => {
    const now = Date.now();
    return appointments
      .filter(
        (a) => new Date(a.dateTime).getTime() > now && a.status === "Scheduled",
      )
      .sort(
        (x, y) =>
          new Date(x.dateTime).getTime() - new Date(y.dateTime).getTime(),
      );
  }, [appointments]);

  return {
    appointments,
    upcoming,
    create: { mutate: create, isLoading: false },
    update: { mutate: update, isLoading: false },
    remove: { mutate: remove, isLoading: false },
    isLoading: false,
    error: null as null | Error,
  } as const;
}
