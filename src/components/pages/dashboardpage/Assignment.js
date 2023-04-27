import React from 'react';
import NavBar from './db_ components/NavBar';
import SideNavBar from './db_ components/SideNavBar';
import styles from '../dashboardpage/Assignment Components/Assignment.module.css';
import AssignmentModule from './Assignment Components/AssignmentModule';
const Assignment = () => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <SideNavBar />
      <AssignmentModule />
    </div>
  );
};

export default Assignment;
