import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import styles from "./Services.module.css";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <>
      <div className={styles.serviceContainer}>
        <div className={styles.leftTextContainer}>
          <h1 className={styles.heading}>
            <span className={styles.cityName}>Modern Public Services</span>
          </h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quis
            accusantium distinctio, minima consectetur sunt consequatur expedita
            doloremque, quas sed.
          </p>
        </div>
        <div className={styles.sliderWrapper}>
          {/* Custom Navigation Arrows */}
          <div className={styles.navContainer}>
            <button
              type="button"
              className={`button-next ${styles.buttonNext}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 12L2 12"
                  stroke="#01664F"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 19L2 12L9 5"
                  stroke="#01664F"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className={`button-prev ${styles.buttonPrev}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 12H22"
                  stroke="#01664F"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15 5L22 12L15 19"
                  stroke="#01664F"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>

          <Swiper
            modules={[Navigation, Keyboard, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            keyboard={{ enabled: true }}
            loop={true}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            allowTouchMove={false}
            breakpoints={{
              390: { slidesPerView: 1 },
              430: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className={styles.swiper}
          >
            {servicesData.map((card, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <div className={styles.card}>
                  <img
                    className={styles.cardImage}
                    src={card.image}
                    alt={card.title}
                  />
                  <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{card.title}</h2>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Services;
