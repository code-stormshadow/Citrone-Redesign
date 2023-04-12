import React from 'react';
import classes from './SignUp.module.css';
import Logo from './images/Mask group.png';

const CheckMail = () => {
  return (
    <div id={classes.checkMailMainDiv}>
      <header id={classes.logInFormHeader}>
        <img id={classes.logInLogoImg} src={Logo}></img>
        <h1 id={classes.citroneTextHeader}>citrone</h1>
      </header>
      <div id={classes.checkMailContentDiv}>CheckMail</div>
      <div className={classes.wrapper}>
        <div className={classes.lidOne}></div>
        <div className={classes.lidTwo}></div>
        <div className={classes.envelope}></div>
        <div className={classes.letter}></div>
      </div>
    </div>
  );
};

export default CheckMail;
