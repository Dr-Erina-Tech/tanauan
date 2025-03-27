import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Facebook, X, Instagram, Youtube, Phone, Mail } from "lucide-react"; // Use X instead of Twitter
import { getImageUrl } from "../../utils";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
        <img src={getImageUrl("./footer/footerLogo.svg")} alt="Tanauan City Logo" className={styles.logo} />
          <h4>Tanauan City, Batangas</h4>
          <p>Tanauan is a thriving city in the province of Batangas, known for its rich culture, history, and development initiatives.</p>
        </div>
        <div className={styles.contactUs}>
          <h4>Contact Us</h4>
          <p><span className={styles.icon}><Phone /></span>0962 710 5470</p>
          <p><span className={styles.icon}><Mail /></span>info@tanauancity.gov.ph</p>
          <p>New Tanauan City Hall, Tanauan - Talisay National Road, Brgy. Natatas, Tanauan, Philippines</p>
        </div>
        <div className={styles.followUs}>
          <h4>Follow Us</h4>
          <a href="#" className={styles.iconLink}><span className={styles.icon}><Facebook /></span>Facebook</a>
          <a href="#" className={styles.iconLink}><span className={styles.icon}><X /></span>X.com</a>
          <a href="#" className={styles.iconLink}><span className={styles.icon}><Youtube /></span>Youtube</a>
          <a href="#" className={styles.iconLink}><span className={styles.icon}><Instagram /></span>Instagram</a>
        </div>
        {/* Image on the right side */}
        <div className={styles.footerImage}>
        <img src={getImageUrl("./footer/republic.svg")} alt="Tanauan City Logo" className={styles.logo} />
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© 2025 Tanauan City. All rights reserved.</span>
        <div className={styles.links}>
        <a href="#">Terms and Conditions</a> | <a href="#">Privacy</a> | <a href="#">About Tanauan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 