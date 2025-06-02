import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

const UpgradeBeta = () => {
  const [isActive, setActive] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Alpha (Trial)",
      price: "00",
      duration: "4 Weeks",
      mentors: "2",
      forWho: "Very early-stage startups",
      services:
        "Basic guidance, idea validation, draft business model creation, access to startup resources, and community support",
      goal: "Equip startups with foundational support to bring their ideas to life",
      delay: "0.1s",
      color: "linear-gradient(135deg,rgb(15, 15, 16) 0%, #764ba2 100%)",
      icon: "🚀",
    },
    {
      name: "Beta plan (90 Days)",
      price: "101",
      duration: "3 Months",
      mentors: "3",
      forWho: "Startups ready to move beyond ideation",
      services:
        "Business model refinement, MVP development, and legal compliance assistance",
      goal: "Guide startups in establishing MVP with a structured approach to market entry",
      delay: "0.3s",
      color: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
      icon: "💡",
    },
    {
      name: "Gamma plan (90 Days)",
      price: "225",
      duration: "3 Months",
      mentors: "4",
      forWho: "Startups seeking Product Market Fit",
      services:
        "Expanded mentorship, funding guidance, and well curated product development offerings",
      goal: "Product Market Fit with accelerated growth through comprehensive support",
      delay: "0.5s",
      featured: true,
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: "⭐",
    },
    {
      name: "Sigma Plan (90 Days)",
      price: "454",
      duration: "3 Months",
      mentors: "4",
      forWho: "Startups ready for expansion and scale",
      services:
        "Focus on fundraising, team expansion, and strategic business planning",
      goal: "Board Formation, Empower startups to scale effectively and access new growth opportunities",
      delay: "0.6s",
      color: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      icon: "🏆",
    },
  ];

  const handlePayment = (plan) => {
    const options = {
      key: "rzp_test_8Dv5910QvbsotA",
      amount: parseFloat(plan.price) * 100,
      currency: "USD",
      name: "Your Company Name",
      description: `Subscription to ${plan.name}`,
      handler: function (response) {
        setPaymentStatus("success");
        console.log("Payment ID: ", response.razorpay_payment_id);
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <>
      <div id="main-wrapper " className={isActive ? "show-sidebar" : ""}>
        <LeftSidebar onButtonClick={ToggleEvent} />
        <div className="page-wrapper">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid">
              <div className="row justify-content-center mb-5">
                <div className="col-12 text-center">
                  <h2 className="display-4 fw-bold mb-3">Choose Your Plan</h2>
                  <p className="lead text-muted">
                    Select the perfect plan for your startup's journey
                  </p>
                </div>
              </div>

              {paymentStatus === "success" && (
                <div className="alert custom-alert fade show mb-4" role="alert">
                  <div className="d-flex align-items-center">
                    <span className="alert-icon">✨</span>
                    <div>
                      <h6 className="fw-bold mb-1">Success!</h6>
                      <p className="mb-0">
                        Your plan has been upgraded successfully.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn-close ms-auto"
                      onClick={() => setPaymentStatus("")}></button>
                  </div>
                </div>
              )}

              <div className="row">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-6 col-xl-3 mb-4 bg-darkBlue">
                    <div
                      className={`pricing-card bg-darkBlue ${
                        plan.featured ? "featured" : ""
                      } ${hoveredPlan === index ? "hovered" : ""}`}
                      onMouseEnter={() => setHoveredPlan(index)}
                      onMouseLeave={() => setHoveredPlan(null)}
                      style={{
                        "--plan-gradient": plan.color,
                      }}>
                      <div className="pricing-card-header">
                        <span className="plan-icon">{plan.icon}</span>
                        <h3 className="plan-name">{plan.name}</h3>
                        <div className="plan-price">
                          <span className="currency">$</span>
                          <span className="amount">{plan.price}</span>
                          <span className="period">/month</span>
                        </div>
                      </div>

                      <div className="pricing-card-features">
                        <div className="feature-group">
                          <h6 className="feature-heading">
                            Duration & Support
                          </h6>
                          <p>✦ {plan.duration}</p>
                          <p>✦ {plan.mentors} Dedicated Mentors</p>
                        </div>

                        <div className="feature-group">
                          <h6 className="feature-heading">Target Audience</h6>
                          <p>✦ {plan.forWho}</p>
                        </div>

                        <div className="feature-group">
                          <h6 className="feature-heading">Services</h6>
                          <p>✦ {plan.services}</p>
                        </div>

                        <div className="feature-group">
                          <h6 className="feature-heading">Key Goal</h6>
                          <p>✦ {plan.goal}</p>
                        </div>
                      </div>

                      <button
                        className="select-plan-btn"
                        onClick={() => handlePayment(plan)}>
                        Select Plan
                        <span className="btn-icon">→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SerchBar />
      </div>
      <div className="dark-transparent sidebartoggler" />

      <style jsx>{`
        .pricing-card {
          border-radius: 20px;
          padding: 15px;
          height: 100%;
          position: relative;
          transition: all 0.3s ease;
          border: 2px solid #eef2f7;
          overflow: hidden;
        }

        .pricing-card::before {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: var(--plan-gradient);
          opacity: 0.8;
        }

        .pricing-card.featured {
          transform: scale(1.02);
          border-color: #38f9d7;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .pricing-card.hovered {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .plan-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .plan-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--plan-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .plan-price {
          margin-bottom: 2rem;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.25rem;
        }

        .currency {
          font-size: 1.5rem;
          font-weight: 600;
          color: #666;
        }

        .amount {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1;
          color: #2d3748;
        }

        .period {
          color: #718096;
        }

        .feature-group {
          margin-bottom: 1.5rem;
        }

        .feature-heading {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #718096;
          margin-bottom: 0.75rem;
        }

        .feature-group p {
          margin-bottom: 0.5rem;
          color: #4a5568;
          font-size: 0.95rem;
        }

        .select-plan-btn {
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: 10px;
          background: var(--plan-gradient);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .select-plan-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .select-plan-btn:hover .btn-icon {
          transform: translateX(5px);
        }

        .custom-alert {
          background: #f8f9ff;
          border: none;
          border-radius: 12px;
          padding: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .alert-icon {
          font-size: 1.5rem;
          margin-right: 1rem;
        }
      `}</style>
    </>
  );
};

export default UpgradeBeta;
