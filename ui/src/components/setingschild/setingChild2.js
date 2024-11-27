import React, { useState } from "react";

const PasswordResetForm = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmNewPassword) {
      alert("New passwords do not match!");
      return;
    }
    console.log("Password Reset Data: ", formData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Password</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <label style={styles.label}>Old Password</label>
          <input
            type="password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            style={styles.input}
          />
          <label style={styles.label}>New Password</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.row}>
          <label style={styles.label}>Re-enter New Password</label>
          <input
            type="password"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Change Password
        </button>
      </form>
      <p style={styles.forgotPassword}>Did you forget your password?</p>
      <footer style={styles.footer}>
        <a href="#" style={styles.footerLink}>
          About
        </a>
        <a href="#" style={styles.footerLink}>
          Terms & Conditions
        </a>
        <a href="#" style={styles.footerLink}>
          Privacy Policy
        </a>
        <a href="#" style={styles.footerLink}>
          App Version
        </a>
      </footer>
    </div>
  );
};

const styles = {

  header: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
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
    alignSelf: "center",
  },
  forgotPassword: {
    textAlign: "center",
    marginTop: "10px",
    color: "#007BFF",
    cursor: "pointer",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
    paddingTop: "10px",
    borderTop: "1px solid #ddd",
    color: "#333",
  },
  footerLink: {
    textDecoration: "none",
    color: "#007BFF",
    fontSize: "14px",
  },
};

export default PasswordResetForm;
