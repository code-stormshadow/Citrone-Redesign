/* import Button from 'react-bootstrap/Button'; */
import ModalIcon from '../images/modal-icon.svg';
import Modal from 'react-bootstrap/Modal';
import styles from './/Dashboard.module.css';
import { Link } from 'react-router-dom';

function LogOutModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.modal}>
      <h2 className={styles.logOutText}>Log Out?</h2>
      <object data={ModalIcon}></object>
      <div className={styles.buttons}>
        <div>
          {/* eslint-disable-next-line react/prop-types */}
          <button onClick={props.onHide} className={styles.btnNo}>
            No
          </button>
        </div>
        <div>
          <Link to="/">
            <button className={styles.btnYes}>Yes</button>
          </Link>
        </div>
      </div>
      {/* <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body> */}
    </Modal>
  );
}

export default LogOutModal;
