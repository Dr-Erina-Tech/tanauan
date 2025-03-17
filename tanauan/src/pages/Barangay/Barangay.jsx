import React, { lazy, Suspense} from "react";
import { Hero, Navbar, ListOverview, Footer, Spinner } from "../../components";
import barangayData from "./barangayData";



// Lazy load components
const lazyImport = (component) => lazy(() => import("../../components").then(module => ({ default: module[component] })));

// Lazy load HomeFeatures and HomeSteps
const BarangayList = lazy(() => import('./BarangayList'));

const Barangay = () => {
  return (
    <div>
      <Navbar />
      <Hero 
        name={barangayData.hero.name}
        description={barangayData.hero.description}
        buttonText={barangayData.hero.buttonText}
        showHeroCard={false}
        showSocials={false}
        page="barangay" // Pass 'barangay' to get the barangay-specific background
      />
      {/* Single Suspense wrapper for all lazy-loaded components */}
      <Suspense fallback={<Spinner />}>
          <BarangayList/>
      </Suspense>

      <Footer />
    </div>
  );
};

export default Barangay;
