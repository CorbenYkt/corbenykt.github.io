import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer w-full py-4 flex flex-col items-center justify-center">
      <div className="text-sm text-gray-500 font-normal">
        <h6>
          E-mail:&nbsp;
          <a
            href="mailto:vool34@gmail.com"
            className="hover:text-gray-200 transition duration-150 ease-in-out"
          >
            vool34@gmail.com
          </a>
        </h6>
      </div>
      <div className="text-sm text-gray-500 font-normal">
        <h6>
          GIT:&nbsp;
          <a
            href="https://github.com/corbenykt"
            className="hover:text-gray-300 transition duration-150 ease-in-out"
          >
            https://github.com/corbenykt
          </a>
        </h6>
      </div>
      <div className="text-sm text-gray-500 font-normal">
        <h6>
          LinkedIn:&nbsp;
          <a
            href="https://www.linkedin.com/in/dmitrii-artemev/"
            className="hover:text-gray-300 transition duration-150 ease-in-out"
          >
            Dmitrii Artemev
          </a>
        </h6>
      </div>
    </div>
  );
}

export default Footer;