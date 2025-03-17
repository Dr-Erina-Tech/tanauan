// HomeFeatures.jsx
import React from 'react';
import { Features } from '../../components'; 
import homeData  from './homeData.js'; // Import home data

const HomeFeatures = () => {
  return (
    <Features 
      title="Featured Community Services and Resources"
      subtitle="Explore a variety of essential services and programs designed to enhance your experience in our community."
      dividerText="SERVICES WE OFFER"
      featuresData={homeData.features} // Pass only the features data
    />
  );
};

export default HomeFeatures;