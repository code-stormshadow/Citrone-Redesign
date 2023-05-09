import React from 'react';
import { useState, useRef } from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';
import 'react-quill/dist/quill.snow.css';
import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import Alarm from '..//images/alarm.svg';
import Editor from './Editor';
import DeleteIcon from '..//images/delete.svg';
import SubmitModal from './SubmitModal';

const LessonOneAssignment = () => {
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file.size > 2 * 1024 * 1024) {
      setError('File size must be less than or equal to 2MB');
      return;
    }
    setFileName(file.name);
    setFileSize(convertBytes(file.size));
    setError('');
    setSubmitDisabled(false);
  };

  function handleDeleteFile() {
    setFileName(null);
    setFileSize(null);
  }

  function convertBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const kB = 1024;
    const dM = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(kB));
    return parseFloat((bytes / Math.pow(kB, i)).toFixed(dM)) + ' ' + sizes[i];
  }

  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={styles.moduleOneAssignmentWrapper}>
          <div>
            <h4 className={styles.courseIntro}>
              <Link to="/course-module-one" className={styles.courseLink}>
                Module 1
              </Link>
              <span className={styles.greaterThan}> &gt; </span>
              <span className={styles.courseModule}>Lesson 1 Assignment</span>
            </h4>
            <div className={styles.moduleFlex}>
              <div>
                <h1 className={styles.moduleLessons}>Module 1; Lesson 1</h1>
              </div>
              <div className={styles.assignmentDeadline}>
                <img src={Alarm} alt="Alarm Icon" />
                <span className={styles.assignmentDeadlineTime}>Deadline: 12/12/2022</span>
              </div>
            </div>
            <p className={styles.moduleLessonOneQuestionOne}>
              1. Search for image inspirations for your Pet App. Copy these and add them to a figma
              file.
            </p>
            <p className={styles.moduleLessonOneQuestionTwo}>
              2. Create a color library for your Pet App.
            </p>
            <h3 className={styles.moduleLessonOneAnswer}>Answer</h3>
            <Editor />

            <div className={styles.attachContainer}>
              <div className={styles.attachFileFlex}>
                <div className={styles.attachFileFlexItem}>
                  <p className={styles.attachAssignment}>Attach assignment file</p>
                  {error && <div className={styles.error}>{error}</div>}
                  <input
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    type="file"
                    style={{ display: 'none' }}
                  />
                  <button className={styles.btnChoose} onClick={() => fileInputRef.current.click()}>
                    Choose File
                  </button>
                </div>
                <div className={styles.attachFileFlexItemTwo}>
                  <p>
                    (Max: <span className={styles.attachBold}>1 File</span>)
                  </p>
                  <p>
                    File Support: <span className={styles.attachBold}>JPG, JPEG, PDF, DOC.</span>
                  </p>
                  <p>
                    Total File Size: Max <span className={styles.attachBold}>2 MB</span>
                  </p>
                </div>
              </div>
              {fileName && (
                <div className={styles.uploadFile}>
                  <div>
                    {fileName}
                    <p className={styles.fileSize}>{fileSize} </p>
                  </div>
                  <div>
                    <img
                      src={DeleteIcon}
                      alt=""
                      className={styles.deleteIcon}
                      onClick={() => handleDeleteFile()}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <button
            className={styles.lessonSubmit}
            onClick={() => setModalShow(true)}
            disabled={submitDisabled}>
            Submit
          </button>
          <SubmitModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default LessonOneAssignment;
