import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import LogoSlider from '../../components/LogoSlider';
import isgLogo from "../../assets/Sigmalogo.png"; // Aapka scroll component

const LifeSciences = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  // Awards/Logo Slider ke liye data
 
    const awardLogos = [
      isgLogo,
      isgLogo,
     isgLogo,
      isgLogo
    ];

  return (
    <div className="font-sans antialiased">
      
      {/* --- Section 1: Hero Section --- */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image (DNA/Tech themed) */}
        <div 
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2000')` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="px-6 lg:px-24">
          <nav className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-90">
            <span>Home</span> / <span>Industry</span> / <span className="text-orange-500">Life Sciences</span>
          </nav>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Empowering Life Sciences with AI
          </h1>
          <p className="text-3xl lg:text-5xl font-light italic opacity-90">
            For Smarter Operations & Faster Innovation
          </p>
        </div>
      </section>

      {/* --- Section 2: Modernize Data (Turn data into impact) --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left: Scientist Image with Tech Overlays */}
          <div className="lg:w-1/2 relative">
            {/* Orange Decorative Element (T-Shape Background) */}
            <div className="absolute top-0 right-0 w-48 h-16 bg-orange-600 -z-0 transform -skew-x-12 opacity-90"></div>
            
            <div className="relative z-10 flex justify-center">
              <img 
                src="https://img.freepik.com/free-photo/female-scientist-microscope-lab_23-2148851011.jpg" 
                alt="Life Science Specialist" 
                className="w-full max-w-md rounded-sm shadow-2xl"
              />
              
              {/* Floating Orange Circular Paths & Icons */}
              <div className="absolute inset-0 border-[2px] border-orange-500/40 rounded-full scale-110 -rotate-12"></div>
              <div className="absolute inset-0 border-[1px] border-orange-500/30 rounded-full scale-125 rotate-45"></div>
              
              {/* Floating Icon Boxes (As per screenshot) */}
              <div className="absolute top-20 -left-6 bg-orange-600 p-4 text-white text-2xl shadow-lg">🔬</div>
              <div className="absolute top-10 -right-6 bg-orange-600 p-4 text-white text-2xl shadow-lg">🧬</div>
              <div className="absolute bottom-10 right-10 bg-orange-600 p-4 text-white text-2xl shadow-lg">💻</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Turn Enterprise <span className="text-orange-600">data into business impact</span> with AI-powered intelligence
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Tredence helps life sciences organizations build resilient supply chains, agile manufacturing operations, and faster R&D innovation using AI and advanced analytics.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With data modernization, digital twins, and predictive modeling, we bring together fragmented operational, clinical, and research data to create a unified intelligence layer that improves outcomes and drives competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 3: Reusable Logo Slider (SCROLL) --- */}
      <LogoSlider 
        title="Meet the undisputed" 
        highlightText="life science analytics" 
        subtitle="Don't just take our word for it!"
        logos={awardLogos}
      />

      {/* --- Section 4: Yahan aap baki sections (Impact Stories/Contact) add kar sakte hain jo Healthcare page mein the --- */}
      
      {/* Short Disclaimer or CTA Spacer */}
      <div className="bg-gray-50 py-12 text-center">
         <p className="text-gray-400 text-sm italic tracking-widest">TREDENCE LIFE SCIENCES SOLUTIONS</p>
      </div>

    </div>
  );
};

export default LifeSciences;