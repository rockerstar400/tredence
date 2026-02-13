import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Cloud,
  Zap,
  GitBranch,
  Shield,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import Footer from '../../components/Footer';

const DataModernization = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [selectedTransform, setSelectedTransform] = useState(0);

  return (
    <div className="font-sans antialiased">
      {/* --- Section 1: Hero Banner with Slide-in Animation --- */}
      <motion.section
        className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Zoom Animation */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-blue-900/50"></div>
        </motion.div>

        {/* Soft Floating Glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Content */}
        <motion.div
          className="px-6 lg:px-24 max-w-4xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.nav
            className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-90"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span>Services</span> /{' '}
            <span className="text-orange-500">Data Modernization</span>
          </motion.nav>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Modernizing Legacy Data for a Cloud-First Future
          </motion.h1>

          <motion.p
            className="text-2xl lg:text-3xl font-light italic mb-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Transform Your Data Estate Into a Strategic Competitive Asset
          </motion.p>

          <motion.p
            className="text-lg text-gray-200 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Legacy data systems constraining your strategic agility. We
            specialize in transforming monolithic, on-premises data
            infrastructure into modern, cloud-native platforms that unlock
            innovation, reduce operational costs, and accelerate ROI.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* --- Section 2: The Challenge & Opportunity --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gradient-to-r from-white to-gray-50"
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
            From Legacy to{' '}
            <span className="text-orange-600">Cloud-Native Leadership</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* BEFORE CARD */}
            <motion.div
              className="bg-red-50 border-l-4 border-red-500 p-10 rounded-lg"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="text-2xl">⚠️</span> Legacy Pain Points
              </h3>

              <motion.ul
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {[
                  'Fragmented data across incompatible systems',
                  'Slow, manual ETL processes with frequent failures',
                  'High operational costs and technical debt',
                  'Limited scalability for analytics and AI',
                  'Compliance and governance challenges',
                  'Inability to respond to real-time business needs',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-4 text-gray-700"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <span className="text-red-500 font-bold flex-shrink-0 mt-1">
                      ×
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* AFTER CARD */}
            <motion.div
              className="bg-green-50 border-l-4 border-green-500 p-10 rounded-lg"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="text-2xl">✓</span> Modern Cloud Benefits
              </h3>

              <motion.ul
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {[
                  'Unified data platform with single source of truth',
                  'Automated, resilient pipelines with AI/ML ready infrastructure',
                  '40-60% cost reduction through cloud-native optimization',
                  'Enterprise-scale analytics and real-time intelligence',
                  'Built-in compliance, security, and governance',
                  'Agile innovation with rapid deployment cycles',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-4 text-gray-700"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <span className="text-green-600 font-bold flex-shrink-0 mt-1">
                      ✓
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- Section 3: Modernization Pillars --- */}
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
            Our Modernization <span className="text-orange-600">Framework</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              {
                title: 'Legacy Migration Planning',
                description:
                  'Comprehensive assessment of current infrastructure, dependencies, and complexity. Data-driven migration roadmap with risk mitigation.',
                icon: '📊',
              },
              {
                title: 'Cloud-Native Architecture Design',
                description:
                  'Architect scalable, secure cloud solutions leveraging managed services, containerization, and serverless paradigms.',
                icon: '☁️',
              },
              {
                title: 'Platform Consolidation',
                description:
                  'Unified data platform consolidating multiple legacy systems into single source of truth with governance built-in.',
                icon: '🔗',
              },
              {
                title: 'Data Governance Automation',
                description:
                  'Implement automated governance frameworks ensuring compliance, quality, and discoverability at scale.',
                icon: '🔐',
              },
              {
                title: 'Phased Implementation',
                description:
                  'Low-risk, phased migration minimizing disruption while delivering early wins and demonstrating ROI.',
                icon: '🚀',
              },
              {
                title: 'Operational Handoff',
                description:
                  'Comprehensive training, documentation, and support ensuring teams are equipped for modern platform operations.',
                icon: '📚',
              },
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.03 }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ rotate: 8, scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {pillar.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 4: Transformation Timeline --- */}
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
            Modernization <span className="text-orange-600">Journey</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            A proven, phased approach reducing risk while delivering early
            value.
          </motion.p>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              {
                phase: 'Phase 1: Assessment (Weeks 1-4)',
                highlights: [
                  'Complete infrastructure audit',
                  'Dependency mapping and risk assessment',
                  'Cost-benefit analysis for cloud migration',
                  'Prioritization of migration targets',
                ],
                timeline: '4 weeks',
              },
              {
                phase: 'Phase 2: Design & POC (Weeks 5-12)',
                highlights: [
                  'Cloud architecture design workshop',
                  'Proof-of-concept for first dataset migration',
                  'Security and compliance framework design',
                  'First small dataset migrated to cloud',
                ],
                timeline: '8 weeks',
              },
              {
                phase: 'Phase 3: Pilot Migration (Months 4-6)',
                highlights: [
                  'Migrate pilot workloads to cloud platform',
                  'Establish automated data pipelines',
                  'Performance tuning and optimization',
                  'Team training on modern platform',
                ],
                timeline: '12 weeks',
              },
              {
                phase: 'Phase 4: Full-Scale Rollout (Months 7-12)',
                highlights: [
                  'Complete remaining data migrations',
                  'Legacy system decommissioning',
                  'Full governance and compliance activation',
                  'Ongoing optimization and support',
                ],
                timeline: '24 weeks',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all group"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -6 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {item.phase}
                  </h3>

                  <motion.span
                    className="bg-orange-100 text-orange-700 px-4 py-1 text-sm font-bold rounded-full whitespace-nowrap ml-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.timeline}
                  </motion.span>
                </div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  {item.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <ChevronRight
                        size={18}
                        className="text-orange-600 flex-shrink-0 mt-0.5"
                      />
                      <p className="text-gray-700">{highlight}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 5: ROI & Impact --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gradient-to-r from-orange-600 to-orange-700 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Subtle Background Glow */}
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -z-0"
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
            Expected Outcomes & ROI
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              {
                metric: '40-60%',
                description: 'Operational Cost Reduction',
                details:
                  'Through cloud-native architecture and eliminated legacy infrastructure',
              },
              {
                metric: '6-8 months',
                description: 'ROI Payback Period',
                details:
                  'Typical timeline from project start to positive ROI calculation',
              },
              {
                metric: '3-5x',
                description: 'Performance Improvement',
                details:
                  'Faster queries, real-time analytics, and reduced latency',
              },
              {
                metric: '95%',
                description: 'System Uptime',
                details:
                  'Cloud-native redundancy and automated failover capabilities',
              },
              {
                metric: '10x',
                description: 'Faster Deployments',
                details: 'From weeks/months to days with CI/CD automation',
              },
              {
                metric: '100%',
                description: 'Compliance Coverage',
                details:
                  'Governance frameworks meeting industry standards and regulations',
              },
            ].map((impact, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <motion.div
                  className="text-5xl font-bold mb-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
                >
                  {impact.metric}
                </motion.div>

                <p className="font-bold text-orange-100 mb-3">
                  {impact.description}
                </p>

                <p className="text-sm text-orange-200">{impact.details}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 6: Technology Partners --- */}
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
            Cloud & Technology{' '}
            <span className="text-orange-600">Partnerships</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              {
                name: 'Google Cloud',
                expertise: 'BigQuery, Cloud Storage, Dataflow',
              },
              {
                name: 'Amazon AWS',
                expertise: 'Redshift, S3, Glue, EMR',
              },
              {
                name: 'Microsoft Azure',
                expertise: 'Synapse, Data Lake, Fabric',
              },
              {
                name: 'Databricks',
                expertise: 'Lakehouse, Delta Lake, ML',
              },
              {
                name: 'Snowflake',
                expertise: 'Cloud DW, Data Sharing, Governance',
              },
              {
                name: 'Apache Ecosystem',
                expertise: 'Spark, Hadoop, Kafka, Airflow',
              },
            ].map((partner, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg text-center hover:border-orange-300 hover:shadow-lg transition-all group"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -8, scale: 1.04 }}
              >
                <motion.p
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {partner.name}
                </motion.p>

                <motion.p
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {partner.expertise}
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
              Modernization <span className="text-orange-600">FAQs</span>
            </h2>
          </div>
          <div className="lg:w-3/4 space-y-4">
            {[
              {
                q: 'Will migration disrupt our current operations?',
                a: 'We minimize disruption through phased, parallel migrations. Most workloads migrate with zero to minimal downtime. We maintain both legacy and cloud systems during transition periods.',
              },
              {
                q: 'What about our existing licenses and investments?',
                a: 'We optimize your licensing strategy, often leveraging existing agreements while transitioning to cloud-native alternatives where beneficial. We maximize the value of prior investments.',
              },
              {
                q: 'How do you handle data security during migration?',
                a: 'Security is built into every phase. We use encrypted data in transit, maintain secure transfer mechanisms, and implement comprehensive access controls. Full audit trails are maintained throughout.',
              },
              {
                q: 'Can we migrate gradually or must it be a "big bang"?',
                a: 'Gradual migration is our preference. We execute phased rollouts, often migrating departments, business units, or data domains sequentially to minimize risk.',
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

export default DataModernization;
