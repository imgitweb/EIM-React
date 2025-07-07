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
      <p className="lead text-muted">Select the perfect plan for your startup's journey</p>
    </div>
  </div>

  {paymentStatus === "success" && (
    <div className="alert alert-success d-flex align-items-center justify-content-between fade show mb-4" role="alert">
      <div className="d-flex align-items-center">
        <span className="me-3 fs-4">✨</span>
        <div>
          <h6 className="fw-bold mb-1">Success!</h6>
          <p className="mb-0">Your plan has been upgraded successfully.</p>
        </div>
      </div>
      <button type="button" className="btn-close" onClick={() => setPaymentStatus("")}></button>
    </div>
  )}

  <div className="row">
  {plans.map((plan, index) => (
    <div key={index} className="col-12 col-md-6 col-xl-3 mb-4">
      <div
        className={`card text-white border-0 shadow-sm pricing-card ${
          plan.featured ? "featured" : ""
        } ${hoveredPlan === index ? "hovered" : ""}`}
        onMouseEnter={() => setHoveredPlan(index)}
        onMouseLeave={() => setHoveredPlan(null)}
        style={{
          background: plan.color,
        }}
      >
        <div className="card-body text-center d-flex flex-column">
          <span className="plan-icon mb-3">{plan.icon}</span>
          <h5 className="plan-name mb-3">{plan.name}</h5>
          <div className="plan-price d-flex justify-content-center align-items-baseline mb-4">
            <span className="currency">$</span>
            <span className="amount">{plan.price}</span>
            <span className="period">/month</span>
          </div>

          <div className="text-start text-white small flex-grow-1">
            <p><strong>Duration:</strong> {plan.duration}</p>
            <p><strong>Mentors:</strong> {plan.mentors}</p>
            <p><strong>For:</strong> {plan.forWho}</p>
            <p><strong>Services:</strong> {plan.services}</p>
            <p><strong>Goal:</strong> {plan.goal}</p>
          </div>

          <button
            className="btn btn-light fw-semibold mt-4"
            onClick={() => handlePayment(plan)}
          >
            Select Plan <span className="ms-2">→</span>
          </button>
        </div>
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
    border-radius: 16px;
    transition: transform 0.3s ease;
    height: 100%;
  }

  .pricing-card.hovered {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .plan-name {
    font-weight: 700;
    font-size: 1.5rem;
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .plan-price .currency,
  .plan-price .period {
    font-size: 1rem;
    color: white;
  }

  .plan-price .amount {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0 0.25rem;
  }

  .plan-icon {
    font-size: 2.5rem;
  }
`}</style>

    </>
  );
};

export default UpgradeBeta;
