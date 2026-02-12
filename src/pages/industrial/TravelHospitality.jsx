import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import LogoSlider from '../../components/LogoSlider'; // Reusable scroll component
import Footer from '../../components/Footer';

const TravelHospitality = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  // Award Logos
  const awardLogos = [
    'https://www.tredence.com/wp-content/uploads/2024/07/ISG-Provider-Lens-Logo.png',
    'https://www.tredence.com/wp-content/uploads/2024/07/Gartner-Logo.png',
    'https://www.tredence.com/wp-content/uploads/2024/07/Forrester-Logo.png',
    'https://www.tredence.com/wp-content/uploads/2024/07/Everest-Group-Logo.png',
  ];

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* --- Section 1: Hero Section --- */}
      <section className="relative h-[85vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        {/* Luxury Hotel Lobby / Travel Background */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000')`,
          }}
        >
          {/* Dark Professional Overlay */}
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        <div className="px-6 lg:px-24 max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-80 uppercase tracking-widest">
            <span>Home</span> / <span>Industry</span> /{' '}
            <span className="text-orange-500">Travel and Hospitality</span>
          </nav>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Harnessing the Power of AI
          </h1>
          <p className="text-3xl lg:text-5xl font-light italic opacity-90 leading-snug">
            For Travel and Hospitality to Enhance Experiences
          </p>
        </div>
      </section>

      {/* --- Section 2: Modernize Data & Personalize Journeys --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          {/* Left: Professional with Travel Icons & T-Graphic */}
          <div className="lg:w-1/2 relative">
            {/* Orange T-Shape Background */}
            <div className="absolute -top-10 -left-5 w-64 h-32 bg-orange-600 -z-0 transform -skew-x-12 opacity-95"></div>

            <div className="relative z-10 flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Travel & Hospitality Expert"
                className="w-full max-w-md rounded-sm shadow-2xl"
              />

              {/* Orbital Circles */}
              <div className="absolute inset-0 border-[2px] border-orange-500/30 rounded-full scale-110 -rotate-12"></div>
              <div className="absolute inset-0 border-[1px] border-orange-500/20 rounded-full scale-125 rotate-45"></div>

              {/* Travel Specific Icon Boxes (As per screenshot) */}
              <div
                className="absolute top-1/4 -left-10 bg-orange-600 p-4 text-white text-2xl shadow-lg"
                title="Travel / Luggage"
              >
                🧳
              </div>
              <div
                className="absolute top-10 right-0 bg-orange-600 p-4 text-white text-2xl shadow-lg"
                title="Hospitality / Hotel"
              >
                🏨
              </div>
              <div
                className="absolute bottom-5 right-1/4 bg-orange-600 p-4 text-white text-2xl shadow-lg"
                title="Dining / Experience"
              >
                🍽️
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Modernize{' '}
              <span className="text-orange-600">
                data & personalize journeys
              </span>{' '}
              across travel and hospitality
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Tredence helps leading travel & hospitality (T&H) companies
                modernize their data and analytics landscape to manage guest
                experiences end-to-end.
              </p>
              <p>
                By unifying customer insights and enabling AI-powered
                personalization, we help brands unlock new monetization
                opportunities, improve retention, and sustain double-digit
                revenue growth through smarter, cross-channel engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Logo Scroll (Awards) --- */}
      <LogoSlider
        title="Meet the undisputed"
        highlightText="travel & hospitality analytics"
        subtitle="Don't just take our word for it!"
        logos={awardLogos}
      />

      {/* --- Section 4: Travel & Hospitality FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold">FAQs</h2>
          </div>
          <div className="lg:w-3/4 space-y-4">
            {[
              {
                q: 'How can AI improve guest personalization in hotels?',
                a: 'AI analyzes guest preferences, past stays, and feedback to offer personalized room settings, dining recommendations, and targeted loyalty offers in real-time.',
              },
              {
                q: 'What is the role of predictive analytics in airline pricing?',
                a: 'Predictive models help airlines optimize dynamic pricing based on demand trends, competitor rates, and even local events to maximize load factors and revenue.',
              },
              {
                q: 'How does Tredence help with customer loyalty programs?',
                a: "We unify fragmented data across bookings, apps, and partner networks to create a 360-degree view, helping brands design 'hyper-personalized' rewards that drive long-term retention.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-orange-600 transition-all"
                >
                  <span className="text-lg font-bold">{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp size={20} className="text-orange-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="pb-8 text-gray-600 text-sm leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: Contact Form --- */}
      <section className="relative pt-20">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-600 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-[#fff1ea] shadow-2xl p-10 lg:p-16 flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-12">
                Demand more out of AI. Talk to T&H experts born and bred in
                full-stack AI.
              </h2>
              <div className="w-48 h-48 bg-orange-600 rounded-xl flex items-center justify-center text-white text-7xl shadow-xl">
                ✈️
              </div>
            </div>
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First name"
                    className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows="3"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-8 py-2 text-xs font-bold uppercase tracking-widest hover:bg-orange-700"
                >
                  Let's Chat
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TravelHospitality;
