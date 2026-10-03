import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



function Service() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [showBook, setShowBook] = useState(false);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    customerName: "",
    mobile: "",
    deviceType: "",
    deviceName: "",
    address: "",
    entryDate: "",
    advance: ""
  });

  const stockData = [
    {
      deviceNo: "DEV001",
      deviceName: "iPhone 14",
      deviceType: "Mobile",
      status: "In Service",
      process: "Display replacement"
    },
    {
      deviceNo: "DEV002",
      deviceName: "Dell Inspiron",
      deviceType: "Laptop",
      status: "Waiting",
      process: "Keyboard replacement"
    },
    {
      deviceNo: "DEV003",
      deviceName: "Samsung S23",
      deviceType: "Mobile",
      status: "Ready",
      process: "Software update"
    },
    {
      deviceNo: "DEV004",
      deviceName: "HP Pavilion",
      deviceType: "Laptop",
      status: "In Service",
      process: "Motherboard checking"
    }
  ];

  const serviceData = [
    {
      deviceNo: "DEV001",
      deviceName: "iPhone 14",
      components: "Display",
      price: "₹12,500"
    },
    {
      deviceNo: "DEV002",
      deviceName: "Dell Inspiron",
      components: "Keyboard",
      price: "₹3,500"
    },
    {
      deviceNo: "DEV003",
      deviceName: "Samsung S23",
      components: "Software Service",
      price: "₹1,000"
    }
  ];

  const filteredStock = stockData.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const filteredService = serviceData.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleBook = (e) => {
    e.preventDefault();

    if (
      !form.customerName ||
      !form.mobile ||
      !form.deviceType ||
      !form.deviceName ||
      !form.address ||
      !form.entryDate
    ) {
      alert("Please fill all required fields.");
      return;
    }

    alert("Device booking completed successfully!");

    setForm({
      customerName: "",
      mobile: "",
      deviceType: "",
      deviceName: "",
      address: "",
      entryDate: "",
      advance: ""
    });

    setShowBook(false);
  };

  const menuItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: "bi-speedometer2"
    },
    {
      id: "entry",
      name: "Entry",
      icon: "bi-person-plus"
    },
    {
      id: "stock",
      name: "Stock List",
      icon: "bi-box-seam"
    },
    {
      id: "service",
      name: "Service",
      icon: "bi-tools"
    },
    {
      id: "sale",
      name: "Sale",
      icon: "bi-cart-check"
    }
  ];

  return (
    <div className="app-container">

      {/* Sidebar */}

      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">
            <i className="bi bi-tools"></i>
          </div>

          <div>
            <h5>DeviceCare</h5>
            <small>Service Center</small>
          </div>
        </div>

        <div className="menu-title">
          MAIN MENU
        </div>

        <nav>

          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${
                activeMenu === item.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveMenu(item.id);
                setSearch("");
              }}
            >
              <i className={`bi ${item.icon}`}></i>
              <span>{item.name}</span>
            </button>
          ))}

        </nav>

        <div className="sidebar-bottom">

          <div className="support-box">
            <i className="bi bi-headset"></i>

            <div>
              <strong>Need Help?</strong>
              <small>Contact Service Team</small>
            </div>
          </div>

        </div>

      </aside>

      {/* Main */}

      <main className="main-content">

        {/* Top Navbar */}

        <header className="topbar">

          <div>
            <h4>
              {menuItems.find(
                (item) => item.id === activeMenu
              )?.name || "Dashboard"}
            </h4>

            <p>
              Device Service Center Management
            </p>
          </div>

          <div className="top-actions">

            <button className="notification-btn">
              <i className="bi bi-bell"></i>
              <span></span>
            </button>

            <div className="user-profile">

              <div className="user-avatar">
                A
              </div>

              <div>
                <strong>Admin</strong>
                <small>Service Manager</small>
              </div>

            </div>

          </div>

        </header>

        {/* Dashboard */}

        {activeMenu === "dashboard" && (

          <section className="page-content">

            <div className="welcome-box">

              <div>

                <span>Welcome back 👋</span>

                <h2>
                  Device Service Center
                </h2>

                <p>
                  Manage customers, devices, services and sales from one place.
                </p>

              </div>

              <button
                className="btn book-main-btn"
                onClick={() => setShowBook(true)}
              >
                <i className="bi bi-plus-circle"></i>
                Book Device
              </button>

            </div>

            <div className="stats-grid">

              <div className="stat-card">

                <div className="stat-icon blue">
                  <i className="bi bi-phone"></i>
                </div>

                <div>
                  <span>Total Devices</span>
                  <h3>128</h3>
                  <small>+12 this month</small>
                </div>

              </div>

              <div className="stat-card">

                <div className="stat-icon orange">
                  <i className="bi bi-tools"></i>
                </div>

                <div>
                  <span>In Service</span>
                  <h3>24</h3>
                  <small>8 awaiting parts</small>
                </div>

              </div>

              <div className="stat-card">

                <div className="stat-icon green">
                  <i className="bi bi-check-circle"></i>
                </div>

                <div>
                  <span>Ready Devices</span>
                  <h3>36</h3>
                  <small>Ready for delivery</small>
                </div>

              </div>

              <div className="stat-card">

                <div className="stat-icon purple">
                  <i className="bi bi-currency-rupee"></i>
                </div>

                <div>
                  <span>Today's Sales</span>
                  <h3>₹24,850</h3>
                  <small>+8.4% today</small>
                </div>

              </div>

            </div>

            <div className="dashboard-grid">

              <div className="content-card">

                <div className="card-header-custom">

                  <div>
                    <h5>Recent Devices</h5>
                    <small>Latest service entries</small>
                  </div>

                  <button
                    className="view-btn"
                    onClick={() => setActiveMenu("stock")}
                  >
                    View All
                  </button>

                </div>

                <div className="table-responsive">

                  <table className="table custom-table">

                    <thead>

                      <tr>
                        <th>Device No</th>
                        <th>Device</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>

                    </thead>

                    <tbody>

                      {stockData.slice(0, 3).map((item) => (

                        <tr key={item.deviceNo}>

                          <td>
                            <strong>{item.deviceNo}</strong>
                          </td>

                          <td>{item.deviceName}</td>

                          <td>{item.deviceType}</td>

                          <td>
                            <span className={`status ${item.status
                              .toLowerCase()
                              .replace(" ", "-")}`}>
                              {item.status}
                            </span>
                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              </div>

              <div className="content-card">

                <div className="card-header-custom">

                  <div>
                    <h5>Quick Actions</h5>
                    <small>Common operations</small>
                  </div>

                </div>

                <div className="quick-actions">

                  <button
                    onClick={() => setActiveMenu("entry")}
                  >
                    <i className="bi bi-person-plus"></i>
                    <span>New Entry</span>
                  </button>

                  <button
                    onClick={() => setActiveMenu("stock")}
                  >
                    <i className="bi bi-box-seam"></i>
                    <span>Stock List</span>
                  </button>

                  <button
                    onClick={() => setActiveMenu("service")}
                  >
                    <i className="bi bi-tools"></i>
                    <span>Service</span>
                  </button>

                  <button
                    onClick={() => setActiveMenu("sale")}
                  >
                    <i className="bi bi-cart-check"></i>
                    <span>New Sale</span>
                  </button>

                </div>

              </div>

            </div>

          </section>

        )}

        {/* Entry */}

        {activeMenu === "entry" && (

          <section className="page-content">

            <div className="section-title">

              <div>
                <h3>Customer Entry</h3>
                <p>
                  Register a new customer device for service.
                </p>
              </div>

              <button
                className="btn book-main-btn"
                onClick={() => setShowBook(true)}
              >
                <i className="bi bi-bookmark-plus"></i>
                Book
              </button>

            </div>

            <div className="content-card form-card">

              <div className="form-heading">

                <div className="form-icon">
                  <i className="bi bi-phone"></i>
                </div>

                <div>
                  <h5>Device Entry Form</h5>
                  <p>Enter customer and device details</p>
                </div>

              </div>

              <form onSubmit={handleBook}>

                <div className="row g-4">

                  <div className="col-md-6">

                    <label>
                      Customer Name *
                    </label>

                    <input
                      type="text"
                      name="customerName"
                      className="form-control"
                      value={form.customerName}
                      onChange={handleChange}
                      placeholder="Enter customer name"
                    />

                  </div>

                  <div className="col-md-6">

                    <label>
                      Mobile Number *
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      className="form-control"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                    />

                  </div>

                  <div className="col-md-6">

                    <label>
                      Device Type *
                    </label>

                    <select
                      name="deviceType"
                      className="form-select"
                      value={form.deviceType}
                      onChange={handleChange}
                    >

                      <option value="">
                        Select device type
                      </option>

                      <option>Mobile</option>
                      <option>Laptop</option>
                      <option>Tablet</option>
                      <option>Desktop</option>
                      <option>Smart Watch</option>
                      <option>Other</option>

                    </select>

                  </div>

                  <div className="col-md-6">

                    <label>
                      Device Name *
                    </label>

                    <input
                      type="text"
                      name="deviceName"
                      className="form-control"
                      value={form.deviceName}
                      onChange={handleChange}
                      placeholder="Example: iPhone 14"
                    />

                  </div>

                  <div className="col-md-8">

                    <label>
                      Customer Address *
                    </label>

                    <textarea
                      name="address"
                      className="form-control"
                      rows="3"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Enter customer address"
                    />

                  </div>

                  <div className="col-md-4">

                    <label>
                      Entry Date *
                    </label>

                    <input
                      type="date"
                      name="entryDate"
                      className="form-control"
                      value={form.entryDate}
                      onChange={handleChange}
                    />

                  </div>

                  <div className="col-md-6">

                    <label>
                      Advance Amount
                    </label>

                    <div className="input-group">

                      <span className="input-group-text">
                        ₹
                      </span>

                      <input
                        type="number"
                        name="advance"
                        className="form-control"
                        value={form.advance}
                        onChange={handleChange}
                        placeholder="0"
                      />

                    </div>

                  </div>

                </div>

                <div className="form-actions">

                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() =>
                      setForm({
                        customerName: "",
                        mobile: "",
                        deviceType: "",
                        deviceName: "",
                        address: "",
                        entryDate: "",
                        advance: ""
                      })
                    }
                  >
                    Clear
                  </button>

                  <button
                    type="submit"
                    className="btn book-main-btn"
                  >
                    <i className="bi bi-bookmark-check"></i>
                    Book Device
                  </button>

                </div>

              </form>

            </div>

          </section>

        )}

        {/* Stock */}

        {activeMenu === "stock" && (

          <section className="page-content">

            <div className="section-title">

              <div>
                <h3>Stock List</h3>
                <p>
                  View all devices currently registered.
                </p>
              </div>

              <div className="search-box">

                <i className="bi bi-search"></i>

                <input
                  type="text"
                  placeholder="Search device..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>

            </div>

            <div className="content-card">

              <div className="table-responsive">

                <table className="table custom-table align-middle">

                  <thead>

                    <tr>

                      <th>Device No</th>
                      <th>Device Name</th>
                      <th>Device Type</th>
                      <th>Status</th>
                      <th>Process</th>

                    </tr>

                  </thead>

                  <tbody>

                    {filteredStock.map((item) => (

                      <tr key={item.deviceNo}>

                        <td>
                          <strong className="device-number">
                            {item.deviceNo}
                          </strong>
                        </td>

                        <td>
                          {item.deviceName}
                        </td>

                        <td>
                          {item.deviceType}
                        </td>

                        <td>

                          <span
                            className={`status ${
                              item.status
                                .toLowerCase()
                                .replace(" ", "-")
                            }`}
                          >
                            {item.status}
                          </span>

                        </td>

                        <td>
                          {item.process}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </section>

        )}

        {/* Service */}

        {activeMenu === "service" && (

          <section className="page-content">

            <div className="section-title">

              <div>

                <h3>Service Details</h3>

                <p>
                  Components used and service charges.
                </p>

              </div>

              <div className="search-box">

                <i className="bi bi-search"></i>

                <input
                  type="text"
                  placeholder="Search service..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>

            </div>

            <div className="content-card">

              <div className="table-responsive">

                <table className="table custom-table">

                  <thead>

                    <tr>

                      <th>Device No</th>

                      <th>Device Name</th>

                      <th>Components Used</th>

                      <th>Component Price</th>

                    </tr>

                  </thead>

                  <tbody>

                    {filteredService.map((item) => (

                      <tr key={item.deviceNo}>

                        <td>
                          <strong className="device-number">
                            {item.deviceNo}
                          </strong>
                        </td>

                        <td>
                          {item.deviceName}
                        </td>

                        <td>

                          <span className="component-tag">
                            {item.components}
                          </span>

                        </td>

                        <td>

                          <strong>
                            {item.price}
                          </strong>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </section>

        )}

        {/* Sale */}

        {activeMenu === "sale" && (

          <section className="page-content">

            <div className="section-title">

              <div>

                <h3>Sale</h3>

                <p>
                  Manage device and component sales.
                </p>

              </div>

              <button className="btn book-main-btn">

                <i className="bi bi-plus-circle"></i>

                New Sale

              </button>

            </div>

            <div className="content-card">

              <div className="empty-sale">

                <i className="bi bi-cart-check"></i>

                <h4>Sales Management</h4>

                <p>
                  The sales entry screen will be added here.
                </p>

                <button className="btn btn-primary">
                  Create Sale
                </button>

              </div>

            </div>

          </section>

        )}

      </main>

      {/* Booking Modal */}

      {showBook && (

        <div className="modal-backdrop-custom">

          <div className="booking-modal">

            <div className="modal-top">

              <div>

                <h4>Book New Device</h4>

                <p>
                  Enter customer and device details
                </p>

              </div>

              <button
                className="close-btn"
                onClick={() => setShowBook(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>

            </div>

            <form onSubmit={handleBook}>

              <div className="row g-3">

                <div className="col-md-6">

                  <label>Customer Name *</label>

                  <input
                    type="text"
                    name="customerName"
                    className="form-control"
                    value={form.customerName}
                    onChange={handleChange}
                    placeholder="Customer name"
                  />

                </div>

                <div className="col-md-6">

                  <label>Mobile No *</label>

                  <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Mobile number"
                  />

                </div>

                <div className="col-md-6">

                  <label>Device Type *</label>

                  <select
                    name="deviceType"
                    className="form-select"
                    value={form.deviceType}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select type
                    </option>

                    <option>Mobile</option>
                    <option>Laptop</option>
                    <option>Tablet</option>
                    <option>Desktop</option>
                    <option>Smart Watch</option>

                  </select>

                </div>

                <div className="col-md-6">

                  <label>Device Name *</label>

                  <input
                    type="text"
                    name="deviceName"
                    className="form-control"
                    value={form.deviceName}
                    onChange={handleChange}
                    placeholder="Device name"
                  />

                </div>

                <div className="col-12">

                  <label>Address *</label>

                  <textarea
                    name="address"
                    className="form-control"
                    rows="2"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Customer address"
                  />

                </div>

                <div className="col-md-6">

                  <label>Entry Date *</label>

                  <input
                    type="date"
                    name="entryDate"
                    className="form-control"
                    value={form.entryDate}
                    onChange={handleChange}
                  />

                </div>

                <div className="col-md-6">

                  <label>Advance</label>

                  <div className="input-group">

                    <span className="input-group-text">
                      ₹
                    </span>

                    <input
                      type="number"
                      name="advance"
                      className="form-control"
                      value={form.advance}
                      onChange={handleChange}
                      placeholder="Advance amount"
                    />

                  </div>

                </div>

              </div>

              <div className="modal-actions">

                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setShowBook(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn book-main-btn"
                >
                  <i className="bi bi-check-circle"></i>
                  Book Device
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Service></Service>
      </section>

    </>  
  )
}

export default App


