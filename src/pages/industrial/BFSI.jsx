import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import LogoSlider from '../../components/LogoSlider'; // Aapka reusable scroll component
import logo from "../../assets/Sigmalogo.png"
import Footer from '../../components/Footer';

const BFSI = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  // Award Logos (Aapne jo local import setup kiya hai wahi use karein)
  const awardLogos = [
    logo,
    logo
    
  ];

  return (
    <div className="font-sans antialiased text-gray-900">
      
      {/* --- Section 1: Hero Section --- */}
      <section className="relative h-[85vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        {/* Dark Digital/Financial Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000')` }}
        >
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="px-6 lg:px-24 max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-80 uppercase tracking-widest">
            <span>Home</span> / <span>Industry</span> / <span className="text-orange-500">BFSI</span>
          </nav>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Powering Operational Excellence
          </h1>
          <p className="text-3xl lg:text-5xl font-light italic opacity-90 leading-snug">
            In Banking, Financial Services & Insurance with <br /> Data & AI
          </p>
        </div>
      </section>

      {/* --- Section 2: Turn Data into Impact (BFSI version) --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left: Financial Professional Image with Tech Overlays */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-5 w-64 h-24 bg-orange-600 -z-0 transform -skew-x-12 opacity-90"></div>
            
            <div className="relative z-10 flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=800" 
                alt="Finance Specialist" 
                className="w-full max-w-md rounded-sm shadow-2xl"
              />
              
              {/* Orbital Circles */}
              <div className="absolute inset-0 border-[2px] border-orange-500/30 rounded-full scale-110 -rotate-12"></div>
              <div className="absolute inset-0 border-[1px] border-orange-500/20 rounded-full scale-125 rotate-45"></div>
              
              {/* Floating Tech Icons */}
              <div className="absolute top-1/4 -left-8 bg-orange-600 p-4 text-white text-2xl shadow-lg">🏦</div>
              <div className="absolute top-10 right-0 bg-orange-600 p-4 text-white text-2xl shadow-lg">🛡️</div>
              <div className="absolute bottom-5 left-1/4 bg-orange-600 p-4 text-white text-2xl shadow-lg">📊</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Turn Enterprise <span className="text-orange-600">data into business impact</span> with AI-powered intelligence
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Tredence helps BFSI organizations build resilient risk frameworks, agile treasury operations, and faster product innovation using AI and advanced analytics. 
              </p>
              <p>
                With data modernization, digital twins, and predictive modeling, we bring together fragmented operational, clinical, and research data to create a unified intelligence layer that improves outcomes and drives competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Logo Scroll --- */}
      <LogoSlider 
        title="Meet the undisputed" 
        highlightText="banking & finance analytics" 
        subtitle="Don't just take our word for it!"
        logos={awardLogos}
      />

      {/* --- Section 4: BFSI FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">What the bold say about us:</h3>
          <h2 className="text-4xl font-bold text-orange-600 mb-16">Clients. Partners. Analysts.</h2>

          <div className="relative border-l border-gray-200 pl-10 py-4">
            {/* Orange Quote Icon */}
            <div className="absolute -left-5 top-0 bg-orange-600 text-white p-2 rounded-sm">
              <Star size={18} fill="white" />
            </div>
            
            <p className="text-2xl lg:text-3xl font-medium leading-snug text-gray-800 mb-12">
              “Tredence has accelerators that can address different steps in the data flow journey. If you want to build data quality checks, do ingestions, create data models, enable semantic layers that can go into self-service consumption, they have built all these accelerators at every step in the journey. The combination of all these things is what made our journey faster.”
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <img 
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200" 
                className="w-24 h-24 object-cover grayscale" 
                alt="Venkatesh Guruprasad"
              />
              <div>
                <p className="font-bold text-xl">Venkatesh Guruprasad</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">
                  DIVISION DIRECTOR, HEAD OF DATA ARCHITECTURE & GOVERNANCE
                </p>
                <div className="text-red-700 font-bold text-2xl flex items-center gap-2">
                  <span className="text-3xl italic">🕊️</span> BAYADA
                </div>
              </div>
            </div>

            {/* Slider Controls Placeholder */}
            <div className="flex gap-4 mt-12">
              <button className="p-3 border border-gray-300 hover:bg-gray-100 transition"><ChevronLeft size={20}/></button>
              <button className="p-3 border border-gray-300 hover:bg-gray-100 transition"><ChevronRight size={20}/></button>
            </div>
          </div>
        </div>
      </section>

      {/* Note: Iske baad aap Retail page wale FAQs aur Contact Form sections copy-paste kar sakte hain */}
      {/* --- Section 5: Tredence AI (Peach Intro) --- */}
      <section className="bg-[#fff1ea] py-20 px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h4 className="text-orange-600 text-3xl font-bold flex items-center gap-2 mb-4">
              Tredence AI <span className="text-2xl">✨</span>
            </h4>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Powering precision and progress in healthcare
            </h2>
            <p className="text-2xl text-gray-800 leading-snug">
              Tredence helps leading healthcare organizations unify fragmented data to enable real-time intelligence. 
              The 360-degree view enables improved member experience, and delivers cost-efficient outcomes.
            </p>
          </div>
          <div className="lg:w-1/2 text-gray-700 space-y-6 text-lg">
            <p>
              Managing complex, fast-growing data is a foundational challenge that every healthcare enterprise faces. 
              They need a scalable, secure, AI-ready data foundation. Tredence helps unify siloed data through 
              cloud-native modernization, deploy domain-specific data models, and activate the power of AI for faster decisions.
            </p>
            <p>
              Our offerings span AI advisory, data engineering, and healthcare analytics to advance value-based care, 
              elevate member and patient experiences, improve clinical outcomes, and optimize operational efficiency.
            </p>
            <p>
              At the center is ATOM.AI—an accelerator ecosystem with 150+ AI/ML solutions and 12+ GenAI agents 
              that deliver insights in weeks. With deep domain expertise, Tredence turns AI potential into 
              measurable impact for healthcare enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 6: Healthcare Services Grid --- */}
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
          
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold max-w-2xl leading-tight">
              Modernizing Healthcare with Connected Data and AI
            </h2>
            <p className="text-gray-600 max-w-sm text-sm hidden lg:block">
              Deliver measurable value in care, cost, and operations through a unified, governed, AI-ready healthcare data layer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Interoperability", icon: "📄" },
              { title: "AI-augmented data governance", icon: "☁️" },
              { title: "Unified data models", icon: "🗄️" },
              { title: "AI driven payer and provider analytics", icon: "🔍" },
              { title: "GenAI-powered Healthcare", icon: "❤️" },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-orange-600 h-48 flex items-center justify-center text-6xl text-white">
                  {item.icon}
                </div>
                <div className="bg-white p-8 h-40 flex flex-col justify-between border border-t-0 border-gray-100 shadow-sm group-hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                  <span className="text-orange-600 font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                    READ MORE <ChevronRight size={14} className="rotate-[-45deg]"/>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 7: Stats Grid (Why Healthcare choose us) --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why do leading <span className="text-orange-600">Healthcare</span> organizations choose <span className="text-orange-600">Tredence</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {[
              { val: "4,200+", desc: "domain, data, and technology experts", icon: "🧬" },
              { val: "150+", desc: "KPIs the unified healthcare domain data model", icon: "📊" },
              { val: "20+", desc: "solution accelerators optimizing the care lifecycle", icon: "⚡" },
              { val: "Strategic alliances", desc: "co-innovating with Hyperscalers and Data & AI ISVs for enterprise-grade transformations", icon: "🤝" },
              { val: "94% NPS", desc: "with extensive customer recommendations across multiple engagements", icon: "👍" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-12 flex flex-col items-start gap-4">
                <span className="text-3xl">{stat.icon}</span>
                <h3 className="text-3xl font-bold text-orange-600">{stat.val}</h3>
                <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 8: Partnering Section --- */}
      <section className="py-24 px-12 lg:px-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Partnering with the best</h2>
          <p className="text-xl text-gray-600 mb-16">We co-build and co-innovate with the leading cloud and AI leaders</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
            {[
              { name: "databricks", desc: "Accelerating enterprise data modernization...", badge: "🏆" },
              { name: "Google Cloud", desc: "Driving business transformation with AI...", badge: "☁️" },
              { name: "snowflake", desc: "Driving data and AI innovation as a Snowflake Elite Partner...", badge: "❄️" },
              { name: "Microsoft Azure", desc: "Driving scalable decision intelligence...", badge: "💻" }
            ].map((p, i) => (
              <div key={i} className="space-y-6">
                <div className="h-12 flex items-center font-bold text-2xl text-gray-400 grayscale hover:grayscale-0 cursor-pointer">{p.name}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                <div className="h-24 w-24 bg-gray-50 flex items-center justify-center border border-gray-100">Badge {i+1}</div>
                <div className="text-orange-600 font-bold">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 9: Impact Stories (Secret Weapon) --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Tredence is the <span className="text-orange-600">secret weapon</span> powering last mile impact stories
          </h2>
          
          <div className="flex flex-col lg:flex-row border border-gray-200 shadow-sm">
            <div className="lg:w-1/2 p-12 bg-white">
              <h3 className="text-2xl font-bold mb-6">Harmonizing member data for a health and home care company</h3>
              <div className="text-sm text-gray-600 space-y-4 mb-8">
                <p>A large senior-focused health and home care company sought to create a 360-degree view of member information...</p>
                <p>Tredence developed an enterprise member360 data hub with data models, key performance indicators, and AI and ML risk models...</p>
              </div>
              
              <div className="space-y-2">
                {["33% reduced emergency room visits", "40% improvement in the medical loss ratio", "50% improved member engagement", "95% enhanced patient satisfaction"].map((txt, i) => (
                  <div key={i} className="bg-[#fff1ea] p-3 text-sm font-bold border-l-4 border-orange-500">{txt}</div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover" 
                alt="Care story" 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-8">
            <div className="flex gap-2">
              <button className="p-2 border border-gray-300"><ChevronLeft size={20}/></button>
              <button className="p-2 border border-gray-300"><ChevronRight size={20}/></button>
            </div>
            <div className="flex-grow h-px bg-gray-200"></div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(n => <span key={n} className={`w-8 h-8 flex items-center justify-center text-xs border ${n===1 ? 'bg-[#72c6b3] text-white border-[#72c6b3]' : 'text-teal-600 border-teal-100'}`}>{n}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 10: Featured Insights --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Featured Insights</h2>
          
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
            {["LATEST BLOGS", "CASE STUDIES", "E-BOOKS", "THOUGHT LEADERSHIP", "VIDEOS"].map((tab, i) => (
              <button key={i} className={`px-6 py-2 text-xs font-bold tracking-widest whitespace-nowrap ${i===0 ? 'bg-[#72c6b3] text-white' : 'bg-gray-200 text-gray-500'}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Enhancing Healthcare Supply Chain Data Quality...", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400" },
              { title: "How AI Diagnostics is Revolutionizing the Fight...", img: "https://images.unsplash.com/photo-1579154235602-3c3103734c44?auto=format&fit=crop&q=80&w=400" },
              { title: "Key Opinion Leader (KOL) Engagement in Healthcare...", img: "https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?auto=format&fit=crop&q=80&w=400" }
            ].map((blog, idx) => (
              <div key={idx} className="bg-white group cursor-pointer shadow-sm hover:shadow-lg transition-all">
                <img src={blog.img} className="w-full h-52 object-cover" alt="" />
                <div className="p-8">
                  <span className="bg-[#72c6b3] text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase">BLOG</span>
                  <h3 className="text-lg font-bold mt-4 mb-8 min-h-[60px] group-hover:text-orange-600">{blog.title}</h3>
                  <div className="text-orange-600 font-bold">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 11: Healthcare FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold">FAQs</h2>
          </div>
          <div className="lg:w-3/4 space-y-4">
            {[
              { q: "What are Healthcare Analytics Services and why are they important?", a: "Healthcare Analytics Services help payer and provider firms unlock insights from clinical, operational, and financial data. Tredence delivers AI-powered solutions such as unified health data platforms, clinical risk prediction models, and personalized care engagement to improve care quality, reduce costs, and accelerate innovation." },
              { q: "How do Healthcare Analytics Solutions improve patient outcomes and operational efficiency?", a: "By identifying high-risk patients early and optimizing resource allocation..." },
              { q: "How is Generative AI transforming Healthcare?", a: "GenAI is helping in clinical documentation, medical research, and patient communication..." },
              { q: "What makes Tredence a trusted Healthcare AI partner?", a: "Our deep domain expertise and proprietary accelerators like ATOM.AI..." }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-orange-600"
                >
                  <span className="text-lg font-bold pr-8">{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp size={20} className="text-orange-500" /> : <ChevronDown size={20} className="text-gray-400" />}
                </button>
                {activeFaq === idx && <div className="pb-8 text-gray-600 text-sm leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 12: Contact Form --- */}
      <section className="relative pt-20">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-600 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-[#fff1ea] shadow-2xl p-10 lg:p-16 flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-12">
                Demand more out of AI. Talk to Healthcare experts born and bred in full-stack AI.
              </h2>
              {/* Healthcare Specific Icon/Illustration */}
              <div className="w-64 h-64 bg-orange-600 rounded-2xl flex items-center justify-center p-8">
                 <div className="text-white text-9xl">❤️</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder="First name" className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full" />
                  <input type="text" placeholder="Last name" className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full" />
                </div>
                <input type="email" placeholder="Email Address*" className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full" />
                <input type="tel" placeholder="Contact Number" className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full" />
                <textarea placeholder="How can we help you?" rows="3" className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full resize-none"></textarea>
                <button type="submit" className="bg-orange-600 text-white px-8 py-2 text-xs font-bold uppercase tracking-widest hover:bg-orange-700">Let's Chat</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
};

export default BFSI;