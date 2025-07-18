import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./componant/Login";
import Dashboard from "./pages/Dashboard";
import HiringAssist from "./pages/HiringAssist";
import InvesterPool from "./pages/InvesterPool";
import MyMentor from "./pages/MyMentor";
import PathUnicorn from "./pages/PathUnicorn";
import PathUnicorn2 from "./pages/PathUnicorn2";
import PathUnicorn3 from "./pages/PathUnicorn3";
import PathUnicorn4 from "./pages/PathUnicorn4";
import PathUnicorn7 from "./pages/PathUnicorn7";
import PathUnicorn8 from "./pages/PathUnicorn8";
import PathUnicorn9 from "./pages/PathUnicorn9";
import PathUnicorn10 from "./pages/PathUnicorn10";
import PathUnicorn11 from "./pages/PathUnicorn11";
import RevenueTracker from "./pages/RevenueTracker";
import SalesFunnel from "./pages/SalesFunnel";
import UpgradeBeta from "./pages/UpgradeBeta";
import MyTask from "./pages/MyTask";
import RivarlyInsight from "./pages/RivarlyInsight";
import NotFund from "./pages/NotFund";
import AppProfile from "./pages/AppProfile";
import BusinessModel from "./pages/BusinessModel";
import PitchDeck from "./pages/PitchDeck";
import Logout from "./componant/Logout";
import PrivateRoute from "./PrivateRoute";
import MetaVerse from "./metaverse/MetaVerse";
import Tools from "./startup_resources/tools";
import Template from "./startup_resources/template";
import TrainingVideos from "./startup_resources/training-videos";
import Projection from "./pages/Projection";
import IdeaValidation from "./pages/IdeaValidation";
import Market_Research from "./componant/Market-Research/MarketResearch";
import Pitching_And_Fundraising from "./startup_resources/TemplateComponent/Pitching_Fund_Rasing";
import Compliance_Document from "./startup_resources/TemplateComponent/Compliance_Document";
import Banking_Template from "./startup_resources/TemplateComponent/Banking_Template";
import Hr_Employee_agreements from "./startup_resources/TemplateComponent/Hr_Employee_Agreement";
import Accounting_Document from "./startup_resources/TemplateComponent/Accounting_Document";
import RouteWatcher from "./reloadDashboard/RouteWatcher";
import LessonPlayerPage from "./pages/LessonPlayerPage";
import CourseDetailsPage from "./pages/ImStratupSchool/CourseDetails"
import QuizPage from "./pages/QuizPage";
import ImStartupSchool from "./pages/ImStratupSchool/ImStartupSchool";
import SubmitIdeaPage from "./pages/idea-validation/SubmitIdeaPage";
import ValidateIdeaPage from "./pages/idea-validation/ValidateIdeaPage";
import RiskFeedbackPage from "./pages/idea-validation/RiskFeedbackPage";
import MarketCaseStudiesPage from "./pages/idea-validation/MarketCaseStudiesPage";
import NewDashboard from "./pages/newDashboard/NewDashoboard";
import Layout from "./componant/NewDashboard/Layout";
import ProfilePage from "./pages/profile/ProfilePage";

// Utility to parse tokens and store in localStorage
function useTokenParser() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const userData = queryParams.get("userData");
    const userId = queryParams.get("userId");
    const token = queryParams.get("token");
    const refreshToken = queryParams.get("refreshToken");

    if (userData && userId && token) {
      localStorage.setItem("user", decodeURIComponent(userData));
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", decodeURIComponent(token));
      if (refreshToken)
        localStorage.setItem("refreshToken", decodeURIComponent(refreshToken));

      const parsedUser = JSON.parse(decodeURIComponent(userData));
      localStorage.setItem("userData", JSON.stringify(parsedUser));

      // Remove query params and navigate to clean route
      navigate("/dashboard", { replace: true });
    }
  }, [location.search, navigate]);
}

function AppRoutes() {
  useTokenParser();

  return (
        <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFund />} />

      {/* Protected Routes with Layout */}
      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard" element={<NewDashboard />} />
        <Route path="/im-startup-school" element={<ImStartupSchool />} />
        <Route path="/submit-idea" element={<SubmitIdeaPage />} />
        <Route path="/validate-ai-review" element={<ValidateIdeaPage />} />
        <Route path="/feedback-risk" element={<RiskFeedbackPage />} />
        <Route path="/similer-market" element={<MarketCaseStudiesPage />} />
        <Route path="/hiring-assist" element={<HiringAssist />} />
        <Route path="/invester-pool" element={<InvesterPool />} />
        <Route path="/my-mentor" element={<MyMentor />} />
        <Route path="/path-unicorn" element={<PathUnicorn />} />
        <Route path="/path-unicorn2" element={<PathUnicorn2 />} />
        <Route path="/path-unicorn3" element={<PathUnicorn3 />} />
        <Route path="/path-unicorn4" element={<PathUnicorn4 />} />
        <Route path="/product-listing" element={<PathUnicorn7 />} />
        <Route path="/client-persona" element={<PathUnicorn8 />} />
        <Route path="/marketing-funnel" element={<PathUnicorn9 />} />
        <Route path="/product-pricing" element={<PathUnicorn10 />} />
        <Route path="/sales-funnel" element={<PathUnicorn11 />} />
        <Route path="/revenu-trac" element={<RevenueTracker />} />
        <Route path="/salesfunnel" element={<SalesFunnel />} />
        <Route path="/upgrade-beta" element={<UpgradeBeta />} />
        <Route path="/my-task" element={<MyTask />} />
        <Route path="/rivarly-insights" element={<RivarlyInsight />} />
        <Route path="/projection" element={<Projection />} />
        <Route path="/app-profile" element={<ProfilePage />} />
        <Route path="/business" element={<BusinessModel />} />
        <Route path="/pitch-deck" element={<PitchDeck />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/meta-verse" element={<MetaVerse />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/template" element={<Template />} />
        <Route path="/training-videos" element={<TrainingVideos />} />
        <Route path="/idea-validation" element={<IdeaValidation />} />
        <Route path="/market-research" element={<Market_Research />} />
        <Route path="/pitching-and-fund-rasing" element={<Pitching_And_Fundraising />} />
        <Route path="/legal-and-compliance-doc" element={<Compliance_Document />} />
        <Route path="/formation-and-banking-temp" element={<Banking_Template />} />
        <Route path="/hr-and-employee-agreement" element={<Hr_Employee_agreements />} />
        <Route path="/financial-and-accounting-docs" element={<Accounting_Document />} />
        <Route path="/coursedetails/:courseId" element={<CourseDetailsPage />} />
        <Route path="/lesson/:lessonId/quiz" element={<QuizPage />} />
      </Route>
        <Route path="/lesson/:lessonId" element={<LessonPlayerPage />} />
    </Routes>

  );
}

function App() {
  return (
    <>
      <Router>
        {/* <RouteWatcher /> */}
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
