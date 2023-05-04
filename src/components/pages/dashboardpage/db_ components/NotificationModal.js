import Modal from 'react-bootstrap/Modal';
import styles from './/Dashboard.module.css';
import NotificationIcon from '..//images/notificationIcon.svg';
// import { useState } from 'react';
// import SubmittedModal from './SubmittedModal';

function NotificationModal(props) {
  return (
    <div className={styles.modalNotification}>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <div className={styles.notificationFlex}>
          <div>
            <h2 className={styles.notificationPopTitle}>
              Notifications{' '}
              <object data={NotificationIcon} className={styles.notificationIcon}></object>
            </h2>
          </div>
          <div className={styles.notificationClose}>
            <p>
              <span className={styles.close}>X</span> Close
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NotificationModal;
