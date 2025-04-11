import React from "react";
import { FaLightbulb } from "react-icons/fa";
import turtle from "../assets/turtle.jpg";

const TipsCard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        <FaLightbulb style={styles.icon} /> Get More Productive
      </h2>
      <p style={styles.text}>
        Take short breaks between study sessions to improve focus and retention.
      </p>
      <img style={styles.img} src={turtle} alt="turtle progress image"></img>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#fff",
    // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    // marginTop: "20px",
    // borderRadius: "8px",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
  },
  icon: {
    color: "#FBBF24", // Yellow color
    marginRight: "8px",
  },
  img: {
    width: "100px",
    marginLeft: "30%",
  },
  text: {
    color: "#374151",
    fontSize: "16px",
  },
};

export default TipsCard;
