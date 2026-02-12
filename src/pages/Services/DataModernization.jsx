import React, { useState } from 'react';
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
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-blue-900/50"></div>
        </div>

        <div className="px-6 lg:px-24 max-w-4xl mx-auto animate-slide-in-left">
          <nav className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-90">
            <span>Services</span> /{' '}
            <span className="text-orange-500">Data Modernization</span>
          </nav>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Modernizing Legacy Data for a Cloud-First Future
          </h1>
          <p className="text-2xl lg:text-3xl font-light italic mb-8">
            Transform Your Data Estate Into a Strategic Competitive Asset
          </p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Legacy data systems constraining your strategic agility. We
            specialize in transforming monolithic, on-premises data
            infrastructure into modern, cloud-native platforms that unlock
            innovation, reduce operational costs, and accelerate ROI.
          </p>
        </div>
      </section>

      {/* --- Section 2: The Challenge & Opportunity --- */}
      <section className="py-24 px-12 lg:px-24 bg-gradient-to-r from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            From Legacy to{' '}
            <span className="text-orange-600">Cloud-Native Leadership</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before */}
            <div className="bg-red-50 border-l-4 border-red-500 p-10 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="text-2xl">⚠️</span> Legacy Pain Points
              </h3>
              <ul className="space-y-4">
                {[
                  'Fragmented data across incompatible systems',
                  'Slow, manual ETL processes with frequent failures',
                  'High operational costs and technical debt',
                  'Limited scalability for analytics and AI',
                  'Compliance and governance challenges',
                  'Inability to respond to real-time business needs',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-gray-700"
                  >
                    <span className="text-red-500 font-bold flex-shrink-0 mt-1">
                      ×
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-green-50 border-l-4 border-green-500 p-10 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="text-2xl">✓</span> Modern Cloud Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  'Unified data platform with single source of truth',
                  'Automated, resilient pipelines with AI/ML ready infrastructure',
                  '40-60% cost reduction through cloud-native optimization',
                  'Enterprise-scale analytics and real-time intelligence',
                  'Built-in compliance, security, and governance',
                  'Agile innovation with rapid deployment cycles',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-gray-700"
                  >
                    <span className="text-green-600 font-bold flex-shrink-0 mt-1">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Modernization Pillars --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Modernization <span className="text-orange-600">Framework</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div
                key={idx}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: Transformation Timeline --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Modernization <span className="text-orange-600">Journey</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            A proven, phased approach reducing risk while delivering early
            value.
          </p>

          <div className="space-y-8">
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
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {item.phase}
                  </h3>
                  <span className="bg-orange-100 text-orange-700 px-4 py-1 text-sm font-bold rounded-full whitespace-nowrap ml-4">
                    {item.timeline}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight
                        size={18}
                        className="text-orange-600 flex-shrink-0 mt-0.5"
                      />
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: ROI & Impact --- */}
      <section className="py-24 px-12 lg:px-24 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Expected Outcomes & ROI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div
                key={idx}
                className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="text-5xl font-bold mb-2">{impact.metric}</div>
                <p className="font-bold text-orange-100 mb-3">
                  {impact.description}
                </p>
                <p className="text-sm text-orange-200">{impact.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 6: Technology Partners --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Cloud & Technology{' '}
            <span className="text-orange-600">Partnerships</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg text-center hover:border-orange-300 hover:shadow-lg transition-all group"
              >
                <p className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {partner.name}
                </p>
                <p className="text-sm text-gray-600">{partner.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* --- Section 8: CTA Section --- */}
      <section className="relative pt-20">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-600 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-[#fff1ea] shadow-2xl p-10 lg:p-16 flex flex-col lg:flex-row gap-12 rounded-lg">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-8">
                Start Your Modernization Journey
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Let's assess your current state, identify modernization
                opportunities, and build a roadmap to cloud-native success.
              </p>
            </div>
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First name"
                    className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full"
                />
                <textarea
                  placeholder="Describe your modernization goals"
                  rows="3"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors rounded-sm"
                >
                  Request Assessment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataModernization;
