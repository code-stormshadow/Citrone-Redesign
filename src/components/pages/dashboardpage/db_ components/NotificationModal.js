import Modal from 'react-bootstrap/Modal';
import styles from './/Dashboard.module.css';
import NotificationIcon from '..//images/notificationIcon.svg';
/* import { useState } from 'react';
import SubmittedModal from './SubmittedModal'; */
import { Link } from 'react-router-dom';

function NotificationModal(props) {
  // const [toggleState, setToggleState] = useState(1);

  // const toggleTab = () => {

  // }
  return (
    <div className={styles.modalNotification}>
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
          <div className={styles.tabs}>Unread</div>
          <div className={styles.tabs}>All</div>
          <div className={styles.tabMark}>Mark all as read</div>
        </div>
        <hr className={styles.notificationLine} />
        <div className={styles.contentTabs}>
          <div className={styles.content}>
            <h2>Content 1</h2>
            <p>handleFileUpload</p>
          </div>
          <div className={styles.content}>
            <h2>Content 1</h2>
            <p>handleFileUpload</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NotificationModal;
