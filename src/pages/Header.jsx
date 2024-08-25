import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CVfile from '/src/pages/CV.pdf';

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30 py-2">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <Link onClick={() => {
            const element = document.getElementById("skillssection");
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }} className="font-medium text-gray-700 hover:text-gray-500 px-4 py-3 flex items-center transition duration-150 ease-in-out">Skills</Link>
          <Link onClick={() => {
            const element = document.getElementById("projectssection");
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }} className="font-medium text-gray-700 hover:text-gray-500 px-4 py-3 flex items-center transition duration-150 ease-in-out">Projects</Link>
          <a href={CVfile} className="btn-sm text-white bg-gray-600 hover:bg-gray-700 ml-3 text-center" >Download CV</a>
          <a href='https://tinyurl.com/4j3fuhjf' className="font-medium text-gray-700 hover:text-gray-500 px-4 py-3 flex items-center transition duration-150 ease-in-out" target='_blank' >Cover letter</a>

        </div>
      </div>
    </header >
  );
}

export default Header;
