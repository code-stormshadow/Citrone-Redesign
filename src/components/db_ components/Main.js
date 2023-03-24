import React from 'react';
import SideArrow from './/images/side-arrow.svg';
import RealTime from './RealTime';

const Main = () => {
  return (
    <main className="main-content">
      <div className="greetings-container">
        <div className="greetings">
          <h1>Hello, Olurotimi Akinnagbe 👍✨</h1>
          <span>Believe you can & youre halfway done!</span>
        </div>

        <div className="resume-lesson">
          <div>
            <p>
              <a href="">Resume previous lesson</a>
            </p>
          </div>
          <div>
            <span>
              <a href="">
                <object data={SideArrow}></object>
              </a>
            </span>
          </div>
        </div>
      </div>

      <RealTime />
    </main>
  );
};

export default Main;
