import NavBar from './db_ components/NavBar';
import SideNavBar from './db_ components/SideNavBar';
import Accordion from 'react-bootstrap/Accordion';
// import PlusCircle from '../dashboardpage/images/PlusCircle.svg';
// import MinusCircle from '../dashboardpage/images/MinusCircle.svg';
import styles from './db_ components/Dashboard.module.css';

const Faq = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={styles.faqWrapper}>
          <div className={styles.faqBanner}></div>
          <Accordion defaultActiveKey="0" id={styles.accordionWrapper}>
            <Accordion.Item eventKey="0">
              <Accordion.Header
                className={styles.accordionHeader}
                style={{ background: '#FEF2F2' }}>
                <h3 className={styles.faqHeader}>
                  How do I upload a file as an assignment submission on Citrone?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className={styles.accordionText}>
                  If your tutor allows file uploads as a submission type, you can upload a file from
                  your computer as an assignment submission. You can also upload a file from Google
                  Drive.
                </p>
                <span className={styles.accordionNote}>Note:</span>
                <ul className={styles.accordionText}>
                  <li>Citrone does not support file uploads larger than 5 GB.</li>
                  <li>
                    If enabled in your account, Citrone plays a celebration animation when you
                    submit an assignment on time. However, if you prefer, you can disable this
                    feature setting in your user settings.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h2 className={styles.faqHeader}>How do I view Assignments?</h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>Body</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h2 className={styles.faqHeader}>How do I view Assignments?</h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>Body</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h2 className={styles.faqHeader}>How do I view Assignments?</h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>Body</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h2 className={styles.faqHeader}>How do I view Assignments?</h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>Body</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <h2 className={styles.faqHeader}>How do I view Assignments?</h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>Body</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <h2 className={styles.faqHeader}>How do I view Assignments?</h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>Body</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <h2 className={styles.faqHeader}>How do I view Assignments?</h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>Body</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <h2 className={styles.faqHeader}>How do I view Assignments?</h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>Body</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
