import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useProSidebar } from 'react-pro-sidebar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import classNames from 'classnames';
// import 'react-pro-sidebar/dist/css/styles.css';
import DashboardIcon from '../images/dashboard-default.svg';
import CourseIcon from '../images/course-icon.svg';
import AssignmentIcon from '../images/assignment-icon.svg';
import QuizIcon from '../images/quiz-icon.svg';
import StIcon from '../images/st-icon.svg';
import FaqIcon from '../images/faq-icon.svg';
import SettingsIcon from '../images/settings-icon.svg';
import LogOutIcon from '../images/logout-icon.svg';
import MainProfilePic from '../images/main-profile-pic.png';
import styles from './/Dashboard.module.css';
import LogOutModal from './LogOutModal';

const SideNavBar = () => {
  // to open the popup
  const [modalShow, setModalShow] = useState(false);

  // collapsed prop from the useProSidebar hook to conditionally render the profile picture and its associated text.
  // When the sidebar is collapsed, the collapsed prop will be true, and the profile picture and text will not be displayed.
  const { collapsed } = useProSidebar();

  return (
    <div id="app" style={{ height: '100%' }}>
      <Sidebar style={{ height: '165vh', background: 'white' }} collapsed={collapsed}>
        <Menu>
          {collapsed && (
            <div className={styles.profilePicSmall}>
              <img src={MainProfilePic} className={styles.profileImgSmall} alt="Profile Picture" />
            </div>
          )}
          {!collapsed && (
            <>
              <div className={styles.profilePic}>
                <img src={MainProfilePic} className={styles.profileImg} alt="Profile Picture" />
              </div>
              <p className={styles.profileName}>Olurotimi Akinnagbe</p>
              <span className={styles.profileCourse}>UI/UX Design</span>
            </>
          )}

          <MenuItem component={<Link to="/dashboard" />} id="menuItem">
            <img src={DashboardIcon} alt="Icon" />
            <span className={styles.menu_link}>Dashboard</span>
          </MenuItem>

          <MenuItem component={<Link to="/course-content" />} id="menuItem">
            <img src={CourseIcon} alt="Course Icon" />
            <span className={styles.menu_link}>Course Content</span>
          </MenuItem>

          <MenuItem component={<Link to="/assignment" />} id={styles.menuItem}>
            <img src={AssignmentIcon} alt="Icon" />
            <span className={styles.menu_link}>Assignment</span>
          </MenuItem>

          <MenuItem component={<Link to="/quizzes" />} id={styles.menuItem}>
            <img src={QuizIcon} alt="Icon" />
            <span className={styles.menu_link}>Quizzes</span>
          </MenuItem>

          <MenuItem component={<Link to="/students_tutors" />} id={styles.menuItem}>
            <img src={StIcon} alt="Icon" />
            <span className={styles.menu_link}>Students & Tutors</span>
          </MenuItem>

          <hr className={styles.hr_line} />

          <MenuItem component={<Link to="/faq" />} id={styles.menuItem}>
            <img src={FaqIcon} alt="Icon" />
            <span className={styles.menu_link}>FAQ</span>
          </MenuItem>

          <MenuItem component={<Link to="/settings" />} id={styles.menuItem}>
            <img src={SettingsIcon} alt="Icon" />
            <span className={styles.menu_link}>Settings</span>
          </MenuItem>

          <MenuItem
            // component={<Link to="/logout" />}
            id={styles.menuItem}
            className="logout_item"
            onClick={() => setModalShow(true)}>
            <img src={LogOutIcon} alt="Icon" />
            <span className={styles.menu_logout}>Logout</span>
          </MenuItem>
        </Menu>
      </Sidebar>
      {/* show the modal based on the state */}
      {/* if open modal is true open the modal */}
      <LogOutModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default SideNavBar;
