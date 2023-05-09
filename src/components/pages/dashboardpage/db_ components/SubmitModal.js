import Modal from 'react-bootstrap/Modal';
import styles from './/Dashboard.module.css';
import { useState } from 'react';
import SubmittedModal from './SubmittedModal';

function SubmitModal(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.modal}>
      <h2 className={styles.submitQuestion}>Are you sure you want to submit?</h2>
      <div className={styles.buttons}>
        <div>
          {/* eslint-disable-next-line react/prop-types */}
          <button onClick={props.onHide} className={styles.btnNo}>
            No
          </button>
        </div>
        <div>
          <button className={styles.btnYes} onClick={() => setModalShow(true)}>
            Yes
          </button>
        </div>
      </div>
      <SubmittedModal show={modalShow} onHide={() => setModalShow(false)} />
    </Modal>
  );
}

export default SubmitModal;
