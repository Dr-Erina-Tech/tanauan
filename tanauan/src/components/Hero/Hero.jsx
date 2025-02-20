import React from 'react';
import './Hero.module.css';
import VideoBackground from './HeroBG';
import LeftTextContainer from './HeroContainer';

const Hero = () => {
  return (
    <div>
      {/* Hero BG */}
      <VideoBackground />

      {/* Left box container */}
      <LeftTextContainer />
    </div>
  );
};

export default Hero;