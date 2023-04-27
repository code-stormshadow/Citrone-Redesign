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
    <div className="container flex-container">
      <div className="row">
        <div className="col flex-item">
          <p className="flex-p">
            Join Live classes <object data={BlackArrow} className="black-arrow"></object>
          </p>
          <object data={RecordingIcon} className="live-icon"></object>

          <div className="d-flex justify-content-between live-details">
            <div>
              <object data={CircleColored}></object>
              <span>Completed</span>
            </div>

            <div>
              <object data={CircleGrey} className="circle-grey"></object>
              <span className="ongoing">Ongoing</span>
            </div>
          </div>
        </div>

        <div className="col flex-item">
          <Link to="./completed-modules" className={styles.link}>
            <p className="flex-p">
              Completed Modules <object data={BlackArrow} className="black-arrow"></object>
            </p>
            <object data={CirclePercent} className="live-icon"></object>

            <div className="d-flex justify-content-between live-details">
              <div>
                <object data={CircleColored}></object>
                <span>Completed</span>
              </div>

              <div>
                <object data={CircleGrey}></object>
                <span>Ongoing</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="col flex-item">
          <p className="flex-p">
            Completed Assig... <object data={BlackArrow} className="black-arrow"></object>
          </p>
          <object data={CirclePercent2} className="live-icon"></object>

          <div className="d-flex justify-content-between live-details">
            <div>
              <object data={CircleColored}></object>
              <span>Completed</span>
            </div>

            <div>
              <object data={CircleGrey}></object>
              <span>Ongoing</span>
            </div>
          </div>
        </div>

        <div className="col flex-item">
          <p className="flex-p">
            Completed Quizz... <object data={BlackArrow} className="black-arrow"></object>
          </p>
          <object data={CirclePercent} className="live-icon"></object>

          <div className="d-flex justify-content-between live-details">
            <div>
              <object data={CircleColored}></object>
              <span>Completed</span>
            </div>

            <div>
              <object data={CircleGrey}></object>
              <span>Ongoing</span>
            </div>
          </div>
        </div>

        <div className="col flex-item">
          <p className="flex-p">Course Activities</p>
          <object data={CirclePercent3} className="live-icon"></object>

          <div className="d-flex justify-content-between live-details">
            <div>
              <object data={CircleColored}></object>
              <span>Completed</span>
            </div>

            <div>
              <object data={CircleGrey}></object>
              <span>Ongoing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTime;
