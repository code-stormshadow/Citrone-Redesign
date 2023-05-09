import Modal from 'react-bootstrap/Modal';
import styles from './/Dashboard.module.css';
import { useState } from 'react';
import ResubmittedModal from './ResubmittedModal';

function Resubmit(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.modal}>
      <h2 className={styles.submitQuestion}>Re-submit?</h2>
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
      <ResubmittedModal show={modalShow} onHide={() => setModalShow(false)} />
    </Modal>
  );
}

export default Resubmit;
