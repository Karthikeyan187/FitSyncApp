import React from "react";

const Contacts = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "40px 20px",
    minHeight: "80vh", // Ensures the page takes up most of the screen
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const detailsStyle = {
    fontSize: "18px",
    margin: "10px 0",
  };

  const socialStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const socialIconStyle = {
    fontSize: "30px",
    textDecoration: "none",
    color: "#007AFF",
  };

  return (
    <div style={containerStyle}>
      <h1>📞 Contact Us</h1>
      <p>Have questions or need fitness guidance? Get in touch with us!</p>

      <div>
        <p style={detailsStyle}>📍 Address: 123 Fitness Street, Wellness City, Fitland</p>
        <p style={detailsStyle}>📧 Email: support@fitnesstracker.com</p>
        <p style={detailsStyle}>📞 Phone: +1 234 567 890</p>
        <p style={detailsStyle}>🕒 Working Hours: Monday - Friday, 9 AM - 6 PM</p>
      </div>

      {/* Social Media Links */}
      <div style={socialStyle}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>🌐 Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>🐦 Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>📸 Instagram</a>
      </div>
    </div>
  );
};

export default Contacts;
