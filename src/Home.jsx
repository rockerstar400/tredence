import React from 'react';
import Navbar from './components/Header'; // Path check kar lena agar folder alag ho
import Hero from './components/Hero';
import Footer from './components/Footer';
import LogoSlider from '././components/LogoSlider';
import { motion } from 'framer-motion';
import ctoImage from './assets/cto.png';

// Jo pehle banaya tha

// Awards/Logo Slider ke liye data

const Home = () => {
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
    <div className="relative font-sans antialiased">
      {/* Header and Hero */}
      <Navbar />
      <Hero />

      {/* Latest & Leading (Awards Section) */}
      <section className="py-24 bg-white px-12 lg:px-24 overflow-hidden">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-16 text-gray-900"
        >
          Latest & leading partner
        </motion.h2>

        {/* Stagger Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
              bg: 'bg-blue-50',
              text: 'Sigma Named 2025 Microsoft Data & Analytics Platform Partner of the Year',
            },
            {
              img: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
              bg: 'bg-red-50',
              text: 'Sigma Awarded 2025 Databricks Growth Partner of the Year',
            },
            {
              img: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
              bg: 'bg-blue-50',
              text: 'Sigma Named Snowflake Partner of the Year for Retail & CPG',
            },
            {
              img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
              bg: 'bg-yellow-50',
              text: 'Sigma Wins 2025 Google Cloud Industry Solutions Partner of the Year',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="border border-gray-100 shadow-md p-8 cursor-pointer flex flex-col justify-between rounded-xl bg-white"
            >
              <div>
                <div
                  className={`h-32 ${item.bg} mb-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 rounded-lg`}
                >
                  <motion.img
                    src={item.img}
                    alt=""
                    className="h-16 object-contain"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <p className="font-bold text-lg leading-snug">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* What Makes Us Unique Section (From Image 3) */}
      <section className="py-28 bg-gray-50 px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-20 overflow-hidden">
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
            alt="Unique"
            className="rounded-br-[100px] shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Powering last mile with industry-specific data science solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-12 text-lg"
          >
            At Sigma, we bridge the gap between insights delivery and value
            realization by enabling last-mile adoption of data science.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 italic"
          >
            What makes us unique
          </motion.h3>

          {/* UNIQUE POINTS STAGGER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { icon: '🎯', text: 'Speed to action through accelerators' },
              { icon: '⚙️', text: 'Speed to value through industry expertise' },
              { icon: '🤝', text: 'Speed to scale through AI partnerships' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  viewport={{ once: true }}
                  className="text-orange-600 mb-4 text-3xl"
                >
                  {item.icon}
                </motion.div>

                <p className="font-semibold text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* --- Section 1: Thought Leadership --- */}
      <section className="py-24 bg-white px-12 lg:px-24 overflow-hidden">
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold max-w-2xl leading-tight">
            Decoding the future of AI through strategic perspectives
          </h2>
        </motion.div>

        {/* Cards Grid with Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {[
            {
              img: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
              title:
                'Dominate with Data: Migrate and Modernize your CPG Data to Unlock New Capabilities',
            },
            {
              img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000',
              title:
                'Dynamic Pricing: How Is AI Making Retail Pricing Smarter?',
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden mb-6 rounded-xl">
                <motion.img
                  src={card.img}
                  alt=""
                  className="w-full h-80 object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-orange-600 font-bold text-sm uppercase"
              >
                Point of View
              </motion.span>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mt-2 text-gray-800 leading-snug group-hover:text-orange-600 transition-colors duration-300"
              >
                {card.title}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <LogoSlider
        title="Meet the"
        highlightText="undisputed healthcare analytics"
        subtitle="Don't just take our word for it!"
        logos={awardLogos}
      />
      {/* ================================================= */}
      {/* ========== CHIEF TECHNOLOGY OFFICER SECTION ===== */}
      {/* ================================================= */}

      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* CTO Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <img
              src={ctoImage}
              alt="Chief Technology Officer"
              className="rounded-3xl shadow-2xl w-full h-200 object-cover"
            />

            {/* Subtle Glow Effect */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
          </motion.div>

          {/* CTO Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl font-bold text-gray-900">
                Chief Technology Officer
              </h2>
              <p className="text-orange-500 font-semibold mt-3 text-lg">
                Driving Innovation. Scaling Intelligence.
              </p>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              At Sigma Data System, our Chief Technology Officer leads the
              technological vision and innovation strategy that powers
              enterprise transformation. With deep expertise in AI, cloud
              architecture, and distributed systems, our CTO ensures that every
              solution we deliver is scalable, secure, and future-ready.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              By combining advanced engineering practices with business insight,
              the CTO drives the evolution of Sigma’s technology stack—enabling
              clients to unlock the full value of data, automation, and
              intelligent systems.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {[
                'Architecting scalable cloud-native platforms',
                'Leading AI & Machine Learning innovation',
                'Driving digital transformation strategies',
                'Building high-performance engineering teams',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <p className="text-gray-800 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500"
            >
              <p className="text-gray-700 italic text-lg">
                “Technology should not just support business strategy — it
                should define it. At Sigma, we engineer certainty in an
                uncertain world.”
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Sigma Studio (Airplane Section) --- */}
      <section className="relative min-h-[650px] flex items-center text-white py-24 px-12 lg:px-24 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2000"
            alt="Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </motion.div>

        <div className="relative z-10 w-full">
          {/* Heading Stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-lg font-bold mb-4 block tracking-wider"
            >
              SIGMA STUDIO
            </motion.span>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight"
            >
              Scaling High-Impact AI Solutions at Unmatched Speed
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-xl mb-14 max-w-2xl opacity-90"
            >
              Envision new possibilities and extraordinary paths to value using
              AI-powered data science solutions and accelerators.
            </motion.p>
          </motion.div>

          {/* Feature Grid with Stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-t border-white/20 pt-10"
          >
            {[
              'AI deep tech & industry experts',
              'Fully-stocked workbench',
              'High-voltage collaboration',
              'Continuous learning paradigm',
              'Extensive customization',
              'Lightning fast time to value',
              'Easy and quick iterations',
              'Design thinking approach',
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ x: 8 }}
                className="border-l-2 border-white pl-4"
              >
                <p className="font-semibold text-sm lg:text-base leading-tight">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Section 3: Elite Ecosystem Partnerships --- */}
      <section className="py-28 bg-white text-center px-12 overflow-hidden">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-20 text-gray-900"
        >
          Unlocking global scale through strategic technology alliances
        </motion.h2>

        {/* Logos with Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-wrap justify-center items-center gap-16 lg:gap-24 mb-20"
        >
          {[
            {
              type: 'img',
              src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
            },
            {
              type: 'text',
              value: '/LiveRamp',
            },
            {
              type: 'img',
              src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.1, y: -6 }}
              className="opacity-70 hover:opacity-100 transition-all duration-300"
            >
              {item.type === 'img' ? (
                <img
                  src={item.src}
                  alt=""
                  className="h-12 lg:h-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <div className="text-3xl font-bold text-gray-400">
                  {item.value}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- Section 4: Join Our Team (Overlapping Style) --- */}
      <section className="py-24 px-12 lg:px-24 bg-white overflow-hidden">
        <div className="relative h-[650px] w-full">
          {/* Animated Background */}
          <motion.img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000"
            alt="Team"
            className="w-full h-full object-cover rounded-sm"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />

          {/* Animated Orange Box */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="absolute top-1/2 -translate-y-1/2 left-0 lg:left-12 bg-orange-600 p-12 lg:p-16 text-white max-w-2xl shadow-2xl rounded-sm"
          >
            {/* Stagger Text Animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-5xl font-bold mb-6"
              >
                Join our team
              </motion.h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-lg mb-10 leading-relaxed opacity-90"
              >
                Celebrating diverse perspectives and innovative ideas, we're
                always looking for fresh new talent to work on the most pressing
                data science challenges today. In turn, you get to unlock a
                world of learning and growth opportunities at every step.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 5: Recognized by Industry Leaders (Awards) --- */}
      <section className="py-28 bg-gray-50 px-12 lg:px-24 overflow-hidden">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-20 max-w-4xl mx-auto leading-tight"
        >
          Industry-leading excellence, recognized globally
        </motion.h2>

        {/* Stagger Grid */}
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
              content: (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
                  alt=""
                  className="h-32 object-contain"
                />
              ),
              text: 'Sigma is Certified as a Great Place to Work® by GPTW India',
            },
            {
              content: (
                <div className="bg-blue-600 text-white p-6 font-bold text-xl uppercase tracking-tighter">
                  Business Insider <br />
                  <span className="text-sm opacity-80">
                    Top Consulting Firm
                  </span>
                </div>
              ),
              text: 'Recognized as a Top Management Consulting Firm in the U.S. by Business Insider.',
            },
            {
              content: (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt=""
                  className="w-32"
                />
              ),
              text: 'Sigma Named 2025 Microsoft Data & Analytics Platform Partner of the Year',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -10 }}
              className="bg-white p-12 flex flex-col items-center text-center shadow-md border border-gray-100 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-48 flex items-center justify-center mb-10"
              >
                {item.content}
              </motion.div>

              <div className="w-full h-[1px] bg-gray-200 mb-8"></div>

              <p className="text-gray-600 font-medium leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- Recognized by Industry Leaders Section --- */}
      <section className="py-28 bg-[#f8f9fa] px-12 lg:px-24 overflow-hidden">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-20 max-w-4xl mx-auto leading-tight text-gray-900"
        >
          Recognized by industry leaders for our pathfinding
        </motion.h2>

        {/* Cards with Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[1, 2, 3].map((_, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -12 }}
              className="bg-white p-10 flex flex-col items-center text-center shadow-md border border-gray-100 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              {/* Animated Badge Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="h-56 w-full flex items-center justify-center mb-10"
              >
                {idx === 0 && (
                  <div className="w-full border border-red-200 rounded-sm overflow-hidden flex flex-col">
                    <div className="bg-white p-6 text-left flex items-start gap-4">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                        alt=""
                        className="w-10"
                      />
                      <div>
                        <p className="text-yellow-500 font-bold text-sm">
                          Great Place To Work
                        </p>
                        <p className="text-yellow-500 text-xs font-semibold">
                          Certified Organization
                        </p>
                      </div>
                    </div>
                    <div className="bg-yellow-400 p-6 text-white text-left">
                      <p className="font-bold text-sm">Certified</p>
                      <p className="text-[10px] opacity-90">
                        GPTW India Recognition
                      </p>
                    </div>
                  </div>
                )}

                {idx === 1 && (
                  <div className="w-full border border-blue-200 rounded-sm overflow-hidden flex flex-col">
                    <div className="bg-white p-6 text-left flex items-start gap-4">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt=""
                        className="w-14"
                      />
                      <div>
                        <p className="text-red-600 font-bold text-sm">
                          Business Insider
                        </p>
                        <p className="text-red-800 text-xs font-semibold">
                          Top Consulting Firm
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-600 p-6 text-white text-left">
                      <p className="font-bold text-sm">Recognized</p>
                      <p className="text-[10px] opacity-90">
                        U.S. Management Consulting Leader
                      </p>
                    </div>
                  </div>
                )}

                {idx === 2 && (
                  <div className="w-full border border-blue-200 rounded-sm overflow-hidden flex flex-col">
                    <div className="bg-white p-6 text-left flex items-start gap-4">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                        alt=""
                        className="w-8"
                      />
                      <div>
                        <p className="text-blue-600 font-bold text-sm">
                          Microsoft
                        </p>
                        <p className="text-blue-800 text-xs font-semibold">
                          2025 Partner of the Year
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#0078d4] p-6 text-white text-left">
                      <p className="font-bold text-sm">Winner</p>
                      <p className="text-[10px] opacity-90">
                        Data and Analytics Platform Award
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>

              <div className="w-full h-[1px] bg-gray-200 mb-8"></div>

              <p className="text-gray-600 font-medium leading-relaxed px-4">
                {idx === 0 &&
                  'Sigma is Certified as a Great Place to Work® by GPTW India'}
                {idx === 1 &&
                  'Recognized as a Top Management Consulting Firm in the U.S. by Business Insider.'}
                {idx === 2 &&
                  'Sigma Named 2025 Microsoft Data & Analytics Platform Partner of the Year'}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
