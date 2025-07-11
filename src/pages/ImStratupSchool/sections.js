const sections = [
  {
    title: "Ideation & Validation",
    lessons: [
      {
        id: "1",
        title: "Design Thinking for Startups",
        quiz: {
          questions: [
            {
              question: "What is the primary goal of Design Thinking?",
              options: [
                "Developing a business plan",
                "Understanding and solving user problems",
                "Securing funding immediately",
                "Hiring a large team",
              ],
              answer: 1,
              explanation: "Design Thinking is a human-centered approach focused on empathy and understanding user needs to create effective solutions.",
            },
            {
              question: "Which of these is a key phase in Design Thinking?",
              options: ["Budgeting", "Prototyping", "Marketing", "Accounting"],
              answer: 1,
              explanation: "The five phases of Design Thinking are Empathize, Define, Ideate, Prototype, and Test. Prototyping is crucial for testing ideas.",
            },
          ],
        },
        duration: "15 minutes",
        videoUrl : "https://www.youtube.com/embed/pw9rAZeYf3g?si=CP7roX2hLqrExQcE",
        description: "An introduction to Design Thinking & Innovation Frameworks for building user-centric products.",
      },
      {
        id: "2",
        title: "Market Research Mastery",
        quiz: {
          questions: [
            {
              question: "What is the difference between primary and secondary market research?",
              options: [
                "Primary is expensive, secondary is free",
                "Primary is new research, secondary uses existing data",
                "Primary is for B2B, secondary is for B2C",
                "There is no difference",
              ],
              answer: 1,
              explanation: "Primary research involves collecting new data directly (e.g., surveys, interviews), while secondary research analyzes already-published information (e.g., reports, articles).",
            },
          ],
        },
        duration: "12 minutes",
        description: "Learn essential Market Research Methods, including both primary and secondary approaches.",
      },
      {
        id: "3",
        title: "Lean Canvas in Action",
        quiz: {
          questions: [
            {
              question: "What does the Lean Canvas help a startup to do?",
              options: [
                "Write legal contracts",
                "Design a logo",
                "Quickly outline and validate a business model",
                "Develop a mobile app",
              ],
              answer: 2,
              explanation: "The Lean Canvas is a 1-page business plan template that helps deconstruct a business idea into its key assumptions and validate them quickly.",
            },
          ],
        },
        duration: "10 minutes",
        description: "Mastering Business Model Design using tools like the Lean Canvas and Business Model Canvas (BMC).",
      },
    ],
  },
  {
    title: "Product Development",
    lessons: [
      {
        id: "4",
        title: "UI/UX Design for Founders",
        quiz: {
          questions: [
            {
              question: "What does UX stand for?",
              options: ["User Experience", "User Exit", "Unique Export", "Universal X-factor"],
              answer: 0,
              explanation: "UX stands for User Experience, which encompasses all aspects of the end-user's interaction with the company, its services, and its products.",
            },
          ],
        },
        duration: "15 minutes",
        description: "Fundamental principles of UI/UX Design tailored for startup founders.",
      },
      {
        id: "5",
        title: "Building MVPs with No-Code Tools",
        quiz: {
          questions: [
            {
              question: "What is an MVP?",
              options: ["Most Valuable Player", "Minimum Viable Product", "Maximum Viable Product", "Mainly Validated Product"],
              answer: 1,
              explanation: "A Minimum Viable Product (MVP) is a version of a product with just enough features to be usable by early customers who can then provide feedback for future product development.",
            },
          ],
        },
        duration: "12 minutes",
        description: "A guide to using No-Code/Low-Code Tools for building and launching your first product without writing code.",
      },
      {
        id: "6",
        title: "DevOps for Startups: CI/CD Basics",
        quiz: {
          questions: [
            {
              question: "What does CI/CD stand for?",
              options: [
                "Continuous Integration / Continuous Delivery",
                "Customer Interaction / Customer Development",
                "Company Investment / Company Debt",
                "Code Inspection / Code Deployment",
              ],
              answer: 0,
              explanation: "CI/CD stands for Continuous Integration and Continuous Delivery (or Deployment), a practice that automates the software development and release process.",
            },
          ],
        },
        duration: "18 minutes",
        description: "Learn the basics of DevOps and how to implement a CI/CD pipeline for your startup.",
      },
    ],
  },
  {
    title: "Business Setup",
    lessons: [
      {
        id: "7",
        title: "Register Your Startup Globally",
        quiz: {
          questions: [
            {
              question: "What is a common legal structure for US-based startups seeking venture capital?",
              options: ["Sole Proprietorship", "LLC", "Delaware C-Corp", "Partnership"],
              answer: 2,
              explanation: "A Delaware C-Corporation is a popular choice for startups planning to raise venture capital due to its favorable corporate laws and structure.",
            },
          ],
        },
        duration: "10 minutes",
        description: "Guidance on Global Company Formation, including US C-Corps, Indian Pvt Ltd, and other structures.",
      },
      {
        id: "8",
        title: "Financial Planning for Founders",
        quiz: {
          questions: [
            {
              question: "What is 'burn rate'?",
              options: [
                "The rate at which a company makes profit",
                "The speed of product development",
                "The rate at which a company is spending its capital to finance overheads before generating positive cash flow",
                "The temperature of the server room",
              ],
              answer: 2,
              explanation: "Burn rate is a critical metric for startups, indicating how quickly they are spending their cash reserves. Managing it is key to extending the company's runway.",
            },
          ],
        },
        duration: "15 minutes",
        description: "Essential Financial Planning concepts: understanding runway, burn rate, and budgeting.",
      },
      {
        id: "9",
        title: "Legal Compliance 101",
        quiz: {
          questions: [
            {
              question: "Which of the following is a key area of legal compliance for a new startup?",
              options: ["Choosing office furniture", "Data privacy (like GDPR or CCPA)", "Designing a marketing campaign", "Setting up social media accounts"],
              answer: 1,
              explanation: "Data privacy regulations are a critical compliance area for nearly all startups to avoid hefty fines and build customer trust.",
            },
          ],
        },
        duration: "12 minutes",
        description: "An overview of essential Legal & Regulatory Compliance, with considerations for different regions.",
      },
    ],
  },
  {
    title: "Talent & Culture",
    lessons: [
      {
        id: "10",
        title: "Hiring Your First Team",
        quiz: {
          questions: [
            {
              question: "What is a key difference between hiring a co-founder and an early employee?",
              options: [
                  "Co-founders typically receive significant equity, while employees receive a salary and smaller equity",
                  "Employees are responsible for the business vision",
                  "Co-founders are paid a higher salary",
                  "There is no difference",
              ],
              answer: 0,
              explanation: "The primary distinction lies in the compensation structure and level of responsibility. Co-founders take on higher risk for a larger equity stake and shape the company's direction.",
            },
          ],
        },
        duration: "10 minutes",
        description: "Strategies for hiring co-founders versus your first employees.",
      },
      {
        id: "11",
        title: "Designing ESOPs for Startups",
        quiz: {
          questions: [
            {
              question: "What does ESOP stand for?",
              options: [
                "Employee Stock Ownership Plan",
                "Early Startup Opportunity Program",
                "Executive Salary Offer Package",
                "External Shareholder Option Pool",
              ],
              answer: 0,
              explanation: "An Employee Stock Ownership Plan (ESOP) is a program that gives employees an ownership interest in the company, aligning their incentives with the company's success.",
            },
          ],
        },
        duration: "15 minutes",
        description: "A deep dive into Compensation & Equity Structuring, focusing on creating effective ESOPs.",
      },
      {
        id: "12",
        title: "Company Culture Bootcamp",
        quiz: {
          questions: [
            {
              question: "Why is company culture important for a startup?",
              options: [
                "It's a legal requirement",
                "It helps in attracting and retaining top talent",
                "It only matters for large corporations",
                "It determines the company's stock price",
              ],
              answer: 1,
              explanation: "A strong company culture is a competitive advantage, helping to attract the right people, ensure they are motivated, and guide decision-making.",
            },
          ],
        },
        duration: "12 minutes",
        description: "A practical guide to intentionally building your company's culture and values from day one.",
      },
    ],
  },
  {
    title: "Sales & Marketing",
    lessons: [
      {
        id: "13",
        title: "Craft Your GTM Strategy",
        quiz: {
          questions: [
            {
              question: "What is a Go-To-Market (GTM) strategy?",
              options: [
                "A plan for how a company will reach target customers and achieve a competitive advantage",
                "A document for company registration",
                "A software development methodology",
                "An employee onboarding plan",
              ],
              answer: 0,
              explanation: "A GTM strategy is a comprehensive action plan that details how a company will launch a new product or enter a new market, covering sales, marketing, and distribution.",
            },
          ],
        },
        duration: "15 minutes",
        description: "Learn how to build a powerful Go-To-Market (GTM) Strategy from scratch.",
      },
      {
        id: "14",
        title: "How to Get Your First 10 Customers",
        quiz: {
          questions: [
            {
              question: "Which is an effective strategy for acquiring the first few customers?",
              options: [
                "Running a Super Bowl ad",
                "Manual outreach and leveraging your personal network",
                "Waiting for customers to find you",
                "Hiring a large sales team immediately",
              ],
              answer: 1,
              explanation: "For the first few customers, high-touch, manual efforts like direct outreach, networking, and personal connections are often the most effective.",
            },
          ],
        },
        duration: "10 minutes",
        description: "Practical, actionable advice on acquiring your first 10 paying customers.",
      },
      {
        id: "15",
        title: "Digital Marketing Mastery",
        quiz: {
          questions: [
            {
              question: "What is SEO?",
              options: [
                "Sales Engine Optimization",
                "Social Engagement Opportunity",
                "Search Engine Optimization",
                "Service Email Outreach",
              ],
              answer: 2,
              explanation: "Search Engine Optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results.",
            },
          ],
        },
        duration: "18 minutes",
        description: "An overview of modern Marketing Strategy, covering both Digital and Traditional channels.",
      },
    ],
  },
  {
    title: "Funding",
    lessons: [
      {
        id: "16",
        title: "Startup Fundraising Essentials",
        quiz: {
          questions: [
            {
              question: "What does 'bootstrapping' a startup mean?",
              options: [
                "Getting a large bank loan",
                "Raising money from venture capitalists",
                "Building a company with personal finances, without external investment",
                "Selling the company early",
              ],
              answer: 2,
              explanation: "Bootstrapping means starting and growing a business using only personal savings, and the cash flow from the first sales.",
            },
          ],
        },
        duration: "15 minutes",
        description: "The complete guide to Startup Fundraising 101, from Bootstrapping to Series D.",
      },
      {
        id: "17",
        title: "Build a Killer Pitch Deck",
        quiz: {
          questions: [
            {
              question: "What is the most important slide in a pitch deck?",
              options: [
                "The Team slide",
                "The Financials slide",
                "The Problem slide",
                "All slides are important, but the Problem slide sets the stage for your solution.",
              ],
              answer: 3,
              explanation: "While all slides are crucial, clearly defining the problem you are solving is fundamental. If investors don't understand or believe in the problem, your solution won't matter.",
            },
          ],
        },
        duration: "12 minutes",
        description: "A step-by-step guide on how to build a compelling and effective pitch deck for investors.",
      },
      {
        id: "18",
        title: "Investor Negotiation & Term Sheets",
        quiz: {
          questions: [
            {
              question: "What is a 'term sheet' in fundraising?",
              options: [
                "A final, binding contract",
                "A non-binding agreement outlining the basic terms and conditions of an investment",
                "A marketing document",
                "An employee contract",
              ],
              answer: 1,
              explanation: "A term sheet is a preliminary, non-binding document that outlines the key terms of a deal between a startup and an investor. It forms the basis for the final legal agreements.",
            },
          ],
        },
        duration: "20 minutes",
        description: "Advanced insights into the investor due diligence process and Term Sheet negotiation.",
      },
    ],
  },
  {
    title: "Scaling",
    lessons: [
      {
        id: "19",
        title: "Scaling to New Markets",
        quiz: {
          questions: [
            {
              question: "What is 'localization' in the context of market entry?",
              options: [
                "Finding a local office",
                "Adapting a product or content to a specific location or market",
                "Hiring only local employees",
                "Using a local server",
              ],
              answer: 1,
              explanation: "Localization involves more than just translation; it's about adapting your product, marketing, and business operations to fit the cultural, legal, and linguistic norms of a new market.",
            },
          ],
        },
        duration: "18 minutes",
        description: "A framework for International Market Entry, covering localization, legal, and GTM strategies.",
      },
    ],
  },
  {
    title: "Founder Excellence",
    lessons: [
      {
        id: "20",
        title: "Founder Mindset & Wellness",
        quiz: {
          questions: [
            {
              question: "Why is founder wellness important for a startup's success?",
              options: [
                "It is not important",
                "Investors require it",
                "A founder's health directly impacts their decision-making and the company's performance",
                "It helps in getting more social media followers",
              ],
              answer: 2,
              explanation: "Founder burnout is a real risk. Maintaining mental and physical wellness is crucial for sustained high performance, resilience, and effective leadership, which are all vital for the startup's success.",
            },
          ],
        },
        duration: "12 minutes",
        description: "Essential strategies for Founder Psychology, stress management, and maintaining wellness.",
      },
    ],
  },
];

export default sections;
