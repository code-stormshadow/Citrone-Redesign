import React from 'react';
import styles from './/Dashboard.module.css';
import '../db_ components/Dashboard.css';
import BlackArrow from '../images/black-sidearrow.svg';
import RecordingIcon from '../images/recording.png';
import CircleColored from '../images/circle.svg';
import CircleGrey from '../images/circle-grey.svg';
import CirclePercent from '../images/circle-percent.svg';
import CirclePercent2 from '../images/circle-percent2.svg';
import CirclePercent3 from '../images/circle-percent3.svg';
import { Link } from 'react-router-dom';

const RealTime = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBox}>
        <p>
          <span className={styles.cardText}>Join Live classes</span>
          <img src={BlackArrow} alt="" className={styles.blackArrow} />
        </p>
        <img src={RecordingIcon} className={styles.liveIcon} />
      </div>

      <Link to="/completed-modules" className={styles.link}>
        <div className={styles.cardBox}>
          <p>
            <span className={styles.cardText}>Completed Modules</span>
            <img src={BlackArrow} alt="" className={styles.blackArrow} />
          </p>
          <img src={CirclePercent} className={styles.liveIcon} />

          <div className={styles.liveDetails}>
            <div>
              <img src={CircleColored} alt="" className={styles.cardCircle} />
              <span className={styles.cardSpan}>Completed</span>
            </div>

            <div>
              <img src={CircleGrey} alt="Dot" className={styles.cardCircle} />
              <span className={styles.cardSpan}>Ongoing</span>
            </div>
          </div>
        </div>
      </Link>

      <Link to="" className={styles.link}>
        <div className={styles.cardBox}>
          <p>
            <span className={styles.cardText}>Completed Assig...</span>
            <img src={BlackArrow} alt="" className={styles.blackArrow} />
          </p>
          <img src={CirclePercent2} className={styles.liveIcon} />

          <div className={styles.liveDetails}>
            <div>
              <img src={CircleColored} alt="" className={styles.cardCircle} />
              <span className={styles.cardSpan}>Completed</span>
            </div>

            <div>
              <img src={CircleGrey} alt="Dot" className={styles.cardCircle} />
              <span className={styles.cardSpan}>Ongoing</span>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/completed-modules" className={styles.link}>
        <div className={styles.cardBox}>
          <p>
            <span className={styles.cardText}>Completed Quiz...</span>
            <img src={BlackArrow} alt="" className={styles.blackArrow} />
          </p>
          <img src={CirclePercent2} className={styles.liveIcon} />

          <div className={styles.liveDetails}>
            <div>
              <img src={CircleColored} alt="" className={styles.cardCircle} />
              <span className={styles.cardSpan}>Completed</span>
            </div>

            <div>
              <img src={CircleGrey} alt="Dot" className={styles.cardCircle} />
              <span className={styles.cardSpan}>Ongoing</span>
            </div>
          </div>
        </div>
      </Link>

      <div className={styles.cardBox}>
        <p>
          <span className={styles.cardText}>Course Activities</span>
          <img src={BlackArrow} alt="" className={styles.blackArrow} />
        </p>
        <img src={CirclePercent3} className={styles.liveIcon} />

        <div className={styles.liveDetails}>
          <div>
            <img src={CircleColored} alt="" className={styles.cardCircle} />
            <span className={styles.cardSpan}>Completed</span>
          </div>

          <div>
            <img src={CircleGrey} alt="Dot" className={styles.cardCircle} />
            <span className={styles.cardSpan}>Ongoing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTime;
