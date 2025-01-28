import React from "react";

export default function Gr() {
  return (
    <div className="col-md-3">
      <div className="card text-center">
        <div className="card-header">
          <h1>
            <i className="bi-currency-rupee"></i>
          </h1>
          <h3>Gross Revenue</h3>
        </div>
        <div className="card-body">
          <p>Gross Revenue</p>
          <button className="float-start btn btn-success">+</button>
          <button className="float-end btn btn-warning">List</button>
        </div>
      </div>
    </div>
  );
}
