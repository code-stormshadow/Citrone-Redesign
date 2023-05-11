import React, { useState } from 'react';
import Logo from './images/Mask group.png';
import Eye from './images/Eye.png';
import classes from '../signuppage/SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Eyedisplay from './images/Eyedisplay.png';

// import { useForm } from 'react-hook-form';

// import { useEffect } from 'react';

const LoginPage = () => {
  // Define state variables for email and password inputs, error message, and password visibility
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setPasswordVisible] = useState(false);

  // Use the useHistory hook to access the history object for navigation
  const navigate = useNavigate();

  // Define event handlers for email and password input changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError('');
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError('');
  };

  // Define event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make an API call to validate the user's credentials
      const response = await fetch('https://example.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // If the response is successful, log in the user and navigate to the home page
        console.log(`Success! Logged in as ${email}`);
        navigate('/');
      } else {
        // If the response is not successful, set an error message
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setError('Error: Something went wrong');
    }
  };

  // Define event handler for password visibility toggle
  const handlePasswordToggle = () => {
    setPasswordVisible(!showPassword);
  };

  // Render the login form with email and password inputs, error message, password visibility toggle, and submit button

  return (
    <div className={classes.loginDiv}>
      <header id={classes.logInFormHeader}>
        <img id={classes.logInLogoImg} src={Logo}></img>
        <h1 id={classes.citroneTextHeader}>Citrone</h1>
      </header>
      <form id={classes.logInForm} onSubmit={handleSubmit}>
        <h1 id={classes.logInHeader}>Log into your account</h1>
        <div id={classes.greetingDiv}>
          <h1 id={classes.greetingHeader}>
            <span id={classes.congratulations}>Congratulations!</span> Your account has been
            successfully created. You may log in now.
          </h1>
        </div>
        <div className={classes['loginform-Content']}>
          <div className={classes.emailPasswordContainer}>
            <div className={classes.email}>
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
                onChange={handleEmailChange}
              />
            </div>
            <div className={classes.loginPassword}>
              <div className={classes.passwordLabelsForLogin}>
                <label id={classes.passwordLabelForLogin} htmlFor="password">
                  Password
                </label>{' '}
                <Link id={classes.forgotPassword} to="/forgot-password">
                  Forgot your password?
                </Link>
                <br />
              </div>
              <div id={classes.loginPasswordInputField}>
                <input
                  id={classes.passwordInputForLogin}
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onBlur={(e) => setPassword(e.target.value)}
                  onChange={handlePasswordChange}
                />
                <label className={classes.showPassword}>
                  <img
                    id={classes.changePasswordEye}
                    src={showPassword ? Eyedisplay : Eye}
                    alt="Toggle password visibility"
                    onClick={handlePasswordToggle}></img>
                </label>
              </div>
              {error && <div className={classes.error}>{error}</div>}

              <div className={classes['login-checkbox']}>
                <input type="checkbox" />
                <label className={classes['login-checkboxLabel']}>
                  <span>Remember me</span>
                </label>
              </div>
            </div>
          </div>
          <button className={classes.loginBtn} type="submit" onSubmit={handleSubmit}>
            Log In
          </button>
          <p id={classes.loginLastPara}>
            Don&#39;t have an account?{' '}
            <Link className={classes.signUpLink} to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
