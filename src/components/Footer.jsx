import React from 'react';
import { Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-12 lg:px-24 font-sans">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        {/* Column 1: Industries */}
        <div>
          <h4 className="text-xl font-bold mb-8">Industries</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li className="hover:text-white cursor-pointer transition">Retail</li>
            <li className="hover:text-white cursor-pointer transition">CPG</li>
            <li className="hover:text-white cursor-pointer transition">Banking, Financial Services & Insurance</li>
            <li className="hover:text-white cursor-pointer transition">Telco, Media & Tech</li>
            <li className="hover:text-white cursor-pointer transition">Travel and Hospitality</li>
            <li className="hover:text-white cursor-pointer transition">Healthcare & Life Sciences</li>
            <li className="hover:text-white cursor-pointer transition">Industrials</li>
          </ul>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-xl font-bold mb-8">Services</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li className="hover:text-white cursor-pointer transition">Agentic AI</li>
            <li className="hover:text-white cursor-pointer transition">Generative AI</li>
            <li className="hover:text-white cursor-pointer transition">Supply Chain Management</li>
            <li className="hover:text-white cursor-pointer transition">Data Engineering</li>
            <li className="hover:text-white cursor-pointer transition">Data Modernization</li>
            <li className="hover:text-white cursor-pointer transition">CX Analytics</li>
            <li className="hover:text-white cursor-pointer transition">MLOps</li>
            <li className="hover:text-white cursor-pointer transition">LLMOps</li>
            <li className="hover:text-white cursor-pointer transition">Data Science</li>
            <li className="hover:text-white cursor-pointer transition">Digital Engineering</li>
          </ul>
        </div>

        {/* Column 3: Solutions */}
        <div>
          <h4 className="text-xl font-bold mb-8">Solutions</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li className="hover:text-white cursor-pointer transition">Supply Chain Control Tower</li>
            <li className="hover:text-white cursor-pointer transition">Test and Learn Platform (TALP)</li>
            <li className="hover:text-white cursor-pointer transition">On-shelf Availability (OSA)</li>
            <li className="hover:text-white cursor-pointer transition">Customer Cosmos</li>
            <li className="hover:text-white cursor-pointer transition">Sancus – AI-led Data Quality Management</li>
            <li className="hover:text-white cursor-pointer transition">Revenue Growth Management (RGM)</li>
            <li className="hover:text-white cursor-pointer transition">MLWorks</li>
            <li className="hover:text-white cursor-pointer transition">UnityGO</li>
          </ul>
        </div>

        {/* Column 4: Bold Links */}
        <div>
          <h4 className="text-xl font-bold mb-8">Blogs</h4>
          <ul className="space-y-6 text-white text-lg font-bold">
            <li className="hover:text-orange-500 cursor-pointer transition">Data & AI 101</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Client Success</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Life at Tredence</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Careers</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Contact us</li>
            <li className="hover:text-orange-500 cursor-pointer transition">C.A.R.E.</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Certifications</li>
          </ul>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="mb-12">
        <h5 className="text-lg font-bold mb-6 italic">Follow us on</h5>
        <div className="flex gap-6">
          <Twitter size={20} className="hover:text-orange-500 cursor-pointer transition" />
          <Linkedin size={20} className="hover:text-orange-500 cursor-pointer transition" />
          <Facebook size={20} className="hover:text-orange-500 cursor-pointer transition" />
          <Youtube size={20} className="hover:text-orange-500 cursor-pointer transition" />
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-400 gap-4">
        <div className="flex flex-wrap gap-6 font-bold uppercase tracking-wider text-white">
          <a href="#" className="hover:text-orange-500">Terms of Use</a>
          <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500">Cookies Policy</a>
          <a href="#" className="hover:text-orange-500">Third Party Security & Privacy Policy</a>
        </div>
        <div className="text-gray-300 font-semibold">
          © Copyright 2026. Tredence.Inc. All rights reserved
        </div>
      </div>

      {/* Floating Chat Icon (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-[100]">
         <div className="bg-orange-600 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-orange-700 transition-all">
            {/* Chat Icon Svg */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
         </div>
      </div>
    </footer>
  );
};

export default Footer;