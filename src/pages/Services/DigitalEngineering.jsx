import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  Layers,
  GitBranch,
  Cpu,
  Gauge,
} from 'lucide-react';
import Footer from '../../components/Footer';

const DigitalEngineering = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased">
      {/* --- Section 1: Hero Banner with Parallax --- */}
      <motion.section
        className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <motion.div
          className="px-6 lg:px-24 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
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
            <span className="text-orange-500">Digital Engineering</span>
          </motion.nav>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Engineering Digital Experiences at Scale
          </motion.h1>

          <motion.p
            className="text-2xl lg:text-3xl font-light italic mb-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Cloud-Native Applications Built for the Modern Enterprise
          </motion.p>

          <motion.p
            className="text-lg text-gray-200 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            We engineer digital products and platforms that scale...
          </motion.p>
        </motion.div>
      </motion.section>

      {/* --- Section 2: Core Capabilities --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Digital Engineering{' '}
            <span className="text-orange-600">Expertise</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              {
                title: 'Cloud-Native Architecture',
                description:
                  'Design scalable, resilient applications leveraging containerization, orchestration, and managed services.',
                icon: <Layers className="w-8 h-8" />,
              },
              {
                title: 'DevOps & CI/CD',
                description:
                  'Automated pipelines, infrastructure-as-code, and continuous deployment enabling rapid, reliable releases.',
                icon: <GitBranch className="w-8 h-8" />,
              },
              {
                title: 'API-First Architecture',
                description:
                  'RESTful and GraphQL APIs serving as digital product foundations enabling ecosystem integration.',
                icon: <Zap className="w-8 h-8" />,
              },
              {
                title: 'Microservices Engineering',
                description:
                  'Decomposing monoliths into loosely coupled, independently deployable services improving agility.',
                icon: <Cpu className="w-8 h-8" />,
              },
              {
                title: 'Kubernetes Mastery',
                description:
                  'Production-grade Kubernetes deployments with auto-scaling, self-healing, and advanced networking.',
                icon: <Shield className="w-8 h-8" />,
              },
              {
                title: 'Performance & Reliability',
                description:
                  'Design patterns ensuring sub-100ms response times, 99.9%+ uptime, and graceful degradation.',
                icon: <Gauge className="w-8 h-8" />,
              },
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-xl transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <motion.div
                  className="text-orange-600 mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
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

      {/* --- Section 3: Technology Stack --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Modern Tech <span className="text-orange-600">Stack</span>
          </motion.h2>

          <div className="space-y-12">
            {[
              {
                category: 'Languages & Frameworks',
                techs: [
                  'TypeScript',
                  'Python',
                  'Java',
                  'Go',
                  'React',
                  'Vue.js',
                  'Node.js',
                  'FastAPI',
                ],
              },
              {
                category: 'Cloud Platforms & Services',
                techs: [
                  'AWS',
                  'Google Cloud',
                  'Azure',
                  'Kubernetes',
                  'Serverless',
                  'Managed Databases',
                ],
              },
              {
                category: 'DevOps & Infrastructure',
                techs: [
                  'Docker',
                  'Kubernetes',
                  'Terraform',
                  'GitHub Actions',
                  'Jenkins',
                  'Prometheus',
                ],
              },
              {
                category: 'Data & Streaming',
                techs: [
                  'PostgreSQL',
                  'MongoDB',
                  'Redis',
                  'Kafka',
                  'ElasticSearch',
                  'TimescaleDB',
                ],
              },
            ].map((stack, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
              >
                <motion.h3
                  className="text-2xl font-bold mb-6 text-gray-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {stack.category}
                </motion.h3>

                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.05 },
                    },
                  }}
                >
                  {stack.techs.map((tech, i) => (
                    <motion.div
                      key={i}
                      className="p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-orange-300 hover:shadow-lg transition-all"
                      variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.08, y: -4 }}
                    >
                      <p className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {tech}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- Section 4: Engineering Principles --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Engineering <span className="text-orange-600">Philosophy</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                principle: 'Security First',
                description:
                  'Security integrated at every layer—infrastructure, application, data. Compliance automation, vulnerability scanning, and threat modeling.',
              },
              {
                principle: 'Observable by Default',
                description:
                  'Comprehensive logging, metrics, and tracing enabling rapid issue diagnosis. Observability built into architecture.',
              },
              {
                principle: 'Testable & Reliable',
                description:
                  'High test coverage, chaos engineering, and continuous reliability testing ensuring production stability.',
              },
              {
                principle: 'Scalable Architecture',
                description:
                  'Horizontal scaling, stateless design, and distributed systems patterns handling explosive user growth.',
              },
              {
                principle: 'Developer Experience',
                description:
                  'Fast feedback loops, self-service infrastructure, and clear documentation enabling rapid, confident deployments.',
              },
              {
                principle: 'Cost Optimization',
                description:
                  'Efficient resource utilization, serverless where appropriate, and continuous cost monitoring maximizing cloud ROI.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="border-l-4 border-orange-600 pl-8"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ x: 6 }}
              >
                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-4"
                  whileHover={{ color: '#ea580c' }}
                  transition={{ duration: 0.2 }}
                >
                  {item.principle}
                </motion.h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- Section 5: Success Stories --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Digital Engineering <span className="text-orange-600">Impact</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
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
                title: 'High-Frequency Trading Platform',
                challenge:
                  'Build sub-millisecond latency trading infrastructure',
                solution:
                  'Go microservices, gRPC, Kafka streaming, optimized networking',
                result:
                  'Sub-100ms latency, 99.99% uptime, 10M+ transactions/day',
              },
              {
                title: 'Global SaaS Platform',
                challenge: 'Scale from 100K to 10M+ users across geographies',
                solution:
                  'Kubernetes multi-region, serverless functions, edge computing',
                result:
                  '3x reduction in infrastructure costs, sub-200ms P99 latency',
              },
              {
                title: 'Real-Time Analytics Engine',
                challenge: 'Process 10B+ events daily with sub-second latency',
                solution:
                  'Distributed streaming, in-memory computing, adaptive aggregation',
                result: '40% faster queries, 70% cost reduction, 99.9% uptime',
              },
              {
                title: 'Modern Banking Platform',
                challenge:
                  'Modernize legacy systems while maintaining 24/7 availability',
                solution:
                  'Strangler pattern, API gateway, event-driven architecture',
                result: 'Zero downtime migration, 5x faster feature delivery',
              },
            ].map((story, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-6"
                  whileHover={{ color: '#ea580c' }}
                >
                  {story.title}
                </motion.h3>

                <div className="space-y-4 mb-6">
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

                <motion.div
                  className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600"
                  whileHover={{ scale: 1.03 }}
                >
                  <p className="text-sm font-bold text-orange-700">
                    {story.result}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 6: FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold">
              Engineering <span className="text-orange-600">FAQs</span>
            </h2>
          </div>
          <div className="lg:w-3/4 space-y-4">
            {[
              {
                q: 'Do you work with existing engineering teams or replace them?',
                a: 'We augment and elevate. We embed engineers on your team, work collaboratively, and systematically transfer knowledge. The goal is always to strengthen your internal capabilities.',
              },
              {
                q: 'What is your approach to technical debt?',
                a: 'We balance velocity and quality. We identify and systematically reduce technical debt, refactor legacy code, and implement patterns preventing future accumulation.',
              },
              {
                q: 'How do you ensure code quality and testing?',
                a: 'Comprehensive testing (unit, integration, e2e), code reviews, static analysis, continuous security scanning, and chaos engineering ensure production reliability.',
              },
              {
                q: 'Can you help migrate from monolithic to microservices architecture?',
                a: 'Yes—this is a core competency. We use the strangler pattern, domain-driven design, and event-driven architecture to safely modernize systems.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-gray-300 bg-gray-50 p-6 -mx-6 rounded-lg"
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
                  <div className="pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-300 pt-4 animate-fade-in">
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

export default DigitalEngineering;
