import React from 'react';
import Logo from './images/Mask group.png';
import { useState } from 'react';
import classes from '../signuppage/SignUp.module.css';

import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  return (
    <div className={classes.forgotPasswordMainDiv}>
      <div id={classes['forgotPassContent-div']}>
        <header id={classes.forgotPassHeader}>
          <img id={classes.forgotPassLogo} src={Logo}></img>
          <h1 id={classes.citroneTextHeaderForPass}>citrone</h1>
        </header>
        <form className={classes.forgotPassForm}>
          <header className={classes['forgotPassword-container']}>Forgot Password?</header>
          <p id={classes.forgotPassParagraph}>
            No worries! Please enter your email address and we’ll send instructions to reset your
            password.
          </p>
          <div>
            <label id={classes.signUpLabels} htmlFor="Email">
              Email Address
            </label>{' '}
            <br />
            <input
              className={classes.emailInputForLogin}
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className={classes.forgotPassBtn}>Next</button>
          <p id={classes.lastPara}>
            Already have an account?{' '}
            <Link className={classes.forgotPasslogInLink} to="/login">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
