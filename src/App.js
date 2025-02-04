import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/*"
          element={
            // <PrivateRoute>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
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
              <Route path="/app-profile" element={<AppProfile />} />
              <Route path="/business" element={<BusinessModel />} />
              <Route path="/pitch-deck" element={<PitchDeck />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/meta-verse" element={<MetaVerse />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/template" element={<Template />} />
              <Route path="/training-videos" element={<TrainingVideos />} />
              <Route path="/idea-validation" element={<IdeaValidation />} />
              <Route path="/market-research" element={<Market_Research />} />
              <Route
                path="/pitching-and-fund-rasing"
                element={<Pitching_And_Fundraising />}
              />
              <Route
                path="/legal-and-compliance-doc"
                element={<Compliance_Document />}
              />
              <Route
                path="/formation-and-banking-temp"
                element={<Banking_Template />}
              />
              <Route
                path="/hr-and-employee-agreement"
                element={<Hr_Employee_agreements />}
              />
              <Route
                path="/financial-and-accounting-docs"
                element={<Accounting_Document />}
              />
              <Route path="*" element={<NotFund />} />
            </Routes>
            // {/* </PrivateRoute> */}
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
