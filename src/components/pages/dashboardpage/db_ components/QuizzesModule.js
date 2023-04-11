import React from 'react';
import Line from '..//images/Line.png';
import Note from '..//images/Note.png';
import classes from './Dashboard.module.css';
const QuizzesModule = () => {
  return (
    <div>
      <div className={classes['module-container']}>
        <div>
          <h5>Module</h5>
          <h2>1</h2>
        </div>
        <div>
          <img src={Line} />
        </div>
        <div>
          <h3>Introduction to product design</h3>
          <p>Study the brief for your milestone project and start noting the questions that...</p>
          <div className={classes['module1-sub-container']}>
            <div>
              <img src={Note} />
            </div>
            <div>
              <p>4 Quizzes</p>
            </div>
            <div>
              <img src={Note} />
            </div>
            <div>
              <p>4/4 Quizzes Attempted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesModule;
