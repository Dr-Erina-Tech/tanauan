import React from 'react';
import { Navbar, Footer, OtherHero, ServiceOverview } from "../../components";
import styles from './IDservices.module.css';
import { servicesData, mainServiceData } from './idServicesData';

const IDservices = () => {

  return (
    <div>
      <Navbar />
      <div className={styles.headerContainer}>
        {/* Insert the OtherHero component here with props */}
        <OtherHero title="ID Services" breadcrumb="ID Services" />

        {/* The rest of the IDservices content */}
          <div className="container py-4">
          <ServiceOverview
              title="SEÑIOR CITIZEN and PWD ID AND BENEFITS"
              services={servicesData}
              mainService={mainServiceData}
            />
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default IDservices;
