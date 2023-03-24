import { Dropdown } from 'rsuite';
import React from 'react';
import DropDownArrow from './/images/caret-down.svg';
import ClickedArrow from './/images/clicked-arrow.svg';
import ProfilePic from './/images/profile-pic.png';
// import Box from './/images/box.svg';
import ProfileIcon from './/images/profile-icon.svg';
import SettingsIcon from './/images/settings-icon.svg';
import LogOutIcon from './/images/logout-icon.svg';

const DropdownClick = () => (
  <Dropdown file={DropDownArrow}>
    <object data={ClickedArrow}></object>
    <div className="card-container">
      <div>
        <img src={ProfilePic} alt="" />
      </div>

      <div>
        <h2>Olurotimi Akinnagbe</h2>
        <span>Tyrantakinnagbe@gmail.com</span>
        <span>UI/UX Design</span>
      </div>
      <hr />
      <Dropdown.Item icon={ProfileIcon}>Profile Information</Dropdown.Item>
      <Dropdown.Item icon={SettingsIcon}>Settings</Dropdown.Item>
      <Dropdown.Item icon={LogOutIcon}>Log Out</Dropdown.Item>
    </div>
    <hr />
  </Dropdown>
);

export default DropdownClick;
