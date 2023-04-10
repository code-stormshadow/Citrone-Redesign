import React from 'react';
import styles from './/Dashboard.module.css';
import Card from 'react-bootstrap/Card';
import ModuleOne from '..//images/module-1.png';
import ModuleTwo from '..//images/module-2.png';
import ModuleThree from '..//images/module-3.png';
import ModuleFour from '..//images/module-4.png';
// import Table from 'react-bootstrap/Table';
import Stars from '..//images/stars.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faCalendarMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Modules = () => {
  return (
    <div className={styles.courseWrapper}>
      <Link to="" className={styles.link}>
        <Card id={styles.card} className={styles.activeCard}>
          <Card.Body id={styles.cardBody}>
            <div className={styles.courseFlex}>
              <div>
                <h2 className={styles.moduleName}>Module 1</h2>
                <img src={ModuleOne} alt="Design" className={styles.modulePic} />
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
                    <p className={styles.tutorName}>Olurotimi Adubi</p>
                  </div>
                  <div>
                    <p>
                      <object data={Stars}></object>
                    </p>
                  </div>
                </div>
                <hr className={styles.hR} />
                <span className={styles.includes}>This Module includes</span>

                <div className={styles.thirdRow}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFileLines} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Lessons</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarMinus} style={{ color: '#f57078' }} />
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
                <img src={ModuleTwo} alt="Design" className={styles.modulePic} />
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
                    <p className={styles.tutorName}>Akinnagbe Akintayo</p>
                  </div>
                  <div>
                    <p>
                      <object data={Stars}></object>
                    </p>
                  </div>
                </div>
                <hr className={styles.hR} />
                <span className={styles.includes}>This Module includes</span>

                <div className={styles.thirdRow}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFileLines} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Lessons</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarMinus} style={{ color: '#f57078' }} />
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
                <img src={ModuleThree} alt="Design" className={styles.modulePic} />
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
                    <p className={styles.tutorName}>Olurotimi Adubi</p>
                  </div>
                  <div>
                    <p>
                      <object data={Stars}></object>
                    </p>
                  </div>
                </div>
                <hr className={styles.hR} />
                <span className={styles.includes}>This Module includes</span>

                <div className={styles.thirdRow}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFileLines} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Lessons</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarMinus} style={{ color: '#f57078' }} />
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
                <img src={ModuleFour} alt="Design" className={styles.modulePic} />
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
                    <p className={styles.tutorName}>Olurotimi Adubi</p>
                  </div>
                  <div>
                    <p>
                      <object data={Stars}></object>
                    </p>
                  </div>
                </div>
                <hr className={styles.hR} />
                <span className={styles.includes}>This Module includes</span>

                <div className={styles.thirdRow}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFileLines} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Lessons</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarMinus} style={{ color: '#f57078' }} />
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
                <img src={ModuleOne} alt="Design" className={styles.modulePic} />
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
                    <p className={styles.tutorName}>Olurotimi Adubi</p>
                  </div>
                  <div>
                    <p>
                      <object data={Stars}></object>
                    </p>
                  </div>
                </div>
                <hr className={styles.hR} />
                <span className={styles.includes}>This Module includes</span>

                <div className={styles.thirdRow}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFileLines} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Lessons</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarMinus} style={{ color: '#f57078' }} />
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
                <img src={ModuleTwo} alt="Design" className={styles.modulePic} />
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
                    <p className={styles.tutorName}>Akinnagbe Akintayo</p>
                  </div>
                  <div>
                    <p>
                      <object data={Stars}></object>
                    </p>
                  </div>
                </div>
                <hr className={styles.hR} />
                <span className={styles.includes}>This Module includes</span>

                <div className={styles.thirdRow}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFileLines} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Lessons</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarMinus} style={{ color: '#f57078' }} />
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
                <img src={ModuleThree} alt="Design" className={styles.modulePic} />
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
                    <p className={styles.tutorName}>Olurotimi Adubi</p>
                  </div>
                  <div>
                    <p>
                      <object data={Stars}></object>
                    </p>
                  </div>
                </div>
                <hr className={styles.hR} />
                <span className={styles.includes}>This Module includes</span>

                <div className={styles.thirdRow}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFileLines} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Lessons</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarMinus} style={{ color: '#f57078' }} />
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
                <img src={ModuleFour} alt="Design" className={styles.modulePic} />
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
                    <p className={styles.tutorName}>Olurotimi Adubi</p>
                  </div>
                  <div>
                    <p>
                      <object data={Stars}></object>
                    </p>
                  </div>
                </div>
                <hr className={styles.hR} />
                <span className={styles.includes}>This Module includes</span>

                <div className={styles.thirdRow}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFileLines} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Lessons</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarMinus} style={{ color: '#f57078' }} />
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
                <img src={ModuleOne} alt="Design" className={styles.modulePic} />
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
                    <p className={styles.tutorName}>Olurotimi Adubi</p>
                  </div>
                  <div>
                    <p>
                      <object data={Stars}></object>
                    </p>
                  </div>
                </div>
                <hr className={styles.hR} />
                <span className={styles.includes}>This Module includes</span>

                <div className={styles.thirdRow}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFileLines} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Lessons</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarMinus} style={{ color: '#f57078' }} />
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
                <img src={ModuleTwo} alt="Design" className={styles.modulePic} />
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
                    <p className={styles.tutorName}>Akinnagbe Akintayo</p>
                  </div>
                  <div>
                    <p>
                      <object data={Stars}></object>
                    </p>
                  </div>
                </div>
                <hr className={styles.hR} />
                <span className={styles.includes}>This Module includes</span>

                <div className={styles.thirdRow}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFileLines} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Lessons</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarMinus} style={{ color: '#f57078' }} />
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
                <img src={ModuleThree} alt="Design" className={styles.modulePic} />
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
                    <p className={styles.tutorName}>Olurotimi Adubi</p>
                  </div>
                  <div>
                    <p>
                      <object data={Stars}></object>
                    </p>
                  </div>
                </div>
                <hr className={styles.hR} />
                <span className={styles.includes}>This Module includes</span>

                <div className={styles.thirdRow}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFileLines} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Lessons</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarMinus} style={{ color: '#f57078' }} />
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
                <img src={ModuleFour} alt="Design" className={styles.modulePic} />
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
                    <p className={styles.tutorName}>Olurotimi Adubi</p>
                  </div>
                  <div>
                    <p>
                      <object data={Stars}></object>
                    </p>
                  </div>
                </div>
                <hr className={styles.hR} />
                <span className={styles.includes}>This Module includes</span>

                <div className={styles.thirdRow}>
                  <div>
                    <FontAwesomeIcon icon={faVideo} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Recorded Live Sessions</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faFileLines} style={{ color: '#f57078' }} />
                    <span className={styles.spanDetails}>4 Lessons</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendarMinus} style={{ color: '#f57078' }} />
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
