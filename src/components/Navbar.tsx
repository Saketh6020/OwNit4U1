import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">Ownit4U</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Platforms</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <button className="px-4 py-2 text-white bg-gray-900 rounded-md hover:bg-gray-800">
              Get Started
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Platforms</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Services</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
            <button className="w-full px-4 py-2 text-white bg-gray-900 rounded-md hover:bg-gray-800">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}