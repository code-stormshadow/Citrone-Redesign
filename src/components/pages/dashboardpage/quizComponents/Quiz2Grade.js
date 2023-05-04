import React from 'react';
import NavBar from '../db_ components/NavBar';
import styles from '../db_ components/Dashboard.module.css';
import SideNavBar from '../db_ components/SideNavBar';
import { Link } from 'react-router-dom';
import classes from './Quiz.module.css';

const Quiz2Grade = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={classes['quiz1grade-container']}>
          <div className={classes['quiz2-first-paragraph']}>
            <Link to="/quizzes" style={{ textDecoration: 'none', color: 'black' }}>
              <div>
                <p id={classes['quiz2-first-paragraph1']}>Quizzes</p>
              </div>
            </Link>
            <div className={classes['quiz2-first-paragraph2']}>
              <p>&gt;</p>
            </div>
            <Link to="/moduleone" style={{ textDecoration: 'none', color: 'black' }}>
              <div>
                <p id={classes['quiz2-first-paragraph3']}>Module 1 Quizzes</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz2Grade;
