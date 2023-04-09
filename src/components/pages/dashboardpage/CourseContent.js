import React from 'react';
import NavBar from '..//dashboardpage/db_ components/NavBar';
import SideNavBar from '..//dashboardpage/db_ components/SideNavBar';
import styles from './db_ components/Dashboard.module.css';

const CourseContent = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
      </div>
    </div>
  );
};

export default CourseContent;
