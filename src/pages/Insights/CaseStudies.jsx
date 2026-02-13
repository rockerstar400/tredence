import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Award,
} from 'lucide-react';
import Footer from '../../components/Footer';

const CaseStudies = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [counters, setCounters] = useState({
    caseStudies: 0,
    industries: 0,
    impact: 0,
    clients: 0,
  });

  // Counter animation on mount
  useEffect(() => {
    const targets = {
      caseStudies: 450,
      industries: 25,
      impact: 340,
      clients: 190,
    };
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const updateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        caseStudies: Math.floor(targets.caseStudies * progress),
        industries: Math.floor(targets.industries * progress),
        impact: Math.floor(targets.impact * progress),
        clients: Math.floor(targets.clients * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    updateCounters();
  }, []);

  return (
    <div className="font-sans antialiased">
      {/* --- Section 1: Hero Banner --- */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <motion.div
          className="px-6 lg:px-24 animate-fade-in-up"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.nav
            className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span>Home</span> / <span>Insights</span> /{' '}
            <span className="text-orange-500">Case Studies</span>
          </motion.nav>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Driving Measurable Impact
          </motion.h1>
          <motion.p
            className="text-2xl lg:text-4xl font-light italic mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Enterprise-Grade Transformation Stories Across Industries
          </motion.p>
          <motion.p
            className="text-lg max-w-2xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover how leading organizations have transformed their data and
            AI capabilities to unlock unprecedented business value and
            competitive advantage.
          </motion.p>
        </motion.div>
      </section>

      {/* --- Section 2: Content + Image Section --- */}
     {/* --- Section 2: Content + Image Section (Animated) --- */}
<section className="py-24 px-12 lg:px-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">

    {/* LEFT IMAGE SIDE */}
    <motion.div
      className="lg:w-1/2 relative"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="absolute -top-10 left-10 w-48 h-16 bg-orange-600 -z-0 transform -skew-x-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ originX: 0 }}
      />

      <motion.div
        className="relative z-10 flex justify-center items-center"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
          alt="Case Studies Hero"
          className="w-full max-w-md rounded-lg shadow-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />

        {/* Rotating Rings */}
        <motion.div
          className="absolute inset-0 border-[3px] border-orange-500/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 border-[2px] border-orange-500/20 rounded-full scale-125"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Icons */}
        <motion.div
          className="absolute top-10 -left-6 bg-orange-600 p-4 text-white text-2xl shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          📊
        </motion.div>

        <motion.div
          className="absolute top-20 -right-6 bg-orange-600 p-4 text-white text-2xl shadow-lg"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🎯
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 bg-orange-600 p-4 text-white text-2xl shadow-lg"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          ⚡
        </motion.div>
      </motion.div>
    </motion.div>

    {/* RIGHT TEXT SIDE */}
    <motion.div
      className="lg:w-1/2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }
        }
      }}
    >
      <motion.h2
        className="text-4xl lg:text-5xl font-bold leading-tight mb-8"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        Real Outcomes from
        <span className="text-orange-600"> Real Transformations</span>
      </motion.h2>

      {[
        `Our case studies showcase how organizations across banking, healthcare, retail, and manufacturing have leveraged Sigma's AI and data expertise to achieve transformative results.`,
        `From modernizing legacy data architectures to deploying advanced AI models, our customers have achieved measurable improvements in operational efficiency, customer experience, and revenue growth.`,
        `By combining deep domain expertise with proven accelerators, we've helped enterprises compress transformation timelines and maximize ROI on their AI and data investments.`
      ].map((text, i) => (
        <motion.p
          key={i}
          className="text-gray-700 text-lg leading-relaxed mb-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {text}
        </motion.p>
      ))}
    </motion.div>

  </div>
</section>


      {/* --- Section 3: Case Studies Grid --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Stories of Digital{' '}
            <span className="text-orange-600">Leadership</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {[
              {
                industry: 'Banking & Financial Services',
                title: 'Real-Time Risk Intelligence for Global Investment Bank',
                outcomes: [
                  'Reduced risk detection time by 85%',
                  'Fraud prevention improved by 72%',
                  '150% increase in client retention',
                ],
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400',
              },
              {
                industry: 'Healthcare & Life Sciences',
                title: 'AI-Powered Clinical Insights for Hospital Network',
                outcomes: [
                  '40% reduction in patient readmissions',
                  '33% improvement in resource utilization',
                  '$8.2M annual cost savings achieved',
                ],
                image:
                  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400',
              },
              {
                industry: 'Retail & E-Commerce',
                title: 'Demand Forecasting Revolution for Global Retailer',
                outcomes: [
                  '94% forecast accuracy achieved',
                  '$12M reduction in inventory costs',
                  '45% improvement in stock availability',
                ],
                image:
                  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=400',
              },
              {
                industry: 'Manufacturing & Industrial',
                title: 'Predictive Maintenance Platform for Equipment Giants',
                outcomes: [
                  '68% reduction in unplanned downtime',
                  '$15M in avoided maintenance costs',
                  '3x improvement in asset utilization',
                ],
                image:
                  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400',
              },
              {
                industry: 'Telecommunications',
                title: 'Customer Churn Prediction for Major Telco',
                outcomes: [
                  '35% lift in retention campaigns',
                  '50% reduction in customer churn',
                  '$25M revenue retention annually',
                ],
                image:
                  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400',
              },
              {
                industry: 'CPG & Consumer Goods',
                title: 'Supply Chain Optimization for Industry Leader',
                outcomes: [
                  '22% improvement in on-time delivery',
                  '31% reduction in logistics costs',
                  '89% inventory accuracy achieved',
                ],
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400',
              },
            ].map((study, idx) => (
              <motion.div
                key={idx}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  },
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Image */}
                <div className="h-40 overflow-hidden bg-orange-600">
                  <motion.img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <motion.p
                    className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {study.industry}
                  </motion.p>
                  <h3 className="text-xl font-bold mb-6 leading-tight group-hover:text-orange-600 transition-colors">
                    {study.title}
                  </h3>

                  {/* Outcomes */}
                  <motion.div
                    className="space-y-3 mb-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    {study.outcomes.map((outcome, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <TrendingUp
                          size={16}
                          className="text-orange-600 mt-1 flex-shrink-0"
                        />
                        <p className="text-sm text-gray-600">{outcome}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.button
                    className="inline-flex items-center gap-2 text-orange-600 font-bold group-hover:gap-4 transition-all"
                    whileHover={{ x: 4 }}
                  >
                    Read Full Story <ChevronRight size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Section 4: Impact Metrics --- */}
      <section className="py-24 px-12 lg:px-24 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Proven Track Record of Success
          </motion.h2>
          <motion.p
            className="text-xl text-center text-orange-100 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Metrics that demonstrate the tangible impact of our transformations
            across enterprises globally.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              {
                value: counters.caseStudies,
                suffix: '+',
                label: 'Successful Projects',
                icon: '🎯',
              },
              {
                value: counters.industries,
                suffix: '+',
                label: 'Industries Served',
                icon: '🌍',
              },
              {
                value: counters.impact,
                suffix: '%',
                label: 'Avg ROI Delivered',
                icon: '📈',
              },
              {
                value: counters.clients,
                suffix: '+',
                label: 'Enterprise Clients',
                icon: '🤝',
              },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.25)',
                }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  {metric.icon}
                </motion.div>
                <motion.div
                  className="text-5xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                >
                  {metric.value}
                  {metric.suffix}
                </motion.div>
                <p className="text-orange-100 font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Section 5: Featured Insights --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industry-Specific <span className="text-orange-600">Insights</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {[
              {
                title: 'AI-Driven Banking: From Legacy to Leadership',
                category: 'Banking',
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
                excerpt:
                  'How top-tier financial institutions are leveraging AI to modernize operations and stay competitive in the digital age.',
              },
              {
                title: 'Healthcare Data Integration: Breaking Down Silos',
                category: 'Healthcare',
                image:
                  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
                excerpt:
                  'A comprehensive guide to unifying fragmented healthcare data across systems for better patient care and outcomes.',
              },
              {
                title: 'Retail Analytics: The New Competitive Edge',
                category: 'Retail',
                image:
                  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600',
                excerpt:
                  'Learn how predictive analytics and AI are transforming retail strategies and customer experiences.',
              },
            ].map((insight, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 group cursor-pointer shadow-sm hover:shadow-lg transition-all rounded-lg overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{ y: -4 }}
              >
                <div className="h-48 overflow-hidden bg-orange-600">
                  <motion.img
                    src={insight.image}
                    className="w-full h-full object-cover"
                    alt={insight.title}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-8">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 text-xs font-bold tracking-widest rounded-full">
                    {insight.category}
                  </span>
                  <h3 className="text-lg font-bold mt-4 mb-4 group-hover:text-orange-600 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    {insight.excerpt}
                  </p>
                  <motion.div
                    className="text-orange-600 font-bold flex items-center gap-2"
                    whileHover={{ gap: '8px' }}
                  >
                    Explore <ChevronRight size={16} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Section 6: Industry Breakdown --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Where We Make{' '}
            <span className="text-orange-600">The Most Impact</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {[
              {
                industry: 'Banking & Financial Services',
                description:
                  'Risk management, fraud detection, and customer intelligence at enterprise scale.',
                stats: '85+ transformations',
              },
              {
                industry: 'Healthcare & Life Sciences',
                description:
                  'Clinical insights, patient experience optimization, and operational efficiency.',
                stats: '120+ implementations',
              },
              {
                industry: 'Retail & E-Commerce',
                description:
                  'Demand forecasting, inventory optimization, and personalization engines.',
                stats: '95+ deployments',
              },
              {
                industry: 'Manufacturing & Industrial',
                description:
                  'Predictive maintenance, supply chain optimization, and quality assurance.',
                stats: '70+ projects',
              },
              {
                industry: 'Telecommunications',
                description:
                  'Customer churn prediction, network optimization, and service personalization.',
                stats: '60+ engagements',
              },
              {
                industry: 'CPG & Consumer Goods',
                description:
                  'Supply chain visibility, demand planning, and market intelligence.',
                stats: '50+ initiatives',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.industry}
                  </h3>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Award size={24} className="text-orange-600" />
                  </motion.div>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-orange-600 font-bold text-sm">
                  {item.stats}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Section 7: FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <motion.div
            className="lg:w-1/4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold">
              Case Study <span className="text-orange-600">FAQs</span>
            </h2>
          </motion.div>
          <motion.div
            className="lg:w-3/4 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              {
                q: 'Can I access the full case studies?',
                a: 'Yes, comprehensive case studies with detailed metrics, implementation timelines, and ROI breakdowns are available. Simply request access and our team will share the relevant materials aligned with your industry.',
              },
              {
                q: 'How long does a typical transformation take?',
                a: 'Transformation timelines vary based on scope and complexity. Most of our implementations span 6-18 months, with quick-wins delivered within the first 90 days and sustained value realization over the project lifecycle.',
              },
              {
                q: 'What is your typical engagement model?',
                a: 'We offer flexible engagement models including dedicated teams, time-and-materials, and fixed-scope projects. We tailor the structure based on your specific needs, risk tolerance, and organizational preferences.',
              },
              {
                q: 'How do you ensure ROI on transformation projects?',
                a: 'We employ a rigorous methodology combining baseline metrics, staged implementation, continuous measurement, and optimization. Our accelerators compress timelines, and our teams have proven track records in delivering measurable business outcomes.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                className="border-b border-gray-200"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-orange-600 transition-colors"
                >
                  <span className="text-lg font-bold pr-8">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
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
                  </motion.div>
                </button>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeFaq === idx ? 1 : 0,
                    height: activeFaq === idx ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default CaseStudies;
