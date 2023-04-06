import NavBar from './db_ components/NavBar';
import SideNavBar from './db_ components/SideNavBar';
import Accordion from 'react-bootstrap/Accordion';
import PlusCircle from '../dashboardpage/images/PlusCircle.svg';
import MinusCircle from '../dashboardpage/images/MinusCircle.svg';

const Faq = () => {
  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <SideNavBar />
        <div>
          <div className="faqBanner">
            <h1>Frequently Asked Questions</h1>
          </div>
          <Accordion defaultActiveKey="0" flush className="accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span>Accordion Item #1</span>
                <object data={PlusCircle} className="accordion-icon"></object>
                <object data={MinusCircle} className="accordion-icon"></object>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
