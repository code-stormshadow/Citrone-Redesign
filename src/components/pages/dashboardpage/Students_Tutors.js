import React from 'react';
import NavBar from './db_ components/NavBar';
import SideNavBar from './db_ components/SideNavBar';

const students_tutors = () => {
  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <SideNavBar />
      </div>
    </div>
  );
};

export default students_tutors;
