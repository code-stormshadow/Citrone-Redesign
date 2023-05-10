import React from 'react';
import NavBar from './db_ components/NavBar';
import SideNavBar from './db_ components/SideNavBar';
import styles from './db_ components/Dashboard.module.css';
import BannerImage from './images/banner.png';

const Settings = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={styles.settingsWrapper}>
          <img src={BannerImage} alt="Banner Image" className={styles.bannerImage} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
