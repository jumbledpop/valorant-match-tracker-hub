
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-valorant-black border-b border-valorant-red/20">
      <div className="valorant-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold text-valorant-red tracking-tighter">
                VALOR<span className="text-valorant-white">DATA</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/"
              className="text-valorant-lightgray hover:text-valorant-red px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/teams"
              className="text-valorant-lightgray hover:text-valorant-red px-3 py-2 text-base font-medium"
            >
              Teams
            </Link>
            <Link
              to="/matches"
              className="text-valorant-lightgray hover:text-valorant-red px-3 py-2 text-base font-medium"
            >
              Matches
            </Link>
            <Link
              to="/events"
              className="text-valorant-lightgray hover:text-valorant-red px-3 py-2 text-base font-medium"
            >
              Events
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-valorant-gray border border-valorant-red/20 text-valorant-lightgray rounded-md py-1 px-3 pr-10 focus:outline-none focus:border-valorant-red"
              />
              <Search className="absolute top-1/2 right-2 transform -translate-y-1/2 h-4 w-4 text-valorant-lightgray" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-valorant-lightgray hover:text-valorant-red"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-valorant-gray border-t border-valorant-red/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-valorant-lightgray hover:text-valorant-red"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/teams"
              className="block px-3 py-2 text-base font-medium text-valorant-lightgray hover:text-valorant-red"
              onClick={() => setIsMenuOpen(false)}
            >
              Teams
            </Link>
            <Link
              to="/matches"
              className="block px-3 py-2 text-base font-medium text-valorant-lightgray hover:text-valorant-red"
              onClick={() => setIsMenuOpen(false)}
            >
              Matches
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 text-base font-medium text-valorant-lightgray hover:text-valorant-red"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <div className="relative mt-3 px-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-valorant-gray border border-valorant-red/20 text-valorant-lightgray rounded-md py-1 px-3 pr-10 focus:outline-none focus:border-valorant-red"
              />
              <Search className="absolute top-1/2 right-5 transform -translate-y-1/2 h-4 w-4 text-valorant-lightgray" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
