import React from 'react';
import NavBar from '../db_ components/NavBar';
import styles from '../db_ components/Dashboard.module.css';
import SideNavBar from '../db_ components/SideNavBar';
// import { Link } from 'react-router-dom';
import classes from './Quiz.module.css';

const Quiz2Grade = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={classes['quiz2grade-container']}>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Quiz2Grade;
