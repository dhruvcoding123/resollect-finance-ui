import React, { useState } from "react";
import "./App.css";

function App() {
  // Updated mock data with new columns for Region and Status
  const [portfolioData] = useState([
    {
      id: 1,
      loanType: "Home Loan",
      borrower: "James Smith",
      borrowerAddress: "123 Main St, City",
      coBorrower: "Jane Smith",
      coBorrowerAddress: "456 Park Ave, City",
      currentIP: "192.168.0.10",
      sanctionAmount: "$150,000",
      region: "North",
      status: "Approved"
    },
    {
      id: 2,
      loanType: "Car Loan",
      borrower: "John Doe",
      borrowerAddress: "789 Pine Rd, City",
      coBorrower: "Sarah Doe",
      coBorrowerAddress: "22 Lake St, City",
      currentIP: "192.168.0.11",
      sanctionAmount: "$25,000",
      region: "South",
      status: "Pending"
    },
    {
      id: 3,
      loanType: "Personal Loan",
      borrower: "Emily Johnson",
      borrowerAddress: "111 Maple Ave, City",
      coBorrower: "Robert Johnson",
      coBorrowerAddress: "333 Elm St, City",
      currentIP: "192.168.0.12",
      sanctionAmount: "$10,000",
      region: "East",
      status: "Declined"
    },
    {
      id: 4,
      loanType: "Education Loan",
      borrower: "Michael Brown",
      borrowerAddress: "55 College Rd, City",
      coBorrower: "Michelle Brown",
      coBorrowerAddress: "88 Campus Dr, City",
      currentIP: "192.168.0.13",
      sanctionAmount: "$50,000",
      region: "West",
      status: "Approved"
    },
    {
      id: 5,
      loanType: "Gold Loan",
      borrower: "Alice Taylor",
      borrowerAddress: "99 Gold St, City",
      coBorrower: "Adam Taylor",
      coBorrowerAddress: "100 Silver Ln, City",
      currentIP: "192.168.0.14",
      sanctionAmount: "$5,000",
      region: "Central",
      status: "Pending"
    },
    {
      id: 6,
      loanType: "Mortgage Loan",
      borrower: "David Wilson",
      borrowerAddress: "101 Mortgage Ave, City",
      coBorrower: "Eve Wilson",
      coBorrowerAddress: "102 Bond St, City",
      currentIP: "192.168.0.15",
      sanctionAmount: "$200,000",
      region: "North",
      status: "Approved"
    },
  ]);

  // For file upload
  const [selectedFile, setSelectedFile] = useState(null);

  // Filter state for loan type and search query
  const [filterLoanType, setFilterLoanType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle file upload
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Filter logic: filter by loan type and search query (filtering by borrower name)
  const filteredData = portfolioData.filter((row) => {
    const matchesLoanType =
      filterLoanType === "All" || row.loanType === filterLoanType;
    const matchesSearch =
      row.borrower.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLoanType && matchesSearch;
  });

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">Resollect Finance</div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li className="active">Portfolio</li>
            <li>Notices</li>
            <li>Notifications</li>
            <li>Action</li>
            <li>Data Upload</li>
            <li>Control Panel</li>
            <li>User Management</li>
            <li>Permissions</li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <h1>Resollect Finance Dashboard</h1>
        </header>

        {/* Portfolio Section */}
        <section className="portfolio-section">
          <h2>Portfolio</h2>

          {/* Search bar, Upload & Filters */}
          <div className="actions">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by Borrower..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="upload-file">
              <label htmlFor="fileUpload" className="upload-button">
                Upload File
              </label>
              <input
                type="file"
                id="fileUpload"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {selectedFile && (
                <span className="file-name">File: {selectedFile.name}</span>
              )}
            </div>

            <div className="filters">
              <label htmlFor="loanFilter">Filter by Loan Type:</label>
              <select
                id="loanFilter"
                value={filterLoanType}
                onChange={(e) => setFilterLoanType(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Car Loan">Car Loan</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Education Loan">Education Loan</option>
                <option value="Gold Loan">Gold Loan</option>
                <option value="Mortgage Loan">Mortgage Loan</option>
              </select>
            </div>
          </div>

          {/* Table in Grid */}
          <div className="grid-table">
            {/* Table Headers */}
            <div className="grid-header">ID</div>
            <div className="grid-header">Loan Type</div>
            <div className="grid-header">Borrower</div>
            <div className="grid-header">Borrower Address</div>
            <div className="grid-header">Co-Borrower</div>
            <div className="grid-header">Co-Borrower Address</div>
            <div className="grid-header">Current IP</div>
            <div className="grid-header">Sanction Amount</div>
            <div className="grid-header">Region</div>
            <div className="grid-header">Status</div>
            <div className="grid-header">Action</div>

            {/* Table Rows */}
            {filteredData.map((row) => (
              <React.Fragment key={row.id}>
                <div className="grid-cell">{row.id}</div>
                <div className="grid-cell">{row.loanType}</div>
                <div className="grid-cell">{row.borrower}</div>
                <div className="grid-cell">{row.borrowerAddress}</div>
                <div className="grid-cell">{row.coBorrower}</div>
                <div className="grid-cell">{row.coBorrowerAddress}</div>
                <div className="grid-cell">{row.currentIP}</div>
                <div className="grid-cell">{row.sanctionAmount}</div>
                <div className="grid-cell">{row.region}</div>
                <div className="grid-cell">{row.status}</div>
                <div className="grid-cell">
                  <button className="action-button">View</button>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
