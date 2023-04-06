import React from 'react';
import NavBar from '..//dashboardpage/db_ components/NavBar';
import SideNavBar from '..//dashboardpage/db_ components/SideNavBar';
import Main from '..//dashboardpage/db_ components/Main';
// import DropdownProfile from '../db_ components/DropdownProfile';
// import { Route, Routes } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      {/* <DropdownProfile /> */}
      <div className="wrapper">
        <SideNavBar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
