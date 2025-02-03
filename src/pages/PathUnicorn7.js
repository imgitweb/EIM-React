import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

const PathUnicorn7 = () => {
  const [isActive, setActive] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Product Listing");

  // Different states for each section
  const [productListing, setProductListing] = useState([]);
  const [productPricing, setProductPricing] = useState([]);
  const [clientPersona, setClientPersona] = useState([]);
  const [marketingFunnel, setMarketingFunnel] = useState([]);
  const [salesFunnel, setSalesFunnel] = useState([]);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
  });

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Function to add data to respective section
  const addData = () => {
    if (form.name && form.category && form.price) {
      const newEntry = { ...form, id: Date.now() };

      switch (selectedSection) {
        case "Product Listing":
          setProductListing([...productListing, newEntry]);
          break;
        case "Product Pricing":
          setProductPricing([...productPricing, newEntry]);
          break;
        case "Client Persona":
          setClientPersona([...clientPersona, newEntry]);
          break;
        case "Marketing Funnel":
          setMarketingFunnel([...marketingFunnel, newEntry]);
          break;
        case "Sales Funnel":
          setSalesFunnel([...salesFunnel, newEntry]);
          break;
        default:
          break;
      }

      setForm({ name: "", category: "", price: "" });
    } else {
      alert("Please fill all fields!");
    }
  };

  // Function to delete data from respective section
  const deleteData = (id) => {
    switch (selectedSection) {
      case "Product Listing":
        setProductListing(productListing.filter((item) => item.id !== id));
        break;
      case "Product Pricing":
        setProductPricing(productPricing.filter((item) => item.id !== id));
        break;
      case "Client Persona":
        setClientPersona(clientPersona.filter((item) => item.id !== id));
        break;
      case "Marketing Funnel":
        setMarketingFunnel(marketingFunnel.filter((item) => item.id !== id));
        break;
      case "Sales Funnel":
        setSalesFunnel(salesFunnel.filter((item) => item.id !== id));
        break;
      default:
        break;
    }
  };

  const menuItems = [
    "Product Listing",
    "Product Pricing",
    "Client Persona",
    "Marketing Funnel",
    "Sales Funnel",
  ];

  // Get the correct data array for the selected section
  const getCurrentData = () => {
    switch (selectedSection) {
      case "Product Listing":
        return productListing;
      case "Product Pricing":
        return productPricing;
      case "Client Persona":
        return clientPersona;
      case "Marketing Funnel":
        return marketingFunnel;
      case "Sales Funnel":
        return salesFunnel;
      default:
        return [];
    }
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
                      <h4 className="fw-semibold mb-8">IM Mentor Club</h4>
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
                            IM Mentor Club
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
              <div className="card">
                <div className="row">
                  <div style={styles.container} className="col-md-2 col-12">
                    {/* Sidebar */}
                    <div style={styles.sidebar}>
                      <h3 style={styles.sidebarTitle}>Sales Funnel</h3>
                      <ul style={styles.menu}>
                        {menuItems.map((item, index) => (
                          <li
                            key={index}
                            style={{
                              ...styles.menuItem,
                              fontWeight:
                                selectedSection === item ? "bold" : "normal",
                              textDecoration:
                                selectedSection === item ? "underline" : "none",
                            }}
                            onClick={() => setSelectedSection(item)}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Main Content - Each Section has its own form & table */}
                  <div
                    style={styles.mainContent}
                    className="overflow-x-auto whitespace-nowrap">
                    <h1 style={styles.title}>
                      <span style={styles.highlight}>
                        {selectedSection.toUpperCase()}
                      </span>
                      <Link
                        to="/path-unicorn"
                        className="text-end btn btn-lg bg-default"
                        style={{
                          backgroundColor: "#223662",
                          color: "white",
                        }}>
                        ← Back
                      </Link>
                    </h1>

                    {/* Input Form */}
                    <div className="overflow-x-auto whitespace-nowrap">
                      <form style={styles.form}>
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
                        <button onClick={addData} style={styles.saveButton}>
                          Save
                        </button>
                      </form>
                    </div>
                    {/* Table */}
                    <div
                      style={styles.tableContainer}
                      className="table-responsive">
                      <table style={styles.table}>
                        <thead>
                          <tr>
                            {[
                              "S.No.",
                              "Name",
                              "Category",
                              "Price",
                              "Action",
                            ].map((header, index) => (
                              <th key={index} style={styles.tableHeader}>
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {getCurrentData().map((item, index) => (
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

const styles = {
  container: {
    display: "flex",
    height: "60vh",
    color: "#FFFFFF",
  },
  sidebar: {
    width: "100%",
    backgroundColor: "#223662",
    padding: "20px",
    borderRadius: "5px",
  },
  sidebarTitle: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  menu: {
    listStyle: "none",
    padding: 0,
  },
  menuItem: {
    marginBottom: "10px",
    color: "#FFFFFF",
    cursor: "pointer",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  title: {
    display: "flex",
    justifyContent: "space-between", // Pushes elements to both ends
    alignItems: "center", // Aligns items vertically
    fontSize: "28px",
    marginBottom: "20px",
    width: "100%", // Ensures full width
  },
  highlight: {
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  inputField: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#223662",
    color: "#FFFFFF",
  },
  saveButton: {
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
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "2px solid #FFFFFF",
  },
  tableData: {
    padding: "10px",
    borderBottom: "1px solid #FFFFFF",
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

export default PathUnicorn7;
