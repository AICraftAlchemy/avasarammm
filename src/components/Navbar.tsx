import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Avasaram</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors`}
            >
              Contact
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}