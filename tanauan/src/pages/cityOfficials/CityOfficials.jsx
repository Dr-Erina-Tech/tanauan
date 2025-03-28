import React from 'react';
import { Navbar, Footer, CityHero, OfficialsList, PopularLinks } from "../../components";
import { cityOfficialsData, popularLinks } from './cityOfficialsData'; //props
import styles from './cityOfficials.module.css'; // Importing custom styles as 'styles'

const CityOfficials = () => {
  return (
    <div>
      <Navbar />
      <CityHero />

      <div className={styles.bgLight}> 
        <div className="container py-4">

          <div className="row">
            
            {/* Left column for Popular Links */}
            <div className="col-lg-3 col-12 mb-4 mb-lg-0">
              <PopularLinks links={popularLinks} />
            </div>

            {/* Right column for Officials List */}
            <div className="col-lg-9 col-12">
              <OfficialsList officialsData={cityOfficialsData} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CityOfficials;
