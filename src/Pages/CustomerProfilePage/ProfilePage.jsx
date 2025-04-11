// ProfilePage.jsx
import React from 'react';
import './profilePage.css';
import Logo from '../../Resource/images/Logo.jpeg'

const candidate = {
  name: "Atul Singh",
  email: "atulsingh@gmail.com",
  contactNumber: "7992442904",
  category: "General",
  homeState: "Odisha",
  planType: "BASIC"
};

const ProfilePage = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li className="active">My Dashboard</li>
            <li>Accounts</li>
            <li>Mobile</li>
            <li>Payments</li>
            <li>Complaints</li>
            <li>Supports</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <div>
            <h2>Campus Chronicles</h2>
            <p>Helping You Find the Best Engineering Colleges for your Fututre !</p>
          </div>
          <div className="user-info">
            <img src="https://via.placeholder.com/40" alt="user" className="user-avatar" />
            <span>Hello Atul</span>
          </div>
        </header>

        <div className="content-body">
          <div className="personal-details-container">
            <div className="image-container">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="profile-img"
              />
              <h2 className="candidate-name">{candidate.name}</h2>
            </div>

            <div className="details-container">
              <div className="detail-row">
                <span className="field">Email:</span>
                <span className="value">{candidate.email}</span>
              </div>
              <div className="detail-row">
                <span className="field">Contact Number:</span>
                <span className="value">{candidate.contactNumber}</span>
              </div>
              <div className="detail-row">
                <span className="field">Category:</span>
                <span className="value">{candidate.category}</span>
              </div>
              <div className="detail-row">
                <span className="field">Home State:</span>
                <span className="value">{candidate.homeState}</span>
              </div>
              <div className="detail-row">
                <span className="field">Plan Type:</span>
                <span className="value">{candidate.planType}</span>
              </div>
            </div>
          </div>

          <div className="side-panels">
  <div className="rank-details-container hover-card">
    <h3>Rank Details</h3>
    <ul className="rank-list">
      <li>JEE Percentile: <span>80.00</span></li>
      <li>CRL Rank: <span>300000</span></li>
      <li>COMEDK Rank: <span>24000</span></li>
      <li>MHT CET Percentile: <span>83.40</span></li>
      <li>WBJEE Rank: <span>45000</span></li>
      <li>IPU CET Rank: <span>3200</span></li>
    </ul>
  </div>

  <div className="progress-container hover-card">
    <h3>Progess Bar</h3>
    <div className="bill-item complete">
      <span className="circle"></span>
      <span className="bill-name">List Generated</span>
      <span className="status">✔ Completed</span>
    </div>
    <div className="bill-item incomplete">
      <span className="circle"></span>
      <span className="bill-name">List Verified</span>
      <span className="status">✘ Incomplete</span>
    </div>
    <div className="bill-item complete">
      <span className="circle"></span>
      <span className="bill-name">Email Sent</span>
      <span className="status">✔ Completed</span>
    </div>
    <div className="bill-item complete">
      <span className="circle"></span>
      <span className="bill-name">FeedBack Sent</span>
      <span className="status">✔ Completed</span>
    </div>
  </div>
</div>

        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
