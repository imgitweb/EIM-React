import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";

const Step2UnicornIdea = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  if (!formData) {
    navigate("/uim-register");
    return null;
  }

  const ideaCards = [
    {
      title: (
        <>
          <i className="bi bi-lightbulb-fill me-2 text-warning"></i>Startup Idea
          Summary
        </>
      ),
      content: (
        <>
          <p>
            <strong>Title:</strong> Rural Cloud Kitchen-as-a-Service
          </p>
          <p>
            <strong>One-line Pitch:</strong> A plug-and-play cloud kitchen
            franchise model for rural women entrepreneurs in Tier 3 towns.
          </p>
        </>
      ),
    },
    {
      title: (
        <>
          <i className="bi bi-exclamation-triangle-fill me-2 text-danger"></i>
          Problem Statement
        </>
      ),
      content: (
        <p>
          Small towns lack scalable food infrastructure. Local cooks or
          homemakers have no platform to build micro-entrepreneurship in F&B...
        </p>
      ),
    },
    {
      title: (
        <>
          <i className="bi bi-check2-square me-2 text-success"></i>Solution
          Statement
        </>
      ),
      content: (
        <p>
          A tech-enabled app that lets women set up cloud kitchens with standard
          menus, logistics, packaging, and training – like Zomato + Amul +
          UrbanClap.
        </p>
      ),
    },
    {
      title: (
        <>
          <i className="bi bi-person-lines-fill me-2 text-primary"></i>First 10
          Customers (User Personas)
        </>
      ),
      content: (
        <ul className="mb-0">
          <li>Homemaker in Rewa who wants to start earning</li>
          <li>College canteen vendor in Satna</li>
          <li>Local Swiggy delivery agents who want to run own kitchens</li>
          <li>Bakery owner looking to expand to meal kits</li>
          <li>Youth in Tier 3 city looking for scalable biz</li>
        </ul>
      ),
    },
    {
      title: (
        <>
          <i className="bi bi-globe2 me-2 text-info"></i>Global Inspiration
        </>
      ),
      content: (
        <ul className="mb-0">
          <li>Shef (USA) – Home-cooked food platform</li>
          <li>CloudKitchens (USA)</li>
          <li>Meal Temple (Asia)</li>
        </ul>
      ),
    },
    {
      title: (
        <>
          <i className="bi bi-bar-chart-line-fill me-2 text-success"></i>Indian
          Market Opportunity
        </>
      ),
      content: (
        <p>
          $2.5B opportunity by 2030 in Tier 3-4 cities; 18% YoY rise in rural
          food delivery demand; 60M potential micro-entrepreneurs.
        </p>
      ),
    },
    {
      title: (
        <>
          <i className="bi bi-kanban-fill me-2 text-dark"></i>Business Model
          Canvas
        </>
      ),
      content: (
        <>
          <p>
            <strong>Auto-generated (downloadable):</strong>
          </p>
          <ul>
            <li>Key partners, resources, activities</li>
            <li>Customer segments & channels</li>
            <li>Revenue & cost structure</li>
            <li>Tech stack suggestions</li>
          </ul>
          <button className="btn btn-outline-danger border-1 btn-sm mt-2">
            Download Canvas PDF
          </button>
        </>
      ),
    },
    {
      title: (
        <>
          <i className="bi bi-stars me-2 text-warning"></i>Unicorn Radar Score
        </>
      ),
      content: (
        <>
          <h2 className="display-4 text-success">⚡ 84%</h2>
          <p className="mb-0">
            Likelihood of becoming a unicorn in the next 5–7 years
          </p>
          <small className="text-muted">(Based on AI prediction model)</small>
        </>
      ),
      center: true,
    },
  ];

  return (
    <>
      <div className="container-fluid" style={{ fontFamily: "Inter, sans-serif" }}  >

          <h2 className="text-center text-primary ">
            Unicorn Idea Prediction Engine (AI-Driven Output)
          </h2>
 

        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="row gy-4 justify-content-center">
              {ideaCards.map((card, index) => (
                <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
                  <div
                    className={`card shadow-sm h-100 card-hover cursor-pointer ${
                      card.center ? "text-center" : ""
                    }`}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-primary">{card.title}</h5>
                      {card.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2UnicornIdea;
