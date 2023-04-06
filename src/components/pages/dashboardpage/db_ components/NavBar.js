import React from 'react';
// import { useState } from 'react';
import Logo from '../images/logo-spin.png';
import BellIcon from '../images/bell-icon.svg';
// import ColoredBellIcon from './/images/colored-bell.svg';
import ProfilePic from '../images/profile-pic.png';
import DropDownArrow from '../images/caret-down.svg';
import '../db_ components/Dashboard.css';
import { Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import BarIcon from '../images/fa-bars.svg';
// import DropdownProfile from './DropdownProfile';

const NavBar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div>
      <header className="top-navbar">
        <div className="right-nav">
          <Menu>
            <MenuItem
              className="hamburger"
              onClick={() => {
                collapseSidebar();
              }}>
              <img src={BarIcon} alt="Icon" className="bar_icon" />{' '}
            </MenuItem>
            {/* <img src={ColoredBellIcon} alt="Icon" className="coloredBell" />{' '} */}
          </Menu>
          <div className="logo-container">
            <img src={Logo} alt="Logo Citrone" className="logo-img" />
            <h1 className="title">Citrone</h1>
          </div>
        </div>

        <div className="left-nav">
          <object data={BellIcon} className="bell-icon"></object>
          <img
            src={ProfilePic}
            className="profile-pic"
            alt="Profile Picture"
            // onClick={() => setOpenProfile([Prev]) => Prev}
          />
          <object data={DropDownArrow} className="dropdown-arrow"></object>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
