import React, { lazy, Suspense } from "react";
import { Navbar, Hero, Footer, Spinner } from "../../components";
import homeData from "./homeData";

// Lazy load components
const lazyImport = (component) => lazy(() => import("../../components").then(module => ({ default: module[component] })));

// Lazy load HomeFeatures and HomeSteps
const HomeFeatures = lazy(() => import('./HomeFeatures'));
const HomeSteps = lazy(() => import('./HomeSteps'));

const Services = lazyImport("Services");
const City = lazyImport("City");
const About = lazyImport("About");

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero 
        name={homeData.hero.name}
        description={homeData.hero.description}
        buttonText={homeData.hero.buttonText}
        showHeroCard={true}
        showSocials={true}
        page="home" 
      />
      
      {/* Single Suspense wrapper for all lazy-loaded components */}
      <Suspense fallback={<Spinner />}>
        <HomeFeatures />
        <HomeSteps />
        <Services />
        <City />
        <About />
      </Suspense>
      
      <Footer />
    </div>
  );
};

export default Home;