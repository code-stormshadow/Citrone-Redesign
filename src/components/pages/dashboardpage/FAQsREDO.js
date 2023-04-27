import NavBar from './db_ components/NavBar';
import SideNavBar from './db_ components/SideNavBar';
// import Accordion from 'react-bootstrap/Accordion';
import PlusCircle from '../dashboardpage/images/PlusCircle.svg';
// import MinusCircle from '../dashboardpage/images/MinusCircle.svg';
import styles from './db_ components/Dashboard.module.css';

const Faq = () => {
  const accordionData = {
    title: 'How do I upload a file as an assignment submission on Citrone?',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
  };

  const { title, content } = accordionData;

  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={styles.faqWrapper}>
          <div className={styles.faqBanner}></div>
          <div className={styles.accordion}>
            <div className={styles.accordionItem}>
              <div className={styles.accordionTitle}>
                <div className={styles.accordionQuestionFlex}>
                  <div>{title}</div>
                  <div>
                    <img src={PlusCircle} alt="" className={styles.accordionPlusIcon} />
                  </div>
                </div>
                <div className={styles.accordionContent}>{content}</div>

                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
