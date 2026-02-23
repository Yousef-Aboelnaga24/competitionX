import api from './api';

export const scoreService = {
  submit: (submissionId: string, scores: Record<string, number>) =>
    api.post(`/scores/${submissionId}`, { scores }),
  getBySubmission: (submissionId: string) => api.get(`/scores/${submissionId}`),
  getLeaderboard: (competitionId: string) => api.get(`/scores/leaderboard/${competitionId}`),
  getMyScores: () => api.get('/scores/me'),
};
