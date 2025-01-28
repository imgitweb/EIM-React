import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "./../componant/config";
export default function UpdateTeam({ selectedTeam }) {
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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedStartupId = localStorage.getItem("user_id");
    setTeam((prev) => ({ ...prev, startup_id: storedStartupId || "" }));
  }, []);

  useEffect(() => {
    if (selectedTeam) {
      setTeam(selectedTeam); // Populate the form with selected team data
    }
  }, [selectedTeam]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setTeam({ ...team, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    console.log("Submitting payload:", team); // Debugging

    try {
      const endpoint = team._id
        ? `${API_BASE_URL}/api/team/update_team/${team._id}`
        : `${API_BASE_URL}/api/team/add_team`;

      const method = team._id ? "put" : "post";
      const response = await axios[method](endpoint, team);

      console.log("Server response:", response.data);
      setMessage(
        team._id ? "Team Updated Successfully" : "Team Added Successfully"
      );
    } catch (error) {
      console.error("Error Details:", error.toJSON());
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

  return (
    <div>
      <div className="modal" id="editteam">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                {team._id ? "Edit Team" : "Add Team"}
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>

            <div className="modal-body">
              {error && <div className="alert alert-danger">{error}</div>}
              {message && <div className="alert alert-success">{message}</div>}
              <form onSubmit={submitForm}>
                <div className="form-group">
                  <label>Member Name</label>
                  <input
                    type="text"
                    name="member_name"
                    value={team.member_name}
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
                    value={team.email}
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
                    value={team.mobile}
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
                    value={team.designation}
                    onChange={inputHandler}
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Job Type</label>
                  <select
                    name="job_type"
                    value={team.job_type}
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
                    value={team.joining_date}
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
                    value={team.salary}
                    onChange={inputHandler}
                    required
                    className="form-control"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading
                    ? team._id
                      ? "Updating..."
                      : "Adding..."
                    : team._id
                    ? "Update"
                    : "Add"}
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
