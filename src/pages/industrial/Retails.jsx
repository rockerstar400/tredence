import { useState, useEffect } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Retail = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
const [activeTab, setActiveTab] = useState("services");
const [currentNews, setCurrentNews] = useState(0);

const newsData = [
  {
    tag: "NEWS",
    title:
      "Sigma Unveils Agentic Commerce Solution Accelerators at NRF 2025",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
  },
  {
    tag: "NEWS",
    title:
      "Sigma Named a Leader in ISG's 2025 Provider Lens Assessment",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
  },
  {
    tag: "NEWS",
    title:
      "Sigma Named 2025 Microsoft Data & Analytics Platform Partner of the Year",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
  },
];

  const heroSlides = [
    {
      bg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
      title: 'The New Retail Mandate: Speed. Scale. Sigma.',
      subtitle: 'Powering $2T+ in Global Retail Revenue',
    },
    {
      bg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000',
      title: 'Predictive Supply Chains for Modern Retail',
      subtitle: 'Optimize inventory and boost margins with AI',
    },
  ];
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentNews((prev) =>
      prev === newsData.length - 1 ? 0 : prev + 1
    );
  }, 4000);

  return () => clearInterval(interval);
}, []);

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
        <AnimatePresence mode="wait">
          {heroSlides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  {/* Background Zoom Effect */}
                  <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 6 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.bg})` }}
                  >
                    <div className="absolute inset-0 bg-black/50"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-center px-12 lg:px-24">
                    {/* Breadcrumbs */}
                    <motion.nav
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="mb-12 text-sm font-bold flex gap-2"
                    >
                      <span className="cursor-pointer hover:text-orange-500">
                        Home
                      </span>
                      /
                      <span className="cursor-pointer hover:text-orange-500">
                        Industry
                      </span>
                      /<span className="text-orange-500">Retail</span>
                    </motion.nav>

                    {/* Title Animation */}
                    <motion.h1
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="text-5xl lg:text-7xl font-bold max-w-5xl leading-tight mb-6"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Subtitle Animation */}
                    <motion.p
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="text-3xl lg:text-5xl font-light italic opacity-90"
                    >
                      {slide.subtitle}
                    </motion.p>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </section>

      {/* --- Section 2: Unlock Value (Image + Text) --- */}
     <section className="py-28 px-6 lg:px-24 bg-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">

    {/* TEXT CONTENT */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="lg:w-1/2"
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-orange-600 font-semibold uppercase tracking-wider text-sm"
      >
        Retail Intelligence
      </motion.span>

      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-bold leading-tight mt-4 mb-8 text-gray-900"
      >
        Unlock the value of your{" "}
        <span className="text-orange-600">enterprise retail data</span>{" "}
        leveraging <span className="text-orange-600">AI/ML</span> to maximize growth.
      </motion.h2>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-600 text-lg leading-relaxed mb-8"
      >
        Sigma drives the data and AI strategies for 8 of the world's
        top 10 global retailers. We combine deep data engineering and data
        science capabilities with retail expertise to help leading
        retailers modernize their data foundation and turn enterprise data
        into insights.
      </motion.p>
    </motion.div>

    {/* IMAGE SECTION */}
    <motion.div
      initial={{ x: 100, opacity: 0, rotate: 2 }}
      whileInView={{ x: 0, opacity: 1, rotate: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="lg:w-1/2 relative"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
        className="relative rounded-xl overflow-hidden shadow-2xl"
      >
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
          alt="Retail Data"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Badges */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        viewport={{ once: true }}
        className="absolute -top-6 -left-6 bg-white shadow-lg px-4 py-3 rounded-lg text-orange-600 font-semibold"
      >
        🏪 Retail
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="absolute -bottom-6 -right-6 bg-white shadow-lg px-4 py-3 rounded-lg text-orange-600 font-semibold"
      >
        📈 Growth
      </motion.div>
    </motion.div>

  </div>
</section>


      {/* --- Section 3: Experts Slider (Awards) --- */}
      <section className="py-24 bg-gray-50 text-center px-12 overflow-hidden">

  {/* Heading Animation */}
  <motion.h2
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl lg:text-5xl font-bold mb-4"
  >
    Meet the{" "}
    <span className="text-orange-600">undisputed retail analytics</span>{" "}
    experts!
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    viewport={{ once: true }}
    className="text-xl font-medium mb-16"
  >
    Don't just take our word for it!
  </motion.p>

  {/* Logo Grid with Stagger Animation */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: { staggerChildren: 0.2 }
      }
    }}
    className="flex flex-wrap justify-center gap-8"
  >
    {[
      'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
      'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
    ].map((logo, i) => (

      <motion.div
        key={i}
        variants={{
          hidden: { opacity: 0, y: 60, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 }
        }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -10, scale: 1.05 }}
        className="bg-white p-8 border border-gray-100 shadow-md w-52 h-52 flex items-center justify-center grayscale hover:grayscale-0 hover:shadow-xl transition-all duration-300 cursor-pointer rounded-lg"
      >
        <img
          src={logo}
          alt="Award Logo"
          className="max-h-20 object-contain"
        />
      </motion.div>

    ))}
  </motion.div>

</section>


      {/* --- Section 4: Testimonials Slider --- */}
    <section className="py-28 px-12 lg:px-24 bg-white overflow-hidden">

  {/* Heading Animation */}
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-2xl font-bold mb-2"
  >
    What the bold say about us:
  </motion.h3>

  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl font-bold text-orange-600 mb-16"
  >
    Clients. Partners. Analysts.
  </motion.h2>

  {/* Testimonial Card */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    whileHover={{ y: -8 }}
    viewport={{ once: true }}
    className="relative border-l-4 border-orange-600 pl-10 py-8 max-w-5xl bg-gray-50 rounded-lg shadow-md"
  >

    {/* Star Icon */}
    <div className="absolute -left-5 top-0 bg-orange-600 text-white p-2 rounded-md shadow-lg">
      <Star size={16} fill="white" />
    </div>

    {/* Quote Text */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      viewport={{ once: true }}
      className="text-2xl font-medium leading-relaxed text-gray-800 mb-12"
    >
      “Mobile App Marketing has found immense value in our collaboration
      with Sigma. Their insights have transformed Walmart's approach to
      app marketing and customer growth. Sigma has enabled advanced app
      strategies, including the implementation of cohort-based targeting
      that demonstrably increase customer LTV.”
    </motion.p>

    {/* Profile Section */}
    <div className="flex items-center gap-6">

      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=2000"
        className="w-20 h-20 rounded-md object-cover grayscale hover:grayscale-0 transition-all duration-300"
        alt="Sherry"
      />

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="font-bold text-lg">Sherry Thomas-Zon</p>
        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
          Director, Mobile App Marketing
        </p>
        <div className="mt-4 text-blue-700 font-black text-2xl tracking-tighter italic">
          Walmart
        </div>
      </motion.div>

    </div>

  </motion.div>

</section>



      {/* --- Section 5: Sigma AI (Peach Section) --- */}
     <section className="relative bg-[#fff1ea] py-24 px-12 lg:px-24 overflow-hidden">

  {/* Subtle Animated Background Glow */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.4 }}
    transition={{ duration: 2 }}
    className="absolute -top-32 -right-32 w-96 h-96 bg-orange-300 rounded-full blur-3xl"
  />

  <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="lg:w-1/2"
    >
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-orange-600 text-3xl font-bold flex items-center gap-2 mb-4"
      >
        Sigma AI <span className="text-2xl">✨</span>
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-bold leading-tight mb-8"
      >
        Where retail's data gets its edge
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl text-gray-800 leading-snug"
      >
        Sigma helps leading global retailers by accelerating retail
        data and AI modernization, turning fragmented systems into
        actionable insights and tangible business impact.
      </motion.p>
    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.3 }
        }
      }}
      className="lg:w-1/2 text-gray-700 space-y-8 text-lg"
    >
      {[
        `Retailers are sitting on mountains of data. Sigma combines deep data engineering and data science capabilities with retail expertise to help the world's leading retailers modernize their data foundation and turn their enterprise data into insights with AI/ML.`,
        `Leveraging Atom.AI, our accelerator ecosystem, with +150 AI/ML retail specific solutions and 12+ GenAI agents, Sigma helps solve the hairiest data engineering and data science challenges for the world's largest and fastest growing retailers.`,
        `Unlike dated software-as-a-service solutions that take months to implement, Sigma Accelerators are custom-built to align with your data and unique business requirements.`
      ].map((text, i) => (
        <motion.p
          key={i}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          whileHover={{ x: 5 }}
          className="leading-relaxed"
        >
          {text}
        </motion.p>
      ))}
    </motion.div>

  </div>
</section>


      {/* --- Section 6: AI Advantage Grid --- */}
     <section className="bg-[#fff1ea] pb-28 px-12 lg:px-24 overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* Tabs */}
    <div className="relative flex gap-8 border-b border-orange-200 mb-16">

      {[
        { id: "services", label: "⚙️ Services" },
        { id: "solutions", label: "💡 Solutions" }
      ].map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          whileHover={{ scale: 1.05 }}
          className={`relative pb-4 font-bold flex items-center gap-2 transition-colors duration-300 ${
            activeTab === tab.id
              ? "text-orange-600"
              : "text-gray-400"
          }`}
        >
          {tab.label}

          {/* Animated underline */}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute left-0 right-0 -bottom-[2px] h-[3px] bg-orange-600 rounded"
            />
          )}
        </motion.button>
      ))}
    </div>

    {/* Heading Animation */}
    <motion.h2
      key={activeTab}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold"
    >
      The AI advantage for modern retail
    </motion.h2>

  </div>
</section>


      {/* --- Section 7: Stats Grid (Why choose us) --- */}
     <section className="py-28 px-12 lg:px-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* Heading Animation */}
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center mb-20"
    >
      Why do leading retailers choose{" "}
      <span className="text-orange-600">Sigma</span>
    </motion.h2>

    {/* Grid with Stagger Animation */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {[
        {
          title: "GenAI for retail",
          image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "AI-driven platform modernization",
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Real-time AI-powered supply chain insights",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "AI-powered customer 360 and personalization",
          image:
            "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "AI-driven data monetization & retail media networks",
          image:
            "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "AI-powered demand forecasting & pricing optimization",
          image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
        },
      ].map((item, idx) => (

        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -12 }}
          className="group cursor-pointer rounded-xl overflow-hidden"
        >

          {/* Image Section */}
          <div className="relative h-52 overflow-hidden">
            <motion.img
              src={item.image}
              alt={item.title}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover"
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
          </div>

          {/* Content Section */}
          <div className="bg-white p-8 h-40 flex items-center border border-gray-100 shadow-md group-hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold leading-tight group-hover:text-orange-600 transition-colors duration-300">
              {item.title}
            </h3>
          </div>

        </motion.div>

      ))}
    </motion.div>

  </div>
</section>

      {/* --- Section 8: News Slider --- */}
      <section className="bg-[#fff1ea] py-28 px-12 lg:px-24 overflow-hidden">
  <div className="max-w-7xl mx-auto">

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-16"
    >
      On the cutting-edge of data & AI
    </motion.h2>

    <div className="relative h-[420px] flex items-center justify-center">

      <AnimatePresence mode="wait">
        <motion.div
          key={currentNews}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full max-w-2xl bg-white shadow-xl rounded-xl overflow-hidden"
        >
          <motion.img
            src={newsData[currentNews].img}
            alt=""
            className="w-full h-56 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />

          <div className="p-8">
            <span className="bg-[#72c6b3] text-white px-3 py-1 text-xs font-bold tracking-widest">
              {newsData[currentNews].tag}
            </span>

            <h3 className="text-xl font-bold mt-6">
              {newsData[currentNews].title}
            </h3>
          </div>
        </motion.div>
      </AnimatePresence>

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
                a: 'AI-powered retail solutions use machine learning, predictive analytics, and automation to enhance decision-making, optimize supply chains, personalize customer experiences, and increase operational efficiency. Sigma provides AI-driven solutions that help retailers modernize data platforms, improve demand forecasting, and maximize customer engagement.',
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
                q: 'What makes Sigma a top retail AI consulting firm?',
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

      {/* Small footer spacer */}
      <div className="bg-orange-600 h-20"></div>
      <Footer />
    </div>
  );
};

export default Retail;
