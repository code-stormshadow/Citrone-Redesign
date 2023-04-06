import React from 'react';
import NavBar from './db_ components/NavBar';
import SideNavBar from './db_ components/SideNavBar';

const Quizzes = () => {
  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <SideNavBar />
      </div>
    </div>
  );
};

export default Quizzes;
