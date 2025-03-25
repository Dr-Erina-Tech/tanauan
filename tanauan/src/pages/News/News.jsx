import React, { lazy, Suspense } from "react";
import { Hero, Navbar, Footer, Spinner } from "../../components";
import newsData from "./newsData";
import NewsCarousel from "./NewsCarousel";

// Lazy load the NewsList component
const NewsList = lazy(() => import('./NewsList'));

const News = () => {
  return (
    <div>
      <Navbar />
      <Hero 
        name={newsData.hero.name}
        description={newsData.hero.description} 
        buttonText={newsData.hero.buttonText} 
        showHeroCard={false}
        showSocials={false}
        page="news" 
      />
      {/* This is for news component */}
      <Suspense fallback={<Spinner />}>
        <NewsCarousel />
        <NewsList />
      </Suspense>
      <Footer />
    </div>
  );
};

export default News;
