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
// import { useState } from 'react';

const SecondComponent = () => {
  // const [carouselImages, setCarouselImages] = useState([
  //   {
  //     id: 1,
  //     imageUrl: './images/UiUxImage.png',
  //     heading: ' UI/UX Design',
  //     paragraph:
  //       "You'll learn how to transform user research to high-fidelity interactive designs..."
  //   },
  //   {
  //     id: 2,
  //     imageUrl: './images/Frontend.png',
  //     heading: 'Frontend Development',
  //     paragraph: 'You’ll build exciting portfolios while learning the fundamentals of HTML, CSS...'
  //   },
  //   {
  //     id: 3,
  //     imageUrl: './images/Backend.png',
  //     heading: 'Backend Development',
  //     paragraph: "You'll learn the fundamentals of backend development, build a job ready port..."
  //   },
  //   {
  //     id: 4,
  //     imageUrl: './images/DataScience.png',
  //     heading: 'Data Science',
  //     paragraph: 'You’ll learn the fundamentals of Python, data science and machine learning...'
  //   },
  //   {
  //     id: 5,
  //     imageUrl: './images/MobileDev.png',
  //     heading: 'Mobile Development',
  //     paragraph: "You'll learn the best practices for mobile development, build a portfolio of..."
  //   },
  //   {
  //     id: 6,
  //     imageUrl: './images/SoftwareTesting.png',
  //     heading: 'Software Testing',
  //     paragraph:
  //       "You'll learn to ensure that products match expected requirements while free of defects."
  //   }
  // ]);

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
            <img src={Student} alt="" />
          </div>
          <div>
            <img src={Questions} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondComponent;

// carouselImages={carouselImages} setCarouselImages={setCarouselImages}
