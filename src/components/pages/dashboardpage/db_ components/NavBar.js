import React from 'react';
// import { useState } from 'react';
import Logo from '../images/logo-spin.png';
import BellIcon from '../images/bell-icon.svg';
// import ColoredBellIcon from './/images/colored-bell.svg';
import ProfilePic from '../images/profile-pic.png';
import DropDownArrow from '../images/caret-down.svg';
import styles from './/Dashboard.module.css';
// import '../db_ components/Dashboard.css';
import { Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import BarIcon from '../images/fa-bars.svg';
// import DropdownProfile from './DropdownProfile';

const NavBar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div>
      <header className={styles.top_navbar}>
        <div className={styles.right_nav}>
          <Menu>
            <MenuItem
              className={styles.hamburger}
              onClick={() => {
                collapseSidebar();
              }}>
              <img src={BarIcon} alt="Icon" className={styles.bar_icon} />{' '}
            </MenuItem>
            {/* <img src={ColoredBellIcon} alt="Icon" className="coloredBell" />{' '} */}
          </Menu>
          <div className={styles.logo_container}>
            <img src={Logo} alt="Logo Citrone" className={styles.logo_img} />
            <h1 className={styles.title}>Citrone</h1>
          </div>
        </div>

        <div className={styles.left_nav}>
          <object data={BellIcon} className={styles.bell_icon}></object>
          <img
            src={ProfilePic}
            className={styles.profile_pic}
            alt="Profile Picture"
            // onClick={() => setOpenProfile([Prev]) => Prev}
          />
          <object data={DropDownArrow} className={styles.dropdown_arrow}></object>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
