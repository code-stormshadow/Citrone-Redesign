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
        <header id={classes.ForgotPassHeader}>
          <img id={classes.forgotPassLogo} src={Logo}></img>
          <h1 id={classes.citroneTextHeaderForPass}>citrone</h1>
          <form className={classes.forgotPassForm}>
            <div>
              <header>Forgot Password?</header>
            </div>
            <p>
              No worries! Please enter your email address and we’ll send instructions to reset your
              password.
            </p>
            <div>
              <label id={classes.emailLabelForLogin} htmlFor="Email">
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
            <p id={classes.forgotPassLastPara}>
              Already have an account?{' '}
              <Link className={classes.forgotPasslogInLink} to="/password">
                Log In
              </Link>
            </p>
          </form>
        </header>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
