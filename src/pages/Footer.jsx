import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="columns-3">
            <div className="text-sm">
              <h6 className="text-gray-500 font-medium mb-1">E-mail:</h6>
              <ul>
                <li className="mb-1">
                  <a href="mailto:vool34@gmail.com" className="text-gray-500 hover:text-gray-200 transition duration-150 ease-in-out">vool34@gmail.com</a>
                </li>
              </ul>
            </div>

            <div className="text-sm">
              <h6 className="text-gray-500 font-medium mb-1">Phone:</h6>
              <ul>
                <li className="mb-1 text-gray-500 hover:text-gray-200 transition duration-150 ease-in-out">
                  +64 22 594 6268
                </li>
              </ul>
            </div>

            <div className="text-sm">
              <h6 className="text-gray-500 font-medium mb-1">GIT:</h6>
              <ul>
                <li className="mb-1">
                  <a href="https://github.com/corbenykt" className="text-gray-500 hover:text-gray-100 transition duration-150 ease-in-out">https://github.com/corbenykt</a>
                </li>
              </ul>
            </div>

          </div>
          <div className="text-gray-400 text-sm text-center">&copy; New Zealand, Wellington, Dmitrii Artemev</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;