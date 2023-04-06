import React from 'react';
import Logo from './images/Mask group.png';
import classes from './Password.module.css';
import { Link } from 'react-router-dom';

const PasswordPage = () => {
  return (
    <div>
      <header id={classes.header}>
        <img src={Logo}></img>
        <h1 id={classes.headerText}>citrone</h1>
      </header>
      <label id={classes.emailLabel} htmlFor="Email">
        Email Address
      </label>
      <button className={classes.loginBtn}>Next</button>
      <p id={classes.lastPara}>
        Remember your password?{' '}
        <Link className={classes.signUpLink} to="/login">
          Log In
        </Link>
      </p>
    </div>
  );
};
export default PasswordPage;
