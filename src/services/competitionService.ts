import api from './api';

export const competitionService = {
  getAll: () => api.get('/competitions'),
  getById: (id: string) => api.get(`/competitions/${id}`),
  create: (data: Record<string, unknown>) => api.post('/competitions', data),
  update: (id: string, data: Record<string, unknown>) => api.put(`/competitions/${id}`, data),
  delete: (id: string) => api.delete(`/competitions/${id}`),
  apply: (id: string) => api.post(`/competitions/${id}/apply`),
};
