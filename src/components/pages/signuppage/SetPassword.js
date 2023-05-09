import React from 'react';
import classes from '../signuppage/SignUp.module.css';
import Logo from './images/Mask group.png';
import Eye from './images/Eye.png';
import { useState } from 'react';

const SetPassword = () => {
  const [password, setNewPassword] = useState('');
  return (
    <div id={classes.setPassDiv}>
      <header id={classes.forgotPassHeader}>
        <img id={classes.forgotPassLogo} src={Logo}></img>
        <h1 id={classes.citroneTextHeaderForPass}>Citrone</h1>
      </header>
      <form className={classes.setPassForm}>
        <header className={classes['forgotPassword-container']}>Set New Password</header>
        <p id={classes.forgotPassParagraph}>Please enter a new password below</p>
        <div>
          <label id={classes.setPassLabel} htmlFor="Email">
            New Password *
          </label>{' '}
          <br />
          <input
            className={classes.emailInputForLogin}
            type="email"
            placeholder="**********"
            required
            value={password}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <i className={classes.showPassword}>
            <img id={classes.changePasswordEye} src={Eye}></img>
          </i>
          <br />
          <br />
          <br />
          <label id={classes.setPassLabel} htmlFor="Email">
            Confirm Password *
          </label>{' '}
          <input
            className={classes.emailInputForLogin}
            type="email"
            placeholder="**********"
            required
            value={password}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <i className={classes.showPassword}>
            <img id={classes.changePasswordEye} src={Eye}></img>
          </i>
        </div>
        <button className={classes.forgotPassBtn}> Save New Password</button>
      </form>
    </div>
  );
};

export default SetPassword;
