import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { getImageUrl } from "../../utils";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.contentFooter}>
          <div className={styles.profile}>
            <div className={styles.logoArea}>
              <img src={getImageUrl("./about/tanauan-logo.svg")} alt="Logo" />
              <span className={styles.logoName}>Tanauan</span>
            </div>
            <div className={styles.description}>
              <p>City in Batangas</p>
            </div>
            <div className={styles.socials}>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Twitter />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Youtube />
              </a>
            </div>
          </div>
          <div className={styles.serviceArea}>
            <ul className={styles.serviceHeader}>
              <li className={styles.serviceName}>City Transactions</li>
              <li>
                <a href="#">CSWD Services</a>
              </li>
              <li>
                <a href="#">City Planning</a>
              </li>
              <li>
                <a href="#">Senior Citizen ID & Benefits</a>
              </li>
              <li>
                <a href="#">PWD ID & Services</a>
              </li>
            </ul>
            <ul className={styles.serviceHeader}>
              <li className={styles.serviceName}>E-services</li>
              <li>
                <a href="#">Business Permit</a>
              </li>
              <li>
                <a href="#">Real Property Tax Payment</a>
              </li>
              <li>
                <a href="#">Business Safety Seal Application</a>
              </li>
              <li>
                <a href="#">Tanauan Citizen Card</a>
              </li>
            </ul>
            <ul className={styles.serviceHeader}>
              <li className={styles.serviceName}>City Transactions</li>
              <li>
                <a href="#">CSWD Services</a>
              </li>
              <li>
                <a href="#">City Planning</a>
              </li>
              <li>
                <a href="#">Senior Citizen ID & Benefits</a>
              </li>
              <li>
                <a href="#">PWD ID & Services</a>
              </li>
            </ul>
            <div className={styles.footerVectorContainer}>
              <img className={styles.footerImage} src={getImageUrl("./footer/footerSUN.svg")} alt="Vector of the footer" /> {/*This is where im gonna insert the footer VECTOR*/}

            </div>
          </div>
        </div>
        <hr />
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <span>Copyright © Tanauan 2025 </span>
            All Rights Reserved.
          </div>
          <div className={styles.tou}>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;