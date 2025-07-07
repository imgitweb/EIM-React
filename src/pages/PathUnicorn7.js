import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import Sidebar from "./Sidebar";
import { useTheme } from "../context/ThemeContext";

const PathUnicorn7 = () => {
  const [isActive, setActive] = useState(false);
  const [form, setForm] = useState({ name: "", category: "", price: "" });
  const [productListing, setProductListing] = useState([]);
    const { theme,} = useTheme(); 
  

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addData = () => {
    if (form.name && form.category && form.price) {
      const newEntry = { ...form, id: Date.now() };
      setProductListing([...productListing, newEntry]);
      setForm({ name: "", category: "", price: "" });
    } else {
      alert("Please fill all fields!");
    }
  };

  const deleteData = (id) => {
    setProductListing(productListing.filter((item) => item.id !== id));
  };
  const styles = {
  sidebarContainer:{
    height: "100%",
    minHeight: "100vh",
  },
  card: {
    height: "100%",
    minHeight: "100vh",
  },

  mainContent: {
    flex: 1,
    padding: "20px",
    height: "100%",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
    justifyContent: "space-between",
  },
  inputField: {
    // flex: "1",
    // minWidth: "140px",
    // padding: "10px",
    // borderRadius: "5px",
    // // border: "none",
    // backgroundColor: "#202936",
    // color: "#FFFFFF",
  },
  saveButton: {
    flex: "1 1 100%",
    padding: "10px 20px",
    backgroundColor: theme === "dark" ? "#4F73D9" : "#F5F5F5",
    color: theme === "dark" ? "#FFFFFF" : "#000000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  tableContainer: {
    // backgroundColor: theme === "dark" ? "#202936" : "#223662",
    // color: theme === "dark" ? "#FFFFFF" : "#000000",
    // padding: "20px",
    borderRadius: "6px",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "600px",
  },
  tableHeader: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "2px solid #FFFFFF",
    color:  theme === "dark" ? "#FFFFFF" : "#000000",
    backgroundColor: theme === "dark" ? "#4F73D9" : "#F5F5F5",
  },
  tableData: {
    padding: "10px",
    borderBottom: "1px solid #FFFFFF",
    color: "#FFFFFF",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#EF5350",
    border: "none",
    borderRadius: "5px",
    color: "#FFFFFF",
    cursor: "pointer",
  },
};

  return (
<>
  <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
    <LeftSidebar onButtonClick={ToggleEvent} />

    <div className="page-wrapper">
      <Navigation onButtonClick={ToggleEvent} />

      <div className="body-wrapper">
        <div className="container-fluid">
          {/* Header */}
          <div className="card bg-info-subtle shadow-none mb-4">
            <div className="card-body px-4 py-3">
              <div className="row align-items-center">
                <div className="col-md-9 col-12">
                  <h4 className="fw-semibold mb-2">PRODUCT LISTING</h4>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a className="text-muted text-decoration-none" href="../dark/index.html">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        PRODUCT LISTING
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="col-md-3 col-12 text-center mt-3 mt-md-0">
                  <img
                    src="./assets/assets/images/breadcrumb/ChatBc.png"
                    alt="breadcrumb"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Layout */}
          <div className="card p-3">
            <div className="row">
              {/* Sidebar - visible on all devices now */}
              <div className="col-lg-3 col-md-4 col-12 mb-3 mb-md-0">
                <Sidebar
                  style={styles.sidebarContainer}
                  selectedSection="Product Listing"
                  setSelectedSection={() => {}}
                />
              </div>

              {/* Main Content */}
              <div className="col-lg-9 col-md-8 col-12 px-3">
                {/* Heading and Back Button */}
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                  <h1 className="fw-bold fs-4 mb-2 mb-md-0">PRODUCT LISTING</h1>
                  <Link
                    to="/salesfunnel"
                    className="btn btn-outline-primary btn-sm">
                    ← Back
                  </Link>
                </div>

                {/* Input Form */}
                <form className="row g-3">
                  <div className="col-md-4 col-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <input
                      type="text"
                      name="category"
                      placeholder="Category"
                      value={form.category}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <input
                      type="text"
                      name="price"
                      placeholder="Price"
                      value={form.price}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 text-end">
                    <button
                      type="button"
                      onClick={addData}
                      className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>

                {/* Product Listing Table */}
                <div className="table-responsive mt-4">
                  <table className="table table-bordered">
                    <thead className="table-light">
                      <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productListing.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.category}</td>
                          <td>{item.price}</td>
                          <td>
                            <button
                              onClick={() => deleteData(item.id)}
                              className="btn btn-danger btn-sm">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <SerchBar />
  </div>

  <div className="dark-transparent sidebartoggler" />
</>


  );
};

// Styles


// Mobile Styling
const mobileStyle = `
  @media (max-width: 768px) {
    .form-container {
      flex-direction: column;
      gap: 10px;
    }
    .table-container {
      overflow-x: auto;
      max-width: 100%;
    }
    table {
      min-width: 600px;
    }
  }
`;
const styleElement = document.createElement("style");
styleElement.innerHTML = mobileStyle;
document.head.appendChild(styleElement);

export default PathUnicorn7;
