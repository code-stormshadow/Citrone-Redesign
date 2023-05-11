import React from 'react';
import classes from './LandingPage.module.css';
import Logo from './images/logo.png';
import Cap from './images/Cap.png';
import Tail from './images/Tail.png';
import Plane from './images/Plane.png';
import Portrait from './images/portrait-young-african-woman-with-laptop-white.png';
import { Link } from 'react-router-dom';

const FirstComponent = () => {
  return (
    <section className={classes['first-container']}>
      <div className={classes['header-container']}>
        <div className={classes['logo-citrone-container']}>
          <img className={classes.logo} src={Logo} alt="" />
          <h2 className={classes.citrone}>Citrone</h2>
        </div>
        <div className={classes['login-container']}>
          <Link to="/login">
            <button className={classes['login-button']}>Log In</button>
          </Link>
        </div>
      </div>
      <div className={classes['section-landing-1']}>
        <div className={classes['paragraph-container']}>
          <h1 className={classes['first-paragraph']}>
            Delivering a <span className={classes.community}>community-first </span>
            learning experience
          </h1>
          <p className={classes['second-paragraph']}>
            Citrone connects <span className={classes.certified}>certified mentors</span> to all
            interested in a tech career. It guarantees a learning experience that transcends a real
            world classroom.
          </p>
          <Link to="/signup">
            <button className={classes['start-career-button']}>Get Started</button>
          </Link>
        </div>
        <div>
          <img className={classes.tail} id={classes['tail-plane']} src={Tail} alt="" />
        </div>
        <div>
          <img className={classes.plane} id={classes['tail-plane']} src={Plane} alt="" />
        </div>
        <div>
          <img className={classes.portrait} src={Portrait} alt="" />
        </div>
        <div>
          <img className={classes.cap} src={Cap} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FirstComponent;
