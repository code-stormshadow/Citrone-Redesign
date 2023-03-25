import React from 'react';
import Logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portrait from './images/portrait-young-african-woman-with-laptop-white.png';
import Monitor from './images/Monitor.jpg';
import People from './images/People.jpg';
import People2 from './images/People2.jpg';
import Line from './images/Line.png';
import Carousel from 'react-bootstrap/Carousel';
import Ui from './images/UiUxImage.png';
import Frontend from './images/Frontend.png';
import Backend from './images/Backend.png';
// import DataScience from './images/DataScience.png';
// import MobileDev from './images/MobileDev.png';
// import SotwareTesting from './images/SoftwareTesting.png';
// import Citrone from './images/citrone.png';
import Student from './images/Student & Tutors.png';
import Questions from './images/QUIZ questions 1.png';
import LessonPage from './images/Lesson Page.png';
import Dashboard from './images/Dashboard.png';
import classes from './LandingPage.module.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className={classes.landingPage}>
      <section className={classes['first-container']}>
        <div className={classes['header-container']}>
          <img className={classes.logo} src={Logo} alt="" />
          <h2 className={classes.citrone}>Citrone</h2>
          <Link to="/login">
            <button className={classes['login-button']}>Log In</button>
          </Link>
        </div>
        <div className={classes['section-landing-1']}>
          <div className={classes['paragraph-container']}>
            <h1 className={classes['first-paragraph']}>
              Delivering a <span className={classes.community}>community-first </span>
              learning experience
            </h1>
            <p className={classes['second-paragraph']}>
              Citrone connects <span className={classes.certified}>certified mentors</span> to all
              interested in a tech career. It guarantees a learning experience that transcends a
              real world classroom.
            </p>
            <Link to="/signup">
              <button className={classes['start-career-button']}>Start Tech Career</button>
            </Link>
          </div>
          <div>
            <img className={classes.portrait} src={Portrait} alt="" />
          </div>
        </div>
      </section>
      <div className={classes['learning-process-container']}>
        <div className={classes['learning-process-text-container']}>
          <div>
            <img src={Monitor} alt="" />
          </div>
          <div className={classes['learning-process-text1']}>
            <p id={classes['learning-process-text']}>Learn online </p>
            <p id={classes['learning-process-text2']}>at a flexible pace</p>
          </div>
          <div>
            <img src={Line} alt="" />
          </div>
          <div>
            <img src={People} alt="" />
          </div>
          <div>
            <p id={classes['learning-process-text']}>Engage industry certified mentors </p>
            <p id={classes['learning-process-text2']}>to share ideas to learn faster </p>
          </div>
          <div>
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
        <>
          <Carousel slide={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id={classes['carousel-image']}
                src={Ui}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id={classes['carousel-image']}
                src={Frontend}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id={classes['carousel-image']}
                src={Backend}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </>
        <div>
          <h2 id={classes['second-container-heading']}>Community-first learning</h2>
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
      <section className={classes['Third-section-container']}>
        <h1 className={classes['third-section-heading']}>Effective learning</h1>
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
            <img src={LessonPage} alt="" />
          </div>
          <div>
            <img src={Dashboard} alt="" />
          </div>
        </div>
        {/* <footer>

        </footer> */}
      </section>
    </div>
  );
};

export default LandingPage;
