import React from 'react';
import NavBar from '../db_ components/NavBar';
import SideNavBar from '../db_ components/SideNavBar';
import styles from '../db_ components/Dashboard.module.css';
import classes from './Quiz.module.css';
import QuizzesModule from './QuizzesModule';

const Quizzes = () => {
  return (
    <div className={styles['quiz-container']}>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div>
          <div>
            <div>
              <input placeholder="Search QUIZ title" className={styles.searchBar} />
            </div>
          </div>
          <h3 id={classes.quizzes}>Quizzes</h3>
          <QuizzesModule />
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
