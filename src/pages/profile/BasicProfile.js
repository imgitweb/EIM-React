import React from "react";

const BasicProfile = ({
  profile,
  selectedFile,
  previewUrl,
  handleFileChange,
  handleUpload,
  handleReset,
}) => {
  return (
    <div className="row mt-3">
      {/* Profile Picture Upload */}
      <div className="col-md-6 mb-3 mx-auto">
        <div className="card p-4 border-0 rounded-2 shadow-sm text-center">
          <h6 className="fw-normal text-purple mb-1">Change Profile</h6>
          <p className="text-muted mb-3">Change your profile picture from here</p>

          <div
            className="d-flex justify-content-center align-items-center mb-3"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <img
              src={previewUrl || profile?.logo || "https://via.placeholder.com/100"}
              alt="profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="input-group mb-3">
            <input type="file" className="form-control" onChange={handleFileChange} />
          </div>

          <div className="d-flex justify-content-center gap-2 mb-2">
            <button className="btn btn-primary" onClick={handleUpload}>
              Upload
            </button>
            <button className="btn btn-outline-danger" onClick={handleReset}>
              Reset
            </button>
          </div>

          <small className="text-muted">Allowed JPG, GIF or PNG. Max size of 800K</small>
        </div>
      </div>

      {/* Profile Details */}
      <div className="col-12 col-md-6">
             <div className="card">
          <div className="card-header">
            <h3>Profile Details</h3>
          </div>
          <div className="card-body">
           <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr><th className="text-muted w-50">Startup Name</th><td>{profile?.startupName || "N/A"}</td></tr>
                <tr><th className="text-muted">Email</th><td>{profile?.email || "N/A"}</td></tr>
                <tr><th className="text-muted">Mobile</th><td>{profile?.mobile || "N/A"}</td></tr>
                <tr><th className="text-muted">Country</th><td>{profile?.country || "N/A"}</td></tr>
                <tr><th className="text-muted">Industry</th><td>{profile?.industry || "N/A"}</td></tr>
                <tr><th className="text-muted">Stage</th><td>{profile?.stage || "N/A"}</td></tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicProfile;
