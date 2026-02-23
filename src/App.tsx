import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/routes/ProtectedRoute";

// Layouts
import MainLayout from "@/layouts/MainLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

// Public pages
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import CompetitionsPage from "@/pages/CompetitionsPage";
import LeaderboardPage from "@/pages/LeaderboardPage";
import NotFound from "@/pages/NotFound";

// Team pages
import TeamDashboard from "@/pages/team/TeamDashboard";
import MyCompetitions from "@/pages/team/MyCompetitions";
import SubmitProject from "@/pages/team/SubmitProject";
import MyScores from "@/pages/team/MyScores";
import Certificates from "@/pages/team/Certificates";
import TeamProfile from "@/pages/team/TeamProfile";

// Judge pages
import JudgeDashboard from "@/pages/judge/JudgeDashboard";
import JudgeSubmissions from "@/pages/judge/JudgeSubmissions";
import Scoring from "@/pages/judge/Scoring";
import JudgeLeaderboard from "@/pages/judge/JudgeLeaderboard";
import JudgeProfile from "@/pages/judge/JudgeProfile";

// Admin pages
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ManageCompetitions from "@/pages/admin/ManageCompetitions";
import TeamsApproval from "@/pages/admin/TeamsApproval";
import ManageJudges from "@/pages/admin/ManageJudges";
import ManageCategories from "@/pages/admin/ManageCategories";
import ManageCriteria from "@/pages/admin/ManageCriteria";
import SubmissionsMonitor from "@/pages/admin/SubmissionsMonitor";
import Reports from "@/pages/admin/Reports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/competitions" element={<CompetitionsPage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Team routes */}
            <Route element={<ProtectedRoute allowedRoles={['team']}><DashboardLayout /></ProtectedRoute>}>
              <Route path="/team/dashboard" element={<TeamDashboard />} />
              <Route path="/team/competitions" element={<MyCompetitions />} />
              <Route path="/team/submit" element={<SubmitProject />} />
              <Route path="/team/scores" element={<MyScores />} />
              <Route path="/team/certificates" element={<Certificates />} />
              <Route path="/team/profile" element={<TeamProfile />} />
            </Route>

            {/* Judge routes */}
            <Route element={<ProtectedRoute allowedRoles={['judge']}><DashboardLayout /></ProtectedRoute>}>
              <Route path="/judge/dashboard" element={<JudgeDashboard />} />
              <Route path="/judge/submissions" element={<JudgeSubmissions />} />
              <Route path="/judge/scoring" element={<Scoring />} />
              <Route path="/judge/leaderboard" element={<JudgeLeaderboard />} />
              <Route path="/judge/profile" element={<JudgeProfile />} />
            </Route>

            {/* Admin routes */}
            <Route element={<ProtectedRoute allowedRoles={['admin']}><DashboardLayout /></ProtectedRoute>}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/competitions" element={<ManageCompetitions />} />
              <Route path="/admin/teams" element={<TeamsApproval />} />
              <Route path="/admin/judges" element={<ManageJudges />} />
              <Route path="/admin/categories" element={<ManageCategories />} />
              <Route path="/admin/criteria" element={<ManageCriteria />} />
              <Route path="/admin/submissions" element={<SubmissionsMonitor />} />
              <Route path="/admin/reports" element={<Reports />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
