import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "./../componant/config";
export default function StartupDocument() {
  const [startupDoc, setStartupDoc] = useState("");
  const [startupId, setStartupId] = useState("");
  const [companyRegistration, setCompanyRegistration] = useState(null);
  const [aadharCard, setAadharCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [dpiit, setDpiit] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Automatically retrieve startupId from localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setStartupId(token);
    } else {
      setError("Token not found in localStorage. Please log in.");
    }
  }, []);

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsLoading(true);

    if (!startupId) {
      setError("Startup ID is missing. Please log in.");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("startup_id", startupId);
    if (companyRegistration)
      formData.append("company_registration", companyRegistration);
    if (aadharCard) formData.append("aadhar_card", aadharCard);
    if (panCard) formData.append("pan_card", panCard);
    if (dpiit) formData.append("dpiit", dpiit);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/document/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("Files uploaded successfully.");
      setError("");
    } catch (error) {
      console.error("Error uploading files:", error);
      setError("Failed to upload files. Please try again.");
      setMessage("");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startup_id = localStorage.getItem("userId");
        const response = await axios.get(
          `${API_BASE_URL}/api/document/get_document/${startup_id}`
        );
        console.log(response.data); // Log to inspect the response
        // Ensure the response is an array before setting it
        if (Array.isArray(response.data)) {
          setStartupDoc(response.data);
        } else {
          setStartupDoc([response.data]); // If it's not an array, wrap it in an array
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="tab-pane fade"
      id="pills-gallery"
      role="tabpanel"
      aria-labelledby="pills-gallery-tab"
      tabIndex={0}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
              <h3 className="mb-4">Upload Company Files</h3>

              {message && <div className="alert alert-success">{message}</div>}
              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="startupId" className="form-label">
                    Startup ID
                  </label>
                  <input
                    type="text"
                    id="startupId"
                    className="form-control"
                    value={startupId}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="companyRegistration" className="form-label">
                    Company Registration
                  </label>
                  <input
                    type="file"
                    id="companyRegistration"
                    className="form-control"
                    onChange={(e) =>
                      handleFileChange(e, setCompanyRegistration)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="aadharCard" className="form-label">
                    Aadhar Card
                  </label>
                  <input
                    type="file"
                    id="aadharCard"
                    className="form-control"
                    onChange={(e) => handleFileChange(e, setAadharCard)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="panCard" className="form-label">
                    PAN Card
                  </label>
                  <input
                    type="file"
                    id="panCard"
                    className="form-control"
                    onChange={(e) => handleFileChange(e, setPanCard)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="dpiit" className="form-label">
                    DPIIT Certificate
                  </label>
                  <input
                    type="file"
                    id="dpiit"
                    className="form-control"
                    onChange={(e) => handleFileChange(e, setDpiit)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? "Uploading..." : "Upload"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {Array.isArray(startupDoc) && startupDoc.length > 0 ? (
            startupDoc.map((documentData, index) => (
              <table className="table table-bordered" key={index}>
                <tr>
                  <td>Company Registration</td>
                  <td>
                    <button className="btn btn-warning">
                      <i className="fa fa-download"> </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Aadhar Card</td>
                  <td>
                    <button className="btn btn-warning">
                      <i className="fa fa-download"> </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>PAN Card</td>
                  <td>
                    {" "}
                    <button className="btn btn-warning">
                      <i className="fa fa-download"> </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>DPIIT</td>
                  <td>
                    {" "}
                    <button className="btn btn-warning">
                      <i className="fa fa-download"> </i>
                    </button>
                  </td>
                </tr>
              </table>
            ))
          ) : (
            <p>No documents available.</p> // Message when no data is available
          )}
        </div>
      </div>
    </div>
  );
}
