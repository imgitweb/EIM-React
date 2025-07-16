import React from "react";

export default function StageTaskAccordion({ activeTab }) {
  const sections = [
    {
      title: "Introduction to Entrepreneurship",
      content: [
        "Definition and importance",
        "Characteristics of entrepreneurs",
        "Types of entrepreneurship",
      ],
    },
    {
      title: "Business Planning",
      content: [
        "Business model canvas",
        "Market research and analysis",
        "Creating a business plan",
      ],
    },
    {
      title: "Finance and Funding",
      content: [
        "Sources of funding",
        "Financial projections",
        "Budgeting and accounting basics",
      ],
    },
    {
      title: "Legal and Compliance",
      content: [
        "Company registration process",
        "Regulatory requirements",
        "Intellectual property basics",
      ],
    },
    {
      title: "Scaling and Growth",
      content: [
        "Team building",
        "Operations management",
        "Marketing strategies",
      ],
    },
  ];

  if (activeTab !== "stage-task") return null;

  return (
    <div className="mt-4">
      <div className="card w-100 shadow-sm border-0">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title mb-0 text-center">
              Entrepreneurship Course Outline
            </h4>
          </div>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {sections.map((section, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`flush-heading${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${index}`}
                  >
                    {section.title}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`flush-heading${index}`}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <ul className="mb-0">
                      {section.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
