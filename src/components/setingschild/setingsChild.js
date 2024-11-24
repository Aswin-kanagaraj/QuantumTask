import React, { useState } from "react";
import PasswordResetForm from "./setingChild2";

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    address: "",
    designation: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };
  const styles = {
    container: {
      maxWidth: "100%",
      margin: "auto",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "24px",
      color: "#333",
    },
    profilePicture: {
      textAlign: "center",
      marginBottom: "20px",
    },
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      marginBottom: "10px",
    },
    uploadButton: {
      marginRight: "10px",
      padding: "10px 15px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    changeButton: {
      padding: "10px 15px",
      backgroundColor: "#f0f0f0",
      color: "#333",
      border: "1px solid #ccc",
      borderRadius: "5px",
      cursor: "pointer",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
    },
    label: {
      flex: 1,
      color: "#333",
      fontWeight: "bold",
    },
    input: {
      flex: 1,
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    submitButton: {
      padding: "10px 15px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      alignSelf: "flex-end",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Personal Information</h2>
      <div style={styles.profilePicture}>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          style={styles.image}
        />
        <div>
          <button style={styles.uploadButton}>Upload</button>
          <button style={styles.changeButton}>Change</button>
        </div>
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <label style={styles.label}>Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.row}>
          <label style={styles.label}>Surname</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            style={styles.input}
          />
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.row}>
          <label style={styles.label}>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={styles.input}
          />
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.row}>
          <label style={styles.label}>Update Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={{ ...styles.input, flex: 2 }}
          />
        </div>
        
        <PasswordResetForm/>
      </form>
    </div>
  );
};



export default UserProfileForm;
