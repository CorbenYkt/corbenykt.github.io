import React from 'react';
import Project1 from '../img/features-03-image-01.png';
import Project2 from '../img/features-03-image-02.png';
import Project3 from '../img/features-03-image-03.png';
import Project4 from '../img/features-03-image-04.png';
import Project5 from '../img/features-03-image-05.png';
import Project6 from '../img/features-03-image-06.png';
import Project7 from '../img/features-03-image-07.png';

function Portfolio() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10">
            <h1 className="h2 text-black">Portfolio</h1>
          </div>

          {/* ProjectsSection */}
          <div id="projectssection" className="grid gap-10">
            <a href='https://github.com/CorbenYkt/simplefrontend' className='relative flex flex-col items-center'>
              {/* Simple Frontend page */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                  <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src={Project7} width="540" height="405" alt="Simple Frontend page" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3 text-black">Simple Frontend's page</h3>
                    <p className="text-xl text-gray-500 mb-4">You know, don't forget that you're also a front-end developer — it's your first love! In this project, the Positivus design demonstrates a basic set of styles that can easily be taken from one project to another and used. This is the foundation that every front-end developer should know how to create!
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href='https://corbenykt.github.io/mern-frontend' className='relative flex flex-col items-center'>
              {/* MERN's project page */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                  <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src={Project6} width="540" height="405" alt="MERN's project page" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3 text-black">MERN's project page</h3>
                    <p className="text-xl text-gray-500 mb-4">The MERN Blog Platform is a full-stack web application developed using the MERN stack: MongoDB, Express.js, React, and Node.js. It enables users to register, log in, and interact through creating, editing, and deleting blog posts. Additionally, users can engage with content by adding and managing comments on posts. The platform includes token-based authentication for secure access, efficient state management using Redux Toolkit, and a responsive UI styled with Material-UI. It is designed to provide a modern and interactive blogging experience, supporting real-time updates and dynamic content rendering.</p>
                  </div>
                </div>
              </div>
            </a>

            <a href='https://corbenykt.github.io/movieadvisor' className='relative flex flex-col items-center'>
              {/* Movie advisor's page */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                  <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src={Project5} width="540" height="405" alt="Features Fozzy's page" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3 text-black">Movie Advisor's page</h3>
                    <p className="text-xl text-gray-500 mb-4">Do you want to watch some interesting and relevant movie this evening? Take a look at this site, which will give you its recommendations. In the near future, the ability to sub-categorize by genre, catalog in your personal account, etc. will be added...
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href='https://corbenykt.github.io/petsfriendlycafes' className='relative flex flex-col items-center'>
              {/* petsfriendlycafes page */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                  <img className="max-w-full mx-auto md:max-w-none h-auto rounded-lg" src={Project4} width="540" height="405" alt="AndreyChickachev's page" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <h3 className="h3 mb-3 text-black">Pets Friendly Cafe's</h3>
                    <p className="text-xl text-gray-500 mb-4">Looking for a place to eat deliciously, but want to take your pet with you? Open this page and within a radius of 500m you will see what options are nearby</p>
                  </div>
                </div>
              </div>
            </a>

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

            {/* Currency Calculator's page */}
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
              <div className="relative flex flex-row items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto pb-4" data-aos="fade-up">
                  <a href='https://github.com/corbenykt/' className='relative flex flex-col items-center text-sm text-gray-500'>More of them available in my GitHub profile</a>
                </div>
              </div>
            </a>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;