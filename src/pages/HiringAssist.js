import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import "../assets/css/hiringassist.css"; // Import the CSS file

const HiringAssist = () => {
  const [isActive, setActive] = useState(false);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 3; 
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
        image: "https://randomuser.me/api/portraits/men/45.jpg"
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

  const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentCoFounders = coFounders.slice(indexOfFirstItem, indexOfLastItem);
const totalPages = Math.ceil(coFounders.length / itemsPerPage);

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
    <LeftSidebar onButtonClick={ToggleEvent} />
    <div className="page-wrapper">
      <Navigation onButtonClick={ToggleEvent} />
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* Header Card */}
          <div className="card bg-info-subtle shadow-none mb-4">
            <div className="card-body px-4 py-3">
              <div className="row align-items-center">
                <div className="col-9">
                  <h4 className="fw-semibold mb-2">Looking for Co-Founder?</h4>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a className="text-muted text-decoration-none" href="#0">Home</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">Looking for Co-Founder</li>
                    </ol>
                  </nav>
                </div>
                <div className="col-3 text-center">
                  <img src="./assets/assets/images/breadcrumb/ChatBc.png" alt="breadcrumb" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          {/* Open Filter Button */}
          <div className="text-center mb-4">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#filterModal">
              Open Filters
            </button>
          </div>

          {/* Co-Founders Grid */}
          <div className="row">
            {currentCoFounders.map((coFounder) => (
              <div key={coFounder.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src="https://imgs.search.brave.com/mDztPWayQWWrIPAy2Hm_FNfDjDVgayj73RTnUIZ15L0/rs:fit:860:0:0:0/g:ce/..."
                    className="card-img-top"
                    alt="profile"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{coFounder.name}</h5>
                    <p className="card-text"><strong>Skills:</strong> {coFounder.skills.join(", ")}</p>
                    <p className="card-text"><strong>Location:</strong> {coFounder.location}</p>
                    <p className="card-text"><strong>Idea:</strong> {coFounder.idea}</p>
                    <button className="btn btn-outline-primary w-100" onClick={() => openQuickView(coFounder)}>
                      + Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

{/* Pagination Controls */}
<nav className="d-flex mb-3 w-100 justify-content-between align-items-center mt-4 gap-2">
  
  {/* Previous Button */}
  <button
    className="btn btn-outline-primary"
    disabled={currentPage === 1}
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
  >
    ← Previous
  </button>

  {/* Page Info */}
  <div className="text-muted">
    Page {currentPage} / {totalPages}
  </div>

  {/* Next Button */}
  <button
    className="btn btn-outline-primary"
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
  >
    Next →
  </button>

</nav>



        </div>
      </div>
    </div>
    <SerchBar />
  </div>

  {/* Filter Modal */}
  <div className="modal fade" id="filterModal" tabIndex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="filterModalLabel">Filters</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          {/* Location Filter */}
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
            />
          </div>

          {/* Type of Co-Founder */}
          <div className="mb-3">
            <label className="form-label">Type of Co-Founder</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="type" value="hasIdea" checked={filters.type.includes("hasIdea")} onChange={handleFilterChange} />
              <label className="form-check-label">Has an idea</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="type" value="lookingToPartner" checked={filters.type.includes("lookingToPartner")} onChange={handleFilterChange} />
              <label className="form-check-label">Looking to partner</label>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-3">
            <label className="form-label">Skills</label>
            {["Developer", "Designer", "Marketer", "Business Development", "Sales", "Product"].map((skill) => (
              <div className="form-check" key={skill}>
                <input className="form-check-input" type="checkbox" name="skills" value={skill} checked={filters.skills.includes(skill)} onChange={handleFilterChange} />
                <label className="form-check-label">{skill}</label>
              </div>
            ))}
          </div>

          {/* Availability */}
          <div className="mb-3">
            <label className="form-label">Weekly Availability</label>
            {["0-10 hrs/week", "10-20 hrs/week", "20-30 hrs/week", "30+ hrs/week"].map((availability) => (
              <div className="form-check" key={availability}>
                <input className="form-check-input" type="checkbox" name="availability" value={availability} checked={filters.availability.includes(availability)} onChange={handleFilterChange} />
                <label className="form-check-label">{availability}</label>
              </div>
            ))}
          </div>

          {/* Keyword */}
          <div className="mb-3">
            <label className="form-label">Search by Keyword</label>
            <input
              type="text"
              className="form-control"
              name="keyword"
              value={filters.keyword}
              onChange={handleFilterChange}
            />
          </div>

          {/* Sort */}
          <div className="mb-3">
            <label className="form-label">Sort Users By</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="sortBy" value="lastActive" checked={filters.sortBy === "lastActive"} onChange={handleFilterChange} />
              <label className="form-check-label">Last Active</label>
            </div>
          </div>

          {/* Startup Stage */}
          <div className="mb-3">
            <label className="form-label">Startup Stage</label>
            {["Validation-Concept Exploration & Research", "Planning-Business Model & Business Plan Writing", "Building-Product Building or Service Being Setup", "Launched-Existing Clients or Customers"].map((stage) => (
              <div className="form-check" key={stage}>
                <input className="form-check-input" type="checkbox" name="startupStage" value={stage} checked={filters.startupStage.includes(stage)} onChange={handleFilterChange} />
                <label className="form-check-label">{stage}</label>
              </div>
            ))}
          </div>

          {/* Industry */}
          <div className="mb-3">
            <label className="form-label">Industry</label>
            {["Finance/Fintech", "Retail", "E-commerce", "Construction/Trade", "Agency-Digital", "Agency-Other", "Consulting", "Manufacturing", "Wholesale", "Web or Mobile App", "Website", "Other"].map((industry) => (
              <div className="form-check" key={industry}>
                <input className="form-check-input" type="checkbox" name="industry" value={industry} checked={filters.industry.includes(industry)} onChange={handleFilterChange} />
                <label className="form-check-label">{industry}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={resetFilters}>Reset</button>
          <button className="btn btn-primary" onClick={applyFilters} data-bs-dismiss="modal">Apply</button>
        </div>
      </div>
    </div>
  </div>

  {/* Quick View Modal */}
  {selectedCoFounder && (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{selectedCoFounder.name}</h5>
            <button type="button" className="btn-close" onClick={closeQuickView}></button>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <img
                src="https://imgs.search.brave.com/mDztPWayQWWrIPAy2Hm_FNfDjDVgayj73RTnUIZ15L0/rs:fit:860:0:0:0/g:ce/..."
                className="rounded-circle mb-3"
                width={100}
                alt="profile"
              />
            </div>
            <p><strong>Location:</strong> {selectedCoFounder.location}</p>
            <p><strong>Skills:</strong> {selectedCoFounder.skills.join(", ")}</p>
            <p><strong>Idea:</strong> {selectedCoFounder.idea}</p>

            <div className="btn-group w-100 mb-3">
              <button className={`btn ${activeSection === "myIdea" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => toggleSection("myIdea")}>My Idea</button>
              <button className={`btn ${activeSection === "whyPartner" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => toggleSection("whyPartner")}>Why Partner</button>
            </div>

            {activeSection === "myIdea" && (
              <div>
                <h5>My Idea</h5>
                <p>{selectedCoFounder.idea} We are the first interest-free mortgage model...</p>
              </div>
            )}
            {activeSection === "whyPartner" && (
              <div>
                <h5>Why Partner With Me</h5>
                <p>Driven visionary, creating impactful solutions, entrepreneurial mindset...</p>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button className="btn btn-success">Send Message</button>
            <button className="btn btn-secondary" onClick={closeQuickView}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )}
</>

  );
};

export default HiringAssist;