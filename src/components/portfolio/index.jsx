import React from 'react';
import ProjectCard from '../projectcard';
import Project1 from '/assets/images/features-03-image-01.png';
import Project2 from '/assets/images/features-03-image-02.png';
import Project3 from '/assets/images/features-03-image-03.png';
import Project4 from '/assets/images/features-03-image-04.png';
import Project5 from '/assets/images/features-03-image-05.png';
import Project6 from '/assets/images/features-03-image-06.png';
import Project7 from '/assets/images/features-03-image-07.png';

function Portfolio() {
  const projects = [
    {
      title: "Simple Frontend's page",
      description:
        "You know, don't forget that you're also a front-end developer — it's your first love! In this project, the Positivus design demonstrates a basic set of styles that can easily be taken from one project to another and used. This is the foundation that every front-end developer should know how to create!",
      image: Project7,
      link: 'https://github.com/CorbenYkt/simplefrontend',
      alt: 'Simple Frontend page',
      order: 'md:order-1',
      animation: 'fade-left',
    },
    {
      title: "MERN's project page",
      description:
        'The MERN Blog Platform is a full-stack web application developed using the MERN stack: MongoDB, Express.js, React, and Node.js. It enables users to register, log in, and interact through creating, editing, and deleting blog posts. Additionally, users can engage with content by adding and managing comments on posts. The platform includes token-based authentication for secure access, efficient state management using Redux Toolkit, and a responsive UI styled with Material-UI. It is designed to provide a modern and interactive blogging experience, supporting real-time updates and dynamic content rendering.',
      image: Project6,
      link: 'https://corbenykt.github.io/mern-frontend',
      alt: "MERN's project page",
      order: '',
      animation: 'fade-left',
    },
    {
      title: "Movie Advisor's page",
      description:
        'Do you want to watch some interesting and relevant movie this evening? Take a look at this site, which will give you its recommendations. In the near future, the ability to sub-categorize by genre, catalog in your personal account, etc. will be added...',
      image: Project5,
      link: 'https://corbenykt.github.io/movieadvisor',
      alt: "Features Fozzy's page",
      order: 'md:order-1',
      animation: 'fade-left',
    },
    {
      title: "Pets Friendly Cafe's",
      description:
        'Looking for a place to eat deliciously, but want to take your pet with you? Open this page and within a radius of 500m you will see what options are nearby',
      image: Project4,
      link: 'https://corbenykt.github.io/petsfriendlycafes',
      alt: "AndreyChickachev's page",
      order: '',
      animation: 'fade-left',
    },
    {
      title: "Fozzy's page",
      description:
        'Yes, this site is about our lovely dog Fozzy. Fozzy is a West Highland White Terrier, he is already 11 years old and a great family friend',
      image: Project1,
      link: 'https://corbenykt.github.io/fozzy',
      alt: "Features Fozzy's page",
      order: 'md:order-1',
      animation: 'fade-left',
    },
    {
      title: "Andrey Chikachev's page",
      description:
        'Website of the famous Yakut artist Andrei Chikachev. Do you want to imagine the Yakut epic through paintings? Then this is the place for you. A gallery of works and portraits is presented. Biographical information and exhibitions are also listed. There is a translation into English',
      image: Project2,
      link: 'https://www.andreychikachev.ru',
      alt: "AndreyChickachev's page",
      order: '',
      animation: 'fade-left',
    },
    {
      title: "Currency Calculator's page",
      description:
        'And this is my simple currency calculator. While moving, I needed a quick conversion tool that was fast and convenient. This is how the idea came up to make a small calculator for myself. Currency conversion takes place according to current data from the Central Bank',
      image: Project3,
      link: 'https://corbenykt.github.io/currencycalculator',
      alt: "Currency Calculator's page",
      order: 'md:order-1',
      animation: 'fade-right',
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div>
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10">
            <h1 className="h2 text-black">Portfolio</h1>
          </div>
          <div id="projectssection" className="grid gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;