import Card from 'react-bootstrap/Card';
/* import Image from 'react-bootstrap/Image'; */
import styles from './/Dashboard.module.css';
/* import './/Dashboard.css'; */
import BlackArrow from '../images/black-sidearrow.svg';
import CardImage from '../images/card-image.png';
/* import StuternName from '../db_ components/images/stutern.svg'; */
/* import CourseInView from '../db_ components/images/course-in-view.svg'; */

function CourseProgress() {
  return (
    <div>
      <h2 className={styles.courses}>Course In Progress</h2>
      <div className={styles.cardFlex}>
        <Card className={styles.cardWrapper}>
          <Card.Img variant="top" src={CardImage} className={styles.cardImg} />
          <Card.Body>
            <div className={styles.card_body_flex}>
              <div>
                <Card.Title className={styles.card_title}>1.3 UI/UX Design</Card.Title>
                <Card.Text className={styles.card_text}>Intermediate Level</Card.Text>
              </div>
              <div>
                <img src={BlackArrow} alt="Arrow" className={styles.card_black_arrow} />
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className={styles.cardWrapper2}>
          <Card.Img variant="top" src={CardImage} className={styles.cardImg} />
          <div className={styles.inView}></div>
          <Card.Body>
            <div className={styles.card_body_flex}>
              <div>
                <Card.Title className={styles.card_title}>1.3 UI/UX Design</Card.Title>
                <Card.Text className={styles.card_text}>Intermediate Level</Card.Text>
              </div>
              <div>
                <img src={BlackArrow} alt="Arrow" className={styles.card_black_arrow} />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CourseProgress;
