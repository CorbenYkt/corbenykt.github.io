import React from 'react';
import Project1 from '../img/features-03-image-01.png';
import Project2 from '../img/features-03-image-02.png';
import Project3 from '../img/features-03-image-03.png';

function FeaturesZigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-black">Portfolio</h1>
          </div>

          {/* ProjectsSection */}
          <div id="projectssection" className="grid gap-20">
            <a href='https://corbenykt.github.io/fozzy' className='relative flex flex-col items-center'>
              {/* Fozzy's page */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                  <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src={Project1} width="540" height="405" alt="Features Fozzy's page" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3 text-black">Fozzy's page</h3>
                    <p className="text-xl text-gray-500 mb-4">Yes, this site is about our lovely dog Fozzy. Fozzy is a West Highland White Terrier, he is already 11 years old and a great family friend</p>
                  </div>
                </div>
              </div>
            </a>

            {/* AndreyChickachev's page */}
            <a href='https://www.andreychikachev.ru' className='relative flex flex-col items-center'>
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                  <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src={Project2} width="540" height="405" alt="AndreyChickachev's page" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3 text-black">Andrey Chikachev's page</h3>
                    <p className="text-xl text-gray-500 mb-4">Website of the famous Yakut artist Andrei Chikachev.
                      Do you want to imagine the Yakut epic through paintings? Then this is the place for you.
                      A gallery of works and portraits is presented. Biographical information and exhibitions are also listed.
                      There is a translation into English</p>
                  </div>
                </div>
              </div>
            </a>

            {/* 3rd item */}
            <a href='https://corbenykt.github.io/currencycalculator' className='relative flex flex-col items-center'>
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                  <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src={Project3} width="540" height="405" alt="Currency Calculator's page" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3 text-black">Currency Calculator's page</h3>
                    <p className="text-xl text-gray-500 mb-4">And this is my simple currency calculator. While moving, I needed a quick conversion tool that was fast and convenient. This is how the idea came up to make a small calculator for myself. Currency conversion takes place according to current data from the Central Bank</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;