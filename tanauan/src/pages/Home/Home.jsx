import React from "react";
import styles from "./Home.module.css";
import components from "../../components/index";
import assets from "../../assets/Assets";

const Home = () => {
  return (
    <div>
      <components.Navbar />
      <components.Hero />
      <div className={styles.cardContainer}>
        <components.Card
          title="Tanauan"
          description="City in Batangas"
          image={assets.Logo}
        />
        <components.Card
          title="Igris Shadow"
          description="First Shadow Soldier"
          image={assets.Igris}
        />
        <components.Card
          title="Beru Shadow"
          description="Most Loyal Servant"
          image={assets.Beru}
        />
        <components.Card
          title="React"
          description="Damn it's hard."
          image={assets.React}
        />
      </div>
    </div>
  );
};

export default Home;
