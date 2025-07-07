import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import sections from "../sections";

//  const sections =  [
//   {
//     title: "Introduction to Blockchain Development",
//     lessons: [
//       {
//         id: "1",
//         title: "Welcome to the Course",
//         quiz: {
//           questions: [
//             {
//               question: "What is the primary focus of this course?",
//               options: [
//                 "Cooking recipes",
//                 "Blockchain development",
//                 "Graphic design",
//                 "Mobile app testing",
//               ],
//               answer: 1,
//             },
//             {
//               question: "Blockchain helps build decentralized applications using what?",
//               options: ["Central servers", "Peer-to-peer networks", "USB sticks", "Local files"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//       {
//         id: "2",
//         title: "Why Blockchain?",
//         quiz: {
//           questions: [
//             {
//               question: "Which is a key benefit of blockchain?",
//               options: ["Immutability", "Randomization", "High fees", "Central control"],
//               answer: 0,
//             },
//             {
//               question: "Blockchain improves transparency by…?",
//               options: [
//                 "Hiding all data",
//                 "Using secret databases",
//                 "Logging all transactions publicly",
//                 "Deleting history frequently",
//               ],
//               answer: 2,
//             },
//           ],
//         },
//       },
//       {
//         id: "3",
//         title: "Blockchain vs Traditional Systems",
//         quiz: {
//           questions: [
//             {
//               question: "Which system has a single point of failure?",
//               options: ["Blockchain", "Centralized system", "P2P system", "Distributed ledger"],
//               answer: 1,
//             },
//             {
//               question: "In traditional systems, trust is managed by…?",
//               options: ["Multiple parties", "Cryptography", "Trusted intermediaries", "Smart contracts"],
//               answer: 2,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     title: "Blockchain Fundamentals",
//     lessons: [
//       {
//         id: "4",
//         title: "How Blockchain Works",
//         quiz: {
//           questions: [
//             {
//               question: "A block in blockchain stores…?",
//               options: ["HTML", "Smart contracts", "Transactions", "None"],
//               answer: 2,
//             },
//             {
//               question: "Blocks are linked through…?",
//               options: ["Icons", "UI", "Hashes", "Keywords"],
//               answer: 2,
//             },
//           ],
//         },
//       },
//       {
//         id: "5",
//         title: "Consensus Mechanisms",
//         quiz: {
//           questions: [
//             {
//               question: "Proof-of-Work is used in…?",
//               options: ["Ethereum 2.0", "Bitcoin", "IPFS", "Cloud storage"],
//               answer: 1,
//             },
//             {
//               question: "Proof-of-Stake saves energy by…?",
//               options: ["Mining", "Voting with stake", "Scrolling chains", "Deleting data"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//       {
//         id: "6",
//         title: "Ethereum and EVM Basics",
//         quiz: {
//           questions: [
//             {
//               question: "EVM stands for…?",
//               options: [
//                 "Ethereum Virtual Machine",
//                 "Encrypted Video Media",
//                 "Electronic Validation Model",
//                 "Ether Value Money",
//               ],
//               answer: 0,
//             },
//             {
//               question: "Smart contracts run on…?",
//               options: ["Browser", "EVM", "Desktop", "Mobile"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     title: "Smart Contracts with Solidity",
//     lessons: [
//       {
//         id: "7",
//         title: "Solidity Language Basics",
//         quiz: {
//           questions: [
//             {
//               question: "Solidity is influenced by…?",
//               options: ["Go", "Python & JS", "C#", "HTML"],
//               answer: 1,
//             },
//             {
//               question: "Solidity files use extension…?",
//               options: [".sol", ".js", ".java", ".py"],
//               answer: 0,
//             },
//           ],
//         },
//       },
//       {
//         id: "8",
//         title: "Data Types and Functions",
//         quiz: {
//           questions: [
//             {
//               question: "What is NOT a Solidity type?",
//               options: ["uint", "bool", "string", "float"],
//               answer: 3,
//             },
//             {
//               question: "Functions are defined with keyword…?",
//               options: ["class", "func", "function", "method"],
//               answer: 2,
//             },
//           ],
//         },
//       },
//       {
//         id: "9",
//         title: "Building Smart Contracts",
//         quiz: {
//           questions: [
//             {
//               question: "Smart contracts are deployed using…?",
//               options: ["GitHub", "npm", "Remix/Hardhat", "Docker"],
//               answer: 2,
//             },
//             {
//               question: "Contracts contain both data and…?",
//               options: ["Styles", "Functions", "Images", "HTML"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//       {
//         id: "10",
//         title: "Smart Contract Testing with Hardhat",
//         quiz: {
//           questions: [
//             {
//               question: "Hardhat helps in…?",
//               options: ["Frontend design", "Testing & deployment", "Database management", "None"],
//               answer: 1,
//             },
//             {
//               question: "You run tests using…?",
//               options: ["hardhat test", "npm serve", "git push", "docker run"],
//               answer: 0,
//             },
//           ],
//         },
//       },
//       {
//         id: "11",
//         title: "Deploying Smart Contracts to Testnet",
//         quiz: {
//           questions: [
//             {
//               question: "Testnets are used for…?",
//               options: ["Production", "Testing", "Gaming", "Phone apps"],
//               answer: 1,
//             },
//             {
//               question: "Infura helps connect to…?",
//               options: ["Local server", "Blockchain nodes", "GPS", "Email"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     title: "Backend Integration with Blockchain",
//     lessons: [
//       {
//         id: "12",
//         title: "Setting up Node.js and Express",
//         quiz: {
//           questions: [
//             {
//               question: "Express is built on top of…?",
//               options: ["React", "Vue", "Node.js", "PHP"],
//               answer: 2,
//             },
//             {
//               question: "App entry file is often…?",
//               options: ["index.js", "main.py", "app.java", "home.go"],
//               answer: 0,
//             },
//           ],
//         },
//       },
//       {
//         id: "13",
//         title: "Web3.js vs Ethers.js",
//         quiz: {
//           questions: [
//             {
//               question: "Which is lighter library?",
//               options: ["Web3.js", "Ethers.js", "React.js", "jQuery"],
//               answer: 1,
//             },
//             {
//               question: "Both are used to…?",
//               options: ["Build UI", "Interact with contracts", "Style pages", "Store images"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//       {
//         id: "14",
//         title: "Interacting with Smart Contracts from Backend",
//         quiz: {
//           questions: [
//             {
//               question: "You call functions via…?",
//               options: ["HTTP", "web3/ethers", "CSS", "SQL"],
//               answer: 1,
//             },
//             {
//               question: "A read-only call is…?",
//               options: ["send()", "call()", "run()", "execute()"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//       {
//         id: "15",
//         title: "Listening to Blockchain Events",
//         quiz: {
//           questions: [
//             {
//               question: "Event listeners use…?",
//               options: ["on(event)", "click()", "hover()", "submit()"],
//               answer: 0,
//             },
//             {
//               question: "You capture event logs via…?",
//               options: ["console.log", "contract.events", "alert()", "document.write"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     title: "Frontend DApp Development",
//     lessons: [
//       {
//         id: "16",
//         title: "React Setup for DApp",
//         quiz: {
//           questions: [
//             {
//               question: "Use React’s create-react-app for…?",
//               options: ["Server side", "DApp UI", "Blockchain nodes", "Email client"],
//               answer: 1,
//             },
//             {
//               question: "MetaMask integration happens in…?",
//               options: ["Backend", "Browser UI", "Database", "CSS file"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//       {
//         id: "17",
//         title: "Connecting to MetaMask",
//         quiz: {
//           questions: [
//             {
//               question: "MetaMask is a…?",
//               options: ["Backend server", "Browser wallet", "Database", "Mobile app only"],
//               answer: 1,
//             },
//             {
//               question: "You request accounts using…?",
//               options: ["web3.eth.getAccounts()", "wallet.request()", "getBalance()", "signIn()"],
//               answer: 0,
//             },
//           ],
//         },
//       },
//       {
//         id: "18",
//         title: "Calling Smart Contract Functions from UI",
//         quiz: {
//           questions: [
//             {
//               question: "You call write functions using…?",
//               options: ["call()", "send()", "print()", "setState()"],
//               answer: 1,
//             },
//             {
//               question: "Read functions use…?",
//               options: ["get()", "call()", "send()", "write()"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//       {
//         id: "19",
//         title: "Managing User Wallet & Network State",
//         quiz: {
//           questions: [
//             {
//               question: "To detect account change you use…?",
//               options: ["onAccountsChanged", "onClick", "onHover", "onLoad"],
//               answer: 0,
//             },
//             {
//               question: "To detect network change use…?",
//               options: ["onNetChange", "onChainChanged", "onMouseMove", "onClick()"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     title: "User Authentication & Wallet Features",
//     lessons: [
//       {
//         id: "20",
//         title: "WalletConnect & Other Wallets",
//         quiz: {
//           questions: [
//             {
//               question: "WalletConnect uses…?",
//               options: ["QR codes", "USB cables", "Wi-Fi", "Bluetooth"],
//               answer: 0,
//             },
//             {
//               question: "It connects mobile wallets to…?",
//               options: ["Backend only", "DApp frontend", "Database", "Email"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//       {
//         id: "21",
//         title: "Message Signing & Login Flow",
//         quiz: {
//           questions: [
//             {
//               question: "Signing verifies…?",
//               options: ["User identity", "UI layout", "Database schema", "Server logs"],
//               answer: 0,
//             },
//             {
//               question: "Login flow uses…?",
//               options: ["Plain text", "Metamask signature", "HTTP GET", "Image upload"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//       {
//         id: "22",
//         title: "Storing Session Tokens Securely",
//         quiz: {
//           questions: [
//             {
//               question: "Never store tokens in…?",
//               options: ["HTTPOnly cookies", "LocalStorage", "Secure servers", "In-memory"],
//               answer: 1,
//             },
//             {
//               question: "Best practice is to use…?",
//               options: ["Plain cookies", "HTTPOnly cookies", "Embedded tokens in URL", "File storage"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {

//     title: "Data Storage & Decentralization",
//     lessons: [
//       {
//         id: "23",
//         title: "Using IPFS for Files",
//         quiz: {
//           questions: [
//             {
//               question: "IPFS stands for…?",
//               options: [
//                 "Internet Protocol File System",
//                 "InterPlanetary File System",
//                 "Internal Public File Service",
//                 "Indexing Private File Storage",
//               ],
//               answer: 1,
//             },
//             {
//               question: "IPFS uses…?",
//               options: ["Central servers", "Distributed nodes", "USB drives", "Local cache"],
//               answer: 1,
//             },
//           ],
//         },
//       },
//       {
//         id: "24",
//         title: "Pinning Services & Gateways",
//         quiz: {
//           questions: [
//             {
//               question: "Pinning ensures files are…?",
//               options: ["Deleted", "Persisted", "Hidden", "Encrypted"],
//               answer: 1,
//             },
//             {
//               question: "A gateway allows…?",
//               options: ["Direct node access", "Browser file access", "UI styling", "CSS loading"],
//               answer: 0,
//             },
//           ],

//         },
//       },  
//       {
//         id: "25",
//         title: "Storing Data on Blockchain vs Off-Chain",
//         quiz: {
//           questions: [
//             {
//               question: "On-chain storage is…?",
//               options: ["Cheap", "Expensive", "Fast", "Temporary"],
//               answer: 1,
//             },
//             {
//               question: "Off-chain data is stored in…?",
//               options: ["Blockchain", "IPFS/Databases", "Smart contracts", "UI files"],
//               answer: 1,
//             },
//           ],
//         },
//       }
//     ]
//   }
//     ]


const LessonPlayerPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let selectedLesson = null;
  let currentSection = null;

  for (const section of sections) {
    const match = section.lessons.find((lesson) => lesson.id.toString() === lessonId);
    if (match) {
      selectedLesson = match;
      currentSection = section;
      break;
    }
  }

  if (!selectedLesson) {
    return (
      <div className="container mt-5">
        <h3 className="text-danger">❌ Lesson Not Found</h3>
        <button onClick={() => navigate(-1)} className="btn btn-secondary mt-3">
          ⬅ Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column flex-md-row" style={{ Height: "100vh", }}>
      {/* Sidebar Toggle for Mobile */}
      <div className="d-flex d-md-none justify-content-between align-items-center bg-dark p-3">
        <h5 className="text-info mb-0">Lesson: {selectedLesson.title}</h5>
        <button
          className="btn btn-outline-info btn-sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar Lessons */}
      <div
        className={`text-light p-3 bg-dark ${sidebarOpen ? "d-block" : "d-none"} d-md-block`}
        style={{
          width: "100%",
          maxWidth: "300px",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <h5 className="text-info mb-4">📚 Course Content</h5>
        {sections.map((section, idx) => (
          <div key={idx} className="mb-4">
            <div className="fw-bold text-warning small mb-2">{section.title}</div>
            <ul className="list-unstyled">
              {section.lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  onClick={() => navigate(`/lesson/${lesson.id}`)}
                  className={`py-2 px-3 rounded small d-flex justify-content-between align-items-center mb-1 ${lesson.id.toString() === lessonId
                      ? "bg-primary text-white"
                      : "text-light"
                    }`}
                  style={{ cursor: "pointer", transition: "background 0.2s" }}
                >
                  <span>{lesson.title}</span>
                  <i className="bi bi-play-circle-fill" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Main Player Content */}
      <div
        className="flex-grow-1 p-3 p-md-5 text-light"
        style={{ overflowY: "auto", height: "100vh" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="text-info">🎥 Lesson: {selectedLesson.title}</h3>
          <button className="btn btn-outline-light" onClick={() => navigate('/dashboard')}>
            ⬅️ Back 
          </button>
        </div>

        <div
          className="rounded mb-4"
          style={{ height: "60vh", backgroundColor: "#222" }}
        >
          {selectedLesson.videoUrl ? (
            <iframe
              src={selectedLesson.videoUrl}
              title={selectedLesson.title}
              allowFullScreen
              className="w-100 h-100 border-0"
            ></iframe>
          ) : (
            <div className="d-flex justify-content-center align-items-center h-100">
              <p className="text-white">⚠ Video Not Available</p>
            </div>
          )}
        </div>

        <div className="bg-dark p-4 rounded">
          <h5 className="mb-3">🎯 What You Will Learn</h5>
          <p>
            This lesson covers <strong>{selectedLesson.title}</strong>. You'll learn key concepts,
            implementation strategies, and hands-on practices for building real-world blockchain applications.
          </p>
          <button
            className="btn btn-success mt-3"
            onClick={() => navigate(`/lesson/${selectedLesson.id}/quiz`)}
          >
            <i className="bi bi-check-circle-fill me-2"></i>Take Quiz
          </button>
        </div>
      </div>

    </div>
  );
};

export default LessonPlayerPage;

