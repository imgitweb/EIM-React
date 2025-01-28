import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net-dt";
import axios from "axios";
import UpdateTeam from "./UpdateTeam";
import API_BASE_URL from "./../componant/config";

export default function TeamDetails() {
  const tableRef = useRef(null);
  const [team, setTeam] = useState([]); // State to hold team data
  const [selectedTeam, setSelectedTeam] = useState(null); // State for the selected team member

  // Function to initialize the DataTable
  const initializeDataTable = () => {
    const tableElement = $(tableRef.current);
    if ($.fn.DataTable.isDataTable(tableElement)) {
      tableElement.DataTable().destroy(); // Destroy existing instance to prevent duplication
    }
    tableElement.DataTable({
      paging: true,
      searching: true,
      ordering: true,
    });
  };

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const startup_id = localStorage.getItem("token"); // Retrieve startup_id from localStorage
        const response = await axios.get(
          `${API_BASE_URL}/api/team/get_team/${startup_id}`
        );
        // Ensure the response is an array
        const teamData = Array.isArray(response.data) ? response.data : [];
        setTeam(teamData);
      } catch (error) {
        console.error("Error while fetching data:", error);
        setTeam([]); // Fallback to an empty array in case of an error
      }
    };
    fetchData();
  }, []);

  // Reinitialize the DataTable whenever the team data changes
  useEffect(() => {
    if (team.length > 0) {
      initializeDataTable(); // Initialize DataTable only after data is loaded
    }
  }, [team]);

  // Handle edit button click
  const handleEditClick = (teamMember) => {
    setSelectedTeam(teamMember); // Set the selected team member for editing
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="datatables">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Team Details</h4>
                <div className="table-responsive">
                  <table
                    ref={tableRef}
                    className="table table-striped table-bordered display text-nowrap"
                  >
                    <thead>
                      <tr>
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Job Type</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Joining Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(team) &&
                        team.map((teamMember, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{teamMember.member_name}</td>
                            <td>{teamMember.email}</td>
                            <td>{teamMember.mobile}</td>
                            <td>{teamMember.job_type}</td>
                            <td>{teamMember.designation}</td>
                            <td>{teamMember.salary}</td>
                            <td>{teamMember.joining_date}</td>
                            <td>
                              <button
                                data-bs-toggle="modal"
                                data-bs-target="#editteam"
                                className="btn btn-warning"
                                onClick={() => handleEditClick(teamMember)}
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  {selectedTeam && <UpdateTeam selectedTeam={selectedTeam} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
