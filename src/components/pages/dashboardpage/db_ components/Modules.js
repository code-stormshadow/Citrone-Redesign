import React from 'react';
import styles from './/Dashboard.module.css';
import Card from 'react-bootstrap/Card';
import Stars from '..//images/stars.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoIcon from '..//images/recording.svg';
import FileIcon from '..//images/file.svg';
import CalendarIcon from '../images/CalendarNote.svg';
import { Link } from 'react-router-dom';

// const [isActiveCourse, setIsActiveCourse] = useState(false);

const Modules = () => {
  return (
    <div className={styles.courseWrapper}>
      <Link to="/course-module-one" className={`${styles.link} active`}>
        <Card id={styles.card} class={styles.activeCard}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
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
          </Card.Body>
        </Card>
      </Link>

      <hr className={styles.hrLine} />

      <Link to="" className={styles.link}>
        <Card id={styles.card}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
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
          </Card.Body>
        </Card>
      </Link>

      <hr className={styles.hrLine} />

      <Link to="" className={styles.link}>
        <Card id={styles.card}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
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
          </Card.Body>
        </Card>
      </Link>

      <hr className={styles.hrLine} />

      <Link to="" className={styles.link}>
        <Card id={styles.card}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
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
          </Card.Body>
        </Card>
      </Link>

      <hr className={styles.hrLine} />

      <Link to="" className={styles.link}>
        <Card id={styles.card}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
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
          </Card.Body>
        </Card>
      </Link>

      <hr className={styles.hrLine} />

      <Link to="" className={styles.link}>
        <Card id={styles.card}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
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
          </Card.Body>
        </Card>
      </Link>

      <hr className={styles.hrLine} />

      <Link to="" className={styles.link}>
        <Card id={styles.card}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
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
          </Card.Body>
        </Card>
      </Link>

      <hr className={styles.hrLine} />

      <Link to="" className={styles.link}>
        <Card id={styles.card}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
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
          </Card.Body>
        </Card>
      </Link>

      <hr className={styles.hrLine} />

      <Link to="" className={styles.link}>
        <Card id={styles.card}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
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
          </Card.Body>
        </Card>
      </Link>

      <hr className={styles.hrLine} />

      <Link to="" className={styles.link}>
        <Card id={styles.card}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
              <div>
                <h2 className={styles.moduleName}>Module 10</h2>
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
          </Card.Body>
        </Card>
      </Link>

      <hr className={styles.hrLine} />

      <Link to="" className={styles.link}>
        <Card id={styles.card}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
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
          </Card.Body>
        </Card>
      </Link>

      <hr className={styles.hrLine} />

      <Link to="" className={styles.link}>
        <Card id={styles.card}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
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
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Modules;
