import React from 'react';
import styles from '../dashboardpage/Assignment Components/Assignment.module.css';
import AssignmentModule from './Assignment Components/AssignmentModule';
const Assignment = () => {
  return (
    <div className={styles.sWrapper}>
      <AssignmentModule />
    </div>
  );
};

export default Assignment;
