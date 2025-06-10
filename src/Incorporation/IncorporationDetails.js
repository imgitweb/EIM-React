import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "./../componant/config";
export default function IncorporationDetails() {
  const [info, setInfo] = useState([]);
  const [company, setCompany] = useState({
    company_name: "",
    company_type: "",
    reg_number: "",
    founding_date: "",
    startup_id: "",
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message state
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedStartupId = localStorage.getItem("userId");
    setCompany((prev) => ({ ...prev, startup_id: storedStartupId || "" }));
  }, []);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts
    setError(""); // Clear any previous errors

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/company/add_company`,
        {
          company_name: company.company_name,
          company_type: company.company_type,
          reg_number: company.reg_number,
          founding_date: company.founding_date,
          startup_id: company.startup_id,
        }
        
      );
      console.log("Company Saved Successfully:", response.data);
      setMessage("Company Saved Successfully");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Unknown server error");
      } else if (error.request) {
        setError("No response received from the server.");
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startup_id = localStorage.getItem("userId");
        console.log("Fetching data for startup_id:", startup_id);
        const response = await axios.get(
          `${API_BASE_URL}/api/company/get_company/${startup_id}`
        );
        console.log(response.data);
        setInfo(response.data); // Update the state with fetched data
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="tab-pane fade"
      id="pills-friends"
      role="tabpanel"
      aria-labelledby="pills-friends-tab"
      tabIndex={0}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Company Details</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}{" "}
              {message && <div className="alert alert-success">{message}</div>}{" "}
              <form method="post" onSubmit={submitForm}>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="company_name"
                    onChange={inputHandler}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Company Type</label>
                  <input
                    type="text"
                    name="company_type"
                    className="form-control"
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Reg No</label>
                  <input
                    type="text"
                    name="reg_number"
                    className="form-control"
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Date of Incorporation</label>
                  <input
                    type="text"
                    name="founding_date"
                    className="form-control"
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? "Adding..." : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Incorporation Details</h3>
            </div>
            <div className="card-body">
              {Object.values(info).map((infoDetails, index) => (
                <table class="table table-bordered" key={index}>
                  <tr>
                    <td>Company Name</td>
                    <td>{infoDetails.company_name}</td>
                  </tr>
                  <tr>
                    <td>Company Type</td>
                    <td>{infoDetails.company_type}</td>
                  </tr>
                  <tr>
                    <td>Registration Number</td>
                    <td>{infoDetails.reg_number}</td>
                  </tr>
                  <tr>
                    <td>Incorporation Date</td>
                    <td>{infoDetails.founding_date}</td>
                  </tr>
                </table>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
