import Modal from 'react-bootstrap/Modal';
import styles from './/Dashboard.module.css';
import { Link } from 'react-router-dom';
import SubmittedGif from '..//images/submission.gif';

function SubmittedModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.modal}>
      <img src={SubmittedGif} alt="" className={styles.submittedGif} />
      <h2 className={styles.submittedText}>Assignment successfully submitted</h2>
      <div className={styles.buttons}>
        <div>
          {/* eslint-disable-next-line react/prop-types */}
          <button onClick={props.onHide} className={styles.btnEdit}>
            Edit
          </button>
        </div>
        <div>
          <Link to="/course-module-one">
            <button className={styles.btnModule}>Back to module</button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export default SubmittedModal;
