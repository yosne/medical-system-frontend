import type { Patient } from "@/types/api";

export const MOCK_PATIENTS: Patient[] = [
  {
    id: "p_001",
    firstName: "Maria",
    lastName: "Rodriguez",
    email: "maria.rodriguez@example.com",
    phone: "+1 (555) 123-4567",
    gender: "Female",
    dateOfBirth: "1986-04-12",
    medicalRecordNumber: "MRN-1001",
  },
  {
    id: "p_002",
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 987-6543",
    gender: "Male",
    dateOfBirth: "2010-09-30",
    medicalRecordNumber: "MRN-1002",
  },
  {
    id: "p_003",
    firstName: "Emily",
    lastName: "Carter",
    email: "emily.carter@example.com",
    phone: "+1 (555) 555-0101",
    gender: "Female",
    dateOfBirth: "1992-01-18",
    medicalRecordNumber: "MRN-1003",
  },
];
