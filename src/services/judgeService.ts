import api from './api';

export const judgeService = {
  getAll: () => api.get('/judges'),
  create: (data: Record<string, unknown>) => api.post('/judges', data),
  getAssignedCompetitions: () => api.get('/judges/competitions'),
  getAssignedSubmissions: (competitionId: string) => api.get(`/judges/competitions/${competitionId}/submissions`),
};
