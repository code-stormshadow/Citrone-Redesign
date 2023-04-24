import React from 'react';
import NavBar from '..//dashboardpage/db_ components/NavBar';
import SideNavBar from '..//dashboardpage/db_ components/SideNavBar';
import styles from './Assignment.module.css';
import lessonNoteIcon from './images/lessonNoteIcon.png';
import CalendarNote from './images/CalendarNote.svg';
// import Line from './components/dashboardpage/images/Line.png';
// import Line from '..//images/Line.png';

// import styles from './db_ components/Dashboard.module.css';

const Assignment = () => {
  return (
    <div className={styles.sWrapper}>
      <NavBar />
      <div className={styles.aWrapper}>
        <SideNavBar />
        <div>
          <div>
            <input placeholder="Search assignment title" className={styles.searchBar} />
          </div>
          <h2 className={styles.assignmentHeader}>Assignments</h2>
          <div className={styles.assignmentModulesMainDiv}>
            <div className={styles.assignmentModuleAndTopicCompleted}>
              <div className={styles.assignmentModule}>
                <h3 className={styles.allModules}>Module</h3>
                <h1 id={styles.assignmentNumber}>1</h1>
              </div>
              <div className={styles.verticalLine}>{/* <img src={Line}></img> */}</div>
              <div className={styles.assignmentTexts}>
                <h3 className={styles.assignmentTopic}> Product Design and Design Thinking</h3>
                <p className={styles.assignmentsModulesParagraph}>
                  Study the brief for your milestone project and start noting the questions that...
                </p>
                <div className={styles.assignmentsParagraphsDiv}>
                  <p className={styles.lessonAssignments}>
                    <img className={styles.lessonIcon} src={lessonNoteIcon}></img>4 Lesson
                    Assignments
                  </p>
                  <p className={styles.assignmentsSubmitted}>
                    <img className={styles.assignmentsSubmittedIcons} src={CalendarNote}></img>4
                    &#8725; 4 Assignments Submitted
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className={styles.assignmentModuleAndTopicNotCompleted}>
              <div className={styles.assignmentModule}>
                <h3 className={styles.allModules}>Module</h3>
                <h1 id={styles.assignmentNumber}>2</h1>
              </div>
              <div className={styles.verticalLine}>{/* <img src={Line}></img> */}</div>
              <div className={styles.assignmentTexts}>
                <h3 className={styles.assignmentTopic}> Understanding Design briefs</h3>
                <p className={styles.assignmentsModulesParagraph}>
                  Briefs will provide you the freelancer&#8725;full-time designer with everything
                  they ...
                </p>
                <div className={styles.assignmentsParagraphsDiv}>
                  <p className={styles.lessonAssignments}>
                    <img className={styles.lessonIcon} src={lessonNoteIcon}></img>4 Lesson
                    Assignments
                  </p>
                  <p className={styles.assignmentsNotSubmitted}>
                    <img className={styles.assignmentsSubmittedIcons} src={CalendarNote}></img>2
                    &#8725; 4 Assignments Submitted
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className={styles.assignmentModuleAndTopicNotCompleted}>
              <div className={styles.assignmentModule}>
                <h3 className={styles.allModules}>Module</h3>
                <h1 id={styles.assignmentNumber}>3</h1>
              </div>
              <div className={styles.verticalLine}></div>
              <div className={styles.assignmentTexts}>
                <h3 className={styles.assignmentTopic}> Design Sprints</h3>
                <p className={styles.assignmentsModulesParagraph}>
                  Design sprints are an intense 5-day process where user-centered teams tac....
                </p>
                <div className={styles.assignmentsParagraphsDiv}>
                  <p className={styles.lessonAssignments}>
                    <img className={styles.lessonIcon} src={lessonNoteIcon}></img>3 Lesson
                    Assignments
                  </p>
                  <p className={styles.assignmentsNotSubmitted}>
                    <img className={styles.assignmentsSubmittedIcons} src={CalendarNote}></img>1
                    &#8725; 4 Assignments Submitted
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className={styles.assignmentModuleAndTopicNotCompleted}>
              <div className={styles.assignmentModule}>
                <h3 className={styles.allModules}>Module</h3>
                <h1 id={styles.assignmentNumber}>4</h1>
              </div>
              <div className={styles.verticalLine}></div>
              <div className={styles.assignmentTexts}>
                <h3 className={styles.assignmentTopic}> Design Sprints</h3>
                <p className={styles.assignmentsModulesParagraph}>
                  Design sprints are an intense 5-day process where user-centered teams tac....
                </p>
                <div className={styles.assignmentsParagraphsDiv}>
                  <p className={styles.lessonAssignments}>
                    <img className={styles.lessonIcon} src={lessonNoteIcon}></img>3 Lesson
                    Assignments
                  </p>
                  <p className={styles.assignmentsNotSubmitted}>
                    <img className={styles.assignmentsSubmittedIcons} src={CalendarNote}></img>0
                    &#8725; 4 Assignments Submitted
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className={styles.assignmentModuleAndTopicNotCompleted}>
              <div className={styles.assignmentModule}>
                <h3 className={styles.allModules}>Module</h3>
                <h1 id={styles.assignmentNumber}>5</h1>
              </div>
              <div className={styles.verticalLine}>{/* <img src={Line}></img> */}</div>
              <div className={styles.assignmentTexts}>
                <h3 className={styles.assignmentTopic}> Product Design and Design Thinking</h3>
                <p className={styles.assignmentsModulesParagraph}>
                  Study the brief for your milestone project and start noting the questions that...
                </p>
                <div className={styles.assignmentsParagraphsDiv}>
                  <p className={styles.lessonAssignments}>
                    <img className={styles.lessonIcon} src={lessonNoteIcon}></img>4 Lesson
                    Assignments
                  </p>
                  <p className={styles.assignmentsNotSubmitted}>
                    <img className={styles.assignmentsSubmittedIcons} src={CalendarNote}></img>4
                    &#8725; 4 Assignments Submitted
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className={styles.assignmentModuleAndTopicNotCompleted}>
              <div className={styles.assignmentModule}>
                <h3 className={styles.allModules}>Module</h3>
                <h1 id={styles.assignmentNumber}>6</h1>
              </div>
              <div className={styles.verticalLine}>{/* <img src={Line}></img> */}</div>
              <div className={styles.assignmentTexts}>
                <h3 className={styles.assignmentTopic}> Understanding Design briefs</h3>
                <p className={styles.assignmentsModulesParagraph}>
                  Briefs will provide you the freelancer&#8725;full-time designer with everything
                  they ...
                </p>
                <div className={styles.assignmentsParagraphsDiv}>
                  <p className={styles.lessonAssignments}>
                    <img className={styles.lessonIcon} src={lessonNoteIcon}></img>4 Lesson
                    Assignments
                  </p>
                  <p className={styles.assignmentsNotSubmitted}>
                    <img className={styles.assignmentsSubmittedIcons} src={CalendarNote}></img>2
                    &#8725; 4 Assignments Submitted
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className={styles.assignmentModuleAndTopicNotCompleted}>
              <div className={styles.assignmentModule}>
                <h3 className={styles.allModules}>Module</h3>
                <h1 id={styles.assignmentNumber}>7</h1>
              </div>
              <div className={styles.verticalLine}>{/* <img src={Line}></img> */}</div>
              <div className={styles.assignmentTexts}>
                <h3 className={styles.assignmentTopic}> Product Design and Design Thinking</h3>
                <p className={styles.assignmentsModulesParagraph}>
                  Study the brief for your milestone project and start noting the questions that...
                </p>
                <div className={styles.assignmentsParagraphsDiv}>
                  <p className={styles.lessonAssignments}>
                    <img className={styles.lessonIcon} src={lessonNoteIcon}></img>4 Lesson
                    Assignments
                  </p>
                  <p className={styles.assignmentsNotSubmitted}>
                    <img className={styles.assignmentsSubmittedIcons} src={CalendarNote}></img>4
                    &#8725; 4 Assignments Submitted
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className={styles.assignmentModuleAndTopicNotCompleted}>
              <div className={styles.assignmentModule}>
                <h3 className={styles.allModules}>Module</h3>
                <h1 id={styles.assignmentNumber}>8</h1>
              </div>
              <div className={styles.verticalLine}>{/* <img src={Line}></img> */}</div>
              <div className={styles.assignmentTexts}>
                <h3 className={styles.assignmentTopic}> Understanding Design briefs</h3>
                <p className={styles.assignmentsModulesParagraph}>
                  Briefs will provide you the freelancer&#8725;full-time designer with everything
                  they ...
                </p>
                <div className={styles.assignmentsParagraphsDiv}>
                  <p className={styles.lessonAssignments}>
                    <img className={styles.lessonIcon} src={lessonNoteIcon}></img>4 Lesson
                    Assignments
                  </p>
                  <p className={styles.assignmentsNotSubmitted}>
                    <img className={styles.assignmentsSubmittedIcons} src={CalendarNote}></img>2
                    &#8725; 4 Assignments Submitted
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
