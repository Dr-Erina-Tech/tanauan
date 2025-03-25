import React from "react";
import Slider from "react-slick";
import { Card } from "../../components";
import newsData from "./newsData";
import styles from "./NewsCarousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Ensure these are imported

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className={styles.prevArrow} onClick={onClick}>
      &#8249;
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className={styles.nextArrow} onClick={onClick}>
      &#8250;
    </button>
  );
};

const NewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Latest News</h2>
        <a href="/news" className={styles.seeMoreButton}>See More</a>
      </div>

      <div className={styles.headerLine}></div>

      <Slider {...settings}>
        {newsData.newsCard.map((newsItem, index) => (
          <div key={index} className={styles.slickSlide}>
            <Card
              title={newsItem.title}
              description={newsItem.description}
              videoUrl={newsItem.videoUrl}
              image={newsItem.imageUrl}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
