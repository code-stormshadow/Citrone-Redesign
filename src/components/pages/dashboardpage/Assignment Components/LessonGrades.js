import React from 'react';
import NavBar from '../db_ components/NavBar';
import SideNavBar from '../db_ components/SideNavBar';
import lessonGrades from './Assignment Images/lessonGrades.gif';
import styles from './Assignment.module.css';
import { Link } from 'react-router-dom';

const LessonGrades = () => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <SideNavBar />
      <div className={styles.assignmentsMainWrapperForGrades}>
        <div className={styles.gradesDiv}>
          <h4 className={styles.assignmentHeaderOne}>
            <span style={{ fontFamily: 'regular-mont' }}>Assignments</span> &#10095; Module 1
            Assignments <span>&#10095; </span>
            <span className={styles.redHeader}>Lesson 1 Grade</span>
          </h4>
          <div className={styles.gradesContentsDiv}>
            <h1 className={styles.modLessHeader}>Module 1; Lesson 1</h1>
            <hr className={styles.gradesLine}></hr>
            <div className={styles['due-GivenDate']}>
              <p className={styles['given-date']}>Date Given: 19th Sep 2022</p>
              <p>Due Given: 19th Sep 2022</p>
            </div>
            <img style={{ marginTop: '20px' }} src={lessonGrades}></img>
            <p className={styles.acquiredGrades}>90&#47;100</p>

            <p className={styles.remarks}>Remarks:</p>
            <p className={styles.remarksParagrapghTwo}>
              {' '}
              You&apos;re almost there. work on the corrections! Great documentation as well{' '}
            </p>
            <btn>
              <Link className={styles.viewBreakdown} to="/grades-breakdown">
                View Breakdown
              </Link>
            </btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonGrades;
