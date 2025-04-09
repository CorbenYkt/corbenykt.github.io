import React from 'react';
import { ReactSVG } from 'react-svg';

function SkillCard({ title, description, icon, delay }) {
    return (
        <div
            className="relative flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={delay}
            data-aos-anchor="[data-aos-id-blocks]"
        >
            <>
                <h4 className="h4 text-black">{title}</h4>
                <ReactSVG src={icon} className="mt-2 mb-4 transition-transform hover:scale-105" />
                <p className="text-lg text-gray-500 text-justify">{description}</p>
            </>
        </div>
    );
}

export default SkillCard;