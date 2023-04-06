import React from 'react';
import TableData from './TableData';
import { useState } from 'react';
import CaretDown from '../images/caret-down2.svg';
import CaretUp from '../images/caret-up.svg';
// import DropDownArrow from './/images/caret-down2.svg';

const IncompleteTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleArrow() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="incomplete_task_wrapper">
      <div className="task-flex">
        <div className="task-title">
          <h2>Incomplete Tasks</h2>
        </div>
        <div className="task-dropdown" onClick={toggleArrow}>
          <select name="A" id="">
            <option value="hide">Assignments</option>
            <option value="all">All</option>
            <option value="quiz">Quizzes</option>
          </select>
          <div className="arrowIcon">
            {isOpen ? (
              <img src={CaretUp} alt="up arrow" className="upArrow" />
            ) : (
              <img src={CaretDown} alt="down arrow" className="downArrow" />
            )}
          </div>
        </div>
      </div>

      <TableData />
    </div>
  );
};

export default IncompleteTask;
