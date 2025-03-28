import React from 'react';
import styles from './serviceOverview.module.css';

const ServiceOverview = ({ title, services, mainService }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* Title */}
        <h1 className={styles.title}>{title}</h1>

        {/* Flex container for services list and main service */}
        <div className={styles.flexContainer}>
          {/* Left Section: Service List */}
          <div className={styles.serviceList}>
            {services.map((service, index) => (
              <div key={index} className={`${styles.serviceItem} ${styles[service.bgColor]}`}>
                <img src={service.icon} alt={service.alt} className={styles.serviceIcon} />
                <span className={`${styles.serviceText} ${styles[service.textColor]}`}>
                  {service.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Section: Main Service */}
          <div className={styles.mainService}>
            <div className={styles.mainServiceHeader}>
              <img src={mainService.icon} alt={mainService.alt} className={styles.mainServiceIcon} />
              <div>
                <h2 className={styles.mainServiceTitle}>{mainService.title}</h2>
                <p className={styles.mainServiceDescription}>{mainService.description}</p>
              </div>
            </div>

            <div className={styles.mainServiceLinks}>
              {mainService.links.map((link, index) => (
                <a key={index} href={link.url} className={styles.mainServiceLink}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
