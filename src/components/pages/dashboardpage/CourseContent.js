import React from 'react';
import NavBar from '..//dashboardpage/db_ components/NavBar';
import SideNavBar from '..//dashboardpage/db_ components/SideNavBar';

const CourseContent = () => {
  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <SideNavBar />
      </div>
    </div>
  );
};

export default CourseContent;
