import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import './/Dashboard.css';
import BlackArrow from '../images/black-sidearrow.svg';
import CardImage from '../images/card-image.png';
// import StuternName from '../db_ components/images/stutern.svg';
// import CourseInView from '../db_ components/images/course-in-view.svg';

function CourseProgress() {
  return (
    <div>
      <h2 className="courses">Course In Progress</h2>
      <div className="card-flex">
        <Card className="card-wrapper overlay">
          <Card.Img variant="top" src={CardImage} className="cardImg" />
          <Card.Body>
            <div className="card_body_flex">
              <div>
                <Card.Title className="card_title">1.3 UI/UX Design</Card.Title>
                <Card.Text className="card_text">Intermediate Level</Card.Text>
              </div>
              <div>
                <img src={BlackArrow} alt="Arrow" className="card_black_arrow" />
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="card-wrapper2">
          <Card.Img variant="top" src={CardImage} className="cardImg" />
          <div className="inView"></div>
          <Card.Body>
            <div className="card_body_flex">
              <div>
                <Card.Title className="card_title">1.3 UI/UX Design</Card.Title>
                <Card.Text className="card_text">Intermediate Level</Card.Text>
              </div>
              <div>
                <img src={BlackArrow} alt="Arrow" className="card_black_arrow" />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CourseProgress;
