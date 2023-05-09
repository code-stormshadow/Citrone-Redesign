import React from 'react';
import classes from './SignUp.module.css';
import Logo from './images/Mask group.png';
import emailSent from './images/emailSent.gif';

const CheckMail = () => {
  return (
    <div id={classes.checkMailMainDiv}>
      <header id={classes.logInFormHeader}>
        <img id={classes.logInLogoImg} src={Logo}></img>
        <h1 id={classes.citroneTextHeader}>citrone</h1>
      </header>
      <div id={classes.checkMailContentDiv}>
        <div className={classes.sentContentWrapper}>
          <img id={classes.sentEmailDiv} src={emailSent}></img>
          <h3 id={classes.checkMail}>Check your email</h3>
          <p id={classes.checkMailText}>
            An email has been sent to your inbox to reset your password!
          </p>
        </div>
        <a href="SetPassword"></a>{' '}
      </div>
    </div>
  );
};

export default CheckMail;
