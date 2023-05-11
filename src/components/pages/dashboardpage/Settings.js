import React from 'react';
import NavBar from './db_ components/NavBar';
import SideNavBar from './db_ components/SideNavBar';
import styles from './db_ components/Dashboard.module.css';
import BannerImage from './images/banner.png';
import ProfilePic from './images/bannerPic.png';
import NGFlag from './images/flag.svg';

const Settings = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={styles.settingsWrapper}>
          <div className={styles.overlayBanner}>
            <img src={BannerImage} alt="Banner Image" className={styles.bannerImage} />
            {/* <div className={styles.middleText}>
              <p className={styles.bannerText}>Add a Banner Image</p>
              <p className={styles.bannerDimensions}>Optimal dimensions 3200 X 410px</p>
              <div className={styles.buttonFlex}>
                <button className={styles.bannerBtn}>Replace Image</button>
                <p className={styles.bannerRemove}>Remove</p>
              </div>
            </div> */}
          </div>
          <div className={styles.settingsProfileFlex}>
            <div className={styles.settingProfileCard}>
              <img src={ProfilePic} alt="" className={styles.settingsProfilePic} />
              <h3 className={styles.settingsProfileName}>Olurotimi Akinnagbe</h3>
              <h5 className={styles.settingsProfileCourse}>UI/UX Design</h5>
              <div className={styles.settingsLocationFlex}>
                <img src={NGFlag} alt="" />
                <p className={styles.settingsLocation}>Lagos, Nigeria</p>
              </div>
              <button className={styles.settingsProfileBtn}>Edit Profile</button>
            </div>
            <div className={styles.settingsProfileInformation}>
              <h2 className={styles.settingsProfileText}>Profile Information</h2>
              <hr style={{ border: '1px solid rgba(217, 217, 217, 0.8);' }} />
              <form className={styles.settingsForm}>
                <label>
                  <span className={styles.settingsFormName}>First Name</span>
                  <input
                    type="text"
                    name="fname"
                    className={styles.input}
                    placeholder="Olurotimi"
                  />
                </label>

                <label className={styles.formLastName}>
                  Last Name
                  <input
                    type="text"
                    name="lname"
                    className={styles.input}
                    placeholder="Akinnagbe"
                  />
                </label>

                <div className={styles.settingsFormDiv}>
                  <label>Email Address</label>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className={styles.formEmail}
                      placeholder="Tyrantakinnagbe@gmail.com"
                    />
                  </div>
                </div>

                <div className={styles.settingsFormDiv}>
                  <label>Country</label>
                  <div>
                    <input
                      type="text"
                      name="country"
                      className={styles.formInput}
                      placeholder="Nigeria"
                    />
                  </div>
                </div>

                <div className={styles.settingsFormDiv}>
                  <label>City</label>
                  <div>
                    <input
                      type="text"
                      name="city"
                      className={styles.formInput}
                      placeholder="Lagos"
                    />
                  </div>
                </div>

                <div className={styles.settingsFormDiv}>
                  <label>Bio</label>
                  <div>
                    <input
                      type="text"
                      name="bio"
                      className={styles.formBio}
                      placeholder="I am passionate about creating intuitive and visually appealing products that solve real-world problems for users. I have experience working on mobile and web applications, SaaS platforms, and e-commerce websites."
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
