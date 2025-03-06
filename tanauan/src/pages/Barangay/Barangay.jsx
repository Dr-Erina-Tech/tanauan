import React from "react";
import { Hero, Navbar } from "../../components";
import barangayData from "./barangayData";

const Barangay = () => {
  return (
    <div>
      <Navbar />
      <Hero 
        name={barangayData.hero.name}
        description={barangayData.hero.description}
        buttonText={barangayData.hero.buttonText}
        showHeroCard={false}
      />
    </div>
  );
};

export default Barangay;
