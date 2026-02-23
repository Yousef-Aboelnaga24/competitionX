import api from './api';

export const submissionService = {
  getAll: () => api.get('/submissions'),
  getById: (id: string) => api.get(`/submissions/${id}`),
  create: (data: FormData) => api.post('/submissions', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  getByCompetition: (competitionId: string) => api.get(`/submissions/competition/${competitionId}`),
};
