import React from 'react';
import styles from './Hero.module.css';
import { getVideoUrl } from '../../utils';

const HeroBG= () => {
  return (
    <video
      autoPlay
      loop
      muted
      className={styles.video}
    >
      <source src={getVideoUrl('hero/video-banner.webm')} type="video/webm" />
      Your browser does not support the video.
    </video>
  );
};

export default HeroBG;