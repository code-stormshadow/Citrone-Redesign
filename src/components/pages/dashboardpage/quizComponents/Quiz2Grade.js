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
        <div>
          {/* <div>
            <input placeholder="Search module title or lesson" className={styles.searchBarQuiz} />
          </div> */}
          <div className={classes['quiz-moduleone-first-paragraph']}>
            <Link to="/quizzes" style={{ textDecoration: 'none' }}>
              <div>
                <p id={classes['quiz-moduleone-first-paragraph1']}>Quizzes</p>
              </div>
            </Link>
            <div className={classes['quiz-moduleone-first-paragraph2']}>
              <p>&gt;</p>
            </div>
            <div>
              <p id={classes['quiz-moduleone-first-paragraph3']}>Module 1 Quizzes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz2Grade;
