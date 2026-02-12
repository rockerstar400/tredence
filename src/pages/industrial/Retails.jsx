import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Footer from '../../components/Footer';

const Retail = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);

  const heroSlides = [
    {
      bg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
      title: 'The New Retail Mandate: Speed. Scale. Tredence.',
      subtitle: 'Powering $2T+ in Global Retail Revenue',
    },
    {
      bg: 'https://images.unsplash.com/photo-1534452286896-196f633c0501?auto=format&fit=crop&q=80&w=2000',
      title: 'Predictive Supply Chains for Modern Retail',
      subtitle: 'Optimize inventory and boost margins with AI',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* --- Section 1: Retail Hero Slider --- */}
      <section className="relative h-[85vh] w-full overflow-hidden text-white">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative h-full flex flex-col justify-center px-12 lg:px-24">
              {/* Breadcrumbs */}
              <nav className="mb-12 text-sm font-bold flex gap-2">
                <span className="cursor-pointer hover:text-orange-500">
                  Home
                </span>{' '}
                /
                <span className="cursor-pointer hover:text-orange-500">
                  Industry
                </span>{' '}
                /<span className="text-orange-500">Retail</span>
              </nav>

              <h1 className="text-5xl lg:text-7xl font-bold max-w-5xl leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-3xl lg:text-5xl font-light italic opacity-90">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* --- Section 2: Unlock Value (Image + Text) --- */}
      <section className="py-24 px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          {/* Orange Graphic Element placeholder */}
          <div className="absolute -top-10 left-10 w-40 h-20 bg-orange-600 -z-10 transform -skew-x-12"></div>
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
            alt="Retail Data"
            className="rounded-sm shadow-xl"
          />
          {/* Icons Overlay (Conceptual) */}
          <div className="absolute top-1/4 -left-6 bg-orange-600 p-4 rounded-sm text-white shadow-lg">
            🏪
          </div>
          <div className="absolute bottom-1/4 -right-6 bg-orange-600 p-4 rounded-sm text-white shadow-lg">
            📈
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Unlock the value of your{' '}
            <span className="text-orange-600">enterprise retail data</span>{' '}
            leveraging <span className="text-orange-600">AI/ML</span> to
            maximize growth.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Tredence drives the data and AI strategies for 8 of the world's top
            10 global retailers. We combine deep data engineering and data
            science capabilities with retail expertise to help the world's
            leading retailers modernize their data foundation and turn their
            enterprise data into insights with AI/ML.
          </p>
        </div>
      </section>

      {/* --- Section 3: Experts Slider (Awards) --- */}
      <section className="py-20 bg-gray-50 text-center px-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Meet the{' '}
          <span className="text-orange-600">undisputed retail analytics</span>{' '}
          experts!
        </h2>
        <p className="text-xl font-medium mb-16">
          Don't just take our word for it!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Award Cards placeholders */}
          {[
            'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
            'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
            'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
            'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
          ].map((logo, i) => (
            <div
              key={i}
              className="bg-white p-6 border border-gray-100 shadow-sm w-48 h-48 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <img
                src={logo}
                alt="Award Logo"
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 4: Testimonials Slider --- */}
      <section className="py-24 px-12 lg:px-24">
        <h3 className="text-2xl font-bold mb-2">What the bold say about us:</h3>
        <h2 className="text-4xl font-bold text-orange-600 mb-16">
          Clients. Partners. Analysts.
        </h2>

        <div className="relative border-l-4 border-orange-600 pl-10 py-4 max-w-5xl">
          <div className="absolute -left-5 top-0 bg-orange-600 text-white p-1 rounded-sm">
            <Star size={16} fill="white" />
          </div>

          <p className="text-2xl font-medium leading-relaxed text-gray-800 mb-12">
            “Mobile App Marketing has found immense value in our collaboration
            with Tredence. Their insights have transformed Walmart's approach to
            app marketing and customer growth. Tredence has enabled advanced app
            strategies, including the implementation of cohort-based targeting
            that demonstrably increase customer LTV.”
          </p>

          <div className="flex items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf028fbdb?auto=format&fit=crop&q=80&w=100"
              className="w-20 h-20 rounded-sm object-cover grayscale"
              alt="Sherry"
            />
            <div>
              <p className="font-bold text-lg">Sherry Thomas-Zon</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                Director, Mobile App Marketing
              </p>
              <div className="mt-4 text-blue-700 font-black text-2xl tracking-tighter italic">
                Walmart
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- Section 5: Tredence AI (Peach Section) --- */}
      <section className="bg-[#fff1ea] py-20 px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h4 className="text-orange-600 text-3xl font-bold flex items-center gap-2 mb-4">
              Tredence AI <span className="text-2xl">✨</span>
            </h4>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Where retail's data gets its edge
            </h2>
            <p className="text-2xl text-gray-800 leading-snug">
              Tredence helps leading global retailers by accelerating retail
              data and AI modernization, turning fragmented systems into
              actionable insights and tangible business impact.
            </p>
          </div>
          <div className="lg:w-1/2 text-gray-700 space-y-6 text-lg">
            <p>
              Retailers are sitting on mountains of data. Tredence combines deep
              data engineering and data science capabilities with retail
              expertise to help the world's leading retailers modernize their
              data foundation and turn their enterprise data into insights with
              AI/ML.
            </p>
            <p>
              Leveraging Atom.AI, our accelerator ecosystem, with +150 AI/ML
              retail specific solutions and 12+ GenAI agents, Tredence helps
              solve the hairiest data engineering and data science challenges
              for the world's largest and fastest growing retailers.
            </p>
            <p>
              Unlike dated software-as-a-service solutions that take months to
              implement, Tredence Accelerators are custom-built to align with
              your data and unique business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 6: AI Advantage Grid --- */}
      <section className="bg-[#fff1ea] pb-24 px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8 border-b border-orange-200 mb-12">
            <button className="pb-4 text-orange-600 border-b-2 border-orange-600 font-bold flex items-center gap-2">
              ⚙️ Services
            </button>
            <button className="pb-4 text-gray-400 font-bold flex items-center gap-2">
              💡 Solutions
            </button>
          </div>

          <h2 className="text-4xl font-bold mb-12">
            The AI advantage for modern retail
          </h2>
        </div>
      </section>

      {/* --- Section 7: Stats Grid (Why choose us) --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why do leading retailers choose{' '}
            <span className="text-orange-600">Tredence</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'GenAI for retail',
                image:
                  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
              },
              {
                title: 'AI-driven platform modernization',
                image:
                  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
              },
              {
                title: 'Real-time AI-powered supply chain insights',
                image:
                  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
              },
              {
                title: 'AI-powered customer 360 and personalization',
                image:
                  'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=600',
              },
              {
                title: 'AI-driven data monetization & retail media networks',
                image:
                  'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600',
              },
              {
                title: 'AI-powered demand forecasting & pricing optimization',
                image:
                  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600',
              },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                {/* Top Image Section (UI same as before) */}
                <div className="bg-orange-600 h-48 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Content Section (unchanged UI) */}
                <div className="bg-white p-8 h-40 flex flex-col justify-between border border-t-0 border-gray-100 shadow-sm group-hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold leading-tight">
                    {item.title}
                  </h3>

                  <span className="text-orange-600 font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                    READ MORE
                    <ChevronRight size={14} className="rotate-[-45deg]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 8: News Slider --- */}
      <section className="bg-[#fff1ea] py-24 px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            On the cutting-edge of data & AI
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-8">
            {[
              {
                tag: 'NEWS',
                title:
                  'Tredence Unveils Agentic Commerce Solution Accelerators at NRF 2025',
                img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
              },
              {
                tag: 'NEWS',
                title:
                  "Tredence Named a Leader in ISG's 2025 Provider Lens Assessment",
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
              },
              {
                tag: 'NEWS',
                title:
                  'Tredence Named 2025 Microsoft Data & Analytics Platform Partner of the Year',
                img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400',
              },
            ].map((news, idx) => (
              <div
                key={idx}
                className="min-w-[400px] bg-white group cursor-pointer shadow-sm hover:shadow-lg transition-all"
              >
                <img
                  src={news.img}
                  className="w-full h-56 object-cover"
                  alt=""
                />
                <div className="p-8">
                  <span className="bg-[#72c6b3] text-white px-3 py-1 text-xs font-bold tracking-widest">
                    {news.tag}
                  </span>
                  <h3 className="text-xl font-bold mt-6 mb-8 group-hover:text-orange-600 transition-colors">
                    {news.title}
                  </h3>
                  <div className="text-orange-600 text-2xl font-bold">→</div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination (Decorative) */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex gap-2">
              <button className="p-2 border border-gray-300 bg-white">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 border border-gray-300 bg-white">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="h-[1px] bg-gray-300 flex-grow mx-4"></div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`w-8 h-8 flex items-center justify-center border text-xs font-bold ${n === 1 ? 'bg-[#72c6b3] text-white border-[#72c6b3]' : 'bg-white text-teal-600 border-teal-200'}`}
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- Section 9: FAQs (Accordion) --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold">FAQs</h2>
          </div>

          <div className="lg:w-3/4 space-y-4">
            {[
              {
                q: 'What are AI-powered retail solutions, and how do they benefit retailers?',
                a: 'AI-powered retail solutions use machine learning, predictive analytics, and automation to enhance decision-making, optimize supply chains, personalize customer experiences, and increase operational efficiency. Tredence provides AI-driven solutions that help retailers modernize data platforms, improve demand forecasting, and maximize customer engagement.',
              },
              {
                q: 'Why should retailers invest in AI solutions for their business?',
                a: 'Investing in AI allows retailers to stay competitive by predicting consumer trends, reducing waste in supply chains, and providing hyper-personalized shopping experiences that drive loyalty and sales.',
              },
              {
                q: 'What is Generative AI in retail, and how can it help retailers grow?',
                a: 'GenAI helps in creating automated product descriptions, virtual try-ons, and advanced chatbots that handle complex customer queries, significantly reducing manual overhead.',
              },
              {
                q: 'What is Agentic AI, and how is it transforming retail decision-making?',
                a: 'Agentic AI goes beyond simple automation; it acts as an intelligent agent that can reason, plan, and execute tasks autonomously to solve complex business problems.',
              },
              {
                q: 'What makes Tredence a top retail AI consulting firm?',
                a: 'Our deep domain expertise, proprietary Atom.AI accelerators, and a track record of working with 8 of the top 10 global retailers make us a leader in this space.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-orange-600 transition-colors"
                >
                  <span className="text-lg font-bold pr-8">{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp size={20} className="text-orange-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="pb-8 text-gray-600 leading-relaxed text-sm animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 10: Contact Form (Floating Peach Box) --- */}
      <section className="relative pt-20">
        {/* Background Orange Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-600 -z-10"></div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#fff1ea] shadow-2xl p-10 lg:p-16 flex flex-col lg:flex-row gap-12 relative">
            {/* Left side: Text & Illustration */}
            <div className="lg:w-1/2 flex flex-col justify-between">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Demand more out of AI. Talk to retail experts born and bred in
                full-stack AI.
              </h2>

              {/* Simple Store Illustration Placeholder */}
              <div className="mt-12 opacity-90 hidden lg:block">
                <svg
                  viewBox="0 0 200 150"
                  className="w-64 h-auto fill-orange-600"
                >
                  <rect x="20" y="80" width="160" height="60" rx="2" />
                  <path d="M10 80 L190 80 L170 50 L30 50 Z" />
                  <rect
                    x="50"
                    y="100"
                    width="40"
                    height="40"
                    fill="white"
                    opacity="0.5"
                  />
                  <circle cx="150" cy="40" r="10" />
                  <path d="M140 60 L160 30" stroke="orange" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First name"
                    className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 transition-colors w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 transition-colors w-full"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 transition-colors w-full"
                />
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 transition-colors w-full"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows="3"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 transition-colors w-full resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="bg-orange-600 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors"
                >
                  Let's Chat
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Small footer spacer */}
      <div className="bg-orange-600 h-20"></div>
      <Footer />
    </div>
  );
};

export default Retail;
