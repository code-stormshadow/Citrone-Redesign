import React from 'react';
import NavBar from '../db_ components/NavBar';
import SideNavBar from '../db_ components/SideNavBar';
// import fonts from './Assignment/fonts';
import classes from './assignment.module.css';

const Assignment = () => {
  return (
    <div>
      <NavBar />
      <div className={classes.wrapper}>
        <SideNavBar />
        <div className={classes.assignmentModuleAndTopic}>
          <div className={classes.assignmentModule}>
            <h1>Module</h1>
            <h1 id={classes.assignmentNumber}>1</h1>
          </div>
          <div className={classes.vl}></div>
          <div className={classes.assignmentTopic}>
            <h1> Product Design and Design Thinking</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
