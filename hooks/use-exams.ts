"use client";

import { useEffect, useState } from "react";
import type { Exam } from "@/types/api";
import { examService } from "@/services/exam.service";

export function useExams() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    examService.getAll().then((data) => {
      setExams(data);
      setLoading(false);
    });
  }, []);

  return {
    exams,
    loading,
  };
}
