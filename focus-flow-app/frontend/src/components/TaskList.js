import React, { useState } from "react";
import { FaPlus, FaTrash, FaTimes } from "react-icons/fa";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      subject: "FLAT",
      time: "1:00 pm",
      description: "Finish Tutorial",
      duration: "1 hour",
      color: "#3B82F6",
    },
    {
      subject: "DAA",
      time: "2:00 pm",
      description: "Assignment",
      duration: "1 hour",
      color: "#8B5CF6",
    },
    {
      subject: "AM",
      time: "6:00 pm",
      description: "Practice Questions",
      duration: "1 hour",
      color: "#F97316",
    },
    {
      subject: "CDAC",
      time: "6:00 pm",
      description: "Practice Questions",
      duration: "1 hour",
      color: "#F97316",
    },
  ]);

  const [newTask, setNewTask] = useState({
    subject: "",
    time: "",
    description: "",
    duration: "1 hour",
    color: "#000000",
  });
  const [showModal, setShowModal] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  const addTask = () => {
    if (newTask.subject && newTask.time && newTask.description) {
      setTasks([...tasks, newTask]);
      setNewTask({
        subject: "",
        time: "",
        description: "",
        duration: "1 hour",
        color: "#000000",
      });
      setShowModal(false); // Close modal after adding
    }
  };

  const removeTask = (index) => {
    if (deleteMode) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Today's Tasks</h2>
        <div>
          <button
            onClick={() => setDeleteMode(!deleteMode)}
            style={deleteMode ? styles.binButtonActive : styles.binButton}
          >
            <FaTrash />
          </button>
          <button onClick={() => setShowModal(true)} style={styles.plusButton}>
            <FaPlus />
          </button>
        </div>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={styles.listItem}
            onClick={() => removeTask(index)}
          >
            <span
              style={{ ...styles.colorDot, backgroundColor: task.color }}
            ></span>
            <div>
              <p style={styles.subject}>{task.subject}</p>
              <p style={styles.description}>
                {task.time} - {task.description}
              </p>
            </div>
            <span style={styles.duration}>{task.duration}</span>
            {deleteMode && (
              <button
                style={styles.removeButton}
                onClick={() => removeTask(index)}
              >
                <FaTimes />
              </button>
            )}
          </li>
        ))}
      </ul>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalHeading}>Add Task</h2>
            <button
              onClick={() => setShowModal(false)}
              style={styles.closeButton}
            >
              <FaTimes />
            </button>
            <input
              type="text"
              placeholder="Subject"
              value={newTask.subject}
              onChange={(e) =>
                setNewTask({ ...newTask, subject: e.target.value })
              }
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Time"
              value={newTask.time}
              onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              style={styles.input}
            />
            <button onClick={addTask} style={styles.addButton}>
              Add Task
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    borderRadius: "8px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "600",
  },
  list: {
    maxHeight: "350px",
    overflowY: "auto",
    paddingRight: "10px",
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
    cursor: "pointer",
  },
  colorDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
  },
  subject: {
    fontWeight: "600",
    fontSize: "16px",
    color: "black",
  },
  description: {
    fontSize: "14px",
    color: "#6b7280",
  },
  duration: {
    marginLeft: "auto",
    color: "#6b7280",
    fontSize: "14px",
  },
  removeButton: {
    backgroundColor: "#FF5C5C",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    padding: "5px 8px",
    fontSize: "14px",
  },
  modalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
    width: "320px",
    position: "relative",
    textAlign: "center",
  },
  modalHeading: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#333",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "#333",
  },
  input: {
    width: "80%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    marginBottom: "12px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  addButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#101010",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    transition: "background 0.2s",
  },
  addButtonHover: {
    backgroundColor: "#2563EB",
  },
  plusButton: {
    padding: "8px",
    backgroundColor: "#3B82F6",
    color: "white",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "14px",
    marginLeft: "10px",
  },
  binButton: {
    padding: "8px",
    backgroundColor: "#aaa",
    color: "white",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "14px",
  },
  binButtonActive: {
    padding: "8px",
    backgroundColor: "#FF5C5C",
    color: "white",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default TaskList;
