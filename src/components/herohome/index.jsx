import React from 'react';

function HeroHome() {

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-4 relative py-10">
        <div className="relative pt-10">
          <div className="max-w-3xl mx-auto text-center md:pt-20 md:pb-20 
          bg-[url('/src/assets/images/me.jpg')] 
          rounded-lg 
          bg-cover
          bg-center"
            role="img"
            aria-label="Background image of Dmitrii"
          >
            <h1 className="h2 pt-10 pl-10 text-white text-left" data-aos="fade-up">
              Hi, I'm Dmitrii
            </h1>
            <p className="h4 pt-4 pl-10 pb-10 text-white text-left" data-aos="fade-up" data-aos-delay="200">
              Fullstack developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
