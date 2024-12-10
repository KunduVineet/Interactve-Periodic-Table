// NavBar.js
import React from 'react';

const NavBar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">
          MyLogo
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-400 transition duration-300">
              Table
            </a>
          </li>
          <li>
            <a href="/trends" className="text-white hover:text-gray-400 transition duration-300">
              Trends
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
