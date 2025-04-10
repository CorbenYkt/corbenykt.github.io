import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import HeroHome from '../components/herohome';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';

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