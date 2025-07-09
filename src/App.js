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
import CourseDetails from "./pages/CourseDetails";
import LessonPlayerPage from "./pages/LessonPlayerPage";
import CourseDetailsPage from "./pages/CourseDetails";
import QuizPage from "./pages/QuizPage";
import ImStartupSchool from "./pages/ImStratupSchool/ImStartupSchool";
import SubmitIdeaPage from "./pages/idea-validation/SubmitIdeaPage";
import ValidateIdeaPage from "./pages/idea-validation/ValidateIdeaPage";
import RiskFeedbackPage from "./pages/idea-validation/RiskFeedbackPage";
import MarketCaseStudiesPage from "./pages/idea-validation/MarketCaseStudiesPage";

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
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/im-startup-school"
        element={
          <PrivateRoute>
            <ImStartupSchool />
          </PrivateRoute>
        }
      />
      <Route
        path="/submit-idea"
        element={
          <PrivateRoute>
            <SubmitIdeaPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/validate-ai-review"
        element={
          <PrivateRoute>
            <ValidateIdeaPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/feedback-risk"
        element={
          <PrivateRoute>
            <RiskFeedbackPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/similer-market"
        element={
          <PrivateRoute>
            <MarketCaseStudiesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/hiring-assist"
        element={
          <PrivateRoute>
            <HiringAssist />
          </PrivateRoute>
        }
      />
      <Route
        path="/invester-pool"
        element={
          <PrivateRoute>
            <InvesterPool />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-mentor"
        element={
          <PrivateRoute>
            <MyMentor />
          </PrivateRoute>
        }
      />
      <Route
        path="/path-unicorn"
        element={
          <PrivateRoute>
            <PathUnicorn />
          </PrivateRoute>
        }
      />
      <Route
        path="/path-unicorn2"
        element={
          <PrivateRoute>
            <PathUnicorn2 />
          </PrivateRoute>
        }
      />
      <Route
        path="/path-unicorn3"
        element={
          <PrivateRoute>
            <PathUnicorn3 />
          </PrivateRoute>
        }
      />
      <Route
        path="/path-unicorn4"
        element={
          <PrivateRoute>
            <PathUnicorn4 />
          </PrivateRoute>
        }
      />
      <Route
        path="/product-listing"
        element={
          <PrivateRoute>
            <PathUnicorn7 />
          </PrivateRoute>
        }i
      />
      <Route
        path="/client-persona"
        element={
          <PrivateRoute>
            <PathUnicorn8 />
          </PrivateRoute>
        }
      />
      <Route
        path="/marketing-funnel"
        element={
          <PrivateRoute>
            <PathUnicorn9 />
          </PrivateRoute>
        }
      />
      <Route
        path="/product-pricing"
        element={
          <PrivateRoute>
            <PathUnicorn10 />
          </PrivateRoute>
        }
      />
      <Route
        path="/sales-funnel"
        element={
          <PrivateRoute>
            <PathUnicorn11 />
          </PrivateRoute>
        }
      />
      <Route
        path="/revenu-trac"
        element={
          <PrivateRoute>
            <RevenueTracker />
          </PrivateRoute>
        }
      />
      <Route
        path="/salesfunnel"
        element={
          <PrivateRoute>
            <SalesFunnel />
          </PrivateRoute>
        }
      />
      <Route
        path="/upgrade-beta"
        element={
          <PrivateRoute>
            <UpgradeBeta />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-task"
        element={
          <PrivateRoute>
            <MyTask />
          </PrivateRoute>
        }
      />
      <Route
        path="/rivarly-insights"
        element={
          <PrivateRoute>
            <RivarlyInsight />
          </PrivateRoute>
        }
      />
      <Route
        path="/projection"
        element={
          <PrivateRoute>
            <Projection />
          </PrivateRoute>
        }
      />
      <Route
        path="/app-profile"
        element={
          <PrivateRoute>
            <AppProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/business"
        element={
          <PrivateRoute>
            <BusinessModel />
          </PrivateRoute>
        }
      />
      <Route
        path="/pitch-deck"
        element={
          <PrivateRoute>
            <PitchDeck />
          </PrivateRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <PrivateRoute>
            <Logout />
          </PrivateRoute>
        }
      />
      <Route
        path="/meta-verse"
        element={
          <PrivateRoute>
            <MetaVerse />
          </PrivateRoute>
        }
      />
      <Route
        path="/tools"
        element={
          <PrivateRoute>
            <Tools />
          </PrivateRoute>
        }
      />
      <Route
        path="/template"
        element={
          <PrivateRoute>
            <Template />
          </PrivateRoute>
        }
      />

      <Route
        path="/coursedetails/:courseId"
        element={
          <PrivateRoute>
          <CourseDetailsPage/>
          </PrivateRoute>
        }
      />
      <Route
        path="/lesson/:lessonId"
        element={
          <PrivateRoute>
          <LessonPlayerPage/>
          </PrivateRoute>
        }
      />
      <Route
        path="/lesson/:lessonId/quiz"
        element={
          <PrivateRoute>
          <QuizPage/>
          </PrivateRoute>
        }
      />
      <Route
        path="/training-videos"
        element={
          <PrivateRoute>
            <TrainingVideos />
          </PrivateRoute>
        }
      />
      <Route
        path="/idea-validation"
        element={
          <PrivateRoute>
            <IdeaValidation />
          </PrivateRoute>
        }
      />
      <Route
        path="/market-research"
        element={
          <PrivateRoute>
            <Market_Research />
          </PrivateRoute>
        }
      />
      <Route
        path="/pitching-and-fund-rasing"
        element={
          <PrivateRoute>
            <Pitching_And_Fundraising />
          </PrivateRoute>
        }
      />
      <Route
        path="/legal-and-compliance-doc"
        element={
          <PrivateRoute>
            <Compliance_Document />
          </PrivateRoute>
        }
      />
      <Route
        path="/formation-and-banking-temp"
        element={
          <PrivateRoute>
            <Banking_Template />
          </PrivateRoute>
        }
      />
      <Route
        path="/hr-and-employee-agreement"
        element={
          <PrivateRoute>
            <Hr_Employee_agreements />
          </PrivateRoute>
        }
      />
      <Route
        path="/financial-and-accounting-docs"
        element={
          <PrivateRoute>
            <Accounting_Document />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFund />} />
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
