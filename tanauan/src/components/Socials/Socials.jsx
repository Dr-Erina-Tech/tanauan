import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import styles from './Socials.module.css'; // Import the CSS module

const socialMedia = [
  { name: 'Facebook', url: 'https://www.facebook.com', icon: <Facebook /> },
  { name: 'Instagram', url: 'https://www.instagram.com', icon: <Instagram /> },
  { name: 'Twitter', url: 'https://www.twitter.com', icon: <Twitter /> },
  { name: 'Youtube', url: 'https://www.youtube.com', icon: <Youtube /> },

];

const Socials = () => {
  return (
    <div className={styles.socialsContainer}>
      {socialMedia.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;