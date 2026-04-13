import React from 'react';
import Hero from '../components/Hero';
import BrandStory from '../components/BrandStory';
import WhatWeBuild from '../components/WhatWeBuild';
import HowItWorks from '../components/HowItWorks';
import TrustSection from '../components/TrustSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <BrandStory />
      <WhatWeBuild />
      <HowItWorks />
      <TrustSection />
      <CTASection />
    </>
  );
};

export default Home;
