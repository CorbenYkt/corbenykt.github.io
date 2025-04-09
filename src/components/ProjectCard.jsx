import React from 'react';

function ProjectCard({ title, description, image, link, alt, order, animation }) {
  return (
    <a href={link} className="relative flex flex-col items-center">
      <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
        <div
          className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 ${order}`}
          data-aos="fade-up"
        >
          <img
            className="max-w-full mx-auto md:max-w-none h-auto rounded-lg"
            src={image}
            width="540"
            height="405"
            alt={alt}
          />
        </div>
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
          data-aos={animation}
        >
          <div className="md:pr-4 lg:pr-12 xl:pr-16">
            <h3 className="h3 mb-3 text-black">{title}</h3>
            <p className="text-xl text-gray-500 mb-4 text-justify">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;