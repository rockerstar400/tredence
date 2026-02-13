import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Calendar,
  User,
  Share2,
} from 'lucide-react';
import Footer from '../../components/Footer';

const ThoughtLeadership = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // === Section 3 Animation Variants ===
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const articleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="font-sans antialiased">
      {/* --- Section 1: Hero Banner with Parallax --- */}
      {/* --- Section 1: Hero Banner with Premium Animation --- */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
        </motion.div>

        {/* Floating subtle glow effect */}
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
          {/* Breadcrumb */}
          <motion.nav
            className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-90"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span>Home</span> / <span>Insights</span> /
            <span className="text-orange-500"> Thought Leadership</span>
          </motion.nav>

          {/* Heading */}
          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Forward-Thinking Perspectives
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl lg:text-2xl font-light italic mb-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Strategic Insights on AI, Data, and Digital Transformation
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Expert perspectives from Tredence leaders on emerging technologies,
            enterprise transformation trends, and the future of AI-driven
            decision-making.
          </motion.p>
        </motion.div>
      </section>

      {/* --- Section 2: Featured Article (Hero Block) --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <motion.img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
              alt="Featured Article"
              className="w-full h-96 object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.7 }}
            />

            <div className="absolute inset-0 flex flex-col justify-end p-12 z-20">
              <motion.p
                className="text-orange-300 text-sm font-bold tracking-widest uppercase mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Featured Article
              </motion.p>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                The Future of Enterprise AI: From Hype to Hyperscale Reality
              </motion.h2>
              <motion.p
                className="text-lg text-gray-100 max-w-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Why organizations that treat AI as a strategic asset—not a cost
                center—will win the next decade. A framework for moving beyond
                pilots to production-scale impact.
              </motion.p>

              <motion.div
                className="flex flex-col md:flex-row md:items-center gap-6 text-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60"
                    alt="Author"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">Sameer Nigam</p>
                    <p className="text-sm text-gray-300">
                      CEO & Co-founder, Tredence
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Calendar size={16} />
                  <span>March 2025</span>
                </div>

                <motion.button
                  className="mt-auto md:mt-0 md:ml-auto inline-flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors group-hover:gap-4"
                  whileHover={{ x: 4 }}
                >
                  Read Article <ChevronRight size={20} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 3: Content + Sidebar --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <motion.div
            className="lg:w-2/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl font-bold mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Latest <span className="text-orange-600">Perspectives</span>
            </motion.h2>

            <div className="space-y-12">
              {[
                {
                  title:
                    'Navigating the GenAI Inflection Point: Enterprise Strategy at a Crossroads',
                  author: 'Chetan Rao',
                  role: 'Chief Strategy Officer, Tredence',
                  date: 'March 10, 2025',
                  category: 'Strategy',
                  excerpt:
                    'Generative AI is reshaping enterprise strategy. We explore the critical decisions CFOs, CIOs, and business leaders must make to capture value while mitigating risks. A candid analysis of where the market is heading and what it means for your organization.',
                  image:
                    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
                },
                {
                  title:
                    'Data Leverage: The Silent Competitive Advantage Every Enterprise Overlooked',
                  author: 'Abhijit Jhadav',
                  role: 'Chief Technology Officer, Tredence',
                  date: 'March 5, 2025',
                  category: 'Data Engineering',
                  excerpt:
                    'For decades, companies obsessed over big data. But the real advantage lies in smart data—curated, contextualized, and AI-ready. We reveal why your data lake might be your greatest liability and how to transform it.',
                  image:
                    'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=600',
                },
                {
                  title:
                    'Beyond ROI: The Human Dimension of Successful AI Transformations',
                  author: 'Dr. Priya Sharma',
                  role: 'Director of Organizational Design, Tredence',
                  date: 'February 28, 2025',
                  category: 'Change Management',
                  excerpt:
                    'The most innovative AI projects fail because of people, not technology. An honest conversation about change management, organizational readiness, and building AI-native cultures in traditional enterprises.',
                  image:
                    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
                },
              ].map((article, idx) => (
                <motion.article
                  variants={articleVariants}
                  whileHover={{ scale: 1.02 }}
                  key={idx}
                  className="pb-12 border-b border-gray-300 last:border-b-0 group hover:bg-white p-8 -m-8 rounded-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="h-48 rounded-lg overflow-hidden bg-orange-600">
                        <motion.img
                          src={article.image}
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.6 }}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-orange-100 text-orange-700 px-4 py-1 text-xs font-bold rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar size={14} /> {article.date}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                        <div className="flex items-center gap-3">
                          <motion.img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60"
                            whileHover={{ scale: 1.2 }}
                            alt="Author"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-bold text-sm">
                              {article.author}
                            </p>
                            <p className="text-xs text-gray-600">
                              {article.role}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <motion.button
                          whileHover={{ x: 6 }}
                          className="text-orange-600 font-bold flex items-center gap-2
 hover:gap-4 transition-all group-hover:text-orange-700"
                        >
                          Read Article <ChevronRight size={18} />
                        </motion.button>
                        <motion.button
                          whileHover={{ rotate: 20, scale: 1.2 }}
                          className="text-gray-400 hover:text-orange-600 transition-colors"
                        >
                          <Share2 size={18} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sidebarVariants}
          >
            {/* Subscribe CTA */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-orange-600 to-orange-700
text-white p-8 rounded-lg mb-12 sticky top-24"
            >
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-orange-100 mb-6 text-sm">
                Get the latest thought leadership articles, AI trends, and
                transformation insights delivered to your inbox weekly.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button className="w-full bg-white text-orange-600 font-bold py-2 rounded-lg hover:bg-orange-50 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-orange-200 mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </motion.div>

            {/* Categories */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">Categories</h3>
              <div className="space-y-3">
                {[
                  'Strategy & Vision',
                  'AI & Machine Learning',
                  'Data Engineering',
                  'Industry Trends',
                  'Change Management',
                  'Cloud Innovation',
                ].map((cat, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium text-sm"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Topics */}
            <div>
              <h3 className="text-xl font-bold mb-6">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Generative AI',
                  'Data Lakes',
                  'Cloud Migration',
                  'Analytics',
                  'Enterprise Software',
                  'Digital Transformation',
                  'AI Strategy',
                  'Data Governance',
                  'Machine Learning',
                ].map((tag, idx) => (
                  <button
                    key={idx}
                    className="px-3 py-2 bg-gray-200 hover:bg-orange-600 hover:text-white rounded-full text-xs font-bold transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 4: Experts Grid --- */}
      {/* --- Section 4: Experts Grid --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-white"
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
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Meet the <span className="text-orange-600">Visionaries</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Industry veterans and thought leaders who are shaping the future of
            enterprise AI.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                name: 'Sameer Nigam',
                title: 'CEO & Co-founder',
                focus: 'Enterprise AI Strategy',
                image:
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
              },
              {
                name: 'Chetan Rao',
                title: 'Chief Strategy Officer',
                focus: 'Digital Transformation',
                image:
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
              },
              {
                name: 'Abhijit Jhadav',
                title: 'Chief Technology Officer',
                focus: 'Data & Cloud Technology',
                image:
                  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400',
              },
            ].map((expert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="h-64 overflow-hidden bg-orange-600">
                  <motion.img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">{expert.name}</h3>

                  <p className="text-orange-600 font-bold text-sm mb-2">
                    {expert.title}
                  </p>

                  <p className="text-gray-600 text-sm mb-6">{expert.focus}</p>

                  <motion.button
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-orange-600 font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all w-full"
                  >
                    Follow <ChevronRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 5: FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold">
              Leadership <span className="text-orange-600">FAQs</span>
            </h2>
          </div>
          <div className="lg:w-3/4 space-y-4">
            {[
              {
                q: 'How often do you publish new thought leadership content?',
                a: 'We publish 2-3 in-depth articles per week, with featured pieces monthly from our executive team. You can subscribe to our newsletter or follow our blog for regular updates.',
              },
              {
                q: 'Can I invite Tredence experts to speak at my event?',
                a: 'Absolutely! Our leaders are active in industry conferences, webinars, and executive forums. Contact our communications team to discuss speaking opportunities for your organization.',
              },
              {
                q: 'How can I access research reports and proprietary insights?',
                a: 'Our annual research reports and industry benchmarks are available to subscribers. We also offer exclusive access to analytical research for clients and partners.',
              },
              {
                q: 'Are these insights specific to certain industries?',
                a: 'Our thought leadership covers cross-industry trends and best practices. We also publish industry-specific insights for banking, healthcare, retail, manufacturing, and other sectors.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-gray-300 bg-white p-6 -mx-6 rounded-lg"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full py-4 flex justify-between items-center text-left hover:text-orange-600 transition-colors"
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
                  <div className="pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4 animate-fade-in">
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

export default ThoughtLeadership;
