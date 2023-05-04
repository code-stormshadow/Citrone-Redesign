import React, { useState } from 'react';
import Logo from './images/Mask group.png';
import Eye from './images/Eye.png';
import Asterisk from './images/Asterisk.png';
import classes from './SignUp.module.css';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(firstName, lastName, email, password);



  const handleSubmit = () => {
    console.log(firstName, lastName, email, password);
  };
  return (
    <div className={classes['signUp-container']}>
      <div className={classes.contentContainer}>
        <header id={classes.headerLogo}>
          <img id={classes.imgHeaderLogo} src={Logo}></img>
          <h1 id={classes.logoHeader}>citrone</h1>
        </header>
        <form id={classes.formSignUp}>
          <h1 className={classes.headerTwo}>Create a new account</h1>
          <div className={classes.inputsContainer}>
            <div className={classes.labelNames}>
              <label htmlFor="fname">First Name</label>
              <label htmlFor="lname">Last name</label>
              {/* <input
                  className={classes.namesInputs}
                  type="text"
                  placeholder="Enter your first name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                /> */}
            </div>
            <div className={classes.namesInputs}>
              <input
                placeholder="Enter your first name"
                className={classes.fnameInput}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                placeholder="Enter your last name"
                className={classes.fnameInput}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              {/* <input
                  className={classes.namesInputs}
                  type="text"
                  placeholder="Enter your last name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                /> */}
            </div>

            <div className={classes.emailPasswordContainer}>
              <div className={classes.email}>
                <label id={classes.signUpLabels} htmlFor="Email">
                  Email Address
                </label>{' '}
                <br />
                <input
                  id={classes.inputPasswordEmail}
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={classes.password}>
                <label id={classes.signUpLabels} htmlFor="password">
                  Password
                </label>{' '}
                <br />
                <input
                  id={classes.inputPasswordEmail}
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className={classes.showPassword}>
                  <img id={classes.changePasswordEye} src={Eye}></img>
                </i>
              </div>
            </div>
          </div>

          <div id={classes['uniqueCodes-container']}>
            <label id={classes.signUpLabels} htmlFor="uniquecode">
              Unique Codes
              <i className={classes.showPassword}>
                <img id={classes.asterisk} src={Asterisk}></img>
              </i>
            </label>
            <br />
            <div id={classes.uniqueCodesAndText}>
              <input className={classes.uniqueCodes} type="text" />
              <input className={classes.uniqueCodes} type="text" />
              <input className={classes.uniqueCodes} type="text" />
              <input className={classes.uniqueCodes} type="text" />
              <input className={classes.uniqueCodes} type="text" />
              <h6 id={classes.uniqueCodeText}>Unique code can be found in your welcome mail</h6>
            </div>
          </div>
          <h6 className={classes.termsAndPrivacy}>
            * By signing up, you agree to our{' '}
            <Link className={classes.termsLink} to="/">
              {' '}
              Terms of Use
            </Link>{' '}
            and to receive Citrone emails & updates and acknowledge that you read our{' '}
            <Link className={classes.termsLink} to="/">
              Privacy Policy.
            </Link>
          </h6>
          <button className={classes.signupBtn} onClick={handleSubmit}>
            Sign Up
          </button>
          <p id={classes.lastPara}>
            Already have an account?{' '}
            <Link className={classes.logInLink} to="/login">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
