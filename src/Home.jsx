import React from 'react';
import Navbar from "./components/Header"; // Path check kar lena agar folder alag ho
import Hero from './components/Hero';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div className="relative font-sans antialiased">
            {/* Header and Hero */}
            <Navbar />
            <Hero />

            {/* Latest & Leading (Awards Section) */}
            <section className="py-20 bg-white px-12 lg:px-24">
                <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-gray-900">Latest & leading</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="border border-gray-100 shadow-sm p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group">
                        <div>
                            <div className="h-32 bg-blue-50 mb-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-24" />
                            </div>
                            <p className="font-bold text-lg leading-snug">Tredence Named 2025 Microsoft Data & Analytics Platform Partner of the Year</p>
                        </div>
                        <button className="text-orange-600 mt-10 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                            Learn more <span>→</span>
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-gray-100 shadow-sm p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group">
                        <div>
                            <div className="h-32 bg-red-50 mb-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all text-red-600 font-bold">
                                DATABRICKS 5X
                            </div>
                            <p className="font-bold text-lg leading-snug">Tredence Awarded 2025 Databricks Growth Partner of the Year</p>
                        </div>
                        <button className="text-orange-600 mt-10 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                            Learn more <span>→</span>
                        </button>
                    </div>

                    {/* Card 3 - Add more cards as needed */}
                    <div className="border border-gray-100 shadow-sm p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group">
                        <div>
                            <div className="h-32 bg-blue-50 mb-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                SNOWFLAKE
                            </div>
                            <p className="font-bold text-lg leading-snug">Tredence Named Snowflake Partner of the Year for Retail & CPG</p>
                        </div>
                        <button className="text-orange-600 mt-10 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                            Learn more <span>→</span>
                        </button>
                    </div>

                    <div className="border border-gray-100 shadow-sm p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group">
                        <div>
                            <div className="h-32 bg-yellow-50 mb-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                GOOGLE CLOUD
                            </div>
                            <p className="font-bold text-lg leading-snug">Tredence Wins 2025 Google Cloud Industry Solutions Partner of the Year</p>
                        </div>
                        <button className="text-orange-600 mt-10 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                            Learn more <span>→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* What Makes Us Unique Section (From Image 3) */}
            <section className="py-24 bg-gray-50 px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                        alt="Unique"
                        className="rounded-br-[100px] shadow-2xl"
                    />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold mb-6">Powering last mile with industry-specific data science solutions</h2>
                    <p className="text-gray-600 mb-12 text-lg">At Tredence, we bridge the gap between insights delivery and value realization by enabling last-mile adoption of data science.</p>

                    <h3 className="text-3xl font-bold mb-8 italic">What makes us unique</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="text-orange-600 mb-4">🎯</div>
                            <p className="font-semibold text-sm">Speed to action through accelerators</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="text-orange-600 mb-4">⚙️</div>
                            <p className="font-semibold text-sm">Speed to value through industry expertise</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="text-orange-600 mb-4">🤝</div>
                            <p className="font-semibold text-sm">Speed to scale through AI partnerships</p>
                        </div>
                    </div>

                    <button className="mt-12 bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-all">
                        Explore our success stories
                    </button>
                </div>

            </section>
            {/* --- Section 1: Thought Leadership --- */}
            <section className="py-20 bg-white px-12 lg:px-24">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
                        Plotting your Northstar with thought leadership
                    </h2>
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">←</button>
                        <button className="w-12 h-12 rounded-full border border-orange-500 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">→</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Card 1 */}
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=1000" alt="Data" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <span className="text-orange-600 font-bold text-sm uppercase">Point of View</span>
                        <h3 className="text-2xl font-bold mt-2 text-gray-800 leading-snug">Dominate with Data: Migrate and Modernize your CPG Data to Unlock New Capabilities</h3>
                    </div>
                    {/* Card 2 */}
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000" alt="Pricing" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <span className="text-orange-600 font-bold text-sm uppercase">Point of View</span>
                        <h3 className="text-2xl font-bold mt-2 text-gray-800 leading-snug">Dynamic Pricing: How Is AI Making Retail Pricing Smarter?</h3>
                    </div>
                </div>
            </section>

            {/* --- Section 2: Tredence Studio (Airplane Section) --- */}
            <section className="relative min-h-[600px] flex items-center text-white py-20 px-12 lg:px-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2000" alt="Studio" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
                </div>

                <div className="relative z-10 w-full">
                    <span className="text-lg font-bold mb-4 block">TREDENCE STUDIO</span>
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight">AI/ML Accelerator Ecosystem for Enterprises</h2>
                    <p className="text-xl mb-12 max-w-2xl opacity-90">Envision new possibilities and extraordinary paths to value using AI-powered data science solutions and accelerators.</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-t border-white/20 pt-10">
                        {[
                            "AI deep tech & industry experts", "Fully-stocked workbench", "High-voltage collaboration", "Continuous learning paradigm",
                            "Extensive customization", "Lightning fast time to value", "Easy and quick iterations", "Design thinking approach"
                        ].map((item, idx) => (
                            <div key={idx} className="border-l-2 border-white pl-4">
                                <p className="font-semibold text-sm lg:text-base leading-tight">{item}</p>
                            </div>
                        ))}
                    </div>

                    <button className="mt-12 flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-700 transition-all">
                            <span className="text-2xl">→</span>
                        </div>
                        <span className="font-bold text-xl">Explore Tredence Studio</span>
                    </button>
                </div>
            </section>

            {/* --- Section 3: Elite Ecosystem Partnerships --- */}
            <section className="py-24 bg-white text-center px-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-gray-900">
                    Propelling hyperscale enterprises with elite ecosystem partnerships
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-70 mb-16">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-10 lg:h-12" />
                    <div className="text-3xl font-bold text-gray-400">/LiveRamp</div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="h-16 lg:h-20" />
                </div>

                {/* Progress Bar (Slider Indicator) */}
                <div className="w-64 h-1.5 bg-gray-200 mx-auto rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-orange-500"></div>
                </div>
            </section>
            {/* --- Section 4: Join Our Team (Overlapping Style) --- */}
            <section className="py-20 px-12 lg:px-24 bg-white">
                <div className="relative h-[600px] w-full">
                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000"
                        alt="Team"
                        className="w-full h-full object-cover rounded-sm"
                    />

                    {/* Overlapping Orange Box */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:left-12 bg-orange-600 p-10 lg:p-16 text-white max-w-2xl shadow-2xl">
                        <h2 className="text-5xl font-bold mb-6">Join our team</h2>
                        <p className="text-lg mb-10 leading-relaxed opacity-90">
                            Celebrating diverse perspectives and innovative ideas, we're always
                            looking for fresh new talent to work on the most pressing data science
                            challenges today. In turn, you get to unlock a world of learning and
                            growth opportunities at every step.
                        </p>
                        <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
                            Apply to our jobs
                        </button>
                    </div>
                </div>
            </section>

            {/* --- Section 5: Recognized by Industry Leaders (Awards) --- */}
            <section className="py-24 bg-gray-50 px-12 lg:px-24">
                <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 max-w-4xl mx-auto leading-tight">
                    Recognized by industry leaders for our pathfinding
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Award 1 */}
                    <div className="bg-white p-10 flex flex-col items-center text-center shadow-sm border border-gray-100">
                        <div className="h-48 flex items-center justify-center mb-8">
                            <img src="https://www.greatplacetowork.in/wp-content/uploads/2021/04/Certified-Logo-300x300.png" alt="GPTW" className="h-full object-contain" />
                        </div>
                        <div className="w-full h-[1px] bg-gray-200 mb-8"></div>
                        <p className="text-gray-600 font-medium leading-relaxed">
                            Tredence is Certified as a Great Place to Work® by GPTW India
                        </p>
                    </div>

                    {/* Award 2 */}
                    <div className="bg-white p-10 flex flex-col items-center text-center shadow-sm border border-gray-100">
                        <div className="h-48 flex items-center justify-center mb-8">
                            {/* Placeholder for Business Insider style logo */}
                            <div className="bg-blue-600 text-white p-6 font-bold text-xl uppercase tracking-tighter">
                                Business Insider <br /> <span className="text-sm opacity-80">Top Consulting Firm</span>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-200 mb-8"></div>
                        <p className="text-gray-600 font-medium leading-relaxed">
                            Recognized as a Top Management Consulting Firm in the U.S. by Business Insider.
                        </p>
                    </div>

                    {/* Award 3 */}
                    <div className="bg-white p-10 flex flex-col items-center text-center shadow-sm border border-gray-100">
                        <div className="h-48 flex items-center justify-center mb-8">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-32 mb-4" />
                            <div className="absolute mt-16 font-bold text-blue-600">2025 Partner of the Year</div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-200 mb-8"></div>
                        <p className="text-gray-600 font-medium leading-relaxed">
                            Tredence Named 2025 Microsoft Data & Analytics Platform Partner of the Year
                        </p>
                    </div>
                </div>

                {/* Progress Bar (Slider Indicator) */}
                <div className="mt-16 w-64 h-1.5 bg-gray-200 mx-auto rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-orange-500"></div>
                </div>
            </section>
            {/* --- Recognized by Industry Leaders Section --- */}
<section className="py-24 bg-[#f8f9fa] px-12 lg:px-24">
  <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 max-w-4xl mx-auto leading-tight text-gray-900">
    Recognized by industry leaders for our pathfinding
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Card 1: Great Place to Work */}
    <div className="bg-white p-10 flex flex-col items-center text-center shadow-sm border border-gray-100 transition-transform hover:-translate-y-2 duration-300">
      <div className="h-56 flex items-center justify-center mb-8">
         <img 
            src="https://www.greatplacetowork.in/wp-content/uploads/2021/04/Certified-Logo-300x300.png" 
            alt="GPTW India" 
            className="h-full object-contain" 
         />
      </div>
      {/* Divider line */}
      <div className="w-full h-[1px] bg-gray-200 mb-8"></div>
      <p className="text-gray-600 font-medium leading-relaxed px-4">
        Tredence is Certified as a Great Place to Work® by GPTW India
      </p>
    </div>

    {/* Card 2: Business Insider */}
    <div className="bg-white p-10 flex flex-col items-center text-center shadow-sm border border-gray-100 transition-transform hover:-translate-y-2 duration-300">
      <div className="h-56 flex items-center justify-center mb-8">
         <img 
            src="https://plantainsights.com/wp-content/uploads/2023/11/BI-Top-Consulting-Firms-2024.png" 
            alt="Business Insider" 
            className="h-full object-contain" 
         />
      </div>
      <div className="w-full h-[1px] bg-gray-200 mb-8"></div>
      <p className="text-gray-600 font-medium leading-relaxed px-4">
        Recognized as a Top Management Consulting Firm in the U.S. by Business Insider.
      </p>
    </div>

    {/* Card 3: Microsoft Partner */}
    <div className="bg-white p-10 flex flex-col items-center text-center shadow-sm border border-gray-100 transition-transform hover:-translate-y-2 duration-300">
      <div className="h-56 w-full flex items-center justify-center mb-8">
         {/* Custom Microsoft Card Style */}
         <div className="w-full border border-blue-200 rounded-sm overflow-hidden flex flex-col">
            <div className="bg-white p-6 text-left flex items-start gap-4">
               <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-8" />
               <div>
                  <p className="text-blue-600 font-bold text-sm">Microsoft</p>
                  <p className="text-blue-800 text-xs font-semibold">2025 Partner of the Year</p>
               </div>
            </div>
            <div className="bg-[#0078d4] p-6 text-white text-left">
               <p className="font-bold text-sm">Winner</p>
               <p className="text-[10px] opacity-90">Data and Analytics Platform Award</p>
            </div>
         </div>
      </div>
      <div className="w-full h-[1px] bg-gray-200 mb-8"></div>
      <p className="text-gray-600 font-medium leading-relaxed px-4">
        Tredence Named 2025 Microsoft Data & Analytics Platform Partner of the Year
      </p>
    </div>

  </div>

  {/* Slider Indicator (Progress Bar) */}
  <div className="mt-20 w-80 h-1.5 bg-gray-200 mx-auto rounded-full overflow-hidden flex">
    <div className="w-1/3 h-full bg-orange-600 transition-all"></div>
    <div className="flex-1"></div>
  </div>
</section>
            <Footer />
        </div>
    );
}

export default Home;