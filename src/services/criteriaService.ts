import api from './api';

export const criteriaService = {
  getAll: () => api.get('/criteria'),
  create: (data: Record<string, unknown>) => api.post('/criteria', data),
  update: (id: string, data: Record<string, unknown>) => api.put(`/criteria/${id}`, data),
  delete: (id: string) => api.delete(`/criteria/${id}`),
  getByCompetition: (competitionId: string) => api.get(`/criteria/competition/${competitionId}`),
};
