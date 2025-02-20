import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Igris from "../assets/igris.jpg";
import Logo from "../assets/tanauan.svg";
import Beru from "../assets/beru.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="card-container">
        <Card title="Tanauan" description="City in Batangas" image={Logo} />
        <Card
          title="Igris Shadow"
          description="First Shadow Soldier"
          image={Igris}
        />
        <Card
          title="Beru Shadow"
          description="Most Loyal Servant"
          image={Beru}
        />
      </div>
    </div>
  );
};

export default Home;
