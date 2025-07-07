import React, { useState, useEffect } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import "../assets/css/investorpool.css";
import axios from "axios";
import API_URI from "../componant/config";

const InvestorPool = () => {
  const [isActive, setActive] = useState(false);
  const ToggleEvent = () => setActive((prevState) => !prevState);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIdeal, setSelectedIdeal] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [sampleInvestors, setsampleInvestors] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URI}/api/investors/angel`);
        setsampleInvestors(res.data.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    "saas",
    "industry-agnostic",
  ];

  const filteredInvestors = sampleInvestors.filter((investor) => {
    const name = investor.investorName?.trim() || investor.firmName?.trim();
    if (!name) return false;

    const nameMatch = name.toLowerCase().includes(searchTerm.toLowerCase());
    const idealMatch =
      selectedIdeal === "" ||
      investor.stage?.toLowerCase() === selectedIdeal.toLowerCase();
    const industryMatch =
      selectedIndustry === "" || investor.industry === selectedIndustry;

    return nameMatch && idealMatch && industryMatch;
  });

  const investorsPerPage = 5;
  const totalPages = Math.ceil(filteredInvestors.length / investorsPerPage);
  const indexOfLastInvestor = currentPage * investorsPerPage;
  const indexOfFirstInvestor = indexOfLastInvestor - investorsPerPage;
  const currentInvestors = filteredInvestors.slice(
    indexOfFirstInvestor,
    indexOfLastInvestor
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
              <div className="hero-section text-center mb-5">
                <h1 className="main-heading">
                  The Ultimate Indian <span>Investors List</span>
                </h1>
                <p className="sub-heading">
                  Find the perfect investor for your business in our extensive
                  database. With a wide network spanning various industries,
                  you'll discover the ideal match for your needs.
                </p>
              </div>

              <div className="search-controls row g-3 mb-4">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    placeholder="Search investors by name..."
                    className="form-control"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="col-6 col-md-3">
                  <select
                    value={selectedIdeal}
                    onChange={(e) => setSelectedIdeal(e.target.value)}
                    className="form-select">
                    <option value="">Ideal For</option>
                    {idealOptions.map((option) => (
                      <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-6 col-md-3">
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="form-select">
                    <option value="">Industry</option>
                    {industryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="d-none d-md-flex fw-semibold text-muted border-bottom py-2 mb-3">
                <div className="col-md-4">Name</div>
                <div className="col-md-4">Ideal For</div>
                <div className="col-md-4">Industry</div>
              </div>

              <div className="row g-3">
                {currentInvestors.map((investor) => (
                  <div key={investor.id} className="col-12">
                    <div className="card p-3 d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <img
                          src="https://i.pinimg.com/736x/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg"
                          alt={`${investor.investorName} logo`}
                          className="rounded me-3"
                          style={{ width: "50px", height: "50px", objectFit: "cover" }}
                        />
                        <div>
                          <h5 className="mb-0">{investor.investorName}</h5>
                          <small className="text-muted">{investor.firmName || investor.industry}</small>
                        </div>
                      </div>

                      <div className="d-flex gap-2 flex-wrap">
                        <span className="badge bg-primary text-white">{investor.stage}</span>
                        <span className="badge bg-success text-white">{investor.industry}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <nav className="mt-4 d-flex justify-content-center flex-wrap gap-2">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}>
                  Prev
                </button>
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    className={`btn btn-sm ${currentPage === number ? "btn-primary" : "btn-outline-secondary"}`}
                    onClick={() => handlePageChange(number)}>
                    {number}
                  </button>
                ))}
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}>
                  Next
                </button>
              </nav>
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
