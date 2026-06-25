import type {
  Appointment,
  LoginPayload,
  LoginResponse,
  MedicalRecord,
  Patient,
} from "@/types/api";
import { api } from "@/lib/axios";

export const authAPI = {
  login: async (payload: LoginPayload) => {
    const response = await api.post<LoginResponse>("/auth/login", payload);
    return response.data;
  },
};

export const patientsAPI = {
  list: async () => {
    const response = await api.get<Patient[]>("/patients");
    return response.data;
  },
  get: async (patientId: string) => {
    const response = await api.get<Patient>(`/patients/${patientId}`);
    return response.data;
  },
  create: async (payload: Omit<Patient, "id">) => {
    const response = await api.post<Patient>("/patients", payload);
    return response.data;
  },
  update: async (patientId: string, payload: Partial<Omit<Patient, "id">>) => {
    const response = await api.put<Patient>(`/patients/${patientId}`, payload);
    return response.data;
  },
  remove: async (patientId: string) => {
    const response = await api.delete<void>(`/patients/${patientId}`);
    return response.data;
  },
};

export const appointmentsAPI = {
  list: async () => {
    const response = await api.get<Appointment[]>("/appointments");
    return response.data;
  },
  get: async (appointmentId: string) => {
    const response = await api.get<Appointment>(
      `/appointments/${appointmentId}`,
    );
    return response.data;
  },
  create: async (payload: Omit<Appointment, "id">) => {
    const response = await api.post<Appointment>("/appointments", payload);
    return response.data;
  },
  update: async (
    appointmentId: string,
    payload: Partial<Omit<Appointment, "id">>,
  ) => {
    const response = await api.put<Appointment>(
      `/appointments/${appointmentId}`,
      payload,
    );
    return response.data;
  },
  remove: async (appointmentId: string) => {
    const response = await api.delete<void>(`/appointments/${appointmentId}`);
    return response.data;
  },
};

export const medicalRecordsAPI = {
  list: async () => {
    const response = await api.get<MedicalRecord[]>("/medical-records");
    return response.data;
  },
  get: async (recordId: string) => {
    const response = await api.get<MedicalRecord>(
      `/medical-records/${recordId}`,
    );
    return response.data;
  },
  create: async (payload: Omit<MedicalRecord, "id">) => {
    const response = await api.post<MedicalRecord>("/medical-records", payload);
    return response.data;
  },
  update: async (
    recordId: string,
    payload: Partial<Omit<MedicalRecord, "id">>,
  ) => {
    const response = await api.put<MedicalRecord>(
      `/medical-records/${recordId}`,
      payload,
    );
    return response.data;
  },
  remove: async (recordId: string) => {
    const response = await api.delete<void>(`/medical-records/${recordId}`);
    return response.data;
  },
};
