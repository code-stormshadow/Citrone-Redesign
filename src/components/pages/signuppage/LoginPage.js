import React, { useState } from 'react';
import Logo from './images/Mask group.png';
import Eye from './images/Eye.png';
import classes from '../signuppage/SignUp.module.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const handleSubmit = () => {

  //Hooks for form validation
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // };

  return (
    <div className={classes.loginDiv}>
      <header id={classes.logInFormHeader}>
        <img id={classes.logInLogoImg} src={Logo}></img>
        <h1 id={classes.citroneTextHeader}>citrone</h1>
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
                className={classes.emailInputForLogin}
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
                })}
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
                <Link id={classes.forgotPassword} to="/forgotpassword">
                  Forgot your password?
                </Link>
                <br />
              </div>
              <input
                id={classes.passwordInputForLogin}
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                {...register('password', {
                  required: true
                })}
              />
              <div className={classes.passwordRequired}>
                {errors.password?.type === 'required' && 'password is required'}
              </div>

              <i className={classes.showPassword}>
                <img id={classes.changePasswordEye} src={Eye}></img>
                <br />
                <br />
              </i>

              <div className={classes['login-checkbox']}>
                <input type="checkbox" />
                <label className={classes['login-checkboxLabel']}>
                  <span>Remember me</span>
                </label>
              </div>
            </div>
          </div>
          <button className={classes.loginBtn}>Log In</button>
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
