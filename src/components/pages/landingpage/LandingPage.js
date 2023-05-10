import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
// import ThirdComponent from './ThirdComponent';

const LandingPage = () => {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      {/* <ThirdComponent /> */}
    </div>
  );
};

export default LandingPage;
