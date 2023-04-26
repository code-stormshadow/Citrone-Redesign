import React from 'react';
import NavBar from '../db_ components/NavBar';
import SideNavBar from '../db_ components/SideNavBar';
import styles from './Assignment.module.css';

const GradesBreakdown = () => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <div className={styles.AssignmentsMainWrapper}>
        <SideNavBar />
        <div className={styles.gradesDiv}>
          <h4 className={styles.assignmentHeaderOne}>
            <span style={{ fontFamily: 'regular-mont' }}>Assignments</span> &#10095; Module 1
            Assignments <span>&#10095; </span>
            <span className={styles.redHeader}>Lesson 1 Grade</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GradesBreakdown;
