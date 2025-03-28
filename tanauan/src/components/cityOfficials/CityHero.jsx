import React from 'react'
import { Facebook, Instagram, Twitter, Globe } from 'lucide-react';
import styles from './cityHero.module.css';

const CityHero = () => {
    // Use the direct image URL from Wikipedia
    const mayorImage = 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/416868776_685643200322176_1023859943715363167_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEaba3qDKby1T2178VYQY_HD2x7Evz2bQQPbHsS_PZtBCOszIPAnk0gw3GpZj_5RtsWZwbDEzDO4Wt6xANMgtzg&_nc_ohc=2FYJmMb00BMQ7kNvgHeoi4l&_nc_oc=AdlfKzY72w20ApFvB66OBatLc9btILEJR__jhdRabXsXM5crm7iSJETMlQt8DTO1P6M&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=_6bSs1qN2cESwS170fbYIA&oh=00_AYG_gBb2KsuI3LDXK9YCB3yaSUWygQGwuIAlSZK7ty647A&oe=67EB2E7C';
  return (
  <div className={`${styles.bgContainer}`}>
    <div className="container">
        <div className={`${styles.officialsContainer}`}>
          <div className="text-center mb-8">
            <h1 className={`display-4 ${styles.title}`}>Elected Officials</h1>
            <div className="d-flex justify-content-center align-items-center text-muted mb-4">
              <a href="#" className="text-white">Home</a>
              <span className="mx-2 text-white">&gt;</span>
              <a href="#" className="text-white">Tanauan</a>
              <span className="mx-2 text-white">&gt;</span>
              <a href="#" className={styles.activeLink}>Elected Officials</a>
            </div>
          </div>

        <div className="row align-items-start">
          <div className="col-md-4 mb-4">
            <img 
              src={mayorImage} 
              alt="City Mayor Nelson Perez Collantes" 
              className={`img-fluid rounded ${styles.mayorImage}`}
            />
          </div>

          <div className={`col-md-8 ${styles.desc}`}>
            <h2 className={`${styles.sectionTitle} text-warning`}>CITY MAYOR</h2>
            <h3 className={`display-5 ${styles.mayorName}`}>Nelson Perez Collantes</h3>
            <p className="mt-4">
              Nelson Perez Collantes (born May 5, 1952), known as Sonny Collantes, is a Filipino politician and Air Force Reservist who is the Mayor of Tanauan City, Batangas since 2022.
              He served as a member of the Philippine House of Representatives for the Third District of Batangas from 2010 to 2016, succeeding Victoria Hernandez-Reyes.
            </p>
            <p className="mt-3">
              He was one of the 24 Members of the 15th Congress who switched parties and joined the Liberal Party on June 25, 2010. He previously served as the OIC Secretary of the Interior and Local Government in June 1998, the final month of the Ramos administration.
              In 2018, the Commission on Appointments confirmed his promotion to the rank of Brigadier General (Reserve).
            </p>

            <div className="d-flex mt-4">
              <a href="#" className="text-light me-3">
                <Globe />
              </a>
              <a href="#" className="text-light me-3">
                <Facebook />
              </a>
              <a href="#" className="text-light me-3">
                <Instagram />
              </a>
              <a href="#" className="text-light">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CityHero;