export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role?: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  user: AuthUser;
};

export type Patient = {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  gender?: string;
  dateOfBirth?: string;
  medicalRecordNumber?: string;
};

export type Appointment = {
  id: string;
  patientId: string;
  providerId?: string;
  scheduledAt: string;
  status?: string;
  reason?: string;
};

export type MedicalRecord = {
  id: string;
  patientId: string;
  title: string;
  notes?: string;
  createdAt: string;
  updatedAt?: string;
};
