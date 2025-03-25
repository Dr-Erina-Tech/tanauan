import React from "react";
import styles from "./Card.module.css";

// Helper function to extract YouTube video ID from the URL
const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu\.be\/|v\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const Card = ({ title, description, videoUrl, image }) => {
  const videoId = getYouTubeVideoId(videoUrl);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // Fetches YouTube video thumbnail

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageWrapper}>
        {videoId ? (
          <div className={styles.videoWrapper}>
            {/* Embed YouTube video */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          </div>
        ) : (
          // Display image if no video URL
          <img className={styles.cardImage} src={image} alt={title} />
        )}
      </div>

      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
