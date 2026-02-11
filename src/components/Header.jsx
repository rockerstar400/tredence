// import React from 'react';
// import { Search, ChevronDown } from 'lucide-react';

// const Navbar = () => {
//   return (
//     <nav className="absolute top-0 left-0 w-full z-50 text-white p-4">
//       {/* Top Small Menu */}
//       <div className="flex justify-end gap-6 text-xs font-medium px-12 py-2 mb-2 opacity-80">
//         <a href="#">TREDENCE AT A GLANCE</a>
//         <a href="#">LATEST NEWS</a>
//         <a href="#">EVENTS</a>
//         <a href="#">WE'RE HIRING</a>
//         <button className="bg-orange-600 px-3 py-1 rounded-full text-white">CONTACT US</button>
//       </div>

//       {/* Main Menu */}
//       <div className="flex justify-between items-center px-12">
//         <div className="flex items-center">
//            <h1 className="text-3xl font-bold tracking-tighter">TREDENCE</h1>
//            <span className="text-[10px] ml-1 mt-4">Beyond Possible</span>
//         </div>

//         <div className="flex items-center gap-8 font-semibold">
//           <ul className="flex gap-8">
//             <li className="flex items-center gap-1 cursor-pointer">Industries <ChevronDown size={16}/></li>
//             <li className="flex items-center gap-1 cursor-pointer">Services <ChevronDown size={16}/></li>
//             <li className="cursor-pointer">Partnerships</li>
//             <li className="flex items-center gap-1 cursor-pointer">Life at Tredence <ChevronDown size={16}/></li>
//             <li className="flex items-center gap-1 cursor-pointer">Insights <ChevronDown size={16}/></li>
//             <li className="flex items-center gap-1 cursor-pointer">Company <ChevronDown size={16}/></li>
//           </ul>
//           <Search className="cursor-pointer hover:text-orange-500" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

import { Search, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-[100] text-white p-4 font-sans">
      {/* Top Small Menu */}
      <div className="flex justify-end gap-6 text-[10px] font-bold px-12 py-2 mb-2 opacity-80 tracking-widest">
        <a href="#" className="hover:text-orange-500">TRENDS AT A GLANCE</a>
        <a href="#" className="hover:text-orange-500">LATEST NEWS</a>
        <a href="#" className="hover:text-orange-500">EVENTS</a>
        <a href="#" className="hover:text-orange-500">WE'RE HIRING</a>
        <button className="bg-orange-600 px-4 py-1.5 rounded-full text-white font-bold hover:bg-orange-700 transition-all">CONTACT US</button>
      </div>

      {/* Main Menu */}
      <div className="flex justify-between items-center px-12">
        <div className="flex items-center cursor-pointer">
          <h1 className="text-3xl font-black tracking-tighter">TRENDS</h1>
          <span className="text-[10px] ml-1 mt-4 font-bold border-l border-white/30 pl-1 uppercase tracking-tighter">Beyond Possible</span>
        </div>

        <div className="flex items-center gap-8 text-[14px] font-bold">
          <ul className="flex gap-8">

            {/* 1. Industries Dropdown (2 Columns) */}
            <li className="group relative py-4 cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-orange-500">Industries <ChevronDown size={14} /></div>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black min-w-[500px] shadow-2xl border-t-4 border-orange-500 p-8">
                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                  <div className="space-y-4 font-medium text-gray-600">
                    {/* <p className="hover:text-orange-500">Retail</p> */}
                    <Link to="/industrial/retail" className="hover:text-orange-500 block">
                      Retail
                    </Link>
                    <p className="hover:text-orange-500">Healthcare</p>
                    <p className="hover:text-orange-500">Banking, Financial Services & Insurance</p>
                    <p className="hover:text-orange-500">Telco, Media & Tech</p>
                  </div>
                  <div className="space-y-4 font-medium text-gray-600">
                    <p className="hover:text-orange-500">CPG</p>
                    <p className="hover:text-orange-500">Life Sciences</p>
                    <p className="hover:text-orange-500">Travel and Hospitality</p>
                    <p className="hover:text-orange-500">Industrials</p>
                  </div>
                </div>
              </div>
            </li>

            {/* 2. Services Dropdown (2 Columns) */}
            <li className="group relative py-4 cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-orange-500">Services <ChevronDown size={14} /></div>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black min-w-[500px] shadow-2xl border-t-4 border-orange-500 p-8">
                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                  <div className="space-y-4 font-medium text-gray-600">
                    <p className="hover:text-orange-500">Agentic AI</p>
                    <p className="hover:text-orange-500">Supply Chain Management</p>
                    <p className="hover:text-orange-500">CX Analytics</p>
                    <p className="hover:text-orange-500">MLOps</p>
                    <p className="hover:text-orange-500">Data Science</p>
                  </div>
                  <div className="space-y-4 font-medium text-gray-600">
                    <p className="hover:text-orange-500">Generative AI</p>
                    <p className="hover:text-orange-500">Data Engineering</p>
                    <p className="hover:text-orange-500">Data Modernization</p>
                    <p className="hover:text-orange-500">LLMOps</p>
                    <p className="hover:text-orange-500">Digital Engineering</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="py-4 hover:text-orange-500 cursor-pointer transition">Partnerships</li>

            {/* 3. Life at Tredence (Small Dropdown) */}
            <li className="group relative py-4 cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-orange-500">Life at Tredence <ChevronDown size={14} /></div>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black min-w-[200px] shadow-xl border-t-4 border-orange-500 p-6 space-y-4 font-medium text-gray-600">
                <p className="hover:text-orange-500">Culture</p>
                <p className="hover:text-orange-500">DEI</p>
                <p className="hover:text-orange-500">Sustainability</p>
              </div>
            </li>

            {/* 4. Insights Dropdown (Single Column) */}
            <li className="group relative py-4 cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-orange-500">Insights <ChevronDown size={14} /></div>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black min-w-[250px] shadow-2xl border-t-4 border-orange-500 p-6">
                <div className="space-y-4 font-medium text-gray-600">
                  <p className="hover:text-orange-500">Data & AI Playbooks</p>
                  <p className="hover:text-orange-500">Data & AI 101</p>
                  <p className="hover:text-orange-500">Case Studies</p>
                  <p className="hover:text-orange-500">Customer Voice</p>
                  <p className="hover:text-orange-500">Thought Leadership</p>
                  <p className="hover:text-orange-500">Blog</p>
                  <p className="hover:text-orange-500">Data Science Insights</p>
                  <p className="hover:text-orange-500">Databricks Champions</p>
                  <p className="hover:text-orange-500">Podcast</p>
                </div>
              </div>
            </li>

            {/* 5. Company Dropdown (Single Column) */}
            <li className="group relative py-4 cursor-pointer">
              <div className="flex items-center gap-1 group-hover:text-orange-500">Company <ChevronDown size={14} /></div>
              <div className="absolute top-full right-0 hidden group-hover:block bg-white text-black min-w-[220px] shadow-2xl border-t-4 border-orange-500 p-6">
                <div className="space-y-4 font-medium text-gray-600">
                  <p className="hover:text-orange-500">Our Story</p>
                  <p className="hover:text-orange-500">Our Team</p>
                  <p className="hover:text-orange-500">Our Advisors</p>
                  <p className="hover:text-orange-500">Analyst Recognitions</p>
                  <p className="hover:text-orange-500">Brand</p>
                  <p className="hover:text-orange-500">Awards</p>
                </div>
              </div>
            </li>
          </ul>
          <Search size={22} className="cursor-pointer hover:text-orange-500 ml-4 transition-colors" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;