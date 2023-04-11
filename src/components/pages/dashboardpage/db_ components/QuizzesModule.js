import React from 'react';
import Line from '..//images/Line.png';
import Note from '..//images/Note.png';
import classes from './Dashboard.module.css';
const QuizzesModule = () => {
  return (
    <div>
      <div className={classes['module-container']}>
        <div>
          <h6 id={classes.module1}>Module</h6>
          <h2 id={classes.module1}>1</h2>
        </div>
        <div>
          <img id={classes.line} src={Line} />
        </div>
        <div>
          <h4 id={classes['module1-text']}>Introduction to product design</h4>
          <p id={classes['module1-text']}>
            Study the brief for your milestone project and start noting the questions that...
          </p>
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
