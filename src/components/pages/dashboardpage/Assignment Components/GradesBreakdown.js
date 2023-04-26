import React from 'react';
import NavBar from '../db_ components/NavBar';
import SideNavBar from '../db_ components/SideNavBar';
import styles from './Assignment.module.css';

const GradesBreakdown = () => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <SideNavBar />
      <div className={styles.assignmentsMainWrapper}>
        <div className={styles.gradesDiv}>
          <h4 className={styles.assignmentHeaderOne}>
            <span style={{ fontFamily: 'regular-mont' }}>Assignments</span> &#10095; Module 1
            Assignments <span>&#10095; </span> Lesson 1 Grade &#10095;
            <span className={styles.redHeader}>Lesson 1 breakdown</span>
          </h4>
          <div>
            <h3 className={styles.gradesHeaderTwo}> Module 1; Lesson 1</h3>
            <h3> Due: 19 Sep, 2022.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradesBreakdown;
