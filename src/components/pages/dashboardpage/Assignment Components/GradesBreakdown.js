import React from 'react';
import NavBar from '../db_ components/NavBar';
import SideNavBar from '../db_ components/SideNavBar';
import styles from './Assignment.module.css';
import Alarm from './Assignment Images/Alarm.svg';

const GradesBreakdown = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={styles.assignmentsMainWrapper}>
          <div className={styles.gradesBreakdownDiv}>
            <h4 className={styles.assignmentHeaderOne}>
              Assignments &#10095; Module 1 Assignments &#10095;{' '}
              <span className={styles.redHeader}>Lesson 1 Grade &#10095;</span>
              <span className={styles.redHeader}>Lesson 1 breakdown</span>
            </h4>
            <div className={styles.gradesHeaderTwo}>
              <h3> Module 1; Lesson 1</h3>
              <h3 className={styles.gradesBreakdownDueDate}>
                <img src={Alarm}></img>{' '}
                <span className={styles.dueDateRightHeader}>Due: 19 Sep, 2022.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradesBreakdown;
