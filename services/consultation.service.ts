import { mockConsultations } from "@/mocks/consultations";

export const consultationService = {
  async getAll() {
    return Promise.resolve(mockConsultations);
  },

  async getById(id: string) {
    return Promise.resolve(mockConsultations.find((c) => c.id === id));
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
