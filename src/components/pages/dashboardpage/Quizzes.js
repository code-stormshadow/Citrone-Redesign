import React from 'react';
import NavBar from './db_ components/NavBar';
import SideNavBar from './db_ components/SideNavBar';
import styles from './db_ components/Dashboard.module.css';
import SearchBar from './db_ components/SearchBar';

const Quizzes = () => {
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

export default Quizzes;
