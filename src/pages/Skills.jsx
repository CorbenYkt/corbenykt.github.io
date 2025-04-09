import React, { useEffect } from 'react';
import { ReactSVG } from "react-svg";
import { Link } from 'react-router-dom';
import htmlsvg from '../img/html5.svg';
import jssvg from '../img/javascript.svg';
import csssvg from '../img/css3.svg';
import githubsvg from '../img/github.svg';
import pythonsvg from '../img/python.svg';
import etcsvg from '../img/etc.svg';
import sqlsvg from '../img/sql.svg'
import Cert1 from '../img/Cert1.png';
import Cert2 from '../img/Cert2.png';
import Cert3 from '../img/Cert3.png';
import SkillCard from '../components/SkillCard';


function Skills() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-0 md:py-0">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h2 className="h2 mb-4 text-black">Fullstack Developer</h2>
            <h1 className='text-sm text-gray-500 text-center pb-4 md:pb-4'>Fullstack developer | Machine Learning Researcher | Creative Problem Solver | Agile Team Player
            </h1>
            <p className="text-lg text-gray-700 text-justify">Passionate fullstack developer originally from Yakutia, with a solid foundation in frontend development on ReactJS. Experience in creating user-friendly and responsive web applications drives continuous learning and improvement. Focused on creating intuitive user interfaces, with a backend development. Also deeply interested in machine learning and eager to explore how it can diversify web development and bring new things to the web user experience, while maintaining a focus on creating holistic and effective solutions.
            </p>
          </div>

          <section id="skillssection" className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            <SkillCard
              title="HTML5 + CSS3"
              description="Markup language for structuring web pages.
                My first website was about The Simpsons, when I was kid about 13 yo when I was in school. I've posted pictures(screen's from fave moments from each episod) and sounds (it was very popular, especially Homer's “D’oh!”). PS: Where did the table tag go? and what about iframe?"
              icon={htmlsvg}
              delay="300"
            />

            <SkillCard
              title="Javascript + Node.js"
              description="My primary framework for web development is React. I was first introduced to JavaScript in high school, but I didn’t pay much attention to it at the time. Instead, I was drawn to programming with Borland Pascal, where I explored some object-oriented concepts. However, during my first years at university, I began working with Bootstrap and jQuery. Now for the backend I use Node.js in conjunction with Express, which in my opinion is very functional."
              icon={jssvg}
              delay="300"
            />

            <SkillCard
              title="CSS3"
              description="Styling language for visual presentation of web pages. Right now using TailwindCSS, did you heard about this CSS? I especially don’t like working with animation. Don't you also like writing animations in CSS?"
              icon={csssvg}
              delay="300"
            />

            <SkillCard
              title="GitHub"
              description="Version control system for tracking changes in code. I publish my repositories whenever possible. Also CI/CD: GitHub Actions. Click to visit."
              icon={githubsvg}
              delay="300"
            />

            <SkillCard
              title="Python + ML"
              description="Python and that says it all. It is great not only for backend but also for Machine learning tasks. Yeap I really like working with dataset, linear regressions, CNN and so on. You can also with my works with ML in GitHub."
              icon={pythonsvg}
              delay="300"
            />

            <SkillCard
              title="SQL|NoSQL"
              description="Started with MS Access mdb fies, then SQL Server 2005|2008. Now using MongoDB, mockapi.io and API. Also very convenient for me is a combination of AWS server based on Ubuntu with Node.js and a prepared API."
              icon={sqlsvg}
              delay="300"
            />

            <SkillCard
              title="Etc."
              description="Ability to think creatively and find innovative solutions to create unique and effective web applications,
                Willingness to continuously learn and adapt to new technologies, improving skills, and staying abreast of trends in web development,
                Ability to analyze problems and find effective solutions. Patience and perseverance in troubleshooting,
                Ability to organize work efficiently, follow schedules, and manage time effectively,
                Analytical thinking, understanding client requirements, and making informed decisions."
              icon={etcsvg}
              delay="300"
            />

          </section>

          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10">
            <h2 className="h2 mb-4 text-black">Cert's</h2>

            <div className="space-y-4">

              <div className="relative flex items-center">
                <div className="w-[200px] flex-shrink-0 mr-4">
                  <img className="w-full h-auto object-contain" src={Cert3} alt="Microsoft Cert" />
                </div>
                <div className="flex-grow">
                  <p className="text-xl text-gray-500">Foundational C# with Microsoft</p>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="w-[200px] flex-shrink-0 mr-4">
                  <img className="w-full h-auto object-contain" src={Cert1} alt="AWS Cert" />
                </div>
                <div className="flex-grow">
                  <p className="text-xl text-gray-500">AWS Academy Graduate - AWS Academy Cloud Architecting</p>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="w-[200px] flex-shrink-0 mr-4">
                  <img className="w-full h-auto object-contain" src={Cert2} alt="AWS Cert" />
                </div>
                <div className="flex-grow">
                  <p className="text-xl text-gray-500">AWS Academy Graduate - AWS Academy Cloud Foundations</p>
                </div>
              </div>
            </div>            <div className="relative flex flex-row items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
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