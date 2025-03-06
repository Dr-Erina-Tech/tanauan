import React from "react";
import { Steps } from "../../components"; // Assuming you have a Steps component to display each step
import homeData from './homeData'; 



const HomeSteps = () => {
  const { steps } = homeData; // Access the steps data

  return (
    <div>
      {/* Render your existing Steps component and pass the steps data */}
      <Steps steps={steps} />
    </div>
  );
};

export default HomeSteps;

