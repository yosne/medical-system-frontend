import type { Exam } from "@/types/api";

export const mockExams: Exam[] = [
  {
    id: "1",
    consultationId: "C001",
    patientName: "John Smith",
    examType: "Laboratorio",
    requestDescription: "Hematología completa",
    specificResults: "",
    status: "Pending",
    createdAt: "2026-07-03",
  },
  {
    id: "2",
    consultationId: "C002",
    patientName: "Sarah Johnson",
    examType: "Radiografía",
    requestDescription: "Radiografía de tórax",
    specificResults: "Sin alteraciones",
    status: "Completed",
    createdAt: "2026-07-02",
  },
];
