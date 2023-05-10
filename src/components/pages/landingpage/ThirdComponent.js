import React from 'react';
import classes from './LandingPage.module.css';
import Lightning1 from './images/Lightning1.png';
import Lightning2 from './images/Lightning2.png';
import LessonPage from './images/Lesson Page.png';
import Dashboard from './images/Dashboard.png';
import Question from './images/Question-marks.png';
import { Link } from 'react-router-dom';

const ThirdComponent = () => {
  return (
    <div>
      <section className={classes['Third-section-container']}>
        <div className={classes['third-container-heading-container']}>
          <div>
            <img id={classes.Lightning} src={Lightning1} alt="" />
          </div>
          <div>
            <h1 className={classes['third-section-heading']}>Effective learning</h1>
          </div>
          <div>
            <img id={classes.Lightning1} src={Lightning2} alt="" />
          </div>
        </div>
        <div className={classes['second-container-paragraph']}>
          <p>Engaging in training sessions designed by certified mentors is a great way</p>
          <p>
            to ensure that you are receiving high-quality instruction from experienced professionals
          </p>
          <p>who are skilled at teaching and facilitating learning.</p>
          <p id={classes.interactive}>
            Interactive Videos. Informative slides. Self-assessment. Much more.
          </p>
        </div>
        <div className={classes['third-section-image']}>
          <div>
            <img id={classes['third-container-image-1']} src={LessonPage} alt="" />
          </div>
          <div>
            <img id={classes['third-container-image-1']} src={Dashboard} alt="" />
          </div>
        </div>
        <footer>
          <div className={classes['footer-text']}>
            <h2>Interested in being a techie</h2>
            <img className={classes.footerImage} src={Question} alt="" />
          </div>
          <Link to="https://www.stutern.com/">
            <button className={classes['footer-button']}>Start Tech Career</button>
          </Link>
        </footer>
      </section>
    </div>
  );
};

export default ThirdComponent;
