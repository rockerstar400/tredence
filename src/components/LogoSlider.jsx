import React from 'react';

const LogoSlider = ({ title, highlightText, subtitle, logos }) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {title} <span className="text-orange-600">{highlightText}</span> experts!
        </h2>
        <p className="text-xl text-gray-700">{subtitle}</p>
      </div>

      {/* Infinite Scroll Wrapper */}
      <div className="relative flex overflow-x-hidden group">
        {/* Pehla set logos ka */}
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {logos.map((logo, index) => (
            <div key={index} className="mx-4 w-72 h-44 flex-shrink-0 border border-gray-200 p-4 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
              <img src={logo} alt="Award" className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Dusra set (Looping ke liye duplicate) */}
        <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap py-4">
          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="mx-4 w-72 h-44 flex-shrink-0 border border-gray-200 p-4 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
              <img src={logo} alt="Award" className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS for Animation (Isse index.css ya tailwind.config mein bhi dal sakte hain) */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
        .group:hover .animate-marquee,
        .group:hover .animate-marquee2 {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LogoSlider;