import NavBar from './db_ components/NavBar';
import SideNavBar from './db_ components/SideNavBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PlusCircle from '../dashboardpage/images/PlusCircle.svg';
import MinusCircle from '../dashboardpage/images/MinusCircle.svg';
import styles from './db_ components/Dashboard.module.css';
import YoungWoman from './images/youngwoman.png';
import QuestionMark from './images/questionmark.svg';

const Faq = () => {
  /* create a separate isActive state for each accordion item by creating an array of objects,
  where each object represents an accordion item and has its own isActive state.
  loop through the array and render the accordion items dynamically. */
  const [accordionItems, setAccordionItems] = useState([
    {
      id: 1,
      question: 'How do I view Assignments?',
      answer: 'If your tutor allows file uploads as a submission type, you can upload a file...',
      isActive: false
    },
    {
      id: 2,
      question: 'How do I upload a file as an assignment submission on Citrone?',
      answer: 'If your tutor allows file uploads as a submission type, you can upload a file...',
      isActive: false
    },
    {
      id: 3,
      question: 'How do I view Assignments?',
      answer: 'If your tutor allows file uploads as a submission type, you can upload a file...',
      isActive: false
    },
    {
      id: 4,
      question: 'How do I view Assignments?',
      answer: 'If your tutor allows file uploads as a submission type, you can upload a file...',
      isActive: false
    },
    {
      id: 5,
      question: 'How do I view Assignments?',
      answer: 'If your tutor allows file uploads as a submission type, you can upload a file...',
      isActive: false
    },
    {
      id: 6,
      question: 'How do I view Assignments?',
      answer: 'If your tutor allows file uploads as a submission type, you can upload a file...',
      isActive: false
    },
    {
      id: 7,
      question: 'How do I view Assignments?',
      answer: 'If your tutor allows file uploads as a submission type, you can upload a file...',
      isActive: false
    },
    {
      id: 8,
      question: 'How do I view Assignments?',
      answer: 'If your tutor allows file uploads as a submission type, you can upload a file...',
      isActive: false
    },
    {
      id: 9,
      question: 'How do I view Assignments?',
      answer: 'If your tutor allows file uploads as a submission type, you can upload a file...',
      isActive: false
    },
    {
      id: 10,
      question: 'How do I view Assignments?',
      answer: 'If your tutor allows file uploads as a submission type, you can upload a file...',
      isActive: false
    }
  ]);

  /* function to update the state of an array called accordionItems by mapping through each item in the array and
  updating the isActive property based on the itemId argument. the function checks if the id of the current item is
  the same as the itemID. If true set the isActive property to false and vice versa then update the state of accordionItems using the setAccordionItems */
  const handleAccordionClick = (itemID) => {
    const updatedAccordionItems = accordionItems.map((item) => {
      if (item.id === itemID) {
        return {
          ...item,
          isActive: !item.isActive
        };
      } else {
        return {
          ...item,
          isActive: false
        };
      }
    });
    setAccordionItems(updatedAccordionItems);
  };

  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={styles.faqWrapper}>
          <div className={styles.faqBanner}></div>
          <div className={styles.accordion}>
            {accordionItems.map((item) => (
              <div className={styles.accordionItem} key={item.id}>
                <div className={styles.accordionBody} onClick={() => handleAccordionClick(item.id)}>
                  <div className={styles.accordionQuestionFlex}>
                    <div>
                      <h3 className={styles.accordionTitle}>{item.question}</h3>
                    </div>
                    <div>
                      {item.isActive ? (
                        <img src={MinusCircle} alt="" className={`${styles.accordionMinusIcon}`} />
                      ) : (
                        <img src={PlusCircle} alt="" />
                      )}
                    </div>
                  </div>
                  {item.isActive && (
                    <div className={styles.accordionContent}>
                      <p className={styles.accordionText}>{item.answer}</p>
                      <span className={styles.accordionNote}>Note:</span>
                      <ul className={styles.accordionText}>
                        <li>Citrone does not support file uploads larger than 5 GB.</li>
                        <li>
                          If enabled in your account, Citrone plays a celebration animation when you
                          submit an assignment on time. However, if you prefer, you can disable this
                          feature setting in your user settings.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <hr />
              </div>
            ))}

            <div className={styles.moreQuestionsWrapper}>
              <div className={styles.moreQuestionFlex}>
                <div className={styles.youngPic}>
                  <img
                    src={YoungWoman}
                    alt="Young woman pointing to a question"
                    className={styles.youngWomanPic}
                  />
                </div>
                <div>
                  <h4 className={styles.questionText}>
                    Still have questions <img src={QuestionMark} className={styles.questionMark} />
                  </h4>
                  <p className={styles.questionDescription}>
                    Can&#39;t find what you&#39;re looking for? Chat with our dedicated team who are
                    online 24/7 to meet your Citrone related needs and answer any of your questions.
                  </p>
                </div>
                <div>
                  <Link to="/students-tutors">
                    <button className={styles.btnAskQuestion}>Ask a question</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
