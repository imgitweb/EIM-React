import React, { useState, useEffect } from "react";
import API_BASE_URL from "./../../componant/config";
export default function MrrModal() {
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [startupId] = useState(localStorage.getItem("token")); // Retrieve token from localStorage
  const [message, setMessage] = useState(null); // Holds success or error message
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  useEffect(() => {
    // Populate years dynamically (last 10 years)
    const currentYear = new Date().getFullYear();
    const yearsList = [];
    for (let i = 0; i < 10; i++) {
      yearsList.push(currentYear - i);
    }
    setYears(yearsList);

    // Populate months with 3-letter abbreviations
    const monthsList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    setMonths(monthsList);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("${API_BASE_URL}/api/matrix/add_mrr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Data saved successfully!");
        setMessageType("success");
      } else {
        setMessage(`Error:${result.message}`);
        setMessageType("error");
      }
    } catch (error) {
      setMessage("An error occurred while submitting the form.");
      setMessageType("error");
    }
  };
  return (
    <div className="modal" id="MRR">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">MRR</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          {/* Modal body */}
          <div className="modal-body">
            {message && (
              <div
                className={`alert ${
                  messageType === "success" ? "alert-success" : "alert-danger"
                }`}
                role="alert"
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Startup ID */}
              <div className="form-group">
                <input
                  type="hidden"
                  name="startup_id"
                  value={startupId}
                  readOnly
                />
              </div>

              {/* Last 10 Year Select Dropdown */}
              <div className="form-group">
                <label htmlFor="last10Years">Last 10 Years</label>
                <select
                  name="year"
                  className="form-control"
                  id="last10Years"
                  required
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* 12 Month Select Dropdown */}
              <div className="form-group">
                <label htmlFor="months">12 Months</label>
                <select
                  name="month"
                  className="form-control"
                  id="months"
                  required
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* No of Customers */}
              <div className="form-group">
                <label htmlFor="numCustomers">No of Customers</label>
                <input
                  type="number"
                  className="form-control"
                  id="numCustomers"
                  name="no_customer"
                  placeholder="Enter number of customers"
                  required
                />
              </div>

              {/* ARPA */}
              <div className="form-group">
                <label htmlFor="arpa">ARPA</label>
                <input
                  type="number"
                  className="form-control"
                  id="arpa"
                  name="arpa"
                  placeholder="Enter ARPA"
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
