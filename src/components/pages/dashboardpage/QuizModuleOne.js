import React from 'react';
import NavBar from './db_ components/NavBar';
import styles from './/.//db_ components/Dashboard.module.css';
import SideNavBar from './db_ components/SideNavBar';
import classes from '.././/dashboardpage/db_ components/Dashboard.module.css';
import Line from '.././/dashboardpage/images/Line.png';

const ModuleOne = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={classes['quiz-module-one-container']}>
          <div>
            <div>
              <input placeholder="Search module title or lesson" className={styles.searchBar} />
            </div>
          </div>
          <div className={classes['quiz-moduleone-first-paragraph']}>
            <div>
              <p id={classes['quiz-moduleone-first-paragraph1']}>Quizzes</p>
            </div>
            <div className={classes['quiz-moduleone-first-paragraph2']}>
              <p>&gt;</p>
            </div>
            <div>
              <p id={classes['quiz-moduleone-first-paragraph3']}>Module 1 Quizzes</p>
            </div>
          </div>
          <h4 id={classes['quiz-moduleone-first-paragraph4']}>Module 1 Quizzes</h4>
          <div className={classes['quiz1-card']}>
            <div>
              <h5>Quiz 1</h5>
            </div>
            <div>
              <img src={Line} alt="" />
            </div>
            <div>
              <h4>Introduction to product design</h4>
              <div className={classes['quiz1-card-sub-container']}>
                <div>
                  <p>Ques: 10</p>
                </div>
                <div>
                  <p>Time: 10 minutes </p>
                </div>
                <div>
                  <p>Attempts: 0</p>
                </div>
                <div>
                  <p>Score: 80</p>
                </div>
              </div>
            </div>
            <div>
              <p>Graded</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleOne;
