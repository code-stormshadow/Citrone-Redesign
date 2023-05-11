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
              <h3>Olurotimi Akinnagbe</h3>
              <h5>UI/UX Design</h5>
              <div className={styles.settingsLocationFlex}>
                <img src={NGFlag} alt="" />
                <p>Lagos, Nigeria</p>
              </div>
              <button className={styles.settingsProfileBtn}>Edit Profile</button>
            </div>
            <div className={styles.settingsProfileInformation}>
              <h2 className={styles.settingsProfileText}>Profile Information</h2>
              <hr style={{ border: '1px solid rgba(217, 217, 217, 0.8);' }} />
              <form className={styles.settingsForm}>
                <label>First Name</label>
                <div>
                  <input type="text" name="fname" />
                </div>

                <label>Last Name</label>

                <input type="text" name="lname" />

                <div>
                  <label>Email Address</label>
                  <input type="email" name="email" />
                </div>
                <label>Country</label>
                <input type="text" name="country" />
                <label>City</label>
                <input type="text" name="city" />
                <label>Bio</label>
                <input type="text" name="bio" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
