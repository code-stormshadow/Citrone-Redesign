import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import DashboardIcon from '../images/dashboard-default.svg';
import CourseIcon from '../images/course-icon.svg';
import AssignmentIcon from '../images/assignment-icon.svg';
import QuizIcon from '../images/quiz-icon.svg';
import StIcon from '../images/st-icon.svg';
import FaqIcon from '../images/faq-icon.svg';
import SettingsIcon from '../images/settings-icon.svg';
import LogOutIcon from '../images/logout-icon.svg';
// import BarIcon from './/images/fa-bars.svg';
import MainProfilePic from '../images/main-profile-pic.png';
import styles from './/Dashboard.module.css';
// import '../db_ components/Dashboard.css';
import LogOutModal from './LogOutModal';

const SideNavBar = () => {
  // to open the popup
  const [modalShow, setModalShow] = useState(false);

  // To change the color of the icon/text when clicked
  const [clicked, setClicked] = useState(false);

  const colorChange = () => {
    setClicked(!clicked);
  };

  //assigning location variable for active links
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');

  return (
    <div id="app" style={{ height: '100vh' }}>
      <Sidebar style={{ height: '160vh', background: 'white' }}>
        <Menu>
          <div className={styles.profilePic}>
            <img src={MainProfilePic} className={styles.profileImg} alt="Profile Picture" />
          </div>
          <p className={styles.profileName}>Olurotimi Akinnagbe</p>
          <span className={styles.profileCourse}>UI/UX Design</span>

          <MenuItem
            component={<Link to="/dashboard" />}
            id="menuItem"
            onClick={colorChange}
            // className={splitLocation[1] === 'dashboard' ? 'active' : ''}
            className={classNames({
              active: splitLocation[1] === 'dashboard',
              'custom-class': clicked
            })}>
            <img src={DashboardIcon} alt="Icon" />
            <span className={styles.menu_link}>Dashboard</span>
          </MenuItem>

          <MenuItem
            component={<Link to="/course-content" />}
            id="menuItem"
            className={classNames({
              active: splitLocation[1] === 'course-content',
              'custom-class': clicked
            })}>
            <img src={CourseIcon} alt="Course Icon" />
            <span className={styles.menu_link}>Course Content</span>
          </MenuItem>

          <MenuItem
            component={<Link to="/assignment" />}
            id={styles.menuItem}
            className={classNames({
              active: splitLocation[1] === 'assignment',
              'custom-class': clicked
            })}>
            <img src={AssignmentIcon} alt="Icon" />
            <span className="menu_link">Assignment</span>
          </MenuItem>

          <MenuItem
            component={<Link to="/quizzes" />}
            id={styles.menuItem}
            className={classNames({
              active: splitLocation[1] === 'quizzes',
              'custom-class': clicked
            })}>
            <img src={QuizIcon} alt="Icon" />
            <span className={styles.menu_link}>Quizzes</span>
          </MenuItem>

          <MenuItem
            component={<Link to="/students_tutors" />}
            id={styles.menuItem}
            className={classNames({
              active: splitLocation[1] === 'students_tutors',
              'custom-class': clicked
            })}>
            <img src={StIcon} alt="Icon" />
            <span className={styles.menu_link}>Students & Tutors</span>
          </MenuItem>

          <hr className={styles.hr_line} />

          <MenuItem
            component={<Link to="/faq" />}
            id={styles.menuItem}
            className={classNames({
              active: splitLocation[1] === 'faq',
              'custom-class': clicked
            })}>
            <img src={FaqIcon} alt="Icon" />
            <span className={styles.menu_link}>FAQ</span>
          </MenuItem>

          <MenuItem
            component={<Link to="/settings" />}
            id={styles.menuItem}
            className={classNames({
              active: splitLocation[1] === 'settings',
              'custom-class': clicked
            })}>
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
