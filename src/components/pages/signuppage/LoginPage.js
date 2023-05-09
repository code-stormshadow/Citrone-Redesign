import React, { useState } from 'react';
import Logo from './images/Mask group.png';
import Eye from './images/Eye.png';
import classes from '../signuppage/SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { useEffect } from 'react';

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const navigate = useNavigate();

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
  // const onSubmit = async (data) => {
  //   try {
  //     const response = await fetch('https://citrone-lms.onrender.com/api/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     });

  //     if (!response.ok) {
  //       throw new Error('Login failed!');
  //     }

  //     navigate('/dashboard');
  //   } catch (error) {
  //     console.error(error);
  //   }
    // function Greeting() {
    //   const [isNewUser, setIsNewUser] = useState(false);

    //   useEffect(() => {
    //     const isNew = localStorage.getItem('isNewUser') === 'true';
    //     setIsNewUser(isNew);
    //   }, []);
    // }
  };
  return (
    <div className={classes.loginDiv}>
      <header id={classes.logInFormHeader}>
        <img id={classes.logInLogoImg} src={Logo}></img>
        <h1 id={classes.citroneTextHeader}>Citrone</h1>
      </header>
      <form id={classes.logInForm} onSubmit={handleSubmit(onSubmit)}>
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
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
                })}
                className={classes.emailInputForLogin}
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={classes.emailRequired}>
                {errors.email?.type === 'required' && 'Email is required'}
                {errors.email?.type === 'pattern' && 'Entered email is in wrong format'}
              </div>
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
                  // onBlur={'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  // {...register('password', {
                  //   required: true
                  // })}
                />
                <div>{email && errors.email}</div>
                <div className={classes.passwordRequired}>
                  {errors.password?.type === 'required' && 'password is required'}
                </div>

                <i className={classes.showLPassword}>
                  <img id={classes.changePasswordEye} src={Eye}></img>
                </i>
              </div>

              <div className={classes['login-checkbox']}>
                <input type="checkbox" />
                <label className={classes['login-checkboxLabel']}>
                  <span>Remember me</span>
                </label>
              </div>
            </div>
          </div>
          <button className={classes.loginBtn} type="submit">
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
