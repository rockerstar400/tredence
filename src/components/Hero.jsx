import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: "Trends Accelerating Enterprise Growth through Intelligent Automation",
    subtitle: "with THORNE as a Lighthouse Customer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000", 
    buttonText: "Read more"
  },
  {
    title: " Next-Gen Agentic AI Solutions for Global Enterprises",
    subtitle: "Bridging the gap between insights and value realization.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000",
    buttonText: "Explore our success stories"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slider Logic (Har 5 second me change hoga)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center px-24 max-w-4xl">
            <h2 className="text-orange-600 text-5xl font-extrabold leading-tight mb-4">
              {slide.title.split(' ').slice(0, 2).join(' ')} <br />
              <span className="text-black font-black">{slide.title.split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-black text-4xl font-bold mb-8">
              {slide.subtitle}
            </p>
            <button className="w-fit bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((_, i) => (
          <div 
            key={i}
            className={`h-1 w-20 transition-all duration-300 ${i === current ? "bg-orange-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;