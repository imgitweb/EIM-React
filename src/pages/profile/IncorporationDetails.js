import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../../componant/config";

export default function IncorporationDetails({ activeTab }) {
  const [info, setInfo] = useState([]);
  const [company, setCompany] = useState({
    company_name: "",
    company_type: "",
    reg_number: "",
    founding_date: "",
    startup_id: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/company/add_company`,
        company
      );
      console.log("Company Saved Successfully:", response.data);
      setMessage("Company Saved Successfully");

      // Refresh the data
      fetchData();
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Unknown server error");
      } else if (error.request) {
        setError("No response received from the server.");
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const startup_id = localStorage.getItem("userId");
      console.log("Fetching data for startup_id:", startup_id);
      const response = await axios.get(
        `${API_BASE_URL}/api/company/get_company/${startup_id}`
      );
      console.log(response.data);
      setInfo(response.data);
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (activeTab !== "incorporation") return null;

  return (
    <div className="row mt-3">
      {/* Form Section */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>Company Details</h3>
          </div>
          <div className="card-body">
            {error && <div className="alert alert-danger">{error}</div>}
            {message && <div className="alert alert-success">{message}</div>}
            <form onSubmit={submitForm}>
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="company_name"
                  onChange={inputHandler}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-1">
                <label>Company Type</label>
                <input
                  type="text"
                  name="company_type"
                  className="form-control"
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group mt-1">
                <label>Reg No</label>
                <input
                  type="text"
                  name="reg_number"
                  className="form-control"
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group mt-1">
                <label>Date of Incorporation</label>
                <input
                  type="text"
                  name="founding_date"
                  className="form-control"
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group mt-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Display Section */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>Incorporation Details</h3>
          </div>
          <div className="card-body">
            {Object.values(info).length > 0 ? (
              Object.values(info).map((infoDetails, index) => (
                <div className="table-responsive" key={index}>
                  <table className="table table-bordered">
                    <tbody>
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
                    </tbody>
                  </table>
                </div>
              ))
            ) : (
              <p className="text-muted">No incorporation data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
