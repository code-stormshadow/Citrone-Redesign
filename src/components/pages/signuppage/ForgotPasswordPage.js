import React, { useState } from 'react';
import Logo from './images/Mask group.png';
import classes from '../signuppage/SignUp.module.css';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if email is valid
    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid email address');
      setSuccessMsg('');
      return;
    }
    const checkUserExists = () => {
      // check if the email exists in the database or server
      // return true if the email exists, false otherwise
      return true; // for demo purposes only
    };

    const sendPasswordResetLink = (email) => {
      // send a password reset link to the given email
      // implementation depends on your backend or server
      console.log(`Password reset link sent to ${email}`);
    };

    // check if email exists in the database
    const userExists = checkUserExists(email);
    if (userExists) {
      // send password reset link to user's email address
      sendPasswordResetLink(email);
      setSuccessMsg('Instructions to reset your password have been sent to your email address');
      setErrorMsg('');
    } else {
      // display error message if user does not exist
      setErrorMsg('Sorry, we could not find a user with that email address');
      setSuccessMsg('');
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email);
  };

  return (
    <div className={classes.forgotPasswordMainDiv}>
      <div id={classes['forgotPassContent-div']}>
        <header id={classes.logInFormHeader}>
          <img id={classes.forgotPassLogo} src={Logo} alt="Citrone logo"></img>
          <h1 id={classes.citroneTextHeaderForPass}>Citrone</h1>
        </header>
        <form className={classes.forgotPassForm} onSubmit={handleSubmit}>
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
            {errorMsg && <div className={classes.errorMsg}>{errorMsg}</div>}
            {successMsg && <div className={classes.successMsg}>{successMsg}</div>}
          </div>
          <button className={classes.forgotPassBtn} type="submit">
            Next
          </button>
          <p id={classes.forgotPasswordBottomParagraph}>
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
