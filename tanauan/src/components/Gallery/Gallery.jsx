import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getImageUrl } from '../../utils.js'; // Adjust the path as necessary
import styles from './Gallery.module.css'; // Import the CSS module

// This makes the code not repetitive for the images
const imageNames = [
  "gallery1.jpg", 
  "gallery2.jpg",
  "gallery3.jpg",

];

const Gallery = () => {
  const images = imageNames.map(imageName => getImageUrl(`gallery/${imageName}`)); 
 
}

export default Gallery;