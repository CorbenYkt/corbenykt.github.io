import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroHome from './HeroHome';
import FeaturesBlocks from './FeaturesBlocks';
import FeaturesZigZag from './FeaturesZigzag';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">
      <Header />

      <main className="grow">
        <HeroHome />
        <FeaturesBlocks />
        <FeaturesZigZag />
      </main>

      <Footer />
    </div>
  );
}

export default Home;