import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Star,
  Play,
  Quote,
} from 'lucide-react';
import Footer from '../../components/Footer';

const CustomerVoice = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [npsCounter, setNpsCounter] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  // NPS Counter animation
  useEffect(() => {
    const target = 94;
    const duration = 2000;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setNpsCounter(Math.floor(target * progress));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  }, []);

  return (
    <div className="font-sans antialiased">
      {/* --- Section 1: Hero Banner --- */}
      <motion.section
        className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </motion.div>

        {/* Subtle Floating Glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Content */}
        <motion.div
          className="px-6 lg:px-24 max-w-4xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.nav
            className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-90"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <span>Home</span> / <span>Insights</span> /{' '}
            <span className="text-orange-500">Customer Voice</span>
          </motion.nav>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Customer Stories
          </motion.h1>

          <motion.p
            className="text-2xl lg:text-4xl font-light italic mb-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Real Impact, Real Results, Real Customer Voices
          </motion.p>

          <motion.p
            className="text-lg text-gray-100 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Hear directly from our customers how Sigma partnerships have
            transformed their businesses, solved their biggest challenges, and
            accelerated their digital evolution.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* --- Section 2: NPS Highlight Section --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gradient-to-r from-orange-50 to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* LEFT SIDE */}
            <motion.div
              className="lg:w-1/2 text-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <div className="mb-8">
                <motion.div
                  className="text-8xl font-bold text-orange-600"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
                >
                  {npsCounter}
                  <span className="text-6xl">%</span>
                </motion.div>

                <motion.p
                  className="text-2xl font-bold text-gray-900 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Customer Satisfaction Score
                </motion.p>
              </div>

              <motion.p
                className="text-gray-600 text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Our Net Promoter Score reflects the depth of customer
                satisfaction and advocacy. This isn't just a number—it's a
                testament to the transformative impact we deliver and the
                trusted partnerships we build.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {[
                  '94% customers recommend us',
                  '340% average ROI delivered',
                  '8.6/10 satisfaction rating',
                ].map((text, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center justify-center gap-3 text-gray-700"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Star size={20} className="text-orange-600" />
                    </motion.div>
                    <span>{text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE SIDE */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                alt="Customer Satisfaction"
                className="rounded-xl shadow-2xl w-full"
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- Section 3: Featured Testimonial Carousel --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Subtle Background Glow */}
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-100 rounded-full blur-3xl opacity-30 -z-0"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            What Our Customers Say
          </motion.h2>

          <div className="relative border-l-4 border-orange-600 pl-12 py-8 mb-12">
            {/* Quote Icon */}
            <motion.div
              className="absolute -left-8 top-0 bg-orange-600 text-white p-4 rounded-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              viewport={{ once: true }}
            >
              <Quote size={28} />
            </motion.div>

            {/* Testimonials */}
            <div className="space-y-12 relative min-h-[300px]">
              {[
                {
                  quote:
                    "Sigma didn't just implement a data warehouse—they transformed our entire approach to decision-making. Within 6 months, we went from reactive to predictive across every business unit. The ROI has been extraordinary, but the real value is in the competitive advantage we've gained.",
                  author: 'Sarah Chen',
                  title: 'Chief Data Officer',
                  company: 'Global Financial Services Firm',
                  image:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
                },
                {
                  quote:
                    "What impressed us most wasn't just Sigma's technical expertise—it was their deep understanding of healthcare. They spoke our language, understood our compliance requirements, and delivered a solution that clinicians actually want to use. Patient outcomes have visibly improved.",
                  author: 'Dr. Michael Patel',
                  title: 'Chief Medical Officer',
                  company: 'Multi-Hospital Healthcare Network',
                  image:
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
                },
                {
                  quote:
                    "Our inventory optimization savings alone have paid for the engagement multiple times over. But beyond the numbers, Sigma helped us build internal capabilities so we're not dependent on consultants. That's true partnership.",
                  author: 'James Wellington',
                  title: 'VP Supply Chain',
                  company: 'International Retail Corporation',
                  image:
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
                },
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{
                    opacity: selectedTestimonial === idx ? 1 : 0,
                    x: selectedTestimonial === idx ? 0 : -80,
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{
                    pointerEvents:
                      selectedTestimonial === idx ? 'auto' : 'none',
                    position:
                      selectedTestimonial === idx ? 'relative' : 'absolute',
                    width: '100%',
                  }}
                >
                  <motion.blockquote
                    className="text-2xl lg:text-3xl font-medium text-gray-800 mb-10 italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{testimonial.quote}"
                  </motion.blockquote>

                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-24 h-24 rounded-full object-cover"
                      whileHover={{ scale: 1.1 }}
                    />

                    <div>
                      <p className="font-bold text-xl text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-orange-600 font-bold mb-1">
                        {testimonial.title}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {testimonial.company}
                      </p>

                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <motion.div
                            key={star}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: star * 0.05 }}
                          >
                            <Star
                              size={16}
                              className="text-orange-600"
                              fill="currentColor"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6 mt-12">
              <motion.button
                onClick={() =>
                  setSelectedTestimonial(
                    selectedTestimonial === 0 ? 2 : selectedTestimonial - 1
                  )
                }
                className="p-3 border border-gray-300 rounded-lg hover:border-orange-600 hover:bg-orange-50 transition-colors"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={20} />
              </motion.button>

              <div className="flex gap-3">
                {[0, 1, 2].map((i) => (
                  <motion.button
                    key={i}
                    onClick={() => setSelectedTestimonial(i)}
                    className={`h-4 rounded-full transition-all ${
                      selectedTestimonial === i
                        ? 'bg-orange-600 w-8'
                        : 'bg-gray-300 w-4'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={() =>
                  setSelectedTestimonial(
                    selectedTestimonial === 2 ? 0 : selectedTestimonial + 1
                  )
                }
                className="p-3 border border-gray-300 rounded-lg hover:border-orange-600 hover:bg-orange-50 transition-colors"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={20} />
              </motion.button>

              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- Section 4: Video Testimonials Grid --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Video <span className="text-orange-600">Testimonials</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Hear directly from customer executives about their transformation
            journey with Sigma.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              {
                title:
                  'Accelerating Digital Transformation at a Fortune 500 Bank',
                customer: 'Global Bank Corporate',
                duration: '5:32',
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
              },
              {
                title:
                  'Modernizing Patient Experience Through Data Integration',
                customer: 'Large Healthcare Network',
                duration: '4:18',
                image:
                  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
              },
              {
                title: 'Winning Market Share with AI-Driven Retail Analytics',
                customer: 'Major Retailer',
                duration: '6:15',
                image:
                  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600',
              },
            ].map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Thumbnail */}
                <motion.img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40"
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                  transition={{ duration: 0.4 }}
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </motion.button>
                </div>

                {/* Duration */}
                <motion.div
                  className="absolute top-4 right-4 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {video.duration}
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                  <h3 className="font-bold mb-2 group-hover:text-orange-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-300">{video.customer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 5: Customer Highlights Grid --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Why Customers{' '}
            <span className="text-orange-600">Trust Sigma</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              {
                title: 'End-to-End Transformation',
                description:
                  'From strategy through design, build, and scale—we handle every phase with accountability and expertise.',
                icon: '🎯',
              },
              {
                title: 'Industry Domain Expertise',
                description:
                  'Deep knowledge of banking, healthcare, retail, and other sectors ensures relevance and compliance.',
                icon: '🏆',
              },
              {
                title: 'Proven Accelerators',
                description:
                  '450+ successful projects have yielded battle-tested frameworks that compress timelines by 40-60%.',
                icon: '⚡',
              },
              {
                title: 'Partnership Philosophy',
                description:
                  'We embed with your teams, transfer knowledge, and build sustainable internal capabilities.',
                icon: '🤝',
              },
              {
                title: 'Measurable ROI',
                description:
                  '340% average ROI delivered—we align our success with your business outcomes, not activity.',
                icon: '📈',
              },
              {
                title: 'Innovation at Scale',
                description:
                  'Access to 150+ AI/ML accelerators and 12+ GenAI agents that turn strategy into impact quickly.',
                icon: '🚀',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all group"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ rotate: 5, scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 6: Success Stories Spotlight --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-orange-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Transformation <span className="text-orange-600">Stories</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              {
                title: 'From Siloed Data to Real-Time Intelligence',
                company: 'Global Insurance Provider',
                challenge:
                  'Data spread across 40+ fragmented systems with no unified view for decision-making.',
                solution:
                  'Deployed a unified data platform with AI-driven analytics and real-time dashboards.',
                results: [
                  '$18M annual cost reduction through optimized claims processing',
                  '45% faster underwriting with AI risk models',
                  'Customer lifetime value increased by 32%',
                ],
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
              },
              {
                title: 'Converting Data Insights into Market Leadership',
                company: 'Multi-National CPG Corporation',
                challenge:
                  'Unable to compete with agile competitors due to slow demand forecasting and inventory management.',
                solution:
                  'Implemented AI-powered demand planning and supply chain optimization platform.',
                results: [
                  '$22M reduction in excess inventory',
                  '94% forecast accuracy (up from 67%)',
                  '15 days reduction in time-to-market',
                ],
                image:
                  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600',
              },
            ].map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <motion.img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="p-10">
                  <p className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-3">
                    {story.company}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {story.title}
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="text-sm font-bold text-gray-600 uppercase mb-2">
                        Challenge
                      </p>
                      <p className="text-gray-700">{story.challenge}</p>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-600 uppercase mb-2">
                        Solution
                      </p>
                      <p className="text-gray-700">{story.solution}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-600 uppercase mb-4">
                      Results
                    </p>

                    <div className="space-y-3">
                      {story.results.map((result, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg"
                        >
                          <span className="text-orange-600 font-bold flex-shrink-0 mt-0.5">
                            ✓
                          </span>
                          <p className="text-sm text-gray-800">{result}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <motion.button
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all text-lg"
            >
              See All Customer Stories <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* --- Section 7: FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold">
              Customer <span className="text-orange-600">FAQs</span>
            </h2>
          </div>
          <div className="lg:w-3/4 space-y-4">
            {[
              {
                q: 'How long does a typical transformation take?',
                a: 'Most transformations span 6-18 months depending on scope and complexity. We deliver quick wins in the first 90 days to demonstrate value while building toward sustained business impact.',
              },
              {
                q: 'Will you help us build internal AI capabilities?',
                a: 'Absolutely—knowledge transfer and capability building are core to our engagement model. We embed our team with yours, document our methodologies, and transition work to your team as it matures.',
              },
              {
                q: "What if we don't have AI expertise internally?",
                a: "That's exactly the problem we solve. We provide end-to-end support from strategy through scale, and we train your teams along the way. Many organizations start with zero AI expertise and become leaders in their category.",
              },
              {
                q: 'Can you share customer references?',
                a: "We have extensive reference customers across industries. We'll connect you with relevant peers who can share their experiences during the sales process.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-orange-600 transition-colors"
                >
                  <span className="text-lg font-bold pr-8">{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp
                      size={20}
                      className="text-orange-500 flex-shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="text-gray-400 flex-shrink-0"
                    />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="pb-8 text-gray-600 text-sm leading-relaxed animate-fade-in border-t border-gray-200 pt-6">
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

export default CustomerVoice;
