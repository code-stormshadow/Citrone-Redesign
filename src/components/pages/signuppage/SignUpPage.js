import React, { useState } from 'react';
import Logo from './images/Mask group.png';
import Eye from './images/Eye.png';
import Asterisk from './images/Asterisk.png';
import classes from './SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// import { useForm } from 'react-hook-form'

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleFetch = async (e) => {
    e.preventDefault();
    navigate('/login');
    let result = await fetch('https://citrone-lms.onrender.com/api/auth/signup', {
      crossDomain: true,
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password, track: 'UI/UX' }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    result = await result.json();
    console.log('result', result);
    if (result.success) {
      // setSignUpSuccess(true);
    }
  };

  const onSubmit = (data) => {
    if (data.firstName && data.lastName && data.email && data.password) {
      handleFetch(data);
    } else {
      console.log('Please fill all the fields');
    }
  };

  return (
    <div className={classes['signUp-container']}>
      <div className={classes.contentContainer}>
        <header id={classes.headerLogo}>
          <img id={classes.imgHeaderLogo} src={Logo}></img>
          <h1 id={classes.logoHeader}>Citrone</h1>
        </header>
        <form id={classes.formSignUp} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={classes.headerTwo}>Create a new account</h1>
          <div className={classes.inputsContainer}>
            <div className={classes.namesInputs}>
              <div className={classes.fnameLabelInput} style={{ width: '50%' }}>
                <label className={classes.labelNames} htmlFor="fname">
                  First Name
                </label>
                <br />
                <input
                  placeholder="Enter your first name"
                  className={classes.fNameInput}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className={classes.lnameLabelInput} style={{ width: '50%' }}>
                <label className={classes.labelNames} htmlFor="lname">
                  Last name
                </label>
                <br />

                <input
                  placeholder="Enter your last name"
                  className={classes.lNameInput}
                  aria-invalid="true"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className={classes.emailPasswordContainer}>
              <div className={classes.email}>
                <label id={classes.signUpLabels} htmlFor="Email">
                  Email Address
                </label>{' '}
                <br />
                <input
                  {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
                  })}
                  className={classes.inputPasswordEmail}
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <error className={classes.errors}>
                  {errors.email?.type === 'required' && 'Email required'}
                  {errors.email?.type === 'pattern' && 'Entered Email pattern is in wrong format'}
                </error>
              </div>
              <div className={classes.password}>
                <label id={classes.signUpLabels} htmlFor="password">
                  Password
                </label>{' '}
                <br />
                <input
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 12
                  })}
                  className={classes.inputPasswordEmail}
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className={classes.errors}>
                  {errors.password?.type === 'required' && 'Password required'}
                  {errors.password?.type === 'minLength' &&
                    'Entered number is less than 6 characters'}
                  {errors.password?.type === 'maxLength' &&
                    'Entered number is more than 12 characters'}
                </label>
                <i className={classes.showPassword}>
                  <img id={classes.changePasswordEye} src={Eye}></img>
                </i>
              </div>
            </div>
          </div>

          <div id={classes.admissionCodesWrapper}>
            <label id={classes.signUpLabels} htmlFor="uniquecode">
              Admission Codes
              <i className={classes.showPassword}>
                <img id={classes.asterisk} src={Asterisk}></img>
              </i>
            </label>
            <br />
            <div id={classes.admissionCodes}>
              <input className={classes.admissionCode} type="text" />
              <input className={classes.admissionCode} type="text" />
              <input className={classes.admissionCode} type="text" />
              <input className={classes.admissionCode} type="text" />
              <input className={classes.admissionCode} type="text" />
              <h6 id={classes.admissionCodeText}>
                {' '}
                Admission code can be found in your welcome mail
              </h6>
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
          <button className={classes.signupBtn} type="submit" onClick={handleFetch}>
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
