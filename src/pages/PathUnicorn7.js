import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import Sidebar from "./Sidebar";

const PathUnicorn7 = () => {
  const [isActive, setActive] = useState(false);
  const [form, setForm] = useState({ name: "", category: "", price: "" });
  const [productListing, setProductListing] = useState([]);

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

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        <LeftSidebar onButtonClick={ToggleEvent} />
        <div className="page-wrapper">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid">
              <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
                <div className="card-body px-4 py-3">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h4 className="fw-semibold mb-8">PRODUCT LISTING</h4>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a
                              className="text-muted text-decoration-none"
                              href="../dark/index.html">
                              Home
                            </a>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            PRODUCT LISTING
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-3">
                      <div className="text-center mb-n5">
                        <img
                          src="./assets/assets/images/breadcrumb/ChatBc.png"
                          alt="modernize-img"
                          className="img-fluid mb-n4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layout */}
              <div className="card" style={styles.card}>
                <div className="row">
                  {/* Sidebar Component */}
                  <div className="col-md-2 col-12">
                    <Sidebar
                      selectedSection="Product Listing"
                      setSelectedSection={() => {}}
                    />
                  </div>

                  {/* Main Content */}
                  <div style={styles.mainContent} className="col-md-6 col-12">
                    <h1
                      style={{
                        display: "flex",
                        justifyContent: "space-between", // Pushes elements to both ends
                        alignItems: "center", // Aligns items vertically
                        fontSize: "28px",
                        marginBottom: "20px",
                        marginTop: "10px",

                        width: "100%", // Ensures full width
                      }}>
                      <span
                        style={{
                          fontWeight: "bold", // Highlighted text styling
                          // color: "#223662", // Adjust the color as needed
                        }}>
                        PRODUCT LISTING
                      </span>
                      <Link
                        to="/salesfunnel"
                        className="text-end btn btn-lg bg-default"
                        style={{
                          backgroundColor: "#223662",
                          color: "white",
                          padding: "10px 20px",
                          borderRadius: "5px",
                          textDecoration: "none",
                          fontSize: "16px",
                        }}>
                        ← Back
                      </Link>
                    </h1>

                    {/* Input Form */}
                    <form style={styles.form} className="form-container">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleInputChange}
                        style={styles.inputField}
                      />
                      <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={form.category}
                        onChange={handleInputChange}
                        style={styles.inputField}
                      />
                      <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        value={form.price}
                        onChange={handleInputChange}
                        style={styles.inputField}
                      />
                      <button
                        onClick={addData}
                        type="button"
                        style={styles.saveButton}>
                        Save
                      </button>
                    </form>

                    {/* Product Listing Table */}
                    <div
                      style={styles.tableContainer}
                      className="table-container">
                      <table style={styles.table}>
                        <thead>
                          <tr>
                            <th style={styles.tableHeader}>S.No.</th>
                            <th style={styles.tableHeader}>Name</th>
                            <th style={styles.tableHeader}>Category</th>
                            <th style={styles.tableHeader}>Price</th>
                            <th style={styles.tableHeader}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productListing.map((item, index) => (
                            <tr key={item.id}>
                              <td style={styles.tableData}>{index + 1}</td>
                              <td style={styles.tableData}>{item.name}</td>
                              <td style={styles.tableData}>{item.category}</td>
                              <td style={styles.tableData}>{item.price}</td>
                              <td style={styles.tableData}>
                                <button
                                  onClick={() => deleteData(item.id)}
                                  style={styles.deleteButton}>
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
const styles = {
  card: {
    height: "100%",
  },

  mainContent: {
    flex: 1,
    padding: "20px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
    justifyContent: "space-between",
  },
  inputField: {
    flex: "1",
    minWidth: "140px",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#223662",
    color: "#FFFFFF",
  },
  saveButton: {
    flex: "1 1 100%",
    padding: "10px 20px",
    backgroundColor: "#4F73D9",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  tableContainer: {
    backgroundColor: "#223662",
    padding: "20px",
    borderRadius: "10px",
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
    color: "#FFFFFF",
    backgroundColor: "#223662",
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
