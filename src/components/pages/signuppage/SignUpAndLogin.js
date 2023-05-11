import React, { useState } from 'react';
import LoginPage from './LoginPage';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SignUpAndLoginForm() {
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const { handleSubmit, register } = useForm();

  const handleSignUpSuccess = () => {
    setSignUpSuccess(true);
  };

  const handleSignUp = (data) => {
    e.preventDefault();
    // Code to submit the sign-up form and create a new user
    setIsNewUser(true);
    localStorage.setItem('newUser', true);
    handleSignUpSuccess();
  };

  return (
    <div>
      {signUpSuccess ? (
        <div style={{ color: 'green' }}>Congratulations! You have successfully signed up.</div>
      ) : (
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" ref={register} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" ref={register} />
          </div>
          <button type="submit">Sign up</button>
        </form>
      )}
      <br />
      <LoginPage />
    </div>
  );
}
