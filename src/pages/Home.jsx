import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroHome from './HeroHome';
import Skills from './Skills';
import Portfolio from './Portfolio';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">
      <header role="banner">
        <Header />
      </header>

      <main role="main" className="grow">
        <HeroHome />
        <Skills />
        <Portfolio />
      </main>

      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;