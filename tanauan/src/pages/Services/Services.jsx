import React from "react";
import styles from "./Services.module.css";
import components from "../../components/index";
import assets from "../../assets/Assets";

const Services = () => {
  return (
    <div>
      <components.Navbar />
      <div className={styles.cardContainer}>
        <components.FutureCard
          title="Igris"
          description="First Shadow"
          image={assets.First}
        />
        <components.FutureCard
          title="Beru"
          description="Most Loyal Shadow"
          image={assets.Beru}
        />
        <components.FutureCard
          title="Bellion"
          description="Strongest Shadow"
          image={assets.Bellion}
        />
      </div>
    </div>
  );
};

export default Services;
