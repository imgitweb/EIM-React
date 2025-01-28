import React from "react";
import MrrModal from "./matrix_modal/MrrModal";
import MrrListModal from "./matrix_list/MrrListModal";

export default function Mrr() {
  return (
    <div className="col-md-3">
      <div className="card text-center">
        <div className="card-header">
          <h1>
            <i className="bi-currency-rupee"></i>
          </h1>
          <h3>MRR</h3>
        </div>
        <div className="card-body">
          <p>Monthly Recurring Value</p>
          <button
            className="float-start btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#MRR"
          >
            +
          </button>
          <button
            className="float-end btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#MRRList"
          >
            List
          </button>
        </div>
      </div>
      <MrrModal />
      <MrrListModal />
    </div>
  );
}
