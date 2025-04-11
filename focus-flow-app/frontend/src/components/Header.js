import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

const Header = () => {
  return (
    <div style={styles.header}>
      <div>
        <h1 style={styles.title}>College</h1>
        <p style={styles.date}>28 Jan, 2025 - 1 Feb, 2025</p>
      </div>
      <div style={styles.rightSection}>
        <div style={styles.avatarGroup}>
          {/* <a href="https://www.flaticon.com/free-icons/woman" title="woman icons">Woman icons created by Roundicons - Flaticon</a> */}
          {/* <a href="https://www.flaticon.com/free-icons/man" title="man icons">Man icons created by Roundicons - Flaticon</a> */}
          <img style={styles.avatar} src={user1} alt="User 1" />
          <img style={styles.avatar} src={user2} alt="User 2" />
          <img style={styles.avatar} src={user3} alt="User 3" />
        </div>
        <FaPlusCircle size={24} style={styles.icon} />
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
    borderRadius: "5px",
    width: "auto",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  date: {
    color: "#6b7280",
    fontSize: "14px",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  avatarGroup: {
    display: "flex",
    position: "relative",
  },
  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: "2px solid white",
    marginLeft: "-8px",
  },
  icon: {
    color: "#3b82f6",
    cursor: "pointer",
  },
};

export default Header;
