import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import "../assets/css/hiringassist.css"; // Import the CSS file

const HiringAssist = () => {
  const [isActive, setActive] = useState(false);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    type: [],
    skills: [],
    availability: [],
    keyword: "",
    sortBy: "",
    startupStage: [],
    industry: [],
  });
  const [coFounders, setCoFounders] = useState([
    {
      id: 1,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 2,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 3,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 4,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 5,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 6,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 7,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 8,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 9,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 10,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 11,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 12,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 13,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 14,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 15,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 16,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 17,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 18,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    {
      id: 19,
      name: "Gaurav",
      skills: ["Marketer", "Business Development"],
      location: "New York",
      hasIdea: true,
      idea: "A platform for remote team building activities.",
    },
    // Add more dummy data here
  ]);
  const [selectedCoFounder, setSelectedCoFounder] = useState(null);
  const [activeSection, setActiveSection] = useState("myIdea");

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "type" || name === "skills" || name === "availability" || name === "startupStage" || name === "industry") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: checked
          ? [...prevFilters[name], value]
          : prevFilters[name].filter((item) => item !== value),
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const applyFilters = () => {
    console.log("Filters applied:", filters);
    setFilterOpen(false);
  };

  const resetFilters = () => {
    setFilters({
      location: "",
      type: [],
      skills: [],
      availability: [],
      keyword: "",
      sortBy: "",
      startupStage: [],
      industry: [],
    });
  };

  const openQuickView = (coFounder) => {
    setSelectedCoFounder(coFounder);
    setActiveSection("myIdea"); // Reset to "My Idea" section when opening quick view
  };

  const closeQuickView = () => {
    setSelectedCoFounder(null);
  };

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        {/* Sidebar Start */}
        <LeftSidebar onButtonClick={ToggleEvent} />
        {/*  Sidebar End */}
        <div className="page-wrapper">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid">
              <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
                <div className="card-body px-4 py-3">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h4 className="fw-semibold mb-8">
                        Looking for Co-Founder ?
                      </h4>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a
                              className="text-muted text-decoration-none"
                              href="#0"
                            >
                              Home
                            </a>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            Looking for Co-Founder
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-3">
                      <div className="text-center mb-n5">
                        <img
                          src="./assets/assets/images/breadcrumb/ChatBc.png"
                          alt="modernize-img"
                          className="img-fluid mb-n4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mb-4">
                <button className="btn btn-primary" onClick={() => setFilterOpen(true)}>
                  Open Filters
                </button>
              </div>
              {isFilterOpen && (
                <div className="filter-dialog">
                  <div className="filter-content">
                    <div className="filter-header">
                      <h2>Filters</h2>
                      <button className="close-icon" onClick={() => setFilterOpen(false)}>
                        &times;
                      </button>
                    </div>
                    <div className="filter-section">
                      <h3>Location</h3>
                      <input
                        type="text"
                        name="location"
                        value={filters.location}
                        onChange={handleFilterChange}
                        placeholder="Enter location"
                      />
                    </div>
                    <div className="filter-section">
                      <h3>Type of Co-Founder</h3>
                      <label>
                        <input
                          type="checkbox"
                          name="type"
                          value="hasIdea"
                          checked={filters.type.includes("hasIdea")}
                          onChange={handleFilterChange}
                        />
                        Show everyone who has an idea for a startup
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="type"
                          value="lookingToPartner"
                          checked={filters.type.includes("lookingToPartner")}
                          onChange={handleFilterChange}
                        />
                        Show everyone who is looking to partner up on someone else's idea
                      </label>
                    </div>
                    <div className="filter-section">
                      <h3>Skills</h3>
                      {["Developer", "Designer", "Marketer", "Business Development", "Sales", "Product"].map((skill) => (
                        <label key={skill}>
                          <input
                            type="checkbox"
                            name="skills"
                            value={skill}
                            checked={filters.skills.includes(skill)}
                            onChange={handleFilterChange}
                          />
                          {skill}
                        </label>
                      ))}
                    </div>
                    <div className="filter-section">
                      <h3>Weekly Availability</h3>
                      {["0-10 hrs/week", "10-20 hrs/week", "20-30 hrs/week", "30+ hrs/week"].map((availability) => (
                        <label key={availability}>
                          <input
                            type="checkbox"
                            name="availability"
                            value={availability}
                            checked={filters.availability.includes(availability)}
                            onChange={handleFilterChange}
                          />
                          {availability}
                        </label>
                      ))}
                    </div>
                    <div className="filter-section">
                      <h3>Search by Keyword</h3>
                      <input
                        type="text"
                        name="keyword"
                        value={filters.keyword}
                        onChange={handleFilterChange}
                        placeholder="Enter keyword"
                      />
                    </div>
                    <div className="filter-section">
                      <h3>Sort Users By</h3>
                      <label>
                        <input
                          type="checkbox"
                          name="sortBy"
                          value="lastActive"
                          checked={filters.sortBy === "lastActive"}
                          onChange={handleFilterChange}
                        />
                        Sort users by last active
                      </label>
                    </div>
                    <div className="filter-section">
                      <h3>Startup Stage</h3>
                      {["Validation-Concept Exploration & Research", "Planning-Business Model & Business Plan Writing", "Building-Product Building or Service Being Setup", "Launched-Existing Clients or Customers"].map((stage) => (
                        <label key={stage}>
                          <input
                            type="checkbox"
                            name="startupStage"
                            value={stage}
                            checked={filters.startupStage.includes(stage)}
                            onChange={handleFilterChange}
                          />
                          {stage}
                        </label>
                      ))}
                    </div>
                    <div className="filter-section">
                      <h3>Industry</h3>
                      {["Finance/Fintech", "Retail", "E-commerce", "Construction/Trade", "Agency-Digital", "Agency-Other", "Consulting", "Manufacturing", "Wholesale", "Web or Mobile App", "Website", "Other"].map((industry) => (
                        <label key={industry}>
                          <input
                            type="checkbox"
                            name="industry"
                            value={industry}
                            checked={filters.industry.includes(industry)}
                            onChange={handleFilterChange}
                          />
                          {industry}
                        </label>
                      ))}
                    </div>
                    <div className="filter-actions">
                      <button className="btn btn-primary" onClick={applyFilters}>
                        Apply Filters
                      </button>
                      <button className="btn btn-secondary" onClick={resetFilters}>
                        Reset Filters
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="co-founders-list">
                {coFounders.map((coFounder) => (
                  <div key={coFounder.id} className="co-founder-card">
                    <div className="profile">
                      <img
                        src="https://imgs.search.brave.com/mDztPWayQWWrIPAy2Hm_FNfDjDVgayj73RTnUIZ15L0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc"
                        alt="profile"
                      />
                      <h3>{coFounder.name}</h3>
                    </div>
                    <div className="skills">
                      <strong>Skills:</strong> {coFounder.skills.join(", ")}
                    </div>
                    <div className="location">
                      <strong>Location:</strong> {coFounder.location}
                    </div>
                    <div className="idea">
                      <strong>Idea:</strong> {coFounder.idea}
                    </div>
                    <button className="btn btn-info" onClick={() => openQuickView(coFounder)}>
                      + Quick View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SerchBar />
      </div>
      {selectedCoFounder && (
        <div className="quick-view-dialog">
          <div className="quick-view-content">
            <h2>{selectedCoFounder.name}</h2>
            <div className="profile-image">
              <img
                src="https://imgs.search.brave.com/mDztPWayQWWrIPAy2Hm_FNfDjDVgayj73RTnUIZ15L0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc"
                alt="profile"
                className="default-profile-img"
              />
            </div>
            <div className="details">
              <p><strong>Location:</strong> {selectedCoFounder.location}</p>
              <p><strong>Skills:</strong> {selectedCoFounder.skills.join(", ")}</p>
              <p><strong>Idea:</strong> {selectedCoFounder.idea}</p>
            </div>
            <div className="toggle-buttons">
              <button
                className={`toggle-btn ${activeSection === "myIdea" ? "active" : ""}`}
                onClick={() => toggleSection("myIdea")}
              >
                My Idea
              </button>
              <button
                className={`toggle-btn ${activeSection === "whyPartner" ? "active" : ""}`}
                onClick={() => toggleSection("whyPartner")}
              >
                Why Partner With Me
              </button>
            </div>
            <div className="toggle-content">
              {activeSection === "myIdea" && (
                <div className="my-idea-section">
                  <h3>My Idea</h3>
                  <p>{selectedCoFounder.idea} We are the first interest-free mortgage model for homebuyers - A game changer. Two time cheaper than your traditional mortgage. A shared ecosystem model. Homebuyer, get to buy their home without interest mortgage and investors/mortgage lenders still benefit from the ecosystem with better profit margin. Too good to be true. :) Let's see.</p>
                </div>
              )}
              {activeSection === "whyPartner" && (
                <div className="why-partner-section">
                  <h3>Why Partner With Me</h3>
                  <p>A self-driven, visionary who think out of the box. I am powered by a passion to create impactful ideas and solutions for others to benefit from, an entrepreneurial philanthropist vein run through me, while still maintaining a focus on profit for the company and partners.</p>
                </div>
              )}
            </div>
            <button className="btn btn-primary">Send Message</button>
            <button className="btn btn-secondary" onClick={closeQuickView}>
              Close
            </button>
          </div>
        </div>
      )}
      <div className="dark-transparent sidebartoggler" />
    </>
  );
};

export default HiringAssist;