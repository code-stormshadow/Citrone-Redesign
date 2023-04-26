import React from 'react';
import NavBar from '../db_ components/NavBar';
import styles from '../db_ components/Dashboard.module.css';
import SideNavBar from '../db_ components/SideNavBar';
import classes from './Quiz.module.css';
import Line from '../images/Line.png';
import { Link } from 'react-router-dom';

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
          <h4 id={classes['quiz-moduleone-first-paragraph4']}>Module 1 Quizzes</h4>
          <div className={classes['quiz1-card']}>
            <div className={classes.quiz1}>
              <h5>Quiz 1</h5>
            </div>
            <div>
              <img className={classes['quiz1-line']} src={Line} alt="" />
            </div>
            <div className={classes['quiz1-second-container']}>
              <p id={classes.introduction}>Introduction to product design</p>
              <div className={classes['quiz1-card-second-sub-container']}>
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
            <div className={classes.graded}>
              <p>Graded</p>
            </div>
          </div>
          <div className={classes['quiz1-card2-5']}>
            <div className={classes.quiz1}>
              <h5>Quiz 2</h5>
            </div>
            <div>
              <img className={classes['quiz1-line']} src={Line} alt="" />
            </div>
            <div className={classes['quiz1-second-container']}>
              <p id={classes.introduction}>Introduction to product design</p>
              <div className={classes['quiz1-card-second-sub-container']}>
                <div>
                  <p>Ques: 10</p>
                </div>
                <div>
                  <p>Time: 10 minutes </p>
                </div>
                <div>
                  <p>Attempts: 1</p>
                </div>
                <div>
                  <p>Score: 0</p>
                </div>
              </div>
            </div>
            <div className={classes.start}>
              <p>Start</p>
            </div>
          </div>
          <div className={classes['quiz1-card']}>
            <div className={classes.quiz1}>
              <h5>Quiz 3</h5>
            </div>
            <div>
              <img className={classes['quiz1-line']} src={Line} alt="" />
            </div>
            <div className={classes['quiz1-second-container']}>
              <p id={classes.introduction}>Introduction to product design</p>
              <div className={classes['quiz1-card-second-sub-container']}>
                <div>
                  <p>Ques: 10</p>
                </div>
                <div>
                  <p>Time: 10 minutes </p>
                </div>
                <div>
                  <p>Attempts: 1</p>
                </div>
                <div>
                  <p>Score: 0</p>
                </div>
              </div>
            </div>
            <div className={classes.start}>
              <p>Start</p>
            </div>
          </div>
          <div className={classes['quiz1-card']}>
            <div className={classes.quiz1}>
              <h5>Quiz 4</h5>
            </div>
            <div>
              <img className={classes['quiz1-line']} src={Line} alt="" />
            </div>
            <div className={classes['quiz1-second-container']}>
              <p id={classes.introduction}>Introduction to product design</p>
              <div className={classes['quiz1-card-second-sub-container']}>
                <div>
                  <p>Ques: 10</p>
                </div>
                <div>
                  <p>Time: 10 minutes </p>
                </div>
                <div>
                  <p>Attempts: 1</p>
                </div>
                <div>
                  <p>Score: 0</p>
                </div>
              </div>
            </div>
            <div className={classes.start}>
              <p>Start</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleOne;
