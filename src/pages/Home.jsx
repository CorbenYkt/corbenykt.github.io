import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroHome from './HeroHome';
import Skills from './Skills';
import Portfolio from './Portfolio';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">
      <Header />

      <main className="grow">
        <HeroHome />
        <Skills />
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
}

export default Home;