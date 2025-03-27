import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 

import { Navbar, HeaderSection, SwiperCard, Footer } from "../../components";
import { cardData, missionText } from './missionData';  // Import card data
import styles from './Mission.module.css';  // Import styles

const Mission = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar className={styles.navBar} /> 
      {/* Vision Section */}
      <div className={styles.headerContainer}>
          <HeaderSection 
            className={styles.headerSection}  // Apply styles using imported class
            title={missionText.visionTitle} 
            description={missionText.visionContent} 
          />
        {/* Mission Section */}
          <HeaderSection 
            className={styles.headerSection}  // Apply styles using imported class
            title={missionText.missionTitle} 
            description={missionText.missionDescription} 
          />
      </div>
      {/* Mission Card Section */}
      <div className={styles.cardContainer}>
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
        >
          {cardData.map((data, index) => (
            <SwiperSlide key={index}>
              <SwiperCard
                imgSrc={data.imgSrc}
                altText={data.altText}
                title={data.title}
                description={data.description}
                className={styles.missionCard}  // Apply card styles
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
