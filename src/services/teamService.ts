import api from './api';

export const teamService = {
  getAll: () => api.get('/teams'),
  getById: (id: string) => api.get(`/teams/${id}`),
  approve: (id: string) => api.put(`/teams/${id}/approve`),
  reject: (id: string) => api.put(`/teams/${id}/reject`),
  getMyTeam: () => api.get('/teams/me'),
};
