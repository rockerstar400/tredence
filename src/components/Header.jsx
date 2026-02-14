import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

// Apna logo path yahan update karein
// import logoImg from '../assets/sigma-logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[999] text-white bg-[#222] shadow-2xl font-sans">
      {/* 2. MAIN NAVIGATION */}
      <div className="flex justify-between items-center px-12 h-20">
        {/* BRANDING */}
        <div className="flex items-center h-full">
          <Link to="/" className="flex items-center gap-4 h-full group">
            {/* LOGO IMAGE AREA */}
            <div className="h-full flex items-center">
              <img
                src={logo}
                alt="Sigma Logo"
                className="h-19 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* SIGMA TEXT */}
          </Link>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center gap-6 text-[13px] font-bold h-full">
          <ul className="flex gap-1 h-full">
            {/* --- INDUSTRIES DROPDOWN --- */}
            {/* --- HOME LINK --- */}
            <li className="group relative h-full flex items-center px-4 cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-orange-500 transition-colors">
                <Link to="/" className="transition-colors">
                  Home
                </Link>
              </div>
            </li>

            <li className="group relative h-full flex items-center px-4 cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-orange-500 transition-colors">
                Industries <ChevronDown size={14} />
              </div>

              {/* Dropdown Box: top-[100%] ensure karta hai ki koi gap na ho */}
              <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black min-w-[550px] shadow-2xl border-t-4 border-orange-500 p-8 z-[1000] animate-fadeIn">
                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                  <div className="space-y-4 font-medium text-gray-600">
                    <Link
                      to="/industrial/retail"
                      className="hover:text-orange-500 block"
                    >
                      Retail
                    </Link>
                    <Link
                      to="/industrial/healthcare"
                      className="hover:text-orange-500 block"
                    >
                      Healthcare
                    </Link>

                    <Link
                      to="/industrial/financial-services"
                      className="hover:text-orange-500 block"
                    >
                      Banking & Insurance
                    </Link>
                    {/* <p className="hover:text-orange-500">Banking & Insurance</p> */}
                    {/* <p className="hover:text-orange-500">Telco, Media & Tech</p> */}
                    <Link
                      to="/industrial/telco-media"
                      className="hover:text-orange-500 block"
                    >
                      Telco, Media & Tech
                    </Link>
                  </div>
                  <div className="space-y-4 font-medium text-gray-600">
                    <Link
                      to="/industrial/cpg"
                      className="hover:text-orange-500 block"
                    >
                      CPG
                    </Link>
                    {/* <p className="hover:text-orange-500">CPG</p> */}
                    <Link
                      to="industrial/life-sciences"
                      className="hover:text-orange-500 block"
                    >
                      Life Sciences
                    </Link>
                    <Link
                      to="/industrial/travel-hospitality"
                      className="hover:text-orange-500 block"
                    >
                      Travel and Hospitality
                    </Link>

                    <Link
                      to="/industrial/industrials"
                      className="hover:text-orange-500 block"
                    >
                      Industrials
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {/* --- SERVICES DROPDOWN --- */}
            <li className="group relative h-full flex items-center px-4 cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-orange-500 transition-colors">
                Services <ChevronDown size={14} />
              </div>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black min-w-[320px] shadow-2xl border-t-4 border-orange-500 p-6 space-y-4 font-medium text-gray-600 z-[1000]">
                <Link
                  to="/services/data-engineering"
                  className="hover:text-orange-500 block"
                >
                  Data Engineering
                </Link>
                <Link
                  to="/services/data-modernization"
                  className="hover:text-orange-500 block"
                >
                  Data Modernization
                </Link>
                <Link
                  to="/services/digital-engineering"
                  className="hover:text-orange-500 block"
                >
                  Digital Engineering
                </Link>
                <Link
                  to="/services/llmops"
                  className="hover:text-orange-500 block"
                >
                  LLMOps
                </Link>
              </div>
            </li>

            <li className="group relative h-full flex items-center px-4 cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-orange-500">
                Insights <ChevronDown size={14} />
              </div>
              <div className="absolute top-full right-0 hidden group-hover:block bg-white text-black min-w-[320px] shadow-2xl border-t-4 border-orange-500 p-6 space-y-4 font-medium text-gray-600 z-[1000]">
                <Link
                  to="/insights/case-studies"
                  className="hover:text-orange-500 block"
                >
                  Case Studies
                </Link>
                <Link
                  to="/insights/thought-leadership"
                  className="hover:text-orange-500 block"
                >
                  Thought Leadership
                </Link>
                <Link
                  to="/insights/data-ai-playbooks"
                  className="hover:text-orange-500 block"
                >
                  Data & AI Playbooks
                </Link>
                <Link
                  to="/insights/customer-voice"
                  className="hover:text-orange-500 block"
                >
                  Customer Voice
                </Link>
              </div>
            </li>
            {/* --- ABOUT US LINK --- */}
            <li className="group relative h-full flex items-center px-4 cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-orange-500 transition-colors">
                <Link to="/about" className="transition-colors">
                  About Us
                </Link>
              </div>
            </li>
            <li className="group relative h-full flex items-center px-4 cursor-pointer">
              <Link
                to="/contact"
                className="flex items-center gap-1 transition group-hover:text-orange-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
