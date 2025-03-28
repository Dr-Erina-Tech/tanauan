import React from 'react';
import styles from './popularLinks.module.css'; // Import the CSS module

const PopularLinks = ({ title = "Popular Links", links }) => { // Accept title as a prop
  return (
    <div className={`${styles.sidebar}`}>
      <div className="p-4 rounded-lg">
        <h2 className={`${styles.title} font-bold mb-4`}>{title}</h2> {/* Use dynamic title */}
        <ul className={styles.linkList}>
          {links.map((link, index) => (
            <li className={styles.listItem} key={index}>
              <a className={`${styles.link} hover:underline`} href={link.url}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularLinks;
