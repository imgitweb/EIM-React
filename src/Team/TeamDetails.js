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
                <h4 className="card-title text-center pb-3">Team Details</h4>
                <div className="row">
                  {Array.isArray(team) &&
                    team.map((teamMember, index) => (
                      <div className="col-md-4" key={index}>
                        <div className="card">
                          <div className="card-header">
                            <div className="border mx-auto border-4 border-white d-flex align-items-center justify-content-center rounded-circle overflow-hidden round-100">
                              <img
                                src="./assets/assets/images/profile/user-1.jpg"
                                alt="modernize-img"
                                className="w-100 h-100"
                              />
                            </div>
                          </div>
                          <div className="card-body text-center">
                            <h3>{teamMember.member_name}</h3>
                            <p>{teamMember.designation}</p>
                          </div>
                          <div className="card-footer text-center">
                            <a href={`tel:${teamMember.mobile}`}>
                              <i className="fa fa-phone float-start"></i>
                            </a>
                            <a href={`mailto:${teamMember.email}`} className="">
                              <i className="fa fa-envelope"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}

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
