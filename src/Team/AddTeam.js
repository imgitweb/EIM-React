import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "./../componant/config";

export default function AddTeam() {
  const [team, setTeam] = useState({
    member_name: "",
    email: "",
    mobile: "",
    designation: "",
    job_type: "",
    joining_date: "",
    salary: "",
    startup_id: "",
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message state
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedStartupId = localStorage.getItem("userId");
    setTeam((prev) => ({ ...prev, startup_id: storedStartupId || "" }));
  }, []);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setTeam({ ...team, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts
    setError(""); // Clear any previous errors

    try {
      const response = await axios.post(`${API_BASE_URL}/api/team/add_team`, {
        member_name: team.member_name,
        email: team.email,
        mobile: team.mobile,
        designation: team.designation,
        job_type: team.job_type,
        joining_date: team.joining_date,
        salary: team.salary,
        startup_id: team.startup_id,
      });
      console.log("Team Saved Successfully:", response.data);
      setMessage("Team Saved Successfully");
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

  return (
    <div>
      <button
        id="add-list"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addTeam"
      >
        Add Team Member
      </button>

      <div className="modal" id="addTeam">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Team</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>

            <div className="modal-body">
              {error && <div className="alert alert-danger">{error}</div>}{" "}
              {message && <div className="alert alert-success">{message}</div>}{" "}
              {/* Success message */}
              {/* Display error */}
              <form onSubmit={submitForm}>
                <div className="form-group">
                  <input
                    type="hidden"
                  
                    name="startup_id"
                    value={team.startup_id}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Member Name</label>
                  <input
                    type="text"
                    name="member_name"
                    onChange={inputHandler}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={inputHandler}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    onChange={inputHandler}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Designation</label>
                  <input
                    type="text"
                    name="designation"
                    onChange={inputHandler}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Job Type</label>
                  <select
                    name="job_type"
                    onChange={inputHandler}
                    required
                    className="form-control"
                  >
                    <option value="">Select Job Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Joining Date</label>
                  <input
                    type="date"
                    name="joining_date"
                    onChange={inputHandler}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Salary</label>
                  <input
                    type="number"
                    name="salary"
                    onChange={inputHandler}
                    required
                    className="form-control"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? "Adding..." : "Add Team Member"}
                </button>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
