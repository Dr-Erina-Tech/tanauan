import React, { lazy, Suspense } from "react";
import { Navbar, Hero, Footer, Spinner } from "../../components";
import { homeData } from "./homeData";  // Import home data

// Lazy load components from index.js
const lazyImport = (component) => lazy(() => import("../../components").then(module => ({ default: module[component] })));

const Features = lazyImport("Features");
const Steps = lazyImport("Steps");
const Services = lazyImport("Services");
const City = lazyImport("City");
const About = lazyImport("About");

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Pass data as props to Hero */}
      <Hero 
        name={homeData.hero.name}
        description={homeData.hero.description}
        buttonText={homeData.hero.buttonText}
      />
      
      {/* Single Suspense wrapper for all lazy-loaded components */}
      <Suspense fallback={<Spinner />}>
        <Features />
        <Steps />
        <Services />
        <City />
        <About />
      </Suspense>
      
      <Footer />
    </div>
  );
};

export default Home;
