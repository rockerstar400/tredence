import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Database,
  Cloud,
  Lock,
  Zap,
  BarChart3,
  GitBranch,
} from 'lucide-react';
import Footer from '../../components/Footer';

const DataEngineering = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [counters, setCounters] = useState({
    pipelines: 0,
    clients: 0,
    uptime: 0,
  });

  useEffect(() => {
    const targets = { pipelines: 500, clients: 200, uptime: 99 };
    const duration = 9000;
    const startTime = Date.now();

    const updateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        pipelines: Math.floor(targets.pipelines * progress),
        clients: Math.floor(targets.clients * progress),
        uptime: Math.floor(targets.uptime * progress),
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
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
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
            <span>Services</span> /{' '}
            <span className="text-orange-500">Data Engineering</span>
          </motion.nav>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Building Scalable, Intelligent Data Foundations
          </motion.h1>

          <motion.p
            className="text-2xl lg:text-3xl font-light italic mb-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Transform Raw Data Into Enterprise-Ready Intelligence
          </motion.p>

          <motion.p
            className="text-lg text-gray-200 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Enterprise-grade data engineering that transforms fragmented data
            sources into intelligent, scalable foundations powering real-time
            decision-making across your organization.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* --- Section 2: Content + Image Section --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          {/* LEFT SIDE */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <motion.div
              className="absolute -top-10 left-10 w-48 h-16 bg-orange-600 -z-0 transform -skew-x-12"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ transformOrigin: 'left' }}
            />

            <div className="relative z-10 flex justify-center items-center">
              <motion.img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
                alt="Data Engineering"
                className="w-full max-w-md rounded-lg shadow-2xl"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />

              {/* Circular Borders Animation */}
              <motion.div
                className="absolute inset-0 border-[3px] border-orange-500/30 rounded-full scale-110 -rotate-12"
                animate={{ rotate: -12 }}
              />
              <motion.div
                className="absolute inset-0 border-[2px] border-orange-500/20 rounded-full scale-125 rotate-45"
                animate={{ rotate: 45 }}
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
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ⚡
              </motion.div>

              <motion.div
                className="absolute bottom-10 right-10 bg-orange-600 p-4 text-white text-2xl shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                🔗
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="lg:w-1/2"
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
            <motion.h2
              className="text-4xl lg:text-5xl font-bold leading-tight mb-8"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              Data Engineering That
              <span className="text-orange-600">
                {' '}
                Scales With Your Ambition
              </span>
            </motion.h2>

            {[
              `In today's data-driven enterprise, having a robust data foundation
        isn't optional— it's essential. Our data engineering expertise
        spans the entire spectrum: from real-time ingestion and
        transformation pipelines to cloud-native warehousing architectures
        that power analytics, AI, and business intelligence at enterprise
        scale.`,

              `We've helped 200+ enterprises modernize their data estates,
        eliminate data silos, and build infrastructure capable of
        supporting advanced analytics and AI workloads. Whether you're
        starting from legacy systems or scaling existing capabilities, we
        bring proven methodologies, cloud expertise, and architectural
        rigor to every engagement.`,

              `Our team combines deep technical expertise with business acumen,
        ensuring that engineering investments directly support your
        strategic objectives. We don't just build pipelines; we architect
        data ecosystems that become organizational assets.`,
            ].map((text, idx) => (
              <motion.p
                key={idx}
                className="text-gray-700 text-lg leading-relaxed mb-6"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 3: Capabilities Grid --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Our Data Engineering{' '}
            <span className="text-orange-600">Capabilities</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Comprehensive services spanning the entire data pipeline lifecycle.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                title: 'Real-Time Data Ingestion',
                description:
                  'High-throughput, low-latency streaming from APIs, databases, and IoT sources with built-in quality controls.',
                icon: <Zap className="w-8 h-8" />,
              },
              {
                title: 'ETL/ELT Pipelines',
                description:
                  'Automated, scalable data transformation pipelines with comprehensive error handling and monitoring.',
                icon: <GitBranch className="w-8 h-8" />,
              },
              {
                title: 'Data Lakes & Lakehouses',
                description:
                  'Unified data repositories combining data lake flexibility with data warehouse governance and performance.',
                icon: <Database className="w-8 h-8" />,
              },
              {
                title: 'Cloud Data Warehousing',
                description:
                  'Managed data warehouses on Snowflake, BigQuery, and Redshift with cost optimization and governance.',
                icon: <Cloud className="w-8 h-8" />,
              },
              {
                title: 'Metadata & Governance',
                description:
                  'Enterprise data catalog, lineage tracking, and governance frameworks ensuring compliance and discoverability.',
                icon: <Lock className="w-8 h-8" />,
              },
              {
                title: 'Streaming Analytics',
                description:
                  'Real-time data processing and analytics for time-sensitive decision-making and operational insights.',
                icon: <BarChart3 className="w-8 h-8" />,
              },
            ].map((cap, idx) => (
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
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8"
              >
                <motion.div
                  className="text-orange-600 mb-4"
                  whileHover={{ rotate: 5, scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {cap.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 4: Implementation Process --- */}
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
            Our <span className="text-orange-600">Implementation Process</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                step: '01',
                title: 'Assessment & Design',
                description:
                  'Deep dive into your current data landscape, requirements, and constraints. Design scalable, cost-effective architecture.',
                icon: '📋',
              },
              {
                step: '02',
                title: 'Proof of Concept',
                description:
                  'Build a rapid prototype demonstrating feasibility, performance, and integration with your existing systems.',
                icon: '🔬',
              },
              {
                step: '03',
                title: 'Production Rollout',
                description:
                  'Phased implementation with monitoring, optimization, and comprehensive testing at each stage.',
                icon: '🚀',
              },
              {
                step: '04',
                title: 'Optimization & Support',
                description:
                  'Ongoing performance tuning, scaling, and operational support ensuring long-term success.',
                icon: '⚙️',
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
                className="relative group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <motion.div
                  className="text-5xl mb-4 opacity-50"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>

                <p className="text-xs font-bold text-orange-600 uppercase mb-2">
                  Step {item.step}
                </p>

                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {idx < 3 && (
                  <motion.div
                    className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-orange-300"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ChevronRight size={32} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 5: Impact Metrics --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gradient-to-r from-orange-600 to-orange-700 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Subtle Background Glow */}
        <motion.div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -z-0"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Proven Track Record
          </motion.h2>

          <motion.p
            className="text-xl text-orange-100 text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Measurable impact delivered across enterprise data engineering
            engagements.
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
                value: counters.pipelines,
                suffix: '+',
                label: 'Data Pipelines Built',
                icon: '🔗',
              },
              {
                value: counters.clients,
                suffix: '+',
                label: 'Enterprise Clients',
                icon: '🏢',
              },
              {
                value: counters.uptime,
                suffix: '.9%',
                label: 'System Uptime Average',
                icon: '⚡',
              },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {metric.icon}
                </motion.div>

                <motion.div
                  className="text-6xl font-bold mb-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
                >
                  {metric.value}
                  {metric.suffix}
                </motion.div>

                <p className="text-orange-100 font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 6: Technology Stack --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-white mb-8"
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
            Technologies & <span className="text-orange-600">Platforms</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[
              { name: 'Snowflake', category: 'Cloud DW' },
              { name: 'BigQuery', category: 'Analytics' },
              { name: 'Databricks', category: 'Lakehouse' },
              { name: 'Apache Spark', category: 'Processing' },
              { name: 'Kafka', category: 'Streaming' },
              { name: 'Airflow', category: 'Orchestration' },
              { name: 'Terraform', category: 'Infrastructure' },
              { name: 'dbt', category: 'Transformation' },
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg text-center hover:border-orange-300 hover:shadow-lg transition-all group"
              >
                <motion.p
                  className="text-xs text-orange-600 font-bold uppercase mb-2"
                  whileHover={{ letterSpacing: '0.1em' }}
                  transition={{ duration: 0.3 }}
                >
                  {tech.category}
                </motion.p>

                <motion.p
                  className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech.name}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 7: FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold">
              Data Engineering <span className="text-orange-600">FAQs</span>
            </h2>
          </div>
          <div className="lg:w-3/4 space-y-4">
            {[
              {
                q: 'How long does a data engineering implementation typically take?',
                a: "Most implementations span 3-9 months depending on scope, complexity, and your organization's readiness. We deliver incremental value starting with proof-of-concept phases.",
              },
              {
                q: 'Do you support multi-cloud data strategies?',
                a: "Absolutely. We architect solutions spanning AWS, GCP, Azure, and hybrid environments. Our technology-agnostic approach ensures you're not locked into a single cloud provider.",
              },
              {
                q: 'How do you ensure data quality and governance?',
                a: 'Data quality is built into pipeline design with automated validation rules, monitoring, and alerts. We implement comprehensive governance frameworks ensuring compliance and discoverability.',
              },
              {
                q: 'Can you migrate our legacy data systems to cloud?',
                a: 'Yes—migration is a core competency. We provide assessment, migration planning, and phased rollout strategies minimizing risk and downtime.',
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
                      className="flex-shrink-0 text-orange-500"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="flex-shrink-0 text-gray-400"
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

export default DataEngineering;
