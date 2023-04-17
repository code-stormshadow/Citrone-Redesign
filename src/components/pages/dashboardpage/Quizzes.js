import React from 'react';
import NavBar from './db_ components/NavBar';
import SideNavBar from './db_ components/SideNavBar';
import styles from './db_ components/Dashboard.module.css';
import QuizzesModule from './db_ components/QuizzesModule';

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
          <h3>Quizzes</h3>
          <QuizzesModule />
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
