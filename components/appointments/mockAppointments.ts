export type AppointmentStatus = "Scheduled" | "Completed" | "Cancelled";

export type Appointment = {
  id: string;
  patientName: string;
  clinician: string;
  dateTime: string; // ISO
  location?: string;
  reason?: string;
  status: AppointmentStatus;
};

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: "a_001",
    patientName: "Maria Rodriguez",
    clinician: "Dr. Alan Perez",
    dateTime: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
    location: "Room 101",
    reason: "Routine check-up",
    status: "Scheduled",
  },
  {
    id: "a_002",
    patientName: "John Smith",
    clinician: "Dr. Lucia Gomez",
    dateTime: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    location: "Room 202",
    reason: "Follow-up",
    status: "Completed",
  },
  {
    id: "a_003",
    patientName: "Emily Carter",
    clinician: "Dr. Alan Perez",
    dateTime: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(),
    location: "Telehealth",
    reason: "New symptoms",
    status: "Scheduled",
  },
  {
    id: "a_004",
    patientName: "Carlos Martinez",
    clinician: "Dr. Lucia Gomez",
    dateTime: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    location: "Room 303",
    reason: "Cancelled appointment",
    status: "Cancelled",
  },
];
