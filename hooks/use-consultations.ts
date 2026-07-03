"use client";

import { useEffect, useState } from "react";
import type { Consultation } from "@/types/api";
import { consultationService } from "@/services/consultation.service";

export function useConsultations() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    consultationService.getAll().then((data) => {
      setConsultations(data);
      setLoading(false);
    });
  }, []);

  return {
    consultations,
    loading,
  };
}
