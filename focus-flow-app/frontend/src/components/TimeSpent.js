import React from "react";

const TimeSpent = () => {
  const activities = [
    { name: "Classes", percentage: 50, color: "#3B82F6" }, // Blue
    { name: "Self-study", percentage: 30, color: "#10B981" }, // Green
    { name: "Breaks", percentage: 20, color: "#F59E0B" }, // Yellow
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Time Spent</h2>
      {activities.map((activity, index) => (
        <div key={index} style={styles.activityContainer}>
          <p style={styles.activityName}>{activity.name}</p>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${activity.percentage}%`,
                backgroundColor: activity.color,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "light-gray",
    // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    // borderRadius: "8px",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
  },
  activityContainer: {
    marginBottom: "12px",
  },
  activityName: {
    color: "#374151",
    marginBottom: "6px",
    fontSize: "16px",
  },
  progressBar: {
    width: "100%",
    backgroundColor: "#E5E7EB",
    borderRadius: "8px",
    height: "16px",
  },
  progressFill: {
    height: "16px",
    borderRadius: "8px",
  },
};

export default TimeSpent;
