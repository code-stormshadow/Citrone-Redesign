import React from 'react';
import TableData from './TableData';
import { useState } from 'react';
import CaretDown from '../images/caret-down2.svg';
import CaretUp from '../images/caret-up.svg';
import styles from './/Dashboard.module.css';
/* import DropDownArrow from './/images/caret-down2.svg'; */

const IncompleteTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleArrow() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={styles.incomplete_task_wrapper}>
      <div className={styles.task_flex}>
        <div className={styles.task_title}>
          <h2>Incomplete Tasks</h2>
        </div>
        <div className={styles.task_dropdown} onClick={toggleArrow}>
          <select name="A" id="">
            <option value="hide">Assignments</option>
            <option value="all">All</option>
            <option value="quiz">Quizzes</option>
          </select>
          <div className={styles.arrowIcon}>
            {isOpen ? (
              <img src={CaretUp} alt="up arrow" className={styles.upArrow} />
            ) : (
              <img src={CaretDown} alt="down arrow" className={styles.downArrow} />
            )}
          </div>
        </div>
      </div>

      <TableData />
    </div>
  );
};

export default IncompleteTask;
