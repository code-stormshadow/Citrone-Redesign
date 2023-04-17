import React from 'react';
import NavBar from '..//dashboardpage/db_ components/NavBar';
import SideNavBar from '..//dashboardpage/db_ components/SideNavBar';
import styles from './db_ components/Assignment.module.css';
import SearchBar from './db_ components/SearchBar';

const Assignment = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <SearchBar />
      </div>
    </div>
  );
};

export default Assignment;
