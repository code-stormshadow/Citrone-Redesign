import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Polygon from '../images/polygon.svg';
import styles from './/Dashboard.module.css';
import TimiNotification from '..//images/notificationTimi.png';
import TobbayasPic from '..//images/notificationPicTwo.png';
import Mariam from '..//images/notificationPicThree.png';
import Damee from '..//images/notificationPicFour.png';
import TeamPic from '..//images/notificationTeamPic.png';
import NotificationModal from './NotificationModal';

const Notification = () => {
  // to open the popup
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <img src={Polygon} alt="icon" className={styles.notificationPolygon} />

      <div className={styles.notificationCard}>
        <div className={styles.notificationTitleFlex}>
          <div>
            <h3 className={styles.notificationTitle}>Notifications</h3>
          </div>
          <div>
            <h3 className={styles.notificationMark}>Mark all as read</h3>
          </div>
        </div>

        <hr />

        <div className={styles.notificationPostContainer}>
          <Link to="/lesson-grades" className={styles.link}>
            <div className={styles.notificationPost}>
              <div>
                <img src={TimiNotification} alt="" />
              </div>
              <div className={styles.notificationDetails}>
                <h4>Timmy Adubi</h4>
                <p className={styles.notificationReact}>Reacted to your assignment on ..</p>
                <div className={styles.notificationComment}>Good job, you can do better an..</div>
              </div>
              <div>
                <p className={styles.notificationTime}>10 mins ago</p>
              </div>
            </div>
          </Link>

          <hr />

          <div className={styles.notificationPost}>
            <div>
              <img src={TobbayasPic} alt="" />
            </div>
            <div className={styles.notificationDetails}>
              <h4>Tobbayas</h4>
              <p className={styles.notificationReact}>Mentioned you in a comment on ..</p>
              <div className={styles.notificationComment}>Wow good job, you can do bette..</div>
            </div>
            <div>
              <p className={styles.notificationTime}>2 hours ago</p>
            </div>
          </div>

          <hr />

          <div className={styles.notificationPost}>
            <div>
              <img src={Mariam} alt="" />
            </div>
            <div className={styles.notificationDetails}>
              <h4>Mariam</h4>
              <p className={styles.notificationReact}>Mentioned you in a comment on ..</p>
              <div className={styles.notificationComment}>Good job, you can do better an..</div>
            </div>
            <div>
              <p className={styles.notificationTime} id={styles.notificationTimeColor}>
                8 hours ago
              </p>
            </div>
          </div>

          <hr />

          <div className={styles.notificationPost}>
            <div>
              <img src={Damee} alt="" />
            </div>
            <div className={styles.notificationDetails}>
              <h4>Damee</h4>
              <p className={styles.notificationReact}>Reacted to your assignment on ..</p>
              <div className={styles.notificationComment}>Wow good job, you can do better an..</div>
            </div>
            <div>
              <p className={styles.notificationTime}>2 days ago</p>
            </div>
          </div>

          <hr />

          <div className={styles.notificationPost}>
            <div>
              <img src={TeamPic} alt="" />
            </div>
            <div className={styles.notificationDetails}>
              <h4>Bravo Team</h4>
              <p className={styles.notificationReact}>Tobi: reacted ✌ to a comment on ..</p>
              <div className={styles.notificationComment}>Module 1 Lesson 1 assignment..</div>
            </div>
            <div>
              <p className={styles.notificationTime} id={styles.notificationTimeColor}>
                2 days ago
              </p>
            </div>
          </div>
        </div>

        <div className={styles.notificationLinkContainer}>
          <Link to="" className={styles.notificationLink} onClick={() => setModalShow(true)}>
            View all
          </Link>
        </div>
      </div>
      <NotificationModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Notification;
