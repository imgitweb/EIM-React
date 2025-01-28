import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

const PathUnicorn7 = () => {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
  // State to manage products and form inputs
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add product to the table
  const addProduct = () => {
    if (form.name && form.category && form.price) {
      setProducts([
        ...products,
        { ...form, id: products.length + 1 }, // Auto-generate ID
      ]);
      setForm({ name: "", category: "", price: "" }); // Reset form
    } else {
      alert("Please fill all fields!");
    }
  };

  // Delete a product from the list
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        {/* Sidebar Start */}
        <LeftSidebar onButtonClick={ToggleEvent} />
        {/*  Sidebar End */}
        <div className="page-wrapper">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid">
              {/* Header */}
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
                <div style={styles.container}>
                  {/* Sidebar */}
                  <div style={styles.sidebar}>
                    <h3 style={styles.sidebarTitle}>Sales Funnel</h3>
                    <ul style={styles.menu}>
                      {[
                        "Product Listing",
                        "Product Pricing",
                        "Client Persona",
                        "Marketing Funnel",
                        "Sales Funnel",
                      ].map((item, index) => (
                        <li key={index} style={styles.menuItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Main Content */}
                  <div style={styles.mainContent}>
                    <h1 style={styles.title}>
                      <span style={styles.highlight}>PRODUCT</span> LISTING
                    </h1>

                    {/* Input Form */}
                    <div style={styles.form}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={form.name}
                        onChange={handleInputChange}
                        style={styles.inputField}
                      />
                      <input
                        type="text"
                        name="category"
                        placeholder="Product Category"
                        value={form.category}
                        onChange={handleInputChange}
                        style={styles.inputField}
                      />
                      <input
                        type="text"
                        name="price"
                        placeholder="Product Price (Approx)"
                        value={form.price}
                        onChange={handleInputChange}
                        style={styles.inputField}
                      />
                      <button onClick={addProduct} style={styles.saveButton}>
                        Save
                      </button>
                    </div>

                    {/* Table */}
                    <div style={styles.tableContainer}>
                      <table style={styles.table}>
                        <thead>
                          <tr>
                            {[
                              "S.No.",
                              "Product Name",
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
                          {products.map((product, index) => (
                            <tr key={product.id}>
                              <td style={styles.tableData}>{index + 1}</td>
                              <td style={styles.tableData}>{product.name}</td>
                              <td style={styles.tableData}>
                                {product.category}
                              </td>
                              <td style={styles.tableData}>{product.price}</td>
                              <td style={styles.tableData}>
                                <button
                                  onClick={() => deleteProduct(product.id)}
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
    width: "250px",
    backgroundColor: "#000000",
    padding: "20px",
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
    color: "#FFD700",
    cursor: "pointer",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  highlight: {
    color: "#FFA500",
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
    backgroundColor: "#FFD700",
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
