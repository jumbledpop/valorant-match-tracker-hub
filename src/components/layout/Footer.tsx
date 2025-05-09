
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-valorant-gray border-t border-valorant-red/20 py-8">
      <div className="valorant-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-valorant-red tracking-tighter">
                VALOR<span className="text-valorant-white">DATA</span>
              </span>
            </Link>
            <p className="mt-2 text-sm text-valorant-lightgray">
              Your ultimate resource for Valorant esports data, match results, and team statistics.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-valorant-white mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-valorant-lightgray hover:text-valorant-red">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-valorant-lightgray hover:text-valorant-red">
                  Teams
                </Link>
              </li>
              <li>
                <Link to="/matches" className="text-valorant-lightgray hover:text-valorant-red">
                  Matches
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-valorant-lightgray hover:text-valorant-red">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-valorant-white mb-3">Popular Teams</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-valorant-lightgray hover:text-valorant-red">
                  Sentinels
                </a>
              </li>
              <li>
                <a href="#" className="text-valorant-lightgray hover:text-valorant-red">
                  Fnatic
                </a>
              </li>
              <li>
                <a href="#" className="text-valorant-lightgray hover:text-valorant-red">
                  Team Liquid
                </a>
              </li>
              <li>
                <a href="#" className="text-valorant-lightgray hover:text-valorant-red">
                  100 Thieves
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-valorant-white mb-3">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-valorant-lightgray hover:text-valorant-red">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-valorant-lightgray hover:text-valorant-red">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-valorant-lightgray hover:text-valorant-red">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-valorant-lightgray hover:text-valorant-red">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-valorant-red/20">
          <p className="text-center text-sm text-valorant-lightgray">
            © {new Date().getFullYear()} ValorData. Not affiliated with Riot Games. All game content and materials are trademarks and copyrights of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
