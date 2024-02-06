import React from 'react';
import { ReactSVG } from "react-svg";
import { Link } from 'react-router-dom';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-0 md:py-0">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h2 className="h2 mb-4 text-black">ReactJS Developer</h2>
            <p className="text-lg text-gray-700 text-justify">Talented and experienced web developer with over 5 years of expertise in web development. Specialized in crafting modern and intuitive interfaces using ReactJS. Proficient in developing scalable and high-performance web applications, collaborating closely with designers and team members to achieve outstanding results.</p>
          </div>

          {/* Section Skills */}
          <div id="skillssection" className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 text-black">HTML5 + CSS3</h4>
              <ReactSVG src="src/img/html5.svg" className='mb-2' />
              <p className="text-lg text-gray-500 text-justify">Markup language for structuring web pages.
                My first website was about The Simpsons, when I was about 13 years old when I was in school. He posted pictures and sounds there (it was very popular, especially his signature “D’oh!”). Where did the table tag go? and what about iframe?</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 text-black">Javascript</h4>
              <ReactSVG src="src/img/javascript.svg" className='mb-2' />
              <p className="text-lg text-gray-500 text-justify">The primary language for web development. Already in high school I became acquainted with JS, but did not give it much importance. I was drawn to object-oriented programming using Borland Pascal.
                However, almost immediately in my first years at University I started using Bootstrap and JQuery</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 text-black">CSS3</h4>
              <ReactSVG src="src/img/css3.svg" className='mb-2' />
              <p className="text-lg text-gray-500 text-justify">Styling language for visual presentation of web pages. I especially don’t like working with animation. Don't you also like writing animations in CSS?</p>
            </div>


            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <Link to='https://github.com/corbenykt' className='relative flex flex-col items-center'>
                <h4 className="h4 text-black">GitHub</h4>
                <ReactSVG src="src/img/github.svg" className='mb-2' />
                <p className="text-lg text-gray-500 text-justify">Version control system for tracking changes in code. Click to visit
                </p>
              </Link>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 text-black">SQL|NoSQL</h4>
              <ReactSVG src="src/img/sql.svg" className='mb-2' />
              <p className="text-lg text-gray-500 text-justify">Relational databases. Started with MS SQL Server 2005. Now using mockapi.io</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 text-black">Etc.</h4>
              <ReactSVG src="src/img/about.svg" className='mb-2' />
              <p className="text-lg text-gray-500 text-justify">Ability to think creatively and find innovative solutions to create unique and effective web applications,
                Willingness to continuously learn and adapt to new technologies, improving skills, and staying abreast of trends in web development,
                Ability to analyze problems and find effective solutions. Patience and perseverance in troubleshooting,
                Ability to organize work efficiently, follow schedules, and manage time effectively,
                Analytical thinking, understanding client requirements, and making informed decisions
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;