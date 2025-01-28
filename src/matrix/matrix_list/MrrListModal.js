import React, { useState, useEffect } from "react";
import API_BASE_URL from "./../../componant/config";
export default function MrrListModal() {
  const [mrrData, setMrrData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const startupId = localStorage.getItem("token"); // Retrieve the startup_id

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/matrix/get_mrr/${startupId}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setMrrData(data);
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
  return (
    <div className="modal" id="MRRList">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">MRR List</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          {/* Modal body */}
          <div className="modal-body">
            {mrrData.length > 0 ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Month</th>
                    <th>No of Customers</th>
                    <th>ARPA</th>
                  </tr>
                </thead>
                <tbody>
                  {mrrData.map((entry) => (
                    <tr key={`${entry.year}-${entry.month}`}>
                      <td>{entry.year}</td>
                      <td>{entry.month}</td>
                      <td>{entry.no_customer}</td>
                      <td>{entry.arpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="alert alert-warning">
                No data available for this startup.
              </div>
            )}
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
