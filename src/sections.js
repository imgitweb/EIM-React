const sections =  [
  {
    title: "Introduction to Blockchain Development",
    lessons: [
      {
        id: "1",
        title: "Welcome to the Course",
        quiz: {
          questions: [
            {
              question: "What is the primary focus of this course?",
              options: [
                "Cooking recipes",
                "Blockchain development",
                "Graphic design",
                "Mobile app testing",
              ],
              answer: 1,
              explanation: "This course is focused on teaching blockchain development, specifically using Ethereum and Solidity.",
            },
            {
              question: "Blockchain helps build decentralized applications using what?",
              options: ["Central servers", "Peer-to-peer networks", "USB sticks", "Local files"],
              answer: 1,
              explanation: "Blockchain technology enables the creation of decentralized applications by utilizing peer-to-peer networks, eliminating the need for central servers.",
            },
          ],
        },
        duration: "5 minutes",
        description: "An introduction to the course and its objectives.",
      },
      {
        id: "2",
        title: "Why Blockchain?",
        quiz: {
          questions: [
            {
              question: "Which is a key benefit of blockchain?",
              options: ["Immutability", "Randomization", "High fees", "Central control"],
              answer: 0,
              explanation: "Immutability is a key benefit of blockchain, ensuring that once data is recorded, it cannot be altered or deleted.",
            },
            {
              question: "Blockchain improves transparency by…?",
              options: [
                "Hiding all data",
                "Using secret databases",
                "Logging all transactions publicly",
                "Deleting history frequently",
              ],
              answer: 2,
              explanation: "Blockchain enhances transparency by logging all transactions in a public ledger that anyone can access, ensuring accountability and traceability.",
            },
          ],
        },
        duration: "10 minutes",
        description: "Understanding the benefits and applications of blockchain technology.",
      },
      {
        id: "3",
        title: "Blockchain vs Traditional Systems",
        quiz: {
          questions: [
            {
              question: "Which system has a single point of failure?",
              options: ["Blockchain", "Centralized system", "P2P system", "Distributed ledger"],
              answer: 1,
              explanation: "Central ized systems have a single point of failure, meaning if the central server goes down, the entire system is affected. In contrast, blockchain and decentralized systems do not have this vulnerability.",
            },
            {
              question: "In traditional systems, trust is managed by…?",
              options: ["Multiple parties", "Cryptography", "Trusted intermediaries", "Smart contracts"],
              answer: 2,
              explanation: "In traditional systems, trust is often managed by trusted intermediaries such as banks or institutions, whereas blockchain uses cryptographic methods to establish trust without intermediaries.",
            },
          ],
        },
        duration: "8 minutes",
        description: "Comparing blockchain with traditional centralized systems.",
      },
    ],
  },
  {
    title: "Blockchain Fundamentals",
    lessons: [
      {
        id: "4",
        title: "How Blockchain Works",
        quiz: {
          questions: [
            {
              question: "A block in blockchain stores…?",
              options: ["HTML", "Smart contracts", "Transactions", "None"],
              answer: 2,
              explanation: "A block in a blockchain primarily stores transaction data, which can include various types of information depending on the blockchain's purpose.",
            },
            {
              question: "Blocks are linked through…?",
              options: ["Icons", "UI", "Hashes", "Keywords"],
              answer: 2,
              explanation: "Blocks in a blockchain are linked through cryptographic hashes, which ensure the integrity and immutability of the data by connecting each block to its predecessor.",
            },
          ],
        },
        duration: "12 minutes",
        description: "Exploring the structure and functioning of blockchain technology.",
      },
      {
        id: "5",
        title: "Consensus Mechanisms",
        quiz: {
          questions: [
            {
              question: "Proof-of-Work is used in…?",
              options: ["Ethereum 2.0", "Bitcoin", "IPFS", "Cloud storage"],
              answer: 1,
              explanation: "Proof-of-Work is the consensus mechanism used by Bitcoin, where miners solve complex mathematical problems to validate transactions and add new blocks to the blockchain.",
            },
            {
              question: "Proof-of-Stake saves energy by…?",
              options: ["Mining", "Voting with stake", "Scrolling chains", "Deleting data"],
              answer: 1,
              explanation: "Proof-of-Stake (PoS) saves energy by allowing validators to create new blocks based on the amount of cryptocurrency they hold and are willing to 'stake' as collateral, rather than requiring energy-intensive mining processes.",
            },
          ],
        },
        duration: "15 minutes",
        description: "Understanding how consensus mechanisms secure blockchain networks.",
      },
      {
        id: "6",
        title: "Ethereum and EVM Basics",
        quiz: {
          questions: [
            {
              question: "EVM stands for…?",
              options: [
                "Ethereum Virtual Machine",
                "Encrypted Video Media",
                "Electronic Validation Model",
                "Ether Value Money",
              ],
              answer: 0,
              explanation: "EVM stands for Ethereum Virtual Machine, which is the runtime environment for executing smart contracts on the Ethereum blockchain.",
            },
            {
              question: "Smart contracts run on…?",
              options: ["Browser", "EVM", "Desktop", "Mobile"],
              answer: 1,
              explanation: "Smart contracts are executed on the Ethereum Virtual Machine (EVM), which provides a decentralized environment for running code on the Ethereum blockchain.",
            },
          ],
        },
        duration: "10 minutes",
        description: "Introduction to Ethereum and the Ethereum Virtual Machine (EVM).",

      },
    ],
  },
  {
    title: "Smart Contracts with Solidity",
    lessons: [
      {
        id: "7",
        title: "Solidity Language Basics",
        quiz: {
          questions: [
            {
              question: "Solidity is influenced by…?",
              options: ["Go", "Python & JS", "C#", "HTML"],
              answer: 1,
              explanation: "Solidity is a programming language for writing smart contracts on Ethereum, and it is influenced by languages like Python and JavaScript, making it familiar to many developers.",
            },
            {
              question: "Solidity files use extension…?",
              options: [".sol", ".js", ".java", ".py"],
              answer: 0,
              explanation: "Solidity files use the .sol extension, which indicates that they contain smart contract code written in the Solidity programming language.",
            },
          ],
        },
            duration: "10 minutes",
              description: "Learning the basics of Solidity, the programming language for Ethereum smart contracts.",
      },
      {
        id: "8",
        title: "Data Types and Functions",
        quiz: {
          questions: [
            {
              question: "What is NOT a Solidity type?",
              options: ["uint", "bool", "string", "float"],
              answer: 3,
              explanation: "In Solidity, 'float' is not a valid data type. Instead, Solidity uses 'uint' for unsigned integers, 'bool' for boolean values, and 'string' for text data.",
            },
            {
              question: "Functions are defined with keyword…?",
              options: ["class", "func", "function", "method"],
              answer: 2,
              explanation: "In Solidity, functions are defined using the 'function' keyword, which specifies the function's name, parameters, and return type.",
            },
          ],
        },
        duration: "12 minutes",
        description: "Understanding data types and functions in Solidity.",
      },
      {
        id: "9",
        title: "Building Smart Contracts",
        quiz: {
          questions: [
            {
              question: "Smart contracts are deployed using…?",
              options: ["GitHub", "npm", "Remix/Hardhat", "Docker"],
              answer: 2,
              explanation: "Smart contracts are typically deployed using development environments like Remix or Hardhat, which provide tools for compiling, testing, and deploying Solidity code to the Ethereum blockchain.",
            },
            {
              question: "Contracts contain both data and…?",
              options: ["Styles", "Functions", "Images", "HTML"],
              answer: 1,
              explanation: "Smart contracts contain both data (state variables) and functions (methods) that define the contract's behavior and logic, allowing it to execute specific actions based on transactions.",
            },
          ],
        },
        duration: "15 minutes",
        description: "Creating and deploying your first smart contract using Solidity.",
      },
      {
        id: "10",
        title: "Smart Contract Testing with Hardhat",
        quiz: {
          questions: [
            {
              question: "Hardhat helps in…?",
              options: ["Frontend design", "Testing & deployment", "Database management", "None"],
              answer: 1,
              explanation: "Hardhat is a development environment for Ethereum that provides tools for testing, deploying, and debugging smart contracts, making it easier for developers to build and maintain their blockchain applications.",
            },
            {
              question: "You run tests using…?",
              options: ["hardhat test", "npm serve", "git push", "docker run"],
              answer: 0,
              explanation: "In Hardhat, you run tests using the command 'hardhat test', which executes your Solidity tests and provides feedback on their success or failure.",
            },
          ],
        },
        duration: "10 minutes",
        description: "Setting up Hardhat for testing and deploying smart contracts.",
      },
      {
        id: "11",
        title: "Deploying Smart Contracts to Testnet",
        quiz: {
          questions: [
            {
              question: "Testnets are used for…?",
              options: ["Production", "Testing", "Gaming", "Phone apps"],
              answer: 1,
              explanation: "Testnets are blockchain networks used for testing purposes, allowing developers to deploy and test their smart contracts without using real Ether or affecting the main Ethereum network.",
            },
            {
              question: "Infura helps connect to…?",
              options: ["Local server", "Blockchain nodes", "GPS", "Email"],
              answer: 1,
              explanation: "Infura provides a remote access service to Ethereum nodes, allowing developers to connect to the Ethereum network without needing to run their own full node, which simplifies the process of deploying and interacting with smart contracts.",
            },
          ],
        },
        duration: "12 minutes",
        description: "Deploying smart contracts to Ethereum testnets like Rinkeby or Goerli .",
      },
    ],
  },
  {
    title: "Backend Integration with Blockchain",
    lessons: [
      {
        id: "12",
        title: "Setting up Node.js and Express",
        quiz: {
          questions: [
            {
              question: "Express is built on top of…?",
              options: ["React", "Vue", "Node.js", "PHP"],
              answer: 2,
              explanation: "Express is a web application framework for Node.js, designed to simplify the process of building web applications and APIs by providing a robust set of features for server-side development.",
            },
            {
              question: "App entry file is often…?",
              options: ["index.js", "main.py", "app.java", "home.go"],
              answer: 0,
              explanation: "In a Node.js application, the entry file is commonly named 'index.js', which serves as the starting point for the application and initializes the server and routes.",
            },
          ],
        },
        duration: "10 minutes",
        description: "Setting up a Node.js backend with Express for blockchain interactions.",
      },
      {
        id: "13",
        title: "Web3.js vs Ethers.js",
        quiz: {
          questions: [
            {
              question: "Which is lighter library?",
              options: ["Web3.js", "Ethers.js", "React.js", "jQuery"],
              answer: 1,
              explanation: "Ethers.js is considered a lighter and more modular library compared to Web3.js, making it easier to use in projects where minimal dependencies are preferred.",
            },
            {
              question: "Both are used to…?",
              options: ["Build UI", "Interact with contracts", "Style pages", "Store images"],
              answer: 1,
              explanation: "Both Web3.js and Ethers.js are libraries used to interact with Ethereum smart contracts and the blockchain, allowing developers to send transactions, read data, and manage accounts.",
            },
          ],
        },
        duration: "8 minutes",
        description: "Comparing Web3.js and Ethers.js for blockchain interactions in Node.js applications.",
      },
      {
        id: "14",
        title: "Interacting with Smart Contracts from Backend",
        quiz: {
          questions: [
            {
              question: "You call functions via…?",
              options: ["HTTP", "web3/ethers", "CSS", "SQL"],
              answer: 1,
              explanation: "You interact with smart contracts using libraries like Web3.js or Ethers.js, which provide methods to call contract functions and send transactions to the Ethereum network.",
            },
            {
              question: "A read-only call is…?",
              options: ["send()", "call()", "run()", "execute()"],
              answer: 1,
              explanation: "In Web3.js and Ethers.js, a read-only call to a smart contract function is made using the 'call()' method, which retrieves data without modifying the blockchain state.",
            },
          ],
        },
        duration: "12 minutes",
        description: "Interacting with smart contracts from the backend using Web3.js or Ethers .js.",
      },
      {
        id: "15",
        title: "Listening to Blockchain Events",
        quiz: {
          questions: [
            {
              question: "Event listeners use…?",
              options: ["on(event)", "click()", "hover()", "submit()"],
              answer: 0,
              explanation: "In Web3.js and Ethers.js, you can listen for blockchain events using the 'on(event)' method, which allows your application to respond to specific events emitted by smart contracts.",
            },
            {
              question: "You capture event logs via…?",
              options: ["console.log", "contract.events", "alert()", "document.write"],
              answer: 1,
              explanation: "You can capture event logs emitted by smart contracts using the 'contract.events' object in Web3.js or Ethers.js, which provides access to the events defined in the contract.",
            },
          ],
        },
        duration: "10 minutes",
        description: "Listening to blockchain events and handling them in your backend application.",
      },
    ],
  },
  {
    title: "Frontend DApp Development",
    lessons: [
      {
        id: "16",
        title: "React Setup for DApp",
        quiz: {
          questions: [
            {
              question: "Use React’s create-react-app for…?",
              options: ["Server side", "DApp UI", "Blockchain nodes", "Email client"],
              answer: 1,
            },
            {
              question: "MetaMask integration happens in…?",
              options: ["Backend", "Browser UI", "Database", "CSS file"],
              answer: 1,
            },
          ],
        },
        duration: "10 minutes",
        description: "Setting up a React application for building decentralized applications (DApps).",
      },
      {
        id: "17",
        title: "Connecting to MetaMask",
        quiz: {
          questions: [
            {
              question: "MetaMask is a…?",
              options: ["Backend server", "Browser wallet", "Database", "Mobile app only"],
              answer: 1,
            },
            {
              question: "You request accounts using…?",
              options: ["web3.eth.getAccounts()", "wallet.request()", "getBalance()", "signIn()"],
              answer: 0,
            },
          ],
        },
        duration: "8 minutes",
        description: "Connecting your React DApp to MetaMask for user wallet interactions.",
      },
      {
        id: "18",
        title: "Calling Smart Contract Functions from UI",
        quiz: {
          questions: [
            {
              question: "You call write functions using…?",
              options: ["call()", "send()", "print()", "setState()"],
              answer: 1,
            },
            {
              question: "Read functions use…?",
              options: ["get()", "call()", "send()", "write()"],
              answer: 1,
            },
          ],
        },
        duration: "12 minutes",
        description: "Calling smart contract functions directly from the React UI using Web3.js or E  thers.js.",
      },
      {
        id: "19",
        title: "Managing User Wallet & Network State",
        quiz: {
          questions: [
            {
              question: "To detect account change you use…?",
              options: ["onAccountsChanged", "onClick", "onHover", "onLoad"],
              answer: 0,
            },
            {
              question: "To detect network change use…?",
              options: ["onNetChange", "onChainChanged", "onMouseMove", "onClick()"],
              answer: 1,
            },
          ],
        },
        duration: "10 minutes",
        description: "Managing user wallet and network state in your React DApp.",
      },
    ],
  },
  {
    title: "User Authentication & Wallet Features",
    lessons: [
      {
        id: "20",
        title: "WalletConnect & Other Wallets",
        quiz: {
          questions: [
            {
              question: "WalletConnect uses…?",
              options: ["QR codes", "USB cables", "Wi-Fi", "Bluetooth"],
              answer: 0,
            },
            {
              question: "It connects mobile wallets to…?",
              options: ["Backend only", "DApp frontend", "Database", "Email"],
              answer: 1,
            },
          ],
        },
        duration: "10 minutes",
        description: "Integrating WalletConnect and other wallets into your DApp for user authentication.",
      },
      {
        id: "21",
        title: "Message Signing & Login Flow",
        quiz: {
          questions: [
            {
              question: "Signing verifies…?",
              options: ["User identity", "UI layout", "Database schema", "Server logs"],
              answer: 0,
            },
            {
              question: "Login flow uses…?",
              options: ["Plain text", "Metamask signature", "HTTP GET", "Image upload"],
              answer: 1,
            },
          ],
        },
        duration: "12 minutes",
        description: "Implementing message signing for user authentication and login flow in your DApp.",
      },
      {
        id: "22",
        title: "Storing Session Tokens Securely",
        quiz: {
          questions: [
            {
              question: "Never store tokens in…?",
              options: ["HTTPOnly cookies", "LocalStorage", "Secure servers", "In-memory"],
              answer: 1,
            },
            {
              question: "Best practice is to use…?",
              options: ["Plain cookies", "HTTPOnly cookies", "Embedded tokens in URL", "File storage"],
              answer: 1,
            },
          ],
        },
        duration: "10 minutes",
        description: "Storing session tokens securely in your DApp to prevent unauthorized access.",
      },
    ],
  },
  {

    title: "Data Storage & Decentralization",
    lessons: [
      {
        id: "23",
        title: "Using IPFS for Files",
        quiz: {
          questions: [
            {
              question: "IPFS stands for…?",
              options: [
                "Internet Protocol File System",
                "InterPlanetary File System",
                "Internal Public File Service",
                "Indexing Private File Storage",
              ],
              answer: 1,
            },
            {
              question: "IPFS uses…?",
              options: ["Central servers", "Distributed nodes", "USB drives", "Local cache"],
              answer: 1,
            },
          ],
        },
        duration: "10 minutes",
        description: "Using IPFS for decentralized file storage in your DApp.",
      },
      {
        id: "24",
        title: "Pinning Services & Gateways",
        quiz: {
          questions: [
            {
              question: "Pinning ensures files are…?",
              options: ["Deleted", "Persisted", "Hidden", "Encrypted"],
              answer: 1,
            },
            {
              question: "A gateway allows…?",
              options: ["Direct node access", "Browser file access", "UI styling", "CSS loading"],
              answer: 0,
            },
          ],

        },
        duration: "8 minutes",
        description: "Understanding pinning services and gateways for reliable IPFS access.",
      },  
      {
        id: "25",
        title: "Storing Data on Blockchain vs Off-Chain",
        quiz: {
          questions: [
            {
              question: "On-chain storage is…?",
              options: ["Cheap", "Expensive", "Fast", "Temporary"],
              answer: 1,
            },
            {
              question: "Off-chain data is stored in…?",
              options: ["Blockchain", "IPFS/Databases", "Smart contracts", "UI files"],
              answer: 1,
            },
          ],
        },
        duration: "12 minutes",
        description: "Comparing on-chain and off-chain data storage solutions for DApps.",
      }
    ]
  }
]


 export default sections;
