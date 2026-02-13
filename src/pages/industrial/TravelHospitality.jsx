import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';
import LogoSlider from '../../components/LogoSlider'; // Reusable scroll component
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
const TravelHospitality = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  // Award Logos
  const awardLogos = [
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  ];

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* --- Section 1: Hero Section --- */}
      <section className="relative h-[85vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
          className="absolute inset-0 -z-10"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000')`,
            }}
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          className="px-6 lg:px-24 max-w-7xl"
        >
          {/* Breadcrumbs */}
          <motion.nav
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-80 uppercase tracking-widest"
          >
            <span>Home</span> / <span>Industry</span> /{' '}
            <span className="text-orange-500">Travel and Hospitality</span>
          </motion.nav>

          {/* Main Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9 }}
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            Harnessing the Power of AI
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9 }}
            className="text-3xl lg:text-5xl font-light italic opacity-90 leading-snug"
          >
            For Travel and Hospitality to Enhance Experiences
          </motion.p>
        </motion.div>
      </section>

      {/* --- Section 2: Modernize Data & Personalize Journeys --- */}
      <section className="py-24 px-6 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            {/* Orange Background Shape */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-10 -left-5 w-64 h-32 bg-orange-600 -z-0 transform -skew-x-12 opacity-95"
            />

            <div className="relative z-10 flex justify-center items-center">
              {/* Main Image */}
              <motion.img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Travel & Hospitality Expert"
                className="w-full max-w-md rounded-sm shadow-2xl"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />

              {/* Rotating Orbital Circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-[2px] border-orange-500/30 rounded-full scale-110"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-[1px] border-orange-500/20 rounded-full scale-125"
              />

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 -left-10 bg-orange-600 p-4 text-white text-2xl shadow-lg"
              >
                🧳
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-10 right-0 bg-orange-600 p-4 text-white text-2xl shadow-lg"
              >
                🏨
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute bottom-5 right-1/4 bg-orange-600 p-4 text-white text-2xl shadow-lg"
              >
                🍽️
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            className="lg:w-1/2"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-8"
            >
              Modernize{' '}
              <span className="text-orange-600">
                data & personalize journeys
              </span>{' '}
              across travel and hospitality
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-gray-700 text-lg leading-relaxed"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 3: Logo Scroll (Awards) --- */}
      <LogoSlider
        title="Meet the undisputed"
        highlightText="travel & hospitality analytics"
        subtitle="Don't just take our word for it!"
        logos={awardLogos}
      />

      {/* --- Section 4: Testimonial Section --- */}
      <section className="py-28 px-12 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">
              What the bold say about us:
            </h3>
            <h2 className="text-4xl font-bold text-orange-600 mb-20">
              Clients. Partners. Analysts.
            </h2>
          </motion.div>

          {/* Testimonial Box */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative border-l border-gray-200 pl-10 py-6"
          >
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              viewport={{ once: true }}
              className="absolute -left-5 top-0 bg-orange-600 text-white p-2 rounded-sm"
            >
              <Star size={18} fill="white" />
            </motion.div>

            {/* Quote Text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-medium leading-snug text-gray-800 mb-14"
            >
              “Tredence has accelerators that can address different steps in the
              data flow journey. If you want to build data quality checks, do
              ingestions, create data models, enable semantic layers that can go
              into self-service consumption, they have built all these
              accelerators at every step in the journey. The combination of all
              these things is what made our journey faster.”
            </motion.p>

            {/* Author */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="flex flex-col md:flex-row md:items-center gap-8"
            >
              {/* Image */}
              <motion.img
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200"
                alt="Venkatesh Guruprasad"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />

              {/* Author Details */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-bold text-xl">Venkatesh Guruprasad</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">
                  Division Director, Head of Data Architecture & Governance
                </p>
                <div className="text-red-700 font-bold text-2xl flex items-center gap-2">
                  <span className="text-3xl italic">🕊️</span> BAYADA
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Note: Iske baad aap Retail page wale FAQs aur Contact Form sections copy-paste kar sakte hain */}
      {/* --- Section 5: Tredence AI (Peach Intro) --- */}
      <section className="bg-[#fff1ea] py-28 px-12 lg:px-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20"
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.h4
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-orange-600 text-3xl font-bold flex items-center gap-2 mb-6"
            >
              Tredence AI
              {/* Animated Sparkle */}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-2xl"
              >
                ✨
              </motion.span>
            </motion.h4>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-10"
            >
              Powering precision and progress in healthcare
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl text-gray-800 leading-snug"
            >
              Tredence helps leading healthcare organizations unify fragmented
              data to enable real-time intelligence. The 360-degree view enables
              improved member experience, and delivers cost-efficient outcomes.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.25 } },
            }}
            className="lg:w-1/2 text-gray-700 space-y-8 text-lg"
          >
            {[
              'Managing complex, fast-growing data is a foundational challenge that every healthcare enterprise faces. They need a scalable, secure, AI-ready data foundation. Tredence helps unify siloed data through cloud-native modernization, deploy domain-specific data models, and activate the power of AI for faster decisions.',

              'Our offerings span AI advisory, data engineering, and healthcare analytics to advance value-based care, elevate member and patient experiences, improve clinical outcomes, and optimize operational efficiency.',

              'At the center is ATOM.AI—an accelerator ecosystem with 150+ AI/ML solutions and 12+ GenAI agents that deliver insights in weeks. With deep domain expertise, Tredence turns AI potential into measurable impact for healthcare enterprises.',
            ].map((text, idx) => (
              <motion.p
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* --- Section 6: Healthcare Services Grid --- */}
      <section className="bg-[#fff1ea] pb-28 px-12 lg:px-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Tabs Animation */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-8 border-b border-orange-200 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="pb-4 text-orange-600 border-b-2 border-orange-600 font-bold flex items-center gap-2"
            >
              ⚙️ Services
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="pb-4 text-gray-400 font-bold flex items-center gap-2"
            >
              💡 Solutions
            </motion.button>
          </motion.div>

          {/* Heading Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="flex justify-between items-end mb-16"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold max-w-2xl leading-tight"
            >
              Modernizing Healthcare with Connected Data and AI
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, x: 60 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-gray-600 max-w-sm text-sm hidden lg:block"
            >
              Transform care delivery using intelligent, interoperable and
              AI-ready healthcare platforms.
            </motion.p>
          </motion.div>

          {/* Grid Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              {
                title: 'Healthcare Data Interoperability',
                image: 'https://picsum.photos/seed/health1/800/600',
              },
              {
                title: 'AI-Driven Data Governance',
                image: 'https://picsum.photos/seed/health2/800/600',
              },
              {
                title: 'Unified Clinical Data Models',
                image: 'https://picsum.photos/seed/health3/800/600',
              },
              {
                title: 'Advanced Payer & Provider Analytics',
                image: 'https://picsum.photos/seed/health4/800/600',
              },
              {
                title: 'Generative AI for Healthcare',
                image: 'https://picsum.photos/seed/health5/800/600',
              },
              {
                title: 'Provider Analytics AI for Healthcare',
                image: 'https://picsum.photos/seed/health6/800/600',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 80, rotate: -3 },
                  visible: { opacity: 1, y: 0, rotate: 0 },
                }}
                transition={{ duration: 0.7 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group cursor-pointer"
              >
                {/* Image Section */}
                <div className="bg-orange-600 h-48 flex items-center justify-center overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="bg-white p-8 h-40 flex flex-col justify-between border border-t-0 border-gray-100 shadow-sm group-hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* --- Section 7: Stats Grid (Why Healthcare choose us) --- */}
      <section className="py-28 px-12 lg:px-24 bg-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Heading Animation */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-20"
          >
            Why do leading <span className="text-orange-600">Healthcare</span>{' '}
            organizations choose{' '}
            <span className="text-orange-600">Tredence</span>
          </motion.h2>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200"
          >
            {[
              {
                val: '4,200+',
                desc: 'domain, data, and technology experts',
                icon: '🧬',
              },
              {
                val: '150+',
                desc: 'KPIs the unified healthcare domain data model',
                icon: '📊',
              },
              {
                val: '20+',
                desc: 'solution accelerators optimizing the care lifecycle',
                icon: '⚡',
              },
              {
                val: 'Strategic alliances',
                desc: 'co-innovating with Hyperscalers and Data & AI ISVs for enterprise-grade transformations',
                icon: '🤝',
              },
              {
                val: '94% NPS',
                desc: 'with extensive customer recommendations across multiple engagements',
                icon: '👍',
              },
              {
                val: '1000+',
                desc: 'successful healthcare transformation programs delivered globally',
                icon: '🏥',
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0px 15px 40px rgba(255, 102, 0, 0.15)',
                }}
                className="bg-white p-12 flex flex-col items-start gap-5 transition-all"
              >
                {/* Icon Pop */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                  viewport={{ once: true }}
                  className="text-4xl"
                >
                  {stat.icon}
                </motion.span>

                {/* Value */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-orange-600"
                >
                  {stat.val}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-600 text-sm font-medium leading-relaxed uppercase tracking-tight">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* --- Section 8: Partnering Section --- */}
      <section className="py-28 px-12 lg:px-24 bg-white border-t border-gray-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          {/* Heading */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Partnering with the best
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-20"
          >
            We co-build and co-innovate with the leading cloud and AI leaders
          </motion.p>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left"
          >
            {[
              {
                name: 'Databricks',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
                desc: 'Accelerating enterprise data modernization with unified lakehouse architecture.',
                badge:
                  'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg',
              },
              {
                name: 'Google Cloud',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
                desc: 'Driving AI-led digital transformation at enterprise scale.',
                badge:
                  'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
              },
              {
                name: 'Snowflake',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
                desc: 'Delivering modern data platforms with scalable cloud-native architecture.',
                badge:
                  'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
              },
              {
                name: 'Microsoft Azure',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
                desc: 'Driving scalable decision intelligence with cloud and AI innovation.',
                badge:
                  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="space-y-6"
              >
                {/* Partner Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="h-12 flex items-center cursor-pointer grayscale hover:grayscale-0 transition-all"
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-full object-contain"
                  />
                </motion.div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {p.desc}
                </p>

                {/* Badge */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="h-24 w-24 bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm"
                >
                  <img
                    src={p.badge}
                    alt={`${p.name} badge`}
                    className="max-h-12 object-contain"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* --- Section 9: Impact Stories (Secret Weapon) --- */}
      <section className="py-28 px-12 lg:px-24 bg-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Heading */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16"
          >
            Tredence is the{' '}
            <span className="text-orange-600">secret weapon</span> powering last
            mile impact stories
          </motion.h2>

          <div className="flex flex-col lg:flex-row border border-gray-200 shadow-sm overflow-hidden">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2 p-12 bg-white"
            >
              <h3 className="text-2xl font-bold mb-6">
                Harmonizing member data for a health and home care company
              </h3>

              <div className="text-sm text-gray-600 space-y-4 mb-10 leading-relaxed">
                <p>
                  A large senior-focused health and home care company sought to
                  create a 360-degree view of member information...
                </p>
                <p>
                  Tredence developed an enterprise member360 data hub with data
                  models, key performance indicators, and AI and ML risk
                  models...
                </p>
              </div>

              {/* Metrics with Stagger Animation */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
                className="space-y-3"
              >
                {[
                  '33% reduced emergency room visits',
                  '40% improvement in the medical loss ratio',
                  '50% improved member engagement',
                  '95% enhanced patient satisfaction',
                ].map((txt, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -40 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      x: 6,
                      boxShadow: '0px 10px 25px rgba(255,102,0,0.15)',
                    }}
                    className="bg-[#fff1ea] p-3 text-sm font-bold border-l-4 border-orange-500 transition-all"
                  >
                    {txt}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2 overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover"
                alt="Care story"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- Section 10: Featured Insights --- */}
      <section className="py-28 px-12 lg:px-24 bg-gray-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Heading */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-10"
          >
            Featured Insights
          </motion.h2>

          {/* Tabs with Stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex gap-4 mb-16 flex-wrap"
          >
            {[
              'LATEST BLOGS',
              'CASE STUDIES',
              'E-BOOKS',
              'THOUGHT LEADERSHIP',
              'VIDEOS',
            ].map((tab, i) => (
              <motion.button
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`px-6 py-2 text-xs font-bold tracking-widest whitespace-nowrap transition-all ${
                  i === 0
                    ? 'bg-[#72c6b3] text-white shadow-md'
                    : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              {
                title:
                  'Enhancing Healthcare Supply Chain Data Quality and Visibility',
                img: 'https://picsum.photos/seed/healthblog1/600/400',
              },
              {
                title:
                  'How AI Diagnostics is Transforming Clinical Decision Making',
                img: 'https://picsum.photos/seed/healthblog2/600/400',
              },
              {
                title:
                  'Improving Patient Engagement Through Advanced Analytics',
                img: 'https://picsum.photos/seed/healthblog3/600/400',
              },
            ].map((blog, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5 }}
                className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={blog.img}
                    className="w-full h-52 object-cover"
                    alt={blog.title}
                  />
                </div>

                <div className="p-8">
                  <span className="bg-[#72c6b3] text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                    BLOG
                  </span>

                  <h3 className="text-lg font-bold mt-5 min-h-[70px] group-hover:text-orange-600 transition-colors leading-snug">
                    {blog.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* --- Section 11: Healthcare FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold">FAQs</h2>
          </div>
          <div className="lg:w-3/4 space-y-4">
            {[
              {
                q: 'What are Healthcare Analytics Services and why are they important?',
                a: 'Healthcare Analytics Services help payer and provider firms unlock insights from clinical, operational, and financial data. Tredence delivers AI-powered solutions such as unified health data platforms, clinical risk prediction models, and personalized care engagement to improve care quality, reduce costs, and accelerate innovation.',
              },
              {
                q: 'How do Healthcare Analytics Solutions improve patient outcomes and operational efficiency?',
                a: 'By identifying high-risk patients early and optimizing resource allocation...',
              },
              {
                q: 'How is Generative AI transforming Healthcare?',
                a: 'GenAI is helping in clinical documentation, medical research, and patient communication...',
              },
              {
                q: 'What makes Tredence a trusted Healthcare AI partner?',
                a: 'Our deep domain expertise and proprietary accelerators like ATOM.AI...',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-orange-600"
                >
                  <span className="text-lg font-bold pr-8">{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp size={20} className="text-orange-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="pb-8 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TravelHospitality;
