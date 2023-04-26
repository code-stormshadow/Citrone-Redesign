import React from 'react';
import styles from '..//Assignment Components/Assignment.module.css';
import NavBar from '../db_ components/NavBar';
import SideNavBar from '../db_ components/SideNavBar';
import { Link } from 'react-router-dom';

const LessonAssignments = () => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <div className={styles.aWrapper}>
        <SideNavBar />
        <div className={styles.lessonModulesMainDiv}>
          <h4 className={styles.assignmentHeaderOne}>
            Assignments <span>&#10095; </span>
            <span className={styles.redHeader}>Module 1 Assignments</span>
          </h4>
          <h2 className={styles.assignmentHeaderTwo}>Module 1 Assignments;</h2>
          <div className={styles.assignmentLessons}>
            <div className={styles.assignmentModule}>
              <h3 className={styles.allModules}>Lesson</h3>
              <h1 id={styles.assignmentNumber}>1</h1>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.lessonParagraphsGraded}>
              <h3 className={styles.assignmentTopic}> UI Design: Typography</h3>
              <p className={styles.assignmentsModulesParagraph}>
                Replicate the design from the first assignment and try a different col...
              </p>
              <p className={styles.gradedParagraph}>Graded</p>
            </div>
            <button className={styles.viewGradeBtn}>
              <Link className={styles.viewGradeLink} to="/lesson-grades">
                {' '}
                View Grade
              </Link>
            </button>
          </div>
          <hr></hr>
          <div className={styles.assignmentLessons}>
            <div className={styles.assignmentModule}>
              <h3 className={styles.allModules}>Lesson</h3>
              <h1 id={styles.assignmentNumber}>2</h1>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.lessonParagraphsElapsed}>
              <h3 className={styles.assignmentTopic}> UI Design- Color</h3>
              <p className={styles.assignmentsModulesParagraph}>
                Replicate the design from the first assignment and try a different col...
              </p>
              <p className={styles.dateElapsed}>
                Due date: 12/09/2022 -{' '}
                <span className={styles.elapsedParagraph}>
                  This assignment has elapsed and cannot be attempted!
                </span>
              </p>
            </div>
            <button className={styles.elapsedBtn}>Start</button>
          </div>
          <hr></hr>
          <div className={styles.assignmentLessons}>
            <div className={styles.assignmentModule}>
              <h3 className={styles.allModules}>Lesson</h3>
              <h1 id={styles.assignmentNumber}>3</h1>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.lessonParagraphsAwaiting}>
              <h3 className={styles.lessonTopic}>
                {' '}
                Understanding design briefs- Critiquing design
              </h3>
              <p className={styles.assignmentsModulesParagraph}>
                Create a problem statement for your milestone project and set...
              </p>
              <p className={styles.awaiting}>Awaiting grade</p>
            </div>
            <button className={styles.reSubmitBtn}>Re-submit</button>
          </div>
          <hr></hr>
          <div className={styles.assignmentLessons}>
            <div className={styles.assignmentModule}>
              <h3 className={styles.allModules}>Lesson</h3>
              <h1 id={styles.assignmentNumber}>4</h1>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.lessonParagraphsElapsed}>
              <h3 className={styles.assignmentTopic}> Product design and design thinking</h3>
              <p className={styles.assignmentsModulesParagraph}>
                Study the brief for your milestone project and start noting questions...
              </p>
              <p className={styles.unStartedDueDate}>Due date: 12/12/2022</p>
            </div>
            <button className={styles.unStartedBtn}>Start</button>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default LessonAssignments;
