import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-500 font-medium mb-1">E-mail:</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="mailto:vool34@gmail.com" className="text-gray-500 hover:text-gray-200 transition duration-150 ease-in-out">vool34@gmail.com</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-500 font-medium mb-1">Phone:</h6>
                <ul>
                  <li className="mb-1 text-gray-500 hover:text-gray-200 transition duration-150 ease-in-out">
                    +64 22 594 6268
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-500 font-medium mb-1">GIT:</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="https://github.com/corbenykt" className="text-gray-500 hover:text-gray-100 transition duration-150 ease-in-out">https://github.com/corbenykt</Link>
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 text-sm text-center">&copy; New Zealand, Wellington, Dmitrii Artemev</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;