import Modal from 'react-bootstrap/Modal';
import styles from './/Dashboard.module.css';
import NotificationIcon from '..//images/notificationIcon.svg';
import { useState } from 'react';
// import SubmittedModal from './SubmittedModal';
import { Link } from 'react-router-dom';
import Logo from '..//images/logo-spin.png';
import TimeLine from '..//images/timeline.png';
import TobbayasPic from '..//images/notificationPicTwo.png';
import TimiNotification from '..//images/notificationTimi.png';
import Damee from '..//images/notificationPicFour.png';

function NotificationModal(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <Modal
        id={styles.modalWrapper}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <div className={styles.notificationFlex}>
          <div>
            <h2 className={styles.notificationPopTitle}>
              Notifications{' '}
              <object data={NotificationIcon} className={styles.notificationIcon}></object>
            </h2>
          </div>
          <div className={styles.notificationClose}>
            <Link to="" className={styles.notificationModalLink}>
              X Close
            </Link>
          </div>
        </div>

        <div className={styles.tabsContainer}>
          <Link
            className={`${styles.modalLink} ${
              toggleState === 1 ? styles.activeModalLink : 'styles.modalLink'
            }`}
            onClick={() => toggleTab(1)}>
            <div className={styles.tabs}>Unread</div>
          </Link>
          <Link
            className={`${styles.modalLink} ${
              toggleState === 2 ? styles.activeModalLink : 'styles.modalLink'
            }`}
            onClick={() => toggleTab(2)}>
            <div className={styles.tabs}>All</div>
          </Link>
          <div className={styles.tabMark}>Mark all as read</div>
        </div>

        <hr className={styles.notificationLine} />

        <div className={styles.modalNotification}>
          <div className={styles.contentTabs}>
            <div
              className={`${styles.content} ${
                toggleState === 1 ? styles.activeContent : 'styles.content'
              }`}>
              <div className={styles.modalNotificationPost} id={styles.topCard}>
                <div>
                  <img src={Logo} alt="" className={styles.modalPic} />
                </div>
                <div className={styles.modalNotificationDetails}>
                  <h4>Citrone</h4>
                  <p className={styles.modalNotificationReact}>Unlocked Module 2 lessons</p>
                  <div className={styles.modalNotificationComment}>
                    You can now access Module 1 lessons and complete its task
                  </div>
                </div>
                <div className={styles.timeLineContent}>
                  <img src={TimeLine} alt="" />
                  <p className={styles.modalNotificationTime}>5 hours ago</p>
                </div>
              </div>

              <hr className={styles.notificationLine} id={styles.secondLine} />

              <div className={styles.modalNotificationPost} id>
                <div>
                  <img src={TobbayasPic} alt="" className={styles.modalPic} />
                </div>
                <div className={styles.modalNotificationDetails}>
                  <h4>Tobbayas</h4>
                  <p className={styles.modalNotificationReact}>
                    Mentioned you in a comment in Bravo Team 💻💻
                  </p>
                  <div className={styles.modalNotificationComment}>
                    Wow good job, you can do better and be more careful with your design
                    heuristics...
                  </div>
                </div>
                <div className={styles.timeLineContent}>
                  <img src={TimeLine} alt="" />
                  <p className={styles.modalNotificationTime}>2 days ago</p>
                </div>
              </div>

              <hr className={styles.notificationLine} id={styles.secondLine} />

              <div className={styles.modalNotificationPost} id>
                <div>
                  <img src={TimiNotification} alt="" className={styles.modalPic} />
                </div>
                <div className={styles.modalNotificationDetails}>
                  <h4>Timmy Adubi</h4>
                  <p className={styles.modalNotificationReact}>
                    Reacted to your assignment on Module 1 Lesson 2
                  </p>
                  <div className={styles.modalNotificationComment}>
                    Good job, you can do better and be more careful with your design heuristics...
                  </div>
                </div>
                <div className={styles.timeLineContent}>
                  <img src={TimeLine} alt="" />
                  <p className={styles.modalNotificationTime}>10 mins ago</p>
                </div>
              </div>

              <div className={styles.modalNotificationPost}>
                <div>
                  <img src={Logo} alt="" className={styles.modalPic} />
                </div>
                <div className={styles.modalNotificationDetails}>
                  <h4>Citrone</h4>
                  <p className={styles.modalNotificationReact}>Graded assignments</p>
                  <div className={styles.modalNotificationComment}>
                    Module 1 lesson 2, 3 and 4 assignments have been graded successfully.
                  </div>
                </div>
                <div className={styles.timeLineContent}>
                  <img src={TimeLine} alt="" />
                  <p className={styles.modalNotificationTime}>5 hours ago</p>
                </div>
              </div>

              <hr className={styles.notificationLine} id={styles.secondLine} />

              <div className={styles.modalNotificationPost}>
                <div>
                  <img src={TobbayasPic} alt="" className={styles.modalPic} />
                </div>
                <div className={styles.modalNotificationDetails}>
                  <h4>Tobbayas</h4>
                  <p className={styles.modalNotificationReact}>
                    Mentioned you in a comment in Bravo Team 💻💻
                  </p>
                  <div className={styles.modalNotificationComment}>
                    Wow good job, you can do better and be more careful with your design
                    heuristics...
                  </div>
                </div>
                <div className={styles.timeLineContent}>
                  <img src={TimeLine} alt="" />
                  <p className={styles.modalNotificationTime}>2 days ago</p>
                </div>
              </div>

              <hr className={styles.notificationLine} id={styles.secondLine} />

              <div className={styles.modalNotificationPost}>
                <div>
                  <img src={Damee} alt="" className={styles.modalPic} />
                </div>
                <div className={styles.modalNotificationDetails}>
                  <h4>Citrone</h4>
                  <p className={styles.modalNotificationReact}>Graded assignments</p>
                  <div className={styles.modalNotificationComment}>
                    Module 1 lesson 2, 3 and 4 assignments have been graded successfully.
                  </div>
                </div>
                <div className={styles.timeLineContent}>
                  <img src={TimeLine} alt="" />
                  <p className={styles.modalNotificationTime}>2 days ago</p>
                </div>
              </div>

              <hr className={styles.notificationLine} id={styles.secondLine} />

              <div className={styles.modalNotificationPost}>
                <div>
                  <img src={Logo} alt="" className={styles.modalPic} />
                </div>
                <div className={styles.modalNotificationDetails}>
                  <h4>Citrone</h4>
                  <p className={styles.modalNotificationReact}>Unlocked Module 2 lessons</p>
                  <div className={styles.modalNotificationComment}>
                    You can now access Module 1 lessons and complete its task
                  </div>
                </div>
                <div className={styles.timeLineContent}>
                  <img src={TimeLine} alt="" />
                  <p className={styles.modalNotificationTime}>5 hours ago</p>
                </div>
              </div>

              <hr className={styles.notificationLine} id={styles.secondLine} />

              <div className={styles.modalNotificationPost}>
                <div>
                  <img src={Logo} alt="" className={styles.modalPic} />
                </div>
                <div className={styles.modalNotificationDetails}>
                  <h4>Citrone</h4>
                  <p className={styles.modalNotificationReact}>Graded assignments</p>
                  <div className={styles.modalNotificationComment}>
                    Module 1 lesson 2, 3 and 4 assignments have been graded successfully.
                  </div>
                </div>
                <div className={styles.timeLineContent}>
                  <img src={TimeLine} alt="" />
                  <p className={styles.modalNotificationTime}>1 day ago</p>
                </div>
              </div>

              <hr className={styles.notificationLine} id={styles.secondLine} />

              <div className={styles.modalNotificationPost}>
                <div>
                  <img src={TobbayasPic} alt="" className={styles.modalPic} />
                </div>
                <div className={styles.modalNotificationDetails}>
                  <h4>Tobbayas</h4>
                  <p className={styles.modalNotificationReact}>
                    Mentioned you in a comment in Bravo Team 💻💻
                  </p>
                  <div className={styles.modalNotificationComment}>
                    Wow good job, you can do better and be more careful with your design
                    heuristics...
                  </div>
                </div>
                <div className={styles.timeLineContent}>
                  <img src={TimeLine} alt="" />
                  <p className={styles.modalNotificationTime}>2 days ago</p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.content} ${
                toggleState === 2 ? styles.activeContent : 'styles.content'
              }`}>
              <h2>Content 2</h2>
              <p>handleFileUpload</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NotificationModal;
