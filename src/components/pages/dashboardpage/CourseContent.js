import React from 'react';
import NavBar from '..//dashboardpage/db_ components/NavBar';
import SideNavBar from '..//dashboardpage/db_ components/SideNavBar';
import styles from './db_ components/Dashboard.module.css';
import SearchBar from './db_ components/SearchBar';
import Modules from './db_ components/Modules';

const CourseContent = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div>
          <div>
            <SearchBar />
          </div>
          <h1 className={styles.courseTitle}>Course Contents</h1>
          <Modules />
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
