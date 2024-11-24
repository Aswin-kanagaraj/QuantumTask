import React from "react";
import "./attendancelogChild1.css";

const Attendancelog1 = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <h2 className="profile-name">
            Kavimathi Elavarasan{" "}
            <span className="profile-role">Product Designer</span>
          </h2>
          <div className="profile-contact">
            <p>
              <i className="fas fa-envelope"></i> kavi08nov96@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i> +91-9543338400
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Pudukkottai, Tamilnadu
            </p>
          </div>
        </div>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
      <div className="profile-details">
        <div>
          <p>Employee ID</p>
          <h4>IM06587UT</h4>
        </div>
        <div>
          <p>Experience</p>
          <h4>4+ Years</h4>
        </div>
        <div>
          <p>On time</p>
          <h4>80%</h4>
        </div>
        <div>
          <p>Department</p>
          <h4>Design</h4>
        </div>
        <div>
          <p>Attendance Updated Date Time (IST)</p>
          <h4>Feb 22, 2024 at 10:37:12 AM</h4>
        </div>
        <div>
          <p>Available Leave Counts</p>
          <h4>05</h4>
        </div>
      </div>
    </div>
  );
};

export default Attendancelog1;
