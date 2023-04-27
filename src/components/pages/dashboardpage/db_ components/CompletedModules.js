import React from 'react';
import styles from './/Dashboard.module.css';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';
import { Link } from 'react-router-dom';
import Stars from '..//images/stars.svg';
import VideoIcon from '..//images/recording.svg';
import FileIcon from '..//images/file.svg';
import CalendarIcon from '..//images/CalendarNote.svg';

const CompletedModules = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={styles.courseModuleOneWrapper}>
          <div>
            <h4 className={styles.courseIntro}>
              <Link to="/dashboard" className={styles.courseLink}>
                Dashboard
              </Link>
              <span className={styles.greaterThan}> &gt; </span>
              <span className={styles.courseModule}>Modules Completed</span>
            </h4>
            <div>
              <h1 className={styles.completedModuleTitle}>Completed Modules</h1>
            </div>

            <hr className={styles.hrModule} />

            <Link to="/course-module-one" className={styles.link}>
              <div className={styles.completedModuleCard}>
                <div>
                  <h2 className={styles.moduleName}>Module 1</h2>
                  <div className={styles.modulePic}></div>
                </div>

                <div>
                  <div className={styles.header}>
                    <div>
                      <p>Title</p>
                    </div>
                    <div>
                      <p>Tutor</p>
                    </div>
                    <div>
                      <p>Rating</p>
                    </div>
                  </div>

                  <div className={styles.secondRow}>
                    <div>
                      <p>Product Design and Thinking</p>
                    </div>
                    <div>
                      <p className={styles.tutor}>Olurotimi Adubi</p>
                    </div>
                    <div>
                      <p>
                        <object data={Stars} className={styles.starIcon}></object>
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hR} />
                  <span className={styles.includes}>This Module includes</span>

                  <div className={styles.thirdRow}>
                    <div>
                      <object data={VideoIcon}></object>
                      <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                    </div>
                    <div className={styles.fileWrapper}>
                      <object data={FileIcon}></object>
                      <span className={styles.spanDetails}>4 Lessons</span>
                    </div>
                    <div className={styles.calendar}>
                      <object data={CalendarIcon}></object>
                      <span className={styles.spanDetails}>4 Assignments</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <hr className={styles.hrModule} />

            <h1 className={styles.pendingModuleTitle}>Pending Modules</h1>

            <div className={styles.pendingModuleWrapper}>
              <div className={styles.pendingModuleCard}>
                <div>
                  <h2 className={styles.moduleName}>Module 2</h2>
                  <div className={styles.moduleTwo}></div>
                </div>

                <div>
                  <div className={styles.header}>
                    <div>
                      <p>Title</p>
                    </div>
                    <div>
                      <p>Tutor</p>
                    </div>
                    <div>
                      <p>Rating</p>
                    </div>
                  </div>

                  <div className={styles.secondRow}>
                    <div>
                      <p>Understanding design briefs</p>
                    </div>
                    <div>
                      <p className={styles.tutorAkin}>Akinnagbe Akintayo</p>
                    </div>
                    <div>
                      <p>
                        <object data={Stars} className={styles.starIcon}></object>
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hR} />
                  <span className={styles.includes}>This Module includes</span>

                  <div className={styles.thirdRow}>
                    <div>
                      <object data={VideoIcon}></object>
                      <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                    </div>
                    <div className={styles.fileWrapper}>
                      <object data={FileIcon}></object>
                      <span className={styles.spanDetails}>4 Lessons</span>
                    </div>
                    <div className={styles.calendar}>
                      <object data={CalendarIcon}></object>
                      <span className={styles.spanDetails}>4 Assignments</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className={styles.hrModule} />

              <div className={styles.pendingModuleCard}>
                <div>
                  <h2 className={styles.moduleName}>Module 3</h2>
                  <div className={styles.moduleThree}></div>
                </div>

                <div>
                  <div className={styles.header}>
                    <div>
                      <p>Title</p>
                    </div>
                    <div>
                      <p>Tutor</p>
                    </div>
                    <div>
                      <p>Rating</p>
                    </div>
                  </div>

                  <div className={styles.secondRow}>
                    <div>
                      <p>Design Sprints</p>
                    </div>
                    <div>
                      <p className={styles.tutorOlu}>Olurotimi Adubi</p>
                    </div>
                    <div>
                      <p>
                        <object data={Stars} className={styles.starIcon}></object>
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hR} />
                  <span className={styles.includes}>This Module includes</span>

                  <div className={styles.thirdRow}>
                    <div>
                      <object data={VideoIcon}></object>
                      <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                    </div>
                    <div className={styles.fileWrapper}>
                      <object data={FileIcon}></object>
                      <span className={styles.spanDetails}>4 Lessons</span>
                    </div>
                    <div className={styles.calendar}>
                      <object data={CalendarIcon}></object>
                      <span className={styles.spanDetails}>4 Assignments</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className={styles.hrModule} />

              <div className={styles.pendingModuleCard}>
                <div>
                  <h2 className={styles.moduleName}>Module 4</h2>
                  <div className={styles.moduleFour}></div>
                </div>

                <div>
                  <div className={styles.header}>
                    <div>
                      <p>Title</p>
                    </div>
                    <div>
                      <p>Tutor</p>
                    </div>
                    <div>
                      <p>Rating</p>
                    </div>
                  </div>

                  <div className={styles.secondRow}>
                    <div>
                      <p>Define Phase</p>
                    </div>
                    <div>
                      <p className={styles.tutorOlu}>Olurotimi Adubi</p>
                    </div>
                    <div>
                      <p>
                        <object data={Stars} className={styles.starIcon}></object>
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hR} />
                  <span className={styles.includes}>This Module includes</span>

                  <div className={styles.thirdRow}>
                    <div>
                      <object data={VideoIcon}></object>
                      <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                    </div>
                    <div className={styles.fileWrapper}>
                      <object data={FileIcon}></object>
                      <span className={styles.spanDetails}>4 Lessons</span>
                    </div>
                    <div className={styles.calendar}>
                      <object data={CalendarIcon}></object>
                      <span className={styles.spanDetails}>4 Assignments</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className={styles.hrModule} />

              <div className={styles.pendingModuleCard}>
                <div>
                  <h2 className={styles.moduleName}>Module 5</h2>
                  <div className={styles.modulePic}></div>
                </div>

                <div>
                  <div className={styles.header}>
                    <div>
                      <p>Title</p>
                    </div>
                    <div>
                      <p>Tutor</p>
                    </div>
                    <div>
                      <p>Rating</p>
                    </div>
                  </div>

                  <div className={styles.secondRow}>
                    <div>
                      <p>Product design and Thinking</p>
                    </div>
                    <div>
                      <p className={styles.tutor}>Olurotimi Adubi</p>
                    </div>
                    <div>
                      <p>
                        <object data={Stars} className={styles.starIcon}></object>
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hR} />
                  <span className={styles.includes}>This Module includes</span>

                  <div className={styles.thirdRow}>
                    <div>
                      <object data={VideoIcon}></object>
                      <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                    </div>
                    <div className={styles.fileWrapper}>
                      <object data={FileIcon}></object>
                      <span className={styles.spanDetails}>4 Lessons</span>
                    </div>
                    <div className={styles.calendar}>
                      <object data={CalendarIcon}></object>
                      <span className={styles.spanDetails}>4 Assignments</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className={styles.hrModule} />

              <div className={styles.pendingModuleCard}>
                <div>
                  <h2 className={styles.moduleName}>Module 6</h2>
                  <div className={styles.moduleTwo}></div>
                </div>

                <div>
                  <div className={styles.header}>
                    <div>
                      <p>Title</p>
                    </div>
                    <div>
                      <p>Tutor</p>
                    </div>
                    <div>
                      <p>Rating</p>
                    </div>
                  </div>

                  <div className={styles.secondRow}>
                    <div>
                      <p>Understanding design briefs</p>
                    </div>
                    <div>
                      <p className={styles.tutorAkin}>Akinnagbe Akintayo</p>
                    </div>
                    <div>
                      <p>
                        <object data={Stars} className={styles.starIcon}></object>
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hR} />
                  <span className={styles.includes}>This Module includes</span>

                  <div className={styles.thirdRow}>
                    <div>
                      <object data={VideoIcon}></object>
                      <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                    </div>
                    <div className={styles.fileWrapper}>
                      <object data={FileIcon}></object>
                      <span className={styles.spanDetails}>4 Lessons</span>
                    </div>
                    <div className={styles.calendar}>
                      <object data={CalendarIcon}></object>
                      <span className={styles.spanDetails}>4 Assignments</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className={styles.hrModule} />

              <div className={styles.pendingModuleCard}>
                <div>
                  <h2 className={styles.moduleName}>Module 7</h2>
                  <div className={styles.moduleThree}></div>
                </div>

                <div>
                  <div className={styles.header}>
                    <div>
                      <p>Title</p>
                    </div>
                    <div>
                      <p>Tutor</p>
                    </div>
                    <div>
                      <p>Rating</p>
                    </div>
                  </div>

                  <div className={styles.secondRow}>
                    <div>
                      <p>Design Sprints</p>
                    </div>
                    <div>
                      <p className={styles.tutorOlu}>Olurotimi Adubi</p>
                    </div>
                    <div>
                      <p>
                        <object data={Stars} className={styles.starIcon}></object>
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hR} />
                  <span className={styles.includes}>This Module includes</span>

                  <div className={styles.thirdRow}>
                    <div>
                      <object data={VideoIcon}></object>
                      <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                    </div>
                    <div className={styles.fileWrapper}>
                      <object data={FileIcon}></object>
                      <span className={styles.spanDetails}>4 Lessons</span>
                    </div>
                    <div className={styles.calendar}>
                      <object data={CalendarIcon}></object>
                      <span className={styles.spanDetails}>4 Assignments</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className={styles.hrModule} />

              <hr className={styles.hrModule} />

              <div className={styles.pendingModuleCard}>
                <div>
                  <h2 className={styles.moduleName}>Module 8</h2>
                  <div className={styles.moduleFour}></div>
                </div>

                <div>
                  <div className={styles.header}>
                    <div>
                      <p>Title</p>
                    </div>
                    <div>
                      <p>Tutor</p>
                    </div>
                    <div>
                      <p>Rating</p>
                    </div>
                  </div>

                  <div className={styles.secondRow}>
                    <div>
                      <p>Define Phase</p>
                    </div>
                    <div>
                      <p className={styles.tutorOlu}>Olurotimi Adubi</p>
                    </div>
                    <div>
                      <p>
                        <object data={Stars} className={styles.starIcon}></object>
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hR} />
                  <span className={styles.includes}>This Module includes</span>

                  <div className={styles.thirdRow}>
                    <div>
                      <object data={VideoIcon}></object>
                      <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                    </div>
                    <div className={styles.fileWrapper}>
                      <object data={FileIcon}></object>
                      <span className={styles.spanDetails}>4 Lessons</span>
                    </div>
                    <div className={styles.calendar}>
                      <object data={CalendarIcon}></object>
                      <span className={styles.spanDetails}>4 Assignments</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className={styles.hrModule} />

              <div className={styles.pendingModuleCard}>
                <div>
                  <h2 className={styles.moduleName}>Module 9</h2>
                  <div className={styles.modulePic}></div>
                </div>

                <div>
                  <div className={styles.header}>
                    <div>
                      <p>Title</p>
                    </div>
                    <div>
                      <p>Tutor</p>
                    </div>
                    <div>
                      <p>Rating</p>
                    </div>
                  </div>

                  <div className={styles.secondRow}>
                    <div>
                      <p>Product design and Thinking</p>
                    </div>
                    <div>
                      <p className={styles.tutor}>Olurotimi Adubi</p>
                    </div>
                    <div>
                      <p>
                        <object data={Stars} className={styles.starIcon}></object>
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hR} />
                  <span className={styles.includes}>This Module includes</span>

                  <div className={styles.thirdRow}>
                    <div>
                      <object data={VideoIcon}></object>
                      <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                    </div>
                    <div className={styles.fileWrapper}>
                      <object data={FileIcon}></object>
                      <span className={styles.spanDetails}>4 Lessons</span>
                    </div>
                    <div className={styles.calendar}>
                      <object data={CalendarIcon}></object>
                      <span className={styles.spanDetails}>4 Assignments</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className={styles.hrModule} />

              <div className={styles.pendingModuleCard}>
                <div>
                  <h2 className={styles.moduleName}>Module </h2>
                  <div className={styles.moduleTwo}></div>
                </div>

                <div>
                  <div className={styles.header}>
                    <div>
                      <p>Title</p>
                    </div>
                    <div>
                      <p>Tutor</p>
                    </div>
                    <div>
                      <p>Rating</p>
                    </div>
                  </div>

                  <div className={styles.secondRow}>
                    <div>
                      <p>Understanding design briefs</p>
                    </div>
                    <div>
                      <p className={styles.tutorAkin}>Akinnagbe Akintayo</p>
                    </div>
                    <div>
                      <p>
                        <object data={Stars} className={styles.starIcon}></object>
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hR} />
                  <span className={styles.includes}>This Module includes</span>

                  <div className={styles.thirdRow}>
                    <div>
                      <object data={VideoIcon}></object>
                      <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                    </div>
                    <div className={styles.fileWrapper}>
                      <object data={FileIcon}></object>
                      <span className={styles.spanDetails}>4 Lessons</span>
                    </div>
                    <div className={styles.calendar}>
                      <object data={CalendarIcon}></object>
                      <span className={styles.spanDetails}>4 Assignments</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className={styles.hrModule} />

              <div className={styles.pendingModuleCard}>
                <div>
                  <h2 className={styles.moduleName}>Module 11</h2>
                  <div className={styles.moduleThree}></div>
                </div>

                <div>
                  <div className={styles.header}>
                    <div>
                      <p>Title</p>
                    </div>
                    <div>
                      <p>Tutor</p>
                    </div>
                    <div>
                      <p>Rating</p>
                    </div>
                  </div>

                  <div className={styles.secondRow}>
                    <div>
                      <p>Design Sprints</p>
                    </div>
                    <div>
                      <p className={styles.tutorOlu}>Olurotimi Adubi</p>
                    </div>
                    <div>
                      <p>
                        <object data={Stars} className={styles.starIcon}></object>
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hR} />
                  <span className={styles.includes}>This Module includes</span>

                  <div className={styles.thirdRow}>
                    <div>
                      <object data={VideoIcon}></object>
                      <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                    </div>
                    <div className={styles.fileWrapper}>
                      <object data={FileIcon}></object>
                      <span className={styles.spanDetails}>4 Lessons</span>
                    </div>
                    <div className={styles.calendar}>
                      <object data={CalendarIcon}></object>
                      <span className={styles.spanDetails}>4 Assignments</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className={styles.hrModule} />

              <hr className={styles.hrModule} />

              <div className={styles.pendingModuleCard}>
                <div>
                  <h2 className={styles.moduleName}>Module 12</h2>
                  <div className={styles.moduleFour}></div>
                </div>

                <div>
                  <div className={styles.header}>
                    <div>
                      <p>Title</p>
                    </div>
                    <div>
                      <p>Tutor</p>
                    </div>
                    <div>
                      <p>Rating</p>
                    </div>
                  </div>

                  <div className={styles.secondRow}>
                    <div>
                      <p>Define Phase</p>
                    </div>
                    <div>
                      <p className={styles.tutorOlu}>Olurotimi Adubi</p>
                    </div>
                    <div>
                      <p>
                        <object data={Stars} className={styles.starIcon}></object>
                      </p>
                    </div>
                  </div>
                  <hr className={styles.hR} />
                  <span className={styles.includes}>This Module includes</span>

                  <div className={styles.thirdRow}>
                    <div>
                      <object data={VideoIcon}></object>
                      <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                    </div>
                    <div className={styles.fileWrapper}>
                      <object data={FileIcon}></object>
                      <span className={styles.spanDetails}>4 Lessons</span>
                    </div>
                    <div className={styles.calendar}>
                      <object data={CalendarIcon}></object>
                      <span className={styles.spanDetails}>4 Assignments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedModules;
