import React from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import ProfilePic from './/images/profile-pic.png';
import ProfileIcon from './/images/profile-icon.svg';
import SettingsIcon from './/images/settings-filled.svg';
import LogOutIcon from './/images/logout-icon.svg';
import Polygon from './/images/polygon.svg';
import styles from './/Dashboard.module.css';

const DropdownProfile = () => (
  <div className={styles.dropdownProfile}>
    <img src={Polygon} alt="icon" className={styles.polygon} />
    <div className={styles.profileCard}>
      <div>
        <img src={ProfilePic} alt="Profilfe Picture" />
      </div>

      <div>
        <h2>Olurotimi Akinnagbe</h2>
        <span className="profileDropdownEmail">Tyrantakinnagbe@gmail.com</span>
        <span className="profileDropdownCourse">UI/UX Design</span>
      </div>
    </div>
    <hr />
    <Menu>
      <MenuItem component={<Link to="/settings" />}>
        <img src={ProfileIcon} alt="Icon" />
        <span>Profile Information</span>
      </MenuItem>
      <MenuItem component={<Link to="/settings" />}>
        <img src={SettingsIcon} alt="Icon" />
        <span>Settings</span>
      </MenuItem>
      <MenuItem component={<Link to="/settings" />}>
        <img src={LogOutIcon} alt="Icon" />
        <span>Log Out</span>
      </MenuItem>
    </Menu>
    <hr />
  </div>
);

export default DropdownProfile;
