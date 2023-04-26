import React from 'react';
import { Link } from 'react-router-dom';
import Line from '..//images/Line.png';
import Note from '..//images/Note.png';
import classes from './Quiz.module.css';
const QuizzesModule = () => {
  return (
    <div className={classes.modules}>
      <Link
        style={{ textDecoration: 'none' }}
        className={classes['module-one-link']}
        to="/moduleone">
        <div className={classes['module-container']}>
          <div>
            <h5 id={classes.module}>Module</h5>
            <h2 id={classes.module1}>1</h2>
          </div>
          <div>
            <img id={classes.line} src={Line} />
          </div>
          <div>
            <h4 id={classes['module1-text']}>Introduction to product design</h4>
            <p id={classes['module1-text1']}>
              Study the brief for your milestone project and start noting the questions that...
            </p>
            <div className={classes['module1-sub-container']}>
              <div>
                <img id={classes['module-image-paragraph']} src={Note} />
              </div>
              <div>
                <p id={classes['module-image-paragraph']}>4 Quizzes</p>
              </div>
              <div>
                <img id={classes['module-image-paragraph2']} src={Note} />
              </div>
              <div>
                <p id={classes['module-image-paragraph2']}>4&#8725;4 Quizzes Attempted</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <hr className={classes.hr} />
      <Link to="/moduleone" style={{ textDecoration: 'none' }}>
        <div className={classes['module-2-6-container']}>
          <div>
            <h5 id={classes.module}>Module</h5>
            <h2 id={classes.module1}>2</h2>
          </div>
          <div>
            <img id={classes.line} src={Line} />
          </div>
          <div>
            <h4 id={classes['module1-text']}>Introduction to product design</h4>
            <p id={classes['module1-text1']}>
              Study the brief for your milestone project and start noting the questions that...
            </p>
            <div className={classes['module1-sub-container']}>
              <div>
                <img id={classes['module-image-paragraph']} src={Note} />
              </div>
              <div>
                <p id={classes['module-image-paragraph']}>4 Quizzes</p>
              </div>
              <div>
                <img id={classes['module-image-paragraph2']} src={Note} />
              </div>
              <div>
                <p id={classes['module-2-6-image-paragraph2']}>2&#8725;4 Quizzes Attempted</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <hr className={classes.hr} />
      <div className={classes['module-2-6-container']}>
        <div>
          <h5 id={classes.module}>Module</h5>
          <h2 id={classes.module1}>3</h2>
        </div>
        <div>
          <img id={classes.line} src={Line} />
        </div>
        <div>
          <h4 id={classes['module1-text']}>Introduction to product design</h4>
          <p id={classes['module1-text1']}>
            Study the brief for your milestone project and start noting the questions that...
          </p>
          <div className={classes['module1-sub-container']}>
            <div>
              <img id={classes['module-image-paragraph']} src={Note} />
            </div>
            <div>
              <p id={classes['module-image-paragraph']}>4 Quizzes</p>
            </div>
            <div>
              <img id={classes['module-image-paragraph2']} src={Note} />
            </div>
            <div>
              <p id={classes['module-2-6-image-paragraph2']}>0&#8725;4 Quizzes Attempted</p>
            </div>
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes['module-2-6-container']}>
        <div>
          <h5 id={classes.module}>Module</h5>
          <h2 id={classes.module1}>4</h2>
        </div>
        <div>
          <img id={classes.line} src={Line} />
        </div>
        <div>
          <h4 id={classes['module1-text']}>Introduction to product design</h4>
          <p id={classes['module1-text1']}>
            Study the brief for your milestone project and start noting the questions that...
          </p>
          <div className={classes['module1-sub-container']}>
            <div>
              <img id={classes['module-image-paragraph']} src={Note} />
            </div>
            <div>
              <p id={classes['module-image-paragraph']}>4 Quizzes</p>
            </div>
            <div>
              <img id={classes['module-image-paragraph2']} src={Note} />
            </div>
            <div>
              <p id={classes['module-2-6-image-paragraph2']}>0&#8725;4 Quizzes Attempted</p>
            </div>
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes['module-2-6-container']}>
        <div>
          <h5 id={classes.module}>Module</h5>
          <h2 id={classes.module1}>5</h2>
        </div>
        <div>
          <img id={classes.line} src={Line} />
        </div>
        <div>
          <h4 id={classes['module1-text']}>Introduction to product design</h4>
          <p id={classes['module1-text1']}>
            Study the brief for your milestone project and start noting the questions that...
          </p>
          <div className={classes['module1-sub-container']}>
            <div>
              <img id={classes['module-image-paragraph']} src={Note} />
            </div>
            <div>
              <p id={classes['module-image-paragraph']}>4 Quizzes</p>
            </div>
            <div>
              <img id={classes['module-image-paragraph2']} src={Note} />
            </div>
            <div>
              <p id={classes['module-2-6-image-paragraph2']}>4&#8725;4 Quizzes Attempted</p>
            </div>
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes['module-2-6-container']}>
        <div>
          <h5 id={classes.module}>Module</h5>
          <h2 id={classes.module1}>6</h2>
        </div>
        <div>
          <img id={classes.line} src={Line} />
        </div>
        <div>
          <h4 id={classes['module1-text']}>Introduction to product design</h4>
          <p id={classes['module1-text1']}>
            Study the brief for your milestone project and start noting the questions that...
          </p>
          <div className={classes['module1-sub-container']}>
            <div>
              <img id={classes['module-image-paragraph']} src={Note} />
            </div>
            <div>
              <p id={classes['module-image-paragraph']}>4 Quizzes</p>
            </div>
            <div>
              <img id={classes['module-image-paragraph2']} src={Note} />
            </div>
            <div>
              <p id={classes['module-2-6-image-paragraph2']}>4&#8725;4 Quizzes Attempted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesModule;
