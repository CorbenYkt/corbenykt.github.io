import React, { useEffect } from 'react';
import { ReactSVG } from "react-svg";
import { Link } from 'react-router-dom';
import htmlsvg from '../img/html5.svg';
import jssvg from '../img/javascript.svg';
import csssvg from '../img/css3.svg';
import githubsvg from '../img/github.svg';
import pythonsvg from '../img/python.svg';
import etcsvg from '../img/etc.svg';
import Cert1 from '../img/Cert1.png';
import Cert2 from '../img/Cert2.png';

function Skills() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-0 md:py-0">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h2 className="h2 mb-4 text-black">ReactJS Developer</h2>
            <h1 className='text-sm text-gray-500 text-center pb-4 md:pb-4'>Frontend developer | ReactJS Specialist | Machine Learning Researcher | Creative Problem Solver | Agile Team Player
            </h1>
            <p className="text-lg text-gray-700 text-justify" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">Talented and experienced web developer with over 8 years of expertise in web development. Specialized in crafting modern and intuitive interfaces using ReactJS. Proficient in developing scalable and high-performance web applications, collaborating closely with designers and team members to achieve outstanding results.</p>
          </div>

          {/* Section Skills */}
          <div id="skillssection" className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 text-black">HTML5 + CSS3</h4>
              <ReactSVG src={htmlsvg} className='mt-2 mb-4' />
              <p className="text-lg text-gray-500 text-justify">Markup language for structuring web pages.
                My first website was about The Simpsons, when I was kid about 13 yo when I was in school. I've posted pictures(screen's from fave moments from each episod) and sounds (it was very popular, especially Homer's “D’oh!”). PS: Where did the table tag go? and what about iframe?</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 text-black">Javascript</h4>
              <ReactSVG src={jssvg} className='mt-2 mb-4' />
              <p className="text-lg text-gray-500 text-justify">My primary framework for web development. Already in high school I became acquainted with JS, but did not give it much importance. I was drawn to object-oriented programming using Borland Pascal.
                However, almost immediately in my first years at University I started using Bootstrap and JQuery</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 text-black">CSS3</h4>
              <ReactSVG src={csssvg} className='mt-2 mb-4' />
              <p className="text-lg text-gray-500 text-justify">Styling language for visual presentation of web pages. I especially don’t like working with animation. Don't you also like writing animations in CSS?</p>
            </div>


            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <a href='https://github.com/corbenykt' className='relative flex flex-col items-center'>
                <h4 className="h4 text-black">GitHub</h4>
                <ReactSVG src={githubsvg} className='mt-2 mb-4' />
                <p className="text-lg text-gray-500 text-justify">Version control system for tracking changes in code. I publish my repositories whenever possible. Click to visit
                </p>
              </a>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <a href='https://github.com/corbenykt' className='relative flex flex-col items-center'>
                <h4 className="h4 text-black">Python|ML</h4>
                <ReactSVG src={pythonsvg} className='mt-2 mb-4' />
                <p className="text-lg text-gray-500 text-justify">Python and Machine learning. Yeap I really like working with dataset, linear regressions, CNN and so on. You can also with my works with ML in GitHub</p>
              </a>
            </div>

            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 text-black">SQL|NoSQL</h4>
              <ReactSVG src={sqlsvg} className='mb-4' />
              <p className="text-lg text-gray-500 text-justify">Relational databases. Started with MS SQL Server 2005. Now using mockapi.io</p>
            </div> */}

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 text-black">Etc.</h4>
              <ReactSVG src={etcsvg} className='mt-2 mb-4' />
              <p className="text-lg text-gray-500 text-justify">Ability to think creatively and find innovative solutions to create unique and effective web applications,
                Willingness to continuously learn and adapt to new technologies, improving skills, and staying abreast of trends in web development,
                Ability to analyze problems and find effective solutions. Patience and perseverance in troubleshooting,
                Ability to organize work efficiently, follow schedules, and manage time effectively,
                Analytical thinking, understanding client requirements, and making informed decisions
              </p>
            </div>
          </div>
          <br></br>
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10">
            <h2 className="h2 mb-4 text-black">Cert's</h2>
            <div className="relative flex flex-row items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={Cert1} width="200" alt="AWS Cert" />
              </div>
              {/* Content */}
              <div className="">
                <p className="text-xl text-gray-500">AWS Academy Graduate - AWS Academy Cloud Architecting
                </p>
              </div>
            </div>
            <div className="relative flex flex-row items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={Cert2} width="200" alt="AWS Cert" />
              </div>
              {/* Content */}
              <div className="">
                <p className="text-xl text-gray-500">AWS Academy Graduate - AWS Academy Cloud Foundations
                </p>
              </div>
            </div>
            <div className="relative flex flex-row items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto" data-aos="fade-up">
                <a href='https://www.linkedin.com/in/dmitrii-artemev/details/certifications/' className='relative flex flex-col items-center text-sm text-gray-500'>More of them available in my LinkedIn profile</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section >
  );
}

export default Skills;