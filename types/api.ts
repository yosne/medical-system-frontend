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
export type Consultation = {
  id: string;

  patientId: string;
  patientName: string;

  doctorId: string;
  doctorName: string;

  specialtyId: number;
  specialtyName: string;

  reasonForVisit: string;

  currentIllness?: string;

  physicalExamination?: string;

  mainDiagnosisCode?: string;

  evolutionNotes?: string;

  consultationDate: string;
};
export type Exam = {
  id: string;

  consultationId: string;

  patientName: string;

  examType: string;

  requestDescription: string;

  specificResults?: string;

  status: "Pending" | "Completed" | "Cancelled";

  createdAt: string;
};
