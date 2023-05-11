import React, { useState } from 'react';
import classes from '../signuppage/SignUp.module.css';
import Logo from './images/Mask group.png';
import Eye from './images/Eye.png';
import confirmEye from './images/confirmEye.png';
import Eyedisplay from './images/Eyedisplay.png';
import { useNavigate } from 'react-router-dom';

const SetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
    // setConfirmPassword(!confirmPassword);
  };
  const handleConfirmPasswordToggle = () => {
    // setShowPassword(!showPassword);
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Perform password pattern validation here if needed

    const newPassword = { password };
    const url = 'https://citrone-lms.onrender.com/api/auth/password-reset/:userId/:token';

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPassword)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        navigate('/dashboard'); // Navigate to success page
      })
      .catch((error) => {
        console.error('There was a problem updating the password:', error);
      });
  };

  return (
    <div id={classes.setPassDiv}>
      <header id={classes.forgotPassHeader}>
        <img id={classes.forgotPassLogo} src={Logo} alt="Logo" />
        <h1 id={classes.citroneTextHeaderForPass}>Citrone</h1>
      </header>
      <form className={classes.setPassForm} onSubmit={handleSubmit}>
        <header className={classes['forgotPassword-container']}>Set New Password</header>
        <p id={classes.forgotPassParagraph}>Please enter a new password below</p>
        <div>
          <label id={classes.setPassLabel} htmlFor="Email">
            New Password *
          </label>
          <br />
          <input
            className={classes.emailInputForLogin}
            type={showPassword ? 'text' : 'password'}
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className={classes.showPassword}>
            <img
              id={classes.changePasswordEye}
              src={showPassword ? Eyedisplay : Eye}
              alt="Toggle password visibility"
              onClick={handlePasswordToggle}></img>
          </label>
          <br />
          <br />
          <br />
          <label id={classes.setPassLabel} htmlFor="Email">
            Confirm Password *
          </label>
          <input
            id={classes.confirmNewPassword}
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label className={classes.showPassword}>
            <img
              id={classes.changePasswordEye}
              src={showConfirmPassword ? Eyedisplay : confirmEye}
              alt="Toggle password visibility"
              onClick={handleConfirmPasswordToggle}></img>
          </label>
        </div>
        <button className={classes.forgotPassBtn} type="submit">
          Save New Password
        </button>
      </form>
    </div>
  );
};

export default SetPassword;
