import React from 'react';
import classes from './LandingPage.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MultiCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      /* the naming can be any, depends on you. */
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.4,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <Carousel
        className={classes['carousel-image-container']}
        responsive={responsive}
        swipeable={true}
        showDots={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={['mobile']}>
        <div className={classes['carousel-image1']} id={classes['carousel-images']}>
          <h4>UI/UX Design</h4>
          <p>
            {`You'll learn how to transform user research to high-fidelity interactive designs...`}
          </p>
          <Link
            style={{ textDecoration: 'none' }}
            className={classes['carousel-links']}
            to="https://www.stutern.com/beginners-course/ui_ux_design.html">
            <div id={classes['carousel-image-button']}>
              <div>
                <p>Learn more</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </Link>
        </div>
        <div className={classes['carousel-image2']} id={classes['carousel-images']}>
          <h4>Frontend Development</h4>
          <p>
            {`You’ll`} build exciting portfolios while learning the fundamentals of HTML, CSS...
          </p>
          <Link
            style={{ textDecoration: 'none' }}
            className={classes['carousel-links']}
            to="https://www.stutern.com/intermediate-course/frontend_development.html">
            <div id={classes['carousel-image-button']}>
              <div>
                <p>Learn more</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </Link>
        </div>
        <div className={classes['carousel-image3']} id={classes['carousel-images']}>
          <h4>Backend Development</h4>
          <p>{`You'll learn the fundamentals of backend development, build a job ready port...`}</p>
          <Link
            style={{ textDecoration: 'none' }}
            className={classes['carousel-links']}
            to="https://www.stutern.com/intermediate-course/backend_development.html">
            <div id={classes['carousel-image-button']}>
              <div>
                <p>Learn more</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </Link>
        </div>
        <div className={classes['carousel-image4']} id={classes['carousel-images']}>
          <h4>Data Science</h4>
          <p>{` You’ll learn the fundamentals of Python, data science and machine learning...`}</p>
          <Link
            style={{ textDecoration: 'none' }}
            className={classes['carousel-links']}
            to="https://www.stutern.com/intermediate-course/data_science.html">
            <div id={classes['carousel-image-button']}>
              <div>
                <p>Learn more</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </Link>
        </div>
        <div className={classes['carousel-image5']} id={classes['carousel-images']}>
          <h4>Mobile Development</h4>
          <p>{`You'll learn the best practices for mobile development, build a portfolio of...`}</p>
          <Link
            style={{ textDecoration: 'none' }}
            className={classes['carousel-links']}
            to="https://www.stutern.com/intermediate-course/mobile_development.html">
            <div id={classes['carousel-image-button']}>
              <div>
                <p>Learn more</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </Link>
        </div>
        <div className={classes['carousel-image6']} id={classes['carousel-images']}>
          <h4>Software Testing</h4>
          <p>
            {`You'll learn to ensure that products match expected requirements while free of defects.`}
          </p>
          <Link style={{ textDecoration: 'none' }} className={classes['carousel-links']} to="">
            <div id={classes['carousel-image-button']}>
              <div>
                <p>Learn more</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </Link>
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default MultiCarousel;
/* { carouselImages, setcarouselImages } */
