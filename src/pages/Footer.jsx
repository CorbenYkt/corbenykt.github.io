import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 place-content-center">
          <div className="columns-3">
            <div className="text-sm">
              <h6 className="text-gray-500 font-medium">E-mail:&nbsp;<a href="mailto:vool34@gmail.com" className="text-gray-500 hover:text-gray-200 transition duration-150 ease-in-out">vool34@gmail.com</a></h6>
            </div>
            <div className="text-sm">
              <h6 className="text-gray-500 font-medium mb-1">Phone:&nbsp;+64 22 594 6268
              </h6>
            </div>
            <div className="text-sm">
              <h6 className="text-gray-500 font-medium mb-1">GIT:&nbsp;<a href="https://github.com/corbenykt" className="text-gray-500 hover:text-gray-100 transition duration-150 ease-in-out">https://github.com/corbenykt</a></h6>
            </div>
          </div>
          <div>&nbsp;</div>
          <div className="text-gray-400 text-sm text-center">&copy; New Zealand, Wellington, <a href="https://github.com/corbenykt" className="text-gray-500 hover:text-gray-100 transition duration-150 ease-in-out">Dmitrii Artemev</a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;