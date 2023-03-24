import React from 'react';
import MainProfilePic from './/images/main-profile-pic.png';
import DashboardIcon from './/images/dashboard-icon.svg';
import CourseIcon from './/images/course-icon.svg';
import AssignmentIcon from './/images/assignment-icon.svg';
import QuizIcon from './/images/quiz-icon.svg';
import StIcon from './/images/st-icon.svg';
import FaqIcon from './/images/faq-icon.svg';
import SettingsIcon from './/images/settings-icon.svg';
import LogOutIcon from './/images/logout-icon.svg';
import 'C:/Users/Hp/OneDrive/Documents/Stutern/ReactProjects/final-project/dashboard-citrone/src/index.css';

const SideBar = () => {
  return (
    <div>
      <nav className="side-navbar">
        <div className="profile-content">
          <img src={MainProfilePic} className="main-profile-pic" alt="Profile Picture" />
          <h2>Olurotimi Akinnagbe</h2>
          <span>UI/UX Design</span>
        </div>

        <ul>
          <li className="nav-link">
            <a className="link">
              <object data={DashboardIcon} className="nav-icon"></object>
              <span className="nav-title nav-dashboard">Dashboard</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="" className="link">
              <object data={CourseIcon}></object>
              <span className="nav-title nav-course">Course Contents</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="" className="link">
              <object data={AssignmentIcon}></object>
              <span className="nav-title">Assignment</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="" className="link">
              <object data={QuizIcon}></object>
              <span className="nav-title nav-quiz">Quizzes</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="" className="link">
              <object data={StIcon}></object>
              <span className="nav-title nav-course">Students & Tutors</span>
            </a>
          </li>

          <hr />
          <li className="nav-link-faq">
            <a href="" className="link">
              <object data={FaqIcon}></object>
              <span className="nav-title nav">FAQs</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="" className="link">
              <object data={SettingsIcon}></object>
              <span className="nav-title nav">Settings</span>
            </a>
          </li>
          <li className="nav-link log-out">
            <a href="" className="link">
              <object data={LogOutIcon} className="logout-icon"></object>
              <span className="nav-title nav-out">Log Out</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
