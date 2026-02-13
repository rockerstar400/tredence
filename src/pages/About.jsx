import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      {/* ================================================= */}
      {/* ================= HERO SECTION ================== */}
      {/* ================================================= */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
            decoding="async"
            style={{ willChange: 'opacity, transform' }}
          />
        </div>

        {/* Animated Gradient Overlay */}
        <motion.div
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-orange-600/40 to-black/70"
        />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center px-6 max-w-5xl"
          style={{ willChange: 'transform, opacity' }}
        >
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Powering The Future With{' '}
            <span className="text-orange-500">Sigma Data System</span>
          </h1>

          <p className="text-xl text-gray-200 leading-relaxed">
            We transform data into intelligence, intelligence into strategy, and
            strategy into measurable business impact.
          </p>
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* ================= STORY SECTION ================= */}
      {/* ================================================= */}

      <section className="py-32 bg-white px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="Team Working"
              className="rounded-3xl shadow-2xl"
              loading="eager"
              decoding="async"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-5xl font-bold text-gray-900">Our Story</h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Sigma Data System was founded with a bold vision — to help
              enterprises navigate uncertainty with clarity and confidence. From
              cloud modernization to enterprise AI systems, we design scalable
              platforms that unlock true business intelligence.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Over the years, we have built a culture rooted in ownership,
              experimentation, and relentless innovation. Our journey has been
              shaped by solving complex challenges across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ================= VISION SECTION =============== */}
      {/* ================================================= */}

      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-5xl font-bold text-gray-900 mb-16"
            style={{ willChange: 'transform, opacity' }}
          >
            Our Vision & Mission
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Vision Card */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.25 }}
              className="bg-white p-12 rounded-3xl shadow-xl"
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="text-3xl font-bold text-orange-500 mb-6">
                Our Vision
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed">
                To become a globally trusted digital transformation partner,
                enabling organizations to make data-driven decisions at speed
                and scale.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              viewport={{ once: true, amount: 0.25 }}
              className="bg-white p-12 rounded-3xl shadow-xl"
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="text-3xl font-bold text-orange-500 mb-6">
                Our Mission
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed">
                Delivering intelligent data platforms, AI solutions, and digital
                engineering excellence that empower enterprises to innovate,
                compete, and grow confidently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ================= IMPACT STATS ================== */}
      {/* ================================================= */}

      <section className="py-32 bg-black text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-5xl font-bold mb-20"
            style={{ willChange: 'transform, opacity' }}
          >
            Our Global Impact
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { number: '150+', label: 'Enterprise Clients' },
              { number: '25+', label: 'Countries Served' },
              { number: '500+', label: 'Technology Experts' },
              { number: '10+', label: 'Years of Innovation' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.14 }}
                viewport={{ once: true, amount: 0.25 }}
                className="bg-white/10 p-10 rounded-2xl"
                style={{ willChange: 'transform, opacity' }}
              >
                <h3 className="text-4xl font-bold text-orange-500">
                  {item.number}
                </h3>
                <p className="mt-4 text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ================= LEADERSHIP ==================== */}
      {/* ================================================= */}

      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-5xl font-bold text-gray-900"
            style={{ willChange: 'transform, opacity' }}
          >
            Our Leadership
          </motion.h2>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Our leadership team brings decades of experience in data science,
            enterprise architecture, AI systems, and global transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            {
              name: 'Arjun Mehta',
              role: 'Chief Executive Officer',
              img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
            },
            {
              name: 'Neha Kapoor',
              role: 'Chief Technology Officer',
              img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
            },
            {
              name: 'David Smith',
              role: 'VP – Global Strategy',
              img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
            },
          ].map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: i * 0.14 }}
              whileHover={{ y: -15 }}
              viewport={{ once: true, amount: 0.25 }}
              className="bg-gray-50 rounded-3xl overflow-hidden shadow-xl"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={leader.img}
                  alt={leader.name}
                  className="h-80 w-full object-cover"
                  loading="eager"
                  decoding="async"
                  style={{ willChange: 'transform' }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-orange-500 mt-2 font-medium">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/* ================= CULTURE SECTION =============== */}
      {/* ================================================= */}

      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Our Culture
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Sigma, innovation is not a department — it is our mindset. We
              foster collaboration, experimentation, and continuous learning.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our teams work across global delivery centers, blending deep
              technical expertise with business acumen.
            </p>
          </motion.div>

          <motion.img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Culture"
            className="rounded-3xl shadow-2xl"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            loading="eager"
            decoding="async"
            style={{ willChange: 'transform, opacity' }}
          />
        </div>
      </section>

      {/* ================================================= */}
      {/* ================= IMAGE GALLERY ================= */}
      {/* ================================================= */}

      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-gray-900"
          >
            Life at Sigma
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            'https://images.unsplash.com/photo-1497366216548-37526070297c',
            'https://images.unsplash.com/photo-1556761175-4b46a572b786',
            'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
            'https://images.unsplash.com/photo-1531482615713-2afd69097998',
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
            'https://images.unsplash.com/photo-1552664730-d307ca884978',
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden rounded-3xl shadow-xl"
              style={{ willChange: 'transform, opacity' }}
            >
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.45 }}
                src={img}
                alt="Gallery"
                className="h-64 w-full object-cover"
                loading="eager"
                decoding="async"
                style={{ willChange: 'transform' }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/* ================= TIMELINE ====================== */}
      {/* ================================================= */}

      <section className="py-32 bg-gray-100 text-black px-6">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold"
          >
            Our Journey
          </motion.h2>
        </div>

        <div className="space-y-20 max-w-4xl mx-auto ">
          {[
            {
              year: '2014',
              text: 'Founded with a vision for data-driven excellence.',
            },
            {
              year: '2017',
              text: 'Expanded globally across North America and Europe.',
            },
            { year: '2020', text: 'Launched AI & Machine Learning practice.' },
            {
              year: '2023',
              text: 'Crossed 150+ enterprise clients worldwide.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.25 }}
              className="flex items-center justify-between"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="w-1/3 text-3xl font-bold text-orange-500">
                {item.year}
              </div>
              <div className="w-2/3 text-Black text-lg">{item.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Placeholder (Will stay at end after Part 3) */}
      <Footer />
    </>
  );
};

export default About;
