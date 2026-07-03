import { mockExams } from "@/mocks/exams";

export const examService = {
  async getAll() {
    return Promise.resolve(mockExams);
  },

  async getById(id: string) {
    return Promise.resolve(mockExams.find((exam) => exam.id === id));
  },

  async create(data: unknown) {
    console.log(data);
    return Promise.resolve();
  },

  async update(id: string, data: unknown) {
    console.log(id, data);
    return Promise.resolve();
  },

  async delete(id: string) {
    console.log(id);
    return Promise.resolve();
  },
};
