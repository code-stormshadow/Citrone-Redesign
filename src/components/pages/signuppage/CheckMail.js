import React from 'react';
import classes from './SignUp.module.css';
import Logo from './images/Mask group.png';
import emailSent from './images/emailSent.gif';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckMail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/set-password'); // replace with the path of the page you want to navigate to
    }, 3000); // replace 5000 with the duration of the GIF in milliseconds

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div id={classes.checkMailMainDiv}>
      <header id={classes.logInFormHeader}>
        <img id={classes.logInLogoImg} src={Logo} alt="Logo"></img>
        <h1 id={classes.citroneTextHeader}>citrone</h1>
      </header>
      <div id={classes.checkMailContentDiv}>
        <div className={classes.sentContentWrapper}>
          <img id={classes.sentEmailDiv} src={emailSent} alt="Email Sent"></img>
          <h3 id={classes.checkMail}>Check your email</h3>
          <p id={classes.checkMailText}>
            An email has been sent to your inbox to reset your password!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckMail;
