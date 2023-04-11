import React from 'react';
import styles from './/Dashboard.module.css';

const SearchBar = () => {
  return (
    <div>
      <input placeholder="Search module title" className={styles.searchBar} />
    </div>
  );
};

export default SearchBar;
