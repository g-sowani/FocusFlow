import React from "react";
import { FaUserCircle, FaBell } from "react-icons/fa";

const Sidebar = () => {
  const styles = {
    container: {
      width: "16rem",
      backgroundColor: "#101010",
      color: "white",
      padding: "1.25rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "40px",
      marginBottom: "60px",
    },
    profileContainer: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "1.5rem",
    },
    profileText: {
      color: "white",
      fontSize: "1.125rem",
      fontWeight: "600",
    },
    emailText: {
      fontSize: "0.875rem",
      color: "#cbd5e0",
    },
    bellContainer: {
      position: "relative",
      marginLeft: "auto",
    },
    notificationBadge: {
      position: "absolute",
      top: 0,
      right: 0,
      backgroundColor: "#ef4444",
      fontSize: "0.75rem",
      borderRadius: "50%",
      padding: "0.25rem 0.5rem",
    },
    navLinks: {
      marginTop: "1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    link: {
      color: "#a0aec0",
      textDecoration: "none",
      fontSize: "1rem",
      transition: "color 0.2s ease-in-out",
    },
    activeLink: {
      color: "white",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileContainer}>
        <FaUserCircle size={40} backgroundColor="white" />
        <div>
          <h2 style={styles.profileText}>Samantha</h2>
          <p style={styles.emailText}>samantha@email.com</p>
        </div>
        <div style={styles.bellContainer}>
          <FaBell size={20} />
          <span style={styles.notificationBadge}>4</span>
        </div>
      </div>
      <nav style={styles.navLinks}>
        <a href="#" style={styles.link}>
          Dashboard
        </a>
        <br></br>
        <a href="#" style={{ ...styles.link, ...styles.activeLink }}>
          College
        </a>
        <br></br>
        <a href="#" style={styles.link}>
          Self-study
        </a>
        <br></br>
        <a href="#" style={styles.link}>
          Weekly Summary
        </a>
        <br></br>
        <a href="#" style={styles.link}>
          Timer
        </a>
        <br></br>
        <a href="#" style={styles.link}>
          Accounts
        </a>
        <br></br>
        <a href="#" style={styles.link}>
          Settings
        </a>
        <br></br>
      </nav>
    </div>
  );
};

export default Sidebar;
