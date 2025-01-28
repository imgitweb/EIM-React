import React, { useState, useEffect } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import { Link } from "react-router-dom";

const MyMentor = () => {
  const [isActive, setActive] = useState(false);
  const [mentorData, setMentorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  const startupId = localStorage.getItem("token"); // Retrieve the startup_id

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://risejhansi.in/rise_im/Startup/Api/GetAllMentors`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setMentorData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [startupId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  // Filter mentors based on search query
  const filteredMentors = mentorData.data.filter((mentor) =>
    mentor.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
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
                      <h4 className="fw-semibold mb-8">My Mentor</h4>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a
                              className="text-muted text-decoration-none"
                              href="../dark/index.html"
                            >
                              Home
                            </a>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            My Mentor
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

              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane active"
                  id="pills-friends"
                  role="tabpanel"
                  aria-labelledby="pills-friends-tab"
                  tabIndex={0}
                >
                  <div className="d-sm-flex align-items-center justify-content-between mt-3 mb-4">
                    <h3 className="mb-3 mb-sm-0 fw-semibold d-flex align-items-center">
                      Mentor
                      <span className="badge text-bg-secondary fs-2 rounded-4 py-1 px-2 ms-2">
                        {filteredMentors.length}
                      </span>
                    </h3>
                    <form className="position-relative">
                      <input
                        type="text"
                        className="form-control search-chat py-2 ps-5"
                        id="text-srh"
                        placeholder="Search Mentors"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                      />
                      <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y text-dark ms-3" />
                    </form>
                  </div>
                  <div className="row">
                    {filteredMentors.map((mentor, index) => (
                      <div className="col-sm-6 col-lg-4" key={index}>
                        <div className="card hover-img">
                          <div className="card-body p-4 text-center border-bottom">
                            <img
                              src="./assets/assets/images/profile/user-1.jpg"
                              alt="modernize-img"
                              className="rounded-circle mb-3"
                              width={80}
                              height={80}
                            />
                            <h5 className="fw-semibold mb-0">{mentor.name}</h5>
                            <span className="text-dark fs-2">
                              Experience: {mentor.no_of_mentor_year}
                            </span>
                          </div>
                          <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                            <li className="position-relative">
                              <Link
                                to={mentor.linkedin_url}
                                className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                                target="_blank"
                              >
                                <i className="ti ti-brand-linkedin text-white" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SerchBar />
      </div>
      <div className="dark-transparent sidebartoggler" />
    </>
  );
};

export default MyMentor;
