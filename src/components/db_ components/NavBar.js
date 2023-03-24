import React from 'react';
import BarIcon from './/images/fa-bars.svg';
import Logo from './images/logo-spin.png';
import BellIcon from './/images/bell-icon.svg';
import ProfilePic from './/images/profile-pic.png';
import DropDownArrow from './/images/caret-down.svg';
import 'C:/Users/Hp/OneDrive/Documents/Stutern/ReactProjects/final-project/dashboard-citrone/src/index.css';

const NavBar = () => {
  return (
    <div>
      <header className="top-navbar">
        <div className="right-nav">
          <object data={BarIcon}></object>
          <img src={Logo} alt="Logo Citrone" className="logo-img" />
          <h1 className="title">Citrone</h1>
        </div>

        <div className="left-nav">
          <object data={BellIcon} className="bell-icon"></object>
          <img src={ProfilePic} className="profile-pic" alt="Profile Picture" />
          <object data={DropDownArrow} className="dropdown-arrow"></object>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
