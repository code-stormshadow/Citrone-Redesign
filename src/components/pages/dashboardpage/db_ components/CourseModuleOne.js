import React, { useState, useRef, useEffect } from 'react';
import styles from './/Dashboard.module.css';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';
import { Link } from 'react-router-dom';
import FileIcon from '..//images/file.svg';
import CalendarIcon from '..//images/CalendarNote.svg';
import Star from '..//images/stars.svg';
import TimiPic from '..//images/comment-pic.png';
import MariamPic from '..//images/mariam.png';
import DameePic from '..//images/damee.png';

const CourseModuleOne = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  /* cardRef that references the comment card element. */
  const cardRef = useRef(null);
  /* state variable to store the original height of the comment card.*/
  const [defaultHeight, setDefaultHeight] = useState(0);
  /* state variable to control the height dynamically. */
  const [currentHeight, setCurrentHeight] = useState(0);

  /* function to expand the card */
  const handleViewMoreComments = () => {
    setIsExpanded(true);
  };

  /* function to collapse the card */
  const handleCollapseComments = () => {
    setIsExpanded(!isExpanded);
  };

  /* set the initial originalHeight and currentHeight values once when the component mounts. 
  We calculate the originalHeight by accessing the offsetHeight property of the comment card element. */
  useEffect(() => {
    if (cardRef.current) {
      setDefaultHeight(cardRef.current.offsetHeight);
      setCurrentHeight(cardRef.current.offsetHeight);
    }
  }, []);

  /* update the currentHeight whenever the isExpanded state changes. If the card is expanded, we set the currentHeight to 
  the scrollHeight of the comment card element. else change it back to the originalHeight. */
  useEffect(() => {
    if (cardRef.current) {
      if (isExpanded) {
        setCurrentHeight(cardRef.current.scrollHeight);
      } else {
        setCurrentHeight(defaultHeight);
      }
    }
  }, [isExpanded, defaultHeight]);

  /* set the height dynamically using inline styles on the comment card element. */
  const cardStyle = {
    height: currentHeight + 'px'
  };

  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={styles.courseModuleOneWrapper}>
          <div>
            <h4 className={styles.courseIntro}>
              <Link to="/course-content" className={styles.courseLink}>
                Course Contents
              </Link>
              <span className={styles.greaterThan}> &gt; </span>
              <span className={styles.courseModule}>Module 1</span>
            </h4>
            <div className={styles.moduleFlex}>
              <div>
                <h1 className={styles.moduleLessons}>Module 1 lessons;</h1>
              </div>
              <div>
                <button className={styles.btnLesson}>Lesson completed</button>
              </div>
            </div>

            <div className={styles.cardCourseContainer}>
              <div className={styles.moduleCard}>
                <p className={styles.moduleDate}>13/08/22</p>
                <h4 className={styles.moduleCourseTitle}>
                  Lesson 1: Design Thinking process and UCD techniques
                </h4>
                <p className={styles.moduleCourseText}>
                  In our previous classes, we defined Product Design as the process designers use to
                  blend user needs with business goals to help brands make consistently successful
                  products. This time we are going a step further, we will learn about the career
                  landscape, and the foundation of great products and revisit the phases of the
                  design thinking process.
                </p>
                <div className={styles.courseLinkFlex}>
                  <div className={styles.courseLessonLink}>
                    <object data={FileIcon} className={styles.moduleIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span className={styles.lessonLinkSpan}>Lesson slide here(PDF)</span>
                    </Link>
                  </div>
                  <div>
                    <object data={CalendarIcon}></object>
                    <Link to="/lesson-1-assignment" className={styles.lessonLink}>
                      <span className={styles.courseAssignmentLink}>Assignment here(PDF)</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.lessonImage}></div>
              </div>

              {/* Lesson 2 */}
              <div className={styles.moduleCard}>
                <p className={styles.moduleDate}>13/08/22</p>
                <h4 className={styles.moduleCourseTitle}>
                  Lesson 2: Design Thinking process and UCD techniques
                </h4>
                <p className={styles.moduleCourseText}>
                  In our previous classes, we defined Product Design as the process designers use to
                  blend user needs with business goals to help brands make consistently successful
                  products. This time we are going a step further, we will learn about the career
                  landscape, and the foundation of great products and revisit the phases of the
                  design thinking process.
                </p>
                <div className={styles.courseLinkFlex}>
                  <div className={styles.courseLessonLink}>
                    <object data={FileIcon} className={styles.moduleIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span className={styles.lessonLinkSpan}>Lesson slide here(PDF)</span>
                    </Link>
                  </div>
                  <div>
                    <object data={CalendarIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span className={styles.courseAssignmentLink}>Assignment here(PDF)</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.lessonImage}></div>
              </div>

              {/* Lesson 3 */}
              <div className={styles.moduleCard}>
                <p className={styles.moduleDate}>13/08/22</p>
                <h4 className={styles.moduleCourseTitle}>
                  Lesson 3: Design Thinking process and UCD techniques
                </h4>
                <p className={styles.moduleCourseText}>
                  In our previous classes, we defined Product Design as the process designers use to
                  blend user needs with business goals to help brands make consistently successful
                  products. This time we are going a step further, we will learn about the career
                  landscape, and the foundation of great products and revisit the phases of the
                  design thinking process.
                </p>
                <div className={styles.courseLinkFlex}>
                  <div className={styles.courseLessonLink}>
                    <object data={FileIcon} className={styles.moduleIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span className={styles.lessonLinkSpan}>Lesson slide here(PDF)</span>
                    </Link>
                  </div>
                  <div>
                    <object data={CalendarIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span className={styles.courseAssignmentLink}>Assignment here(PDF)</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.lessonImage}></div>
              </div>

              {/* Lesson 4 */}
              <div className={styles.moduleCard}>
                <p className={styles.moduleDate}>13/08/22</p>
                <h4 className={styles.moduleCourseTitle}>
                  Lesson 4: Design Thinking process and UCD techniques
                </h4>
                <p className={styles.moduleCourseText}>
                  In our previous classes, we defined Product Design as the process designers use to
                  blend user needs with business goals to help brands make consistently successful
                  products. This time we are going a step further, we will learn about the career
                  landscape, and the foundation of great products and revisit the phases of the
                  design thinking process.
                </p>
                <div className={styles.courseLinkFlex}>
                  <div className={styles.courseLessonLink}>
                    <object data={FileIcon} className={styles.moduleIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span className={styles.lessonLinkSpan}>Lesson slide here(PDF)</span>
                    </Link>
                  </div>
                  <div>
                    <object data={CalendarIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span className={styles.courseAssignmentLink}>Assignment here(PDF)</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.lessonImage}></div>
              </div>

              {isExpanded ? (
                <div
                  className={`${styles.moduleCommentCard} ${isExpanded ? styles.expandedCard : ''}`}
                  style={cardStyle}
                  ref={cardRef}>
                  <div className={styles.commentsFlex}>
                    <div>
                      <h2 className={styles.commentTitle}>Comments</h2>
                    </div>
                    <div>
                      <p className={styles.ratingText}>Leave a Rating</p>
                      <object data={Star} className={styles.starComment}></object>
                    </div>
                  </div>

                  <div className={styles.moduleComment}>
                    <img src={TimiPic} alt="" className={styles.commentPic} />

                    <input
                      className={styles.commentSearchBar}
                      placeholder="Leave a comment about the module"
                      type="text"
                    />

                    <div className={styles.moduleChatBox}>
                      <div className={styles.moduleChatFlex}>
                        <div className={styles.moduleChatComment}>
                          <h3 className={styles.moduleChatName}>Abdulkareem Mariam</h3>
                          <p className={styles.moduleChatText}>
                            Thank you so much for the very detailed explanation. I thought I wasn’t
                            going to understand since I missed the class but the video did justice.
                          </p>
                        </div>
                        <div>
                          <img src={MariamPic} alt="" className={styles.chatPic} />
                        </div>
                      </div>

                      <div className={styles.moduleChatReactionFlex}>
                        <p className={styles.moduleChatDate}>5d ago</p>
                        <p className={styles.moduleChatReaction}>Like</p>
                        <p className={styles.moduleChatReaction}>Reply</p>
                      </div>

                      <div className={styles.moduleChatFlex}>
                        <div className={styles.moduleChatCommentSmall}>
                          <h3 className={styles.moduleChatName}>Damee</h3>
                          <p className={styles.moduleChatText}>Thank you so much🔥⭐</p>
                        </div>
                        <div>
                          <img src={DameePic} alt="" className={styles.chatPic} />
                        </div>
                      </div>

                      <div className={styles.moduleChatReactionFlexSecond}>
                        <p className={styles.moduleChatDate}>5d ago</p>
                        <p className={styles.moduleChatReaction}>Like</p>
                        <p className={styles.moduleChatReaction}>Reply</p>
                      </div>

                      <div className={styles.moduleChatFlex}>
                        <div className={styles.moduleChatComment}>
                          <h3 className={styles.moduleChatName}>Abdulkareem Mariam</h3>
                          <p className={styles.moduleChatText}>
                            Thank you so much for the very detailed explanation. I thought I wasn’t
                            going to understand since I missed the class but the video did justice.
                          </p>
                        </div>
                        <div>
                          <img src={MariamPic} alt="" className={styles.chatPic} />
                        </div>
                      </div>

                      <div className={styles.moduleChatReactionFlex}>
                        <p className={styles.moduleChatDate}>5d ago</p>
                        <p className={styles.moduleChatReaction}>Like</p>
                        <p className={styles.moduleChatReaction}>Reply</p>
                      </div>

                      <div className={styles.moduleChatFlex}>
                        <div className={styles.moduleChatCommentSmall}>
                          <h3 className={styles.moduleChatName}>Damee</h3>
                          <p className={styles.moduleChatText}>Thank you so much🔥⭐</p>
                        </div>
                        <div>
                          <img src={DameePic} alt="" className={styles.chatPic} />
                        </div>
                      </div>

                      <div className={styles.moduleChatReactionFlexSecond}>
                        <p className={styles.moduleChatDate}>5d ago</p>
                        <p className={styles.moduleChatReaction}>Like</p>
                        <p className={styles.moduleChatReaction}>Reply</p>
                      </div>

                      <div className={styles.moduleChatFlex}>
                        <div className={styles.moduleChatComment}>
                          <h3 className={styles.moduleChatName}>Abdulkareem Mariam</h3>
                          <p className={styles.moduleChatText}>
                            Thank you so much for the very detailed explanation. I thought I wasn’t
                            going to understand since I missed the class but the video did justice.
                          </p>
                        </div>
                        <div>
                          <img src={MariamPic} alt="" className={styles.chatPic} />
                        </div>
                      </div>

                      <div className={styles.moduleChatFlex}>
                        <div className={styles.moduleChatCommentSmall}>
                          <h3 className={styles.moduleChatName}>Damee</h3>
                          <p className={styles.moduleChatText}>Thank you so much🔥⭐</p>
                        </div>
                        <div>
                          <img src={DameePic} alt="" className={styles.chatPic} />
                        </div>
                      </div>

                      <div className={styles.moduleChatReactionFlexSecond}>
                        <p className={styles.moduleChatDate}>5d ago</p>
                        <p className={styles.moduleChatReaction}>Like</p>
                        <p className={styles.moduleChatReaction}>Reply</p>
                      </div>

                      <div className={styles.moduleChatFlex}>
                        <div className={styles.moduleChatComment}>
                          <h3 className={styles.moduleChatName}>Abdulkareem Mariam</h3>
                          <p className={styles.moduleChatText}>
                            Thank you so much for the very detailed explanation. I thought I wasn’t
                            going to understand since I missed the class but the video did justice.
                          </p>
                        </div>
                        <div>
                          <img src={MariamPic} alt="" className={styles.chatPic} />
                        </div>
                      </div>

                      <div className={styles.moduleChatFlex}>
                        <div className={styles.moduleChatCommentSmall}>
                          <h3 className={styles.moduleChatName}>Damee</h3>
                          <p className={styles.moduleChatText}>Thank you so much🔥⭐</p>
                        </div>
                        <div>
                          <img src={DameePic} alt="" className={styles.chatPic} />
                        </div>
                      </div>
                      <Link className={styles.moduleCollapse} onClick={handleCollapseComments}>
                        Collapse
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.moduleCommentCard}>
                  <div className={styles.commentsFlex}>
                    <div>
                      <h2 className={styles.commentTitle}>Comments</h2>
                    </div>
                    <div>
                      <p className={styles.ratingText}>Leave a Rating</p>
                      <object data={Star} className={styles.starComment}></object>
                    </div>
                  </div>

                  <div className={styles.moduleComment}>
                    <img src={TimiPic} alt="" className={styles.commentPic} />

                    <input
                      className={styles.commentSearchBar}
                      placeholder="Leave a comment about the module"
                      type="text"
                    />

                    <div className={styles.moduleChatBox}>
                      <div className={styles.moduleChatFlex}>
                        <div className={styles.moduleChatComment}>
                          <h3 className={styles.moduleChatName}>Abdulkareem Mariam</h3>
                          <p className={styles.moduleChatText}>
                            Thank you so much for the very detailed explanation. I thought I wasn’t
                            going to understand since I missed the class but the video did justice.
                          </p>
                        </div>
                        <div>
                          <img src={MariamPic} alt="" className={styles.chatPic} />
                        </div>
                      </div>

                      <div className={styles.moduleChatReactionFlex}>
                        <p className={styles.moduleChatDate}>5d ago</p>
                        <p className={styles.moduleChatReaction}>Like</p>
                        <p className={styles.moduleChatReaction}>Reply</p>
                      </div>

                      <div className={styles.moduleChatFlex}>
                        <div className={styles.moduleChatCommentSmall}>
                          <h3 className={styles.moduleChatName}>Damee</h3>
                          <p className={styles.moduleChatText}>Thank you so much🔥⭐</p>
                        </div>
                        <div>
                          <img src={DameePic} alt="" className={styles.chatPic} />
                        </div>
                      </div>

                      <div className={styles.moduleChatReactionFlexSecond}>
                        <p className={styles.moduleChatDate}>5d ago</p>
                        <p className={styles.moduleChatReaction}>Like</p>
                        <p className={styles.moduleChatReaction}>Reply</p>
                      </div>
                    </div>

                    {!isExpanded && (
                      <Link
                        to=""
                        className={styles.moduleLinkComment}
                        onClick={handleViewMoreComments}>
                        View more comments
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModuleOne;
