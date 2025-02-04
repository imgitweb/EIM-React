import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import "../assets/css/investorpool.css";

const InvestorPool = () => {
  const [isActive, setActive] = useState(false);
  const ToggleEvent = () => setActive((prevState) => !prevState);

  const sampleInvestors = [
    {
      id: 1,
      name: "Ratan Tata",
      logo: "/api/placeholder/50/50",
      company: "Tata Sons",
      ideal: "seed",
      industry: "ai/ml",
    },
    {
      id: 2,
      name: "Sequoia India",
      logo: "/api/placeholder/50/50",
      company: "Sequoia Capital",
      ideal: "growth",
      industry: "fintech",
    },
    {
      id: 3,
      name: "Blume Ventures",
      logo: "/api/placeholder/50/50",
      company: "Blume",
      ideal: "early",
      industry: "saas",
    },
    {
      id: 4,
      name: "Nexus Venture Partners",
      logo: "/api/placeholder/50/50",
      company: "Nexus VP",
      ideal: "seed",
      industry: "healthtech",
    },
    {
      id: 5,
      name: "Tiger Global",
      logo: "/api/placeholder/50/50",
      company: "Tiger Global Management",
      ideal: "growth",
      industry: "edtech",
    },
    {
      id: 6,
      name: "Ratan Tata",
      logo: "/api/placeholder/50/50",
      company: "Tata Sons",
      ideal: "seed",
      industry: "ai/ml",
    },
    {
      id: 7,
      name: "Sequoia India",
      logo: "/api/placeholder/50/50",
      company: "Sequoia Capital",
      ideal: "growth",
      industry: "fintech",
    },
    {
      id: 8,
      name: "Blume Ventures",
      logo: "/api/placeholder/50/50",
      company: "Blume",
      ideal: "early",
      industry: "saas",
    },
    {
      id: 9,
      name: "Nexus Venture Partners",
      logo: "/api/placeholder/50/50",
      company: "Nexus VP",
      ideal: "seed",
      industry: "healthtech",
    },
    {
      id: 10,
      name: "Tiger Global",
      logo: "/api/placeholder/50/50",
      company: "Tiger Global Management",
      ideal: "growth",
      industry: "edtech",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIdeal, setSelectedIdeal] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const idealOptions = ["pre-seed", "seed", "early", "growth"];
  const industryOptions = [
    "ai/ml",
    "agritech",
    "consumer",
    "digital entertainment",
    "edtech",
    "fintech",
    "healthtech",
    "media",
    "mobility",
    "saas"
  ];

  // Filter investors based on search and filter criteria
  const filteredInvestors = sampleInvestors.filter(investor => {
    return (
      investor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedIdeal === "" || investor.ideal === selectedIdeal) &&
      (selectedIndustry === "" || investor.industry === selectedIndustry)
    );
  });

  // Pagination logic
  const investorsPerPage = 5;
  const totalPages = Math.ceil(filteredInvestors.length / investorsPerPage);
  const indexOfLastInvestor = currentPage * investorsPerPage;
  const indexOfFirstInvestor = indexOfLastInvestor - investorsPerPage;
  const currentInvestors = filteredInvestors.slice(indexOfFirstInvestor, indexOfLastInvestor);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
      <LeftSidebar onButtonClick={ToggleEvent} />
      <div className="page-wrapper">
        <Navigation onButtonClick={ToggleEvent} />
        <div className="body-wrapper">
          <div className="container-fluid">
            <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
              <div className="card-body px-4 py-3">
                <div className="row align-items-center">
                  <div className="col-9">
                    <h4 className="fw-semibold mb-8">Investor Pool</h4>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a className="text-muted text-decoration-none" href="../dark/index.html">
                            Home
                          </a>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Investor Pool
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="col-3">
                    <div className="text-center mb-n5">
                      <img
                        src="./assets/assets/images/breadcrumb/ChatBc.png"
                        alt="breadcrumb-img"
                        className="img-fluid mb-n4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="investor-directory">
              <div className="hero-section">
                <h1 className="main-heading">The Ultimate Indian <span>Investors List</span></h1>
                <p className="sub-heading">
                  Find the perfect investor for your business in our extensive database.
                  With a wide network spanning various industries, you'll discover the
                  ideal match for your needs.
                </p>
              </div>

              <div className="search-window">
                <div className="search-controls">
                  <input
                    type="text"
                    placeholder="Search investors by name..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                  <div className="filters">
                    <select
                      value={selectedIdeal}
                      onChange={(e) => setSelectedIdeal(e.target.value)}
                      className="filter-dropdown primary"
                    >
                      <option value="">Ideal For</option>
                      {idealOptions.map(option => (
                        <option key={option} value={option}>
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                      ))}
                    </select>

                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="filter-dropdown secondary"
                    >
                      <option value="">Industry</option>
                      {industryOptions.map(option => (
                        <option key={option} value={option}>
                          {option.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="investors-list-header">
                  <div>Name</div>
                  <div className="ideal-tag-cell">Ideal For</div>
                  <div className="industry-tag-cell">Industry</div>
                </div>

                <div className="investors-list">
                  {currentInvestors.map(investor => (
                    <div key={investor.id} className="investor-card">
                      <div className="investor-basic-info">
                        <img src="https://i.pinimg.com/736x/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg" alt={`${investor.name} logo`} className="investor-logo" />
                        <div className="investor-info">
                          <h3>{investor.name}</h3>
                          <p className="company-name">{investor.company}</p>
                        </div>
                      </div>
                      <div className="ideal-tag-cell">
                        <span className="tag ideal-tag">{investor.ideal}</span>
                      </div>
                      <div className="industry-tag-cell">
                        <span className="tag industry-tag">{investor.industry}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pagination">
                  <button 
                    className="pagination-btn"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                  {pageNumbers.map(number => (
                    <button
                      key={number}
                      className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
                      onClick={() => handlePageChange(number)}
                    >
                      {number}
                    </button>
                  ))}
                  <button 
                    className="pagination-btn"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SerchBar />
      <div className="dark-transparent sidebartoggler" />
    </div>
  );
};

export default InvestorPool;