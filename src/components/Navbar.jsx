import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="p-4 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          MyLogo
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/lanthanoids" className="text-white hover:text-gray-400 transition duration-300">
              Lanthanoids
            </Link>
          </li>
          <li>
            <Link to="/trends" className="text-white hover:text-gray-400 transition duration-300">
              Trends
            </Link>
          </li>
          <li>
            <Link to="/quiz" className="text-white hover:text-gray-400 transition duration-300">
              Quiz
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
