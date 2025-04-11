import React from "react";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TimeSpent from "../components/TimeSpent";
import TipsCard from "../components/TipsCard";
import "../styles/mainpage.css";

const MainPage = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="content">
          <Header />
          <div className="task-time-container">
            {/* Task List */}
            <div className="task-list-container">
              <TaskList />
            </div>

            {/* Right Panel */}
            <div className="right-panel">
              <TimeSpent />
              <TipsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
