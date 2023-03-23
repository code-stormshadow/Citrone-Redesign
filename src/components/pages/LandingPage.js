import React from 'react';
import Logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portrait from './images/portrait-young-african-woman-with-laptop-white.png';
// import Citrone from './images/citrone.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <>
      <section className="first-container">
        <div className="header-container">
          <img className="logo" src={Logo} alt="" />
          <h2 className="citrone">Citrone</h2>
          <Link to="/login">
            <Button variant="secondary" className="login-button mb-10">
              Log In
            </Button>
          </Link>
        </div>
        <div className="section-landing-1">
          <div className="paragraph-container">
            <h1 className="first-paragraph">
              Delivering a <span className="community">community-first </span>
              learning experience
            </h1>
            <p className="second-paragraph">
              Citrone connects <span className="certified">certified mentors</span> to all
              interested in a tech career. It guarantees a learning experience that transcends a
              real world classroom.
            </p>
            <Link to="/signup">
              <button className="start-career-button">Start Tech Career</button>
            </Link>
          </div>
          <div>
            <img className="portrait" src={Portrait} alt="" />
          </div>
        </div>
      </section>
      <div className="learning-process-container">
        <div className="learning-process-text-container">
          <div className="learning-process-text1">
            <p>Learn online </p>
            <p>at a flexible pace</p>
          </div>
          <div>
            <p>Engage industry certified mentors </p>
            <p>to share ideas to learn faster </p>
          </div>
          <div>
            <p>Collaborate with peers</p>
            <p>to share ideas to learn faster</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
