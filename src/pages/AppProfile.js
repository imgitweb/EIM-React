import React, { useState, useEffect } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import AddTeam from "../Team/AddTeam";
import TeamDetails from "../Team/TeamDetails";
import IncorporationDetails from "../Incorporation/IncorporationDetails";
import StartupDocument from "../startup_document/StartupDocument";
import axios from "axios";
import API_BASE_URL from "./../componant/config";
import { Link } from "react-router-dom";
import PopupModal from "../componant/PopupModal";
const sections = [
  {
    title: "Week 1 - Introduction to Entrepreneurship",
    content: [
      "Understanding the startup ecosystem",
      "Identifying market needs",
      "Define problem statement and potential market size in your country and globally",
      "Idea Ranking and chances of success meter (ESM Score out of 100)",
      "Introduction to EIM and EIM Network",
    ],
  },
  {
    title: "Week 2 - Business Idea Validation",
    content: [
      "Techniques for validating ideas",
      "Customer interviews and feedback",
      "Identify potential sales and distribution channels",
      "List out similar businesses, their success and failure patterns",
      "List out potential impediments such as founders' knowledge, resources, money, and technology exposure",
    ],
  },
  {
    title: "Week 3 - First Cut of Business Model",
    content: [
      "Introduction to business model canvas",
      "List out potential competitors and prepare a matrix",
      "Examples of successful and failed business models",
      "List 10 potential customers who would pay for your services and create customer personas",
      "Fine-tune the revenue model for your idea",
      "List required budget and resources for MLP and full-fledged product development",
    ],
  },
  {
    title: "Week 4 - Finalizing Numbers and Decision Making",
    content: [
      "Recalculate ESM",
      "Create a viable plan to arrange the required budget and resources",
      "Create a potential roadmap to ₹100 Crore revenue and positive EBITDA",
      "Decision time – pursue the idea further or drop it",
    ],
  },
];
const AppProfile = () => {
  const [profile, setProfile] = useState(false);
  const [isActive, setActive] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [uploadedLogoPath, setUploadedLogoPath] = useState(null);
  const startup_id = localStorage.getItem("userId");
  const [endDate, setEndDate] = useState();
  const [countdown, setCountdown] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file first.");

    const formData = new FormData();
    formData.append("logo", selectedFile);

    try {
      const res = await axios.put(
        `${API_BASE_URL}/api/profile/${startup_id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      console.log("Upload response:", res.data);
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed");
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const getSubscriptionStatus = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/subscriptions/${startup_id}`,
        {
          withCredentials: true,
        }
      );
      const date = res.data.subscriptions[0].endDate;
      setEndDate(new Date(date));
    } catch (error) {
      console.error("Error retrieving subscription status:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve startup_id from localStorage
        const response = await axios.get(
          `${API_BASE_URL}/api/startup/getStartupInfo/${startup_id}`,
          {
            withCredentials: true,
          }
        );

        // Extract only the 'startup' data from the response
        const startupData = response.data?.startup || null; // Use optional chaining to avoid errors if 'startup' doesn't exist

        setProfile(startupData);
      } catch (error) {
        console.error("Error while fetching data:-----", error);
        setProfile(null); // Set null in case of an error
      }
    };

    getSubscriptionStatus();
    fetchData();
  }, []);
  useEffect(() => {
    if (!endDate) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = endDate - now;

      if (timeLeft <= 0) {
        setCountdown("Your plan has expired.");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount or endDate change
  }, [endDate]);

  return (
    <>
    <div className="container-fluid">
              <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
                <div className="card-body px-4 py-3">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h4 className="fw-semibold mb-8">User Profile</h4>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a
                              className="text-muted text-decoration-none"
                              href="../dark/index.html">
                              Home
                            </a>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            User Profile
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
              <div className="card overflow-hidden">
                <div className="card-body ">
                  <img
                    src="./assets/assets/images/backgrounds/profilebg.jpg"
                    alt="modernize-img"
                    className="img-fluid"
                  />
                  <div className="row align-items-center">
                    <div className="col-lg-4 order-lg-1 order-2">
                      <div className="d-flex ali  gn-items-center gap-10 m-4">
                        <div>
                          <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn btn-primary text-nowrap">
                            Weekly Tracker
                          </button>
                        </div>

                        {/* pop code  */}

                        <PopupModal
                          isOpen={isModalOpen}
                          onClose={() => setIsModalOpen(false)}
                          title="Dashboard Popup">
                          <p>Your plan is valid until 5th July 2025.</p>
                          <p>Here are the details of your plan:</p>
                        </PopupModal>

                        <div className="text-center">
                          <h4
                            style={{
                              textTransform: "capitalize",
                            }}
                            className="mb-0 lh-1 ">
                            {profile?.selectedPlan}
                          </h4>
                          <p className="mb-0 ">Current Plan</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mt-n3 order-lg-2 order-1">
                      <div className="mt-n5">
                        <div className="d-flex align-items-center justify-content-center mb-2">
                          <div className="d-flex align-items-center justify-content-center round-110">
                            <div className="border border-4 border-white d-flex align-items-center justify-content-center rounded-circle overflow-hidden round-100">
                              <img
                                src="./assets/assets/images/profile/user-1.jpg"
                                alt="modernize-img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          {profile ? (
                            <h5>
                              {profile.firstName} {profile.lastName}
                            </h5>
                          ) : (
                            <p>No Name</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 order-last">
                      <ul className="list-unstyled d-flex align-items-center justify-content-center justify-content-lg-end my-3 mx-1 pe-xxl-4 gap-3">
                        {/* <li>
                          <a
                            className="d-flex align-items-center justify-content-center btn btn-primary p-2 fs-4 rounded-circle"
                            href="#"
                            width={30}
                            height={30}
                          >
                            <i className="ti ti-brand-facebook" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-primary d-flex align-items-center justify-content-center p-2 fs-4 rounded-circle"
                            href="#"
                          >
                            <i className="ti ti-brand-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-primary d-flex align-items-center justify-content-center p-2 fs-4 rounded-circle"
                            href="#"
                          >
                            <i className="ti ti-brand-twitter" />
                          </a>
                        </li> */}
                        <li>
                          <Link
                            to={"#"}
                            className="btn btn-primary text-nowrap">
                            <i class="bi bi-stopwatch mx-1"> </i> {countdown}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/Upgrade-Beta"}
                            className="btn btn-primary text-nowrap">
                            Upgrade Now
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul
                    className="nav nav-pills user-profile-tab justify-content-center mt-2 bg-primary-subtle rounded-2 rounded-top-0"
                    id="pills-tab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active hstack gap-2 rounded-0 py-6"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="true">
                        <i className="ti ti-user-circle fs-5" />
                        <span className="d-none d-md-block">Basic profile</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link hstack gap-2 rounded-0 py-6"
                        id="pills-followers-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-followers"
                        type="button"
                        role="tab"
                        aria-controls="pills-followers"
                        aria-selected="false">
                        <i className="ti ti-heart fs-5" />
                        <span className="d-none d-md-block">Team details</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link hstack gap-2 rounded-0 py-6"
                        id="pills-friends-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-friends"
                        type="button"
                        role="tab"
                        aria-controls="pills-friends"
                        aria-selected="false">
                        <i className="ti ti-user-circle fs-5" />
                        <span className="d-none d-md-block">Incorporation</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link hstack gap-2 rounded-0 py-6"
                        id="pills-gallery-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-gallery"
                        type="button"
                        role="tab"
                        aria-controls="pills-gallery"
                        aria-selected="false">
                        <i className="ti ti-photo-plus fs-5" />
                        <span className="d-none d-md-block">Documents</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link hstack gap-2 rounded-0 py-6"
                        id="pills-gallery-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#stage-task"
                        type="button"
                        role="tab"
                        aria-controls="pills-gallery"
                        aria-selected="false">
                        <i className="ti ti-list fs-5" />
                        <span className="d-none d-md-block">Stage Task</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                {/* Basic Profile */}
                <div
                  className="tab-pane fade show active"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex={0}>
                  <div className="row">
                    <div className="card">
                      <div className="card-body">
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-account"
                            role="tabpanel"
                            aria-labelledby="pills-account-tab"
                            tabIndex={0}>
                            <div className="row">
                              <div className="col-lg-6 d-flex align-items-stretch">
                                <div className="card w-100 border position-relative overflow-hidden">
                                  <div className="card-body p-4">
                                    <h4 className="card-title">
                                      Change Profile
                                    </h4>
                                    <p className="card-subtitle mb-4">
                                      Change your profile picture from here
                                    </p>

                                    <div className="text-center">
                                      <img
                                        src={
                                          previewUrl
                                            ? previewUrl
                                            : profile?.logoUrl
                                            ? `http://localhost:5000${profile?.logoUrl}`
                                            : "/assets/assets/images/profile/user-1.jpg"
                                        }
                                        alt="profile"
                                        className="img-fluid rounded-circle"
                                        width={120}
                                        height={120}
                                      />

                                      <div className="my-4">
                                        <input
                                          type="file"
                                          accept="image/png, image/jpeg, image/gif"
                                          className="form-control mb-3"
                                          onChange={handleFileChange}
                                        />

                                        <div className="d-flex align-items-center justify-content-center gap-3">
                                          <button
                                            className="btn btn-primary"
                                            onClick={handleUpload}>
                                            Upload
                                          </button>
                                          <button
                                            className="btn bg-danger-subtle text-danger"
                                            onClick={handleReset}>
                                            Reset
                                          </button>
                                        </div>
                                      </div>

                                      <p className="mb-0">
                                        Allowed JPG, GIF or PNG. Max size of
                                        800K
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-12 col-md-10 col-lg-6 mb-4">
  <div className="card w-100 border position-relative overflow-hidden h-100">
    <div className="card-body p-4">
      <h4 className="card-title">Profile Details</h4>

      {profile ? (
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <td>Startup Name</td>
                <td>{profile.firstName || "N/A"}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{profile.email || "N/A"}</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>{profile.contactNumber || "N/A"}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{profile.country || "N/A"}</td>
              </tr>
              <tr>
                <td>Industry</td>
                <td>{profile.industry || "N/A"}</td>
              </tr>
              <tr>
                <td>Stage</td>
                <td>{profile.startupStage || "N/A"}</td>
              </tr>
              <tr>
                <td>Startup Name</td>
                <td>{profile.startupName || "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>No startup information found.</p>
      )}
    </div>
  </div>
</div>

                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-notifications"
                            role="tabpanel"
                            aria-labelledby="pills-notifications-tab"
                            tabIndex={0}>
                            <div className="row justify-content-center">
                              <div className="col-lg-9">
                                <div className="card border shadow-none">
                                  <div className="card-body p-4">
                                    <h4 className="card-title">
                                      Notification Preferences
                                    </h4>
                                    <p className="card-subtitle mb-4">
                                      Select the notificaitons ou would like to
                                      receive via email. Please note that you
                                      cannot opt out of receving service
                                      messages, such as payment, security or
                                      legal notifications.
                                    </p>
                                    <form className="mb-7">
                                      <label
                                        htmlFor="exampleInputtext5"
                                        className="form-label">
                                        Email Address*
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputtext5"
                                        placeholder=""
                                        required=""
                                      />
                                      <p className="mb-0">
                                        Required for notificaitons.
                                      </p>
                                    </form>
                                    <div>
                                      <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center gap-3">
                                          <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                            <i
                                              className="ti ti-article text-dark d-block fs-7"
                                              width={22}
                                              height={22}
                                            />
                                          </div>
                                          <div>
                                            <h5 className="fs-4 fw-semibold">
                                              Our newsletter
                                            </h5>
                                            <p className="mb-0">
                                              We'll always let you know about
                                              important changes
                                            </p>
                                          </div>
                                        </div>
                                        <div className="form-check form-switch mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                          />
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center gap-3">
                                          <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                            <i
                                              className="ti ti-checkbox text-dark d-block fs-7"
                                              width={22}
                                              height={22}
                                            />
                                          </div>
                                          <div>
                                            <h5 className="fs-4 fw-semibold">
                                              Order Confirmation
                                            </h5>
                                            <p className="mb-0">
                                              You will be notified when customer
                                              order any product
                                            </p>
                                          </div>
                                        </div>
                                        <div className="form-check form-switch mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked1"
                                            defaultChecked=""
                                          />
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center gap-3">
                                          <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                            <i
                                              className="ti ti-clock-hour-4 text-dark d-block fs-7"
                                              width={22}
                                              height={22}
                                            />
                                          </div>
                                          <div>
                                            <h5 className="fs-4 fw-semibold">
                                              Order Status Changed
                                            </h5>
                                            <p className="mb-0">
                                              You will be notified when customer
                                              make changes to the order
                                            </p>
                                          </div>
                                        </div>
                                        <div className="form-check form-switch mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked2"
                                            defaultChecked=""
                                          />
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center gap-3">
                                          <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                            <i
                                              className="ti ti-truck-delivery text-dark d-block fs-7"
                                              width={22}
                                              height={22}
                                            />
                                          </div>
                                          <div>
                                            <h5 className="fs-4 fw-semibold">
                                              Order Delivered
                                            </h5>
                                            <p className="mb-0">
                                              You will be notified once the
                                              order is delivered
                                            </p>
                                          </div>
                                        </div>
                                        <div className="form-check form-switch mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked3"
                                          />
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                          <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                            <i
                                              className="ti ti-mail text-dark d-block fs-7"
                                              width={22}
                                              height={22}
                                            />
                                          </div>
                                          <div>
                                            <h5 className="fs-4 fw-semibold">
                                              Email Notification
                                            </h5>
                                            <p className="mb-0">
                                              Turn on email notificaiton to get
                                              updates through email
                                            </p>
                                          </div>
                                        </div>
                                        <div className="form-check form-switch mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked4"
                                            defaultChecked=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-9">
                                <div className="card border shadow-none">
                                  <div className="card-body p-4">
                                    <h4 className="card-title">
                                      Date &amp; Time
                                    </h4>
                                    <p className="card-subtitle">
                                      Time zones and calendar display settings.
                                    </p>
                                    <div className="d-flex align-items-center justify-content-between mt-7">
                                      <div className="d-flex align-items-center gap-3">
                                        <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                          <i
                                            className="ti ti-clock-hour-4 text-dark d-block fs-7"
                                            width={22}
                                            height={22}
                                          />
                                        </div>
                                        <div>
                                          <p className="mb-0">Time zone</p>
                                          <h5 className="fs-4 fw-semibold">
                                            (UTC + 02:00) Athens, Bucharet
                                          </h5>
                                        </div>
                                      </div>
                                      <a
                                        className="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                                        href="javascript:void(0)"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Download">
                                        <i className="ti ti-download" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-9">
                                <div className="card border shadow-none">
                                  <div className="card-body p-4">
                                    <h4 className="card-title">
                                      Ignore Tracking
                                    </h4>
                                    <div className="d-flex align-items-center justify-content-between mt-7">
                                      <div className="d-flex align-items-center gap-3">
                                        <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                          <i
                                            className="ti ti-player-pause text-dark d-block fs-7"
                                            width={22}
                                            height={22}
                                          />
                                        </div>
                                        <div>
                                          <h5 className="fs-4 fw-semibold">
                                            Ignore Browser Tracking
                                          </h5>
                                          <p className="mb-0">Browser Cookie</p>
                                        </div>
                                      </div>
                                      <div className="form-check form-switch mb-0">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          role="switch"
                                          id="flexSwitchCheckChecked5"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="d-flex align-items-center justify-content-end gap-6">
                                  <button className="btn btn-primary mt-2">
                                    Save
                                  </button>
                                  <button className="btn bg-danger-subtle text-danger">
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-bills"
                            role="tabpanel"
                            aria-labelledby="pills-bills-tab"
                            tabIndex={0}>
                            <div className="row justify-content-center">
                              <div className="col-lg-9">
                                <div className="card border shadow-none">
                                  <div className="card-body p-4">
                                    <h4 className="card-title mb-3">
                                      Billing Information
                                    </h4>
                                    <form>
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="exampleInputtext6"
                                              className="form-label">
                                              Business Name*
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="exampleInputtext6"
                                              placeholder="Visitor Analytics"
                                            />
                                          </div>
                                          <div className="mb-3">
                                            <label
                                              htmlFor="exampleInputtext7"
                                              className="form-label">
                                              Business Address*
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="exampleInputtext7"
                                              placeholder=""
                                            />
                                          </div>
                                          <div>
                                            <label
                                              htmlFor="exampleInputtext8"
                                              className="form-label">
                                              First Name*
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="exampleInputtext8"
                                              placeholder=""
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="exampleInputtext9"
                                              className="form-label">
                                              Business Sector*
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="exampleInputtext9"
                                              placeholder="Arts, Media & Entertainment"
                                            />
                                          </div>
                                          <div className="mb-3">
                                            <label
                                              htmlFor="exampleInputtext10"
                                              className="form-label">
                                              Country*
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="exampleInputtext10"
                                              placeholder="Romania"
                                            />
                                          </div>
                                          <div>
                                            <label
                                              htmlFor="exampleInputtext11"
                                              className="form-label">
                                              Last Name*
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="exampleInputtext11"
                                              placeholder=""
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-9">
                                <div className="card border shadow-none">
                                  <div className="card-body p-4">
                                    <h4 className="card-title">
                                      Current Plan :{" "}
                                      <span className="text-success">
                                        Executive
                                      </span>
                                    </h4>
                                    <p className="card-subtitle">
                                      Thanks for being a premium member and
                                      supporting our development.
                                    </p>
                                    <div className="d-flex align-items-center justify-content-between mt-7 mb-3">
                                      <div className="d-flex align-items-center gap-3">
                                        <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                          <i
                                            className="ti ti-package text-dark d-block fs-7"
                                            width={22}
                                            height={22}
                                          />
                                        </div>
                                        <div>
                                          <p className="mb-0">Current Plan</p>
                                          <h5 className="fs-4 fw-semibold">
                                            750.000 Monthly Visits
                                          </h5>
                                        </div>
                                      </div>
                                      <a
                                        className="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                                        href="javascript:void(0)"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Add">
                                        <i className="ti ti-circle-plus" />
                                      </a>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                      <button className="btn btn-primary">
                                        Change Plan
                                      </button>
                                      <button className="btn bg-danger-subtle text-danger">
                                        Reset Plan
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-9">
                                <div className="card border shadow-none">
                                  <div className="card-body p-4">
                                    <h4 className="card-title">
                                      Payment Method
                                    </h4>
                                    <p className="card-subtitle">
                                      On 26 December, 2024
                                    </p>
                                    <div className="d-flex align-items-center justify-content-between mt-7">
                                      <div className="d-flex align-items-center gap-3">
                                        <div className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                          <i
                                            className="ti ti-credit-card text-dark d-block fs-7"
                                            width={22}
                                            height={22}
                                          />
                                        </div>
                                        <div>
                                          <h5 className="fs-4 fw-semibold">
                                            Visa
                                          </h5>
                                          <p className="mb-0 text-dark">
                                            *****2102
                                          </p>
                                        </div>
                                      </div>
                                      <a
                                        className="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                                        href="javascript:void(0)"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Edit">
                                        <i className="ti ti-pencil-minus" />
                                      </a>
                                    </div>
                                    <p className="my-2">
                                      If you updated your payment method, it
                                      will only be dislpayed here after your
                                      next billing cycle.
                                    </p>
                                    <div className="d-flex align-items-center gap-3">
                                      <button className="btn bg-danger-subtle text-danger">
                                        Cancel Subscription
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="d-flex align-items-center justify-content-end gap-6">
                                  <button className="btn btn-primary mt-2">
                                    Save
                                  </button>
                                  <button className="btn bg-danger-subtle text-danger">
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-security"
                            role="tabpanel"
                            aria-labelledby="pills-security-tab"
                            tabIndex={0}>
                            <div className="row">
                              <div className="col-lg-8">
                                <div className="card border shadow-none">
                                  <div className="card-body p-4">
                                    <h4 className="card-title mb-3">
                                      Two-factor Authentication
                                    </h4>
                                    <div className="d-flex align-items-center justify-content-between pb-7">
                                      <p className="card-subtitle mb-0">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Corporis sapiente sunt
                                        earum officiis laboriosam ut.
                                      </p>
                                      <button className="btn btn-primary">
                                        Enable
                                      </button>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between py-3 border-top">
                                      <div>
                                        <h5 className="fs-4 fw-semibold mb-0">
                                          Authentication App
                                        </h5>
                                        <p className="mb-0">Google auth app</p>
                                      </div>
                                      <button className="btn bg-primary-subtle text-primary">
                                        Setup
                                      </button>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between py-3 border-top">
                                      <div>
                                        <h5 className="fs-4 fw-semibold mb-0">
                                          Another e-mail
                                        </h5>
                                        <p className="mb-0">
                                          E-mail to send verification link
                                        </p>
                                      </div>
                                      <button className="btn bg-primary-subtle text-primary">
                                        Setup
                                      </button>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between py-3 border-top">
                                      <div>
                                        <h5 className="fs-4 fw-semibold mb-0">
                                          SMS Recovery
                                        </h5>
                                        <p className="mb-0">
                                          Your phone number or something
                                        </p>
                                      </div>
                                      <button className="btn bg-primary-subtle text-primary">
                                        Setup
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="card">
                                  <div className="card-body p-4">
                                    <div className="text-bg-light rounded-1 p-6 d-inline-flex align-items-center justify-content-center mb-3">
                                      <i
                                        className="ti ti-device-laptop text-primary d-block fs-7"
                                        width={22}
                                        height={22}
                                      />
                                    </div>
                                    <h4 className="card-title mb-0">Devices</h4>
                                    <p className="mb-3">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit Rem.
                                    </p>
                                    <button className="btn btn-primary mb-4">
                                      Sign out from all devices
                                    </button>
                                    <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                                      <div className="d-flex align-items-center gap-3">
                                        <i
                                          className="ti ti-device-mobile text-dark d-block fs-7"
                                          width={26}
                                          height={26}
                                        />
                                        <div>
                                          <h5 className="fs-4 fw-semibold mb-0">
                                            iPhone 14
                                          </h5>
                                          <p className="mb-0">
                                            London UK, Oct 23 at 1:15 AM
                                          </p>
                                        </div>
                                      </div>
                                      <a
                                        className="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                                        href="javascript:void(0)">
                                        <i className="ti ti-dots-vertical" />
                                      </a>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between py-3">
                                      <div className="d-flex align-items-center gap-3">
                                        <i
                                          className="ti ti-device-laptop text-dark d-block fs-7"
                                          width={26}
                                          height={26}
                                        />
                                        <div>
                                          <h5 className="fs-4 fw-semibold mb-0">
                                            Macbook Air
                                          </h5>
                                          <p className="mb-0">
                                            Gujarat India, Oct 24 at 3:15 AM
                                          </p>
                                        </div>
                                      </div>
                                      <a
                                        className="text-dark fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                                        href="javascript:void(0)">
                                        <i className="ti ti-dots-vertical" />
                                      </a>
                                    </div>
                                    <button className="btn bg-primary-subtle text-primary w-100 py-1">
                                      Need Help ?
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 mt-2">
                                <div className="d-flex align-items-center justify-content-end gap-6 ">
                                  <button className="btn btn-primary ">
                                    Save
                                  </button>
                                  <button className="btn bg-danger-subtle text-danger">
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Team Details */}
                <div
                  className="tab-pane fade"
                  id="pills-followers"
                  role="tabpanel"
                  aria-labelledby="pills-followers-tab"
                  tabIndex={0}>
                  <div className="d-sm-flex align-items-center justify-content-between mt-3 mb-4">
                    <AddTeam />
                  </div>
                  <TeamDetails />
                </div>
                <div
                  className="tab-pane fade"
                  id="stage-task"
                  role="tabpanel"
                  aria-labelledby="pills-followers-tab"
                  tabIndex={0}>
                  <div className="row">
                    <div className="card w-100">
                      <div className="card-body">
                        <div className="mb-4">
                          <h4 className="card-title mb-0 text-center">
                            Entrepreneurship Course Outline
                          </h4>
                        </div>
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample">
                          {sections.map((section, index) => (
                            <div className="accordion-item" key={index}>
                              <h2
                                className="accordion-header"
                                id={`flush-heading${index}`}>
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#flush-collapse${index}`}
                                  aria-expanded="false"
                                  aria-controls={`flush-collapse${index}`}>
                                  {section.title}
                                </button>
                              </h2>
                              <div
                                id={`flush-collapse${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`flush-heading${index}`}
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                  <ul>
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
                  {/* Stage Task */}
                </div>

                {/* Incorportation Details */}
                <IncorporationDetails />
                {/* Document Details */}
                <StartupDocument />
              </div>
            </div>
    </>
  );
};

export default AppProfile;
