import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Logo from './images/Mask group.png';
import Eye from './images/Eye.png';
import Eyedisplay from './images/Eyedisplay.png';
import Asterisk from './images/Asterisk.png';
import classes from './SignUp.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
// import { useForm } from 'react-hook-form';

const SignUpPage = ({ getFirstName, getLastName, getEmail, getPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const admissionCodeRef = useRef(null);
  const handleNumericInput = (e) => {
    const input = e.target;
    const max = parseInt(input.attributes.max.value);
    const min = parseInt(input.attributes.min.value);
    const value = parseInt(input.value);

    // if (!isNaN(value) && value >= min && value <= max) {
    //   if (value === max) {
    //     admissionCodeRef.current.focus();
    //   } else {
    //     input.nextSibling.focus();
    //   }
    // }
    if (!isNaN(value) && value >= min && value <= max) {
      if (value === max) {
        admissionCodeRef.current.focus();
      } else {
        input.nextSibling.focus();
      }
    }
  };
  const onSubmit = (data) => {
    if (data.firstName && data.lastName && data.email && data.password) {
      handleSubmit(data);
    } else {
      return 'Please fill all the fields';
    }
    navigate('/login');
  };

  // const [isNewUser, setIsNewUser] = useState(false);

  // useEffect(() => {
  //   // Call server API to check if user is new
  //   fetch('/api/isNewUser')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setIsNewUser(data.isNewUser);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  // function greeting() {
  //   const classes = {
  //     /* Define your classes object here */
  //   };
  //   if (isNewUser) {
  //     return (
  //       <div id={classes.greetingDiv} style={{ display: 'block' }}>
  //         <h1 id={classes.greetingHeader}>
  //           <span id={classes.congratulations}>Congratulations!</span> Your account has been
  //           successfully created. You may log in now.
  //         </h1>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // }

  // const navigate = useNavigate();
  // const [errors, setErrors] = useState({});
  // const onSubmit = async () => {
  //   try {
  //     const result = fetch('https://citrone-lms.onrender.com/api/auth/signup', {
  //       crossDomain: true,
  //       method: 'POST',
  //       body: JSON.stringify({ firstName, lastName, email, password, track: 'UI/UX' }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json'
  //       }
  //     });

  //     if (!result.ok) {
  //       const error = await result.text();
  //       throw new Error(error);
  //     }

  //     window.location.href = 'https://localhost:3000/login';
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const validateForm = () => {
  //   let formErrors = {};
  //   if (!formData.name) {
  //     formErrors.name = 'Name is required';
  //   }
  //   if (!formData.email) {
  //     formErrors.email = 'Email is required';
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     formErrors.email = 'Email is invalid';
  //   }
  //   if (!formData.password) {
  //     formErrors.password = 'Password is required';
  //   } else if (formData.password.length < 8) {
  //     formErrors.password = 'Password must be at least 8 characters long';
  //   } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(formData.password)) {
  //     formErrors.password =
  //       'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character';
  //   }
  //   if (formData.confirmPassword !== formData.password) {
  //     formErrors.confirmPassword = 'Passwords do not match';
  //   }
  //   setErrors(formErrors);
  //   return Object.keys(formErrors).length === 0;
  // };

  // const handleInputChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  //   if (event.target.name in errors) {
  //     setErrors({ ...errors, [event.target.name]: null });
  //   }
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (validateForm()) {
  //     try {
  //       const response = await fetch('http://example.com/api/signup', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(formData)
  //       });
  //       if (response.ok) {
  //         // navigate to the congratulatory page
  //         window.location.href = '/congratulations';
  //       } else if (response.status === 409) {
  //         setErrors({ ...errors, email: 'Email already exists' });
  //       } else {
  //         throw new Error('Signup failed');
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       // display error message
  //       setErrors({ ...errors, general: 'Signup failed, please try again' });
  //     }
  //   }
  // };

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
                  // value={getFirstName}
                  onChange={getFirstName}
                  className={classes.fNameInput}
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && (
                  <span className={classes.error}>{errors.firstName.message}</span>
                )}
              </div>
              <div className={classes.lnameLabelInput} style={{ width: '50%' }}>
                <label className={classes.labelNames} htmlFor="lname">
                  Last name
                </label>
                <br />

                <input
                  type="text"
                  placeholder="Enter your last name"
                  className={classes.lNameInput}
                  // value={getLastName}
                  onChange={getLastName}
                  aria-invalid="true"
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && (
                  <span className={classes.error}>{errors.lastName.message}</span>
                )}
              </div>
            </div>

            <div className={classes.emailPasswordContainer}>
              <div className={classes.email}>
                <label id={classes.signUpLabels} htmlFor="Email">
                  Email Address
                </label>{' '}
                <br />
                <input
                  // {...register('email', {
                  //   required: true,
                  //   pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
                  // })}
                  className={classes.inputPasswordEmail}
                  type="email"
                  placeholder="Enter your email"
                  // value={getEmail}
                  onChange={getEmail}
                  {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                />
                <br />
                {errors.email && errors.email.type === 'required' && (
                  <span className={classes.error}>This field is required</span>
                )}
                {errors.email && errors.email.type === 'pattern' && (
                  <span className={classes.error}>Invalid email format</span>
                )}
              </div>
              <div className={classes.password}>
                <label id={classes.signUpLabels} htmlFor="password">
                  Password
                </label>{' '}
                <br />
                <div className={classes.signupFieldPassword}>
                  <input
                    className={classes.inputPasswordEmail}
                    type={showPassword ? 'text' : 'password'}
                    // value={getPassword}
                    onChange={getPassword}
                    placeholder="Enter your password"
                    {...register('password', {
                      required: 'Please enter a password',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters'
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                        message:
                          'Password must contain at least one uppercase letter, one lowercase letter, and one number'
                      }
                    })}
                  />
                  <label className={classes.showPassword}>
                    <img
                      id={classes.changePasswordEye}
                      src={showPassword ? Eyedisplay : Eye}
                      alt="Toggle password visibility"
                      onClick={togglePasswordVisibility}></img>
                  </label>
                </div>
                {errors.password && errors.password.type === 'required' && (
                  <span className={classes.error}>This field is required</span>
                )}
                {errors.password && errors.password.type === 'pattern' && (
                  <span className="error">
                    Password must be at least 8 characters long and contain at least one uppercase
                    letter, one lowercase letter, and one number
                  </span>
                )}
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
              <input
                className={classes.admissionCode}
                type="text"
                maxLength={1}
                min={0}
                // max={9}
                // onKeyDown={handleNumericInput}
                {...register('input1', { required: true })}
              />
              <input
                className={classes.admissionCode}
                type="text"
                maxLength={1}
                min={0}
                // max={9}
                // onKeyDown={handleNumericInput}
                {...register('input2', { required: true })}
              />
              <input
                className={classes.admissionCode}
                type="text"
                maxLength={1}
                min={0}
                max={9}
                // onKeyDown={handleNumericInput}
                {...register('input3', { required: true })}
              />
              <input
                className={classes.admissionCode}
                type="text"
                maxLength={1}
                min={0}
                max={9}
                onKeyDown={handleNumericInput}
                {...register('input4', { required: true })}
              />
              <input
                className={classes.admissionCode}
                maxLength={1}
                min={0}
                max={9}
                onKeyDown={handleNumericInput}
                ref={admissionCodeRef}
                {...register('admissionCode', { required: true })}
              />
              <h6 id={classes.admissionCodeText}>
                {' '}
                Admission code can be found in your welcome mail
              </h6>
            </div>
            {errors.admissionCode && (
              <span className={classes.error}>{errors.admissionCode.message}</span>
            )}
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
          <button className={classes.signupBtn} type="submit">
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

SignUpPage.propTypes = {
  getFirstName: PropTypes.string,
  getLastName: PropTypes.string,
  getEmail: PropTypes.string,
  getPassword: PropTypes.string
};

export default SignUpPage;
