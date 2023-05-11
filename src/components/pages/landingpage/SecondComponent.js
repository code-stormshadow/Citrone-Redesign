import React from 'react';
import classes from './LandingPage.module.css';
import Monitor from './images/Monitor.jpg';
import People from './images/People.jpg';
import People2 from './images/People2.jpg';
import Line from './images/Line.png';
import House from './images/House.png';
import Student from './images/Student & Tutors.png';
import Questions from './images/QUIZ questions 1.png';
import Carousel from './MultiCarousel';

const SecondComponent = () => {
  return (
    <div>
      <div className={classes['learning-process-container']}>
        <div className={classes['learning-process-text-container']}>
          <div>
            <img src={Monitor} alt="" />
          </div>
          <div className={classes['learning-process-text1']}>
            <p id={classes['learning-process-text']}>Learn online </p>
            <p id={classes['learning-process-text2']}>at a flexible pace</p>
          </div>
          <div className={classes.line}>
            <img src={Line} alt="" />
          </div>
          <div>
            <img src={People} alt="" />
          </div>
          <div>
            <p id={classes['learning-process-text']}>Engage industry certified mentors </p>
            <p id={classes['learning-process-text2']}>to share ideas to learn faster </p>
          </div>
          <div className={classes.line}>
            <img src={Line} alt="" />
          </div>
          <div>
            <img src={People2} alt="" />
          </div>
          <div>
            <p id={classes['learning-process-text']}>Collaborate with peers</p>
            <p id={classes['learning-process-text2']}>to share ideas to learn faster</p>
          </div>
        </div>
      </div>
      <section className={classes['second-container']}>
        <h2 id={classes['second-container-heading']}>Our course selection</h2>
        <Carousel />
        <div>
          <div className={classes['second-container-heading-container']}>
            <div>
              <h2 id={classes['second-container-heading']}>Community-first learning</h2>
            </div>
            <div>
              <img className={classes['second-container-heading-image']} src={House} alt="" />
            </div>
          </div>
          <div className={classes['second-container-paragraph']}>
            <p>
              Encouraging a community-first learning experience can be highly beneficial for
              students
            </p>
            <p>as it creates a sense of connection and support that can enhance</p>
            <p>their overall educational experience.</p>
          </div>
        </div>
        <div className={classes['second-container-image-container']}>
          <div>
            <img id={classes['second-container-image']} src={Student} alt="" />
          </div>
          <div>
            <img id={classes['second-container-image']} src={Questions} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondComponent;
