import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Download,
  Zap,
} from 'lucide-react';
import Footer from '../../components/Footer';

const DataAIPlaybooks = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([
    false,
    false,
    false,
    false,
  ]);

  // Scroll reveal animation for timeline
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('timeline');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.8) {
        const newSteps = [true, true, true, true];
        const delay = Math.min(
          ((windowHeight * 0.8 - rect.top) / windowHeight) * 4,
          4
        );
        setVisibleSteps(
          newSteps.map((_, i) => Math.random() < delay * 0.25 * (i + 1))
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased">
      {/* --- Section 1: Hero Banner with Dark Theme --- */}
      <motion.section
        className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Parallax + Zoom Animation */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-orange-900/60"></div>
        </motion.div>

        {/* Floating Glow Effect */}
        <motion.div
          className="absolute w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Content */}
        <motion.div
          className="px-6 lg:px-24 max-w-4xl mx-auto"
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
            <span className="text-orange-600">Data & AI Playbooks</span>
          </motion.nav>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Your AI Transformation Playbook
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl font-light mb-8 text-orange-100"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Practical, Proven Frameworks for Enterprise AI Excellence
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Access battle-tested playbooks, implementation guides, and
            acceleration frameworks that compress AI transformation timelines by
            40-60%. Built from 450+ successful projects.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* --- Section 2: Content + Visual Section --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          {/* LEFT IMAGE SIDE */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute -top-10 left-10 w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-20 -z-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-10 right-10 w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-20 -z-0"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="relative z-10 flex justify-center items-center">
              <motion.img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
                alt="AI Playbook"
                className="w-full max-w-md rounded-xl shadow-2xl"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-6 -left-6 bg-gradient-to-br from-orange-500 to-orange-600 p-4 text-white text-2xl shadow-lg rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎯
              </motion.div>

              <motion.div
                className="absolute top-20 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 p-4 text-white text-2xl shadow-lg rounded-lg"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ⚡
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-10 bg-gradient-to-br from-purple-500 to-purple-600 p-4 text-white text-2xl shadow-lg rounded-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                🚀
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT SIDE */}
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
              className="text-5xl font-bold leading-tight mb-8"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              From Strategy to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                {' '}
                Scale
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-800 text-lg leading-relaxed mb-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              Our AI & Data playbooks distill years of experience across
              hundreds of transformations into actionable, step-by-step
              frameworks. Whether you're beginning your AI journey or scaling
              advanced capabilities, we have the playbook for your stage.
            </motion.p>

            <motion.p
              className="text-gray-800 text-lg leading-relaxed mb-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              Each playbook includes strategy templates, implementation
              checklists, risk mitigation strategies, and success metrics.
              Download, customize, and deploy within your
              organization—accelerated support from our experts available upon
              request.
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {[
                {
                  title: '450+ Projects Synthesized',
                  desc: 'Frameworks built from real-world transformations',
                },
                {
                  title: '40-60% Timeline Compression',
                  desc: 'Proven to accelerate implementations significantly',
                },
                {
                  title: 'Immediately Deployable',
                  desc: 'Ready-to-use templates and customizable for your business',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="text-orange-600 text-2xl flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 3: Playbooks Grid --- */}
      <section className="py-24 px-12 lg:px-24 bg-white relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-10 -z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl font-bold text-gray-900 text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Essential <span className="text-orange-600">Playbooks</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Comprehensive resources across every phase of AI transformation—from
            strategy to scale.
          </motion.p>

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
                },
              },
            }}
          >
            {[
              {
                title: 'AI Governance & Ethics Framework',
                description:
                  'Build responsible, auditable AI systems aligned with regulatory requirements',
                category: 'Governance',
                format: 'PDF Guide (28 pages)',
                features: [
                  'Risk Assessment Matrix',
                  'Compliance Checklist',
                  'Ethics Decision Tree',
                ],
                icon: '⚖️',
                color: 'from-orange-600 to-orange-800',
              },
              {
                title: 'Data Modernization Accelerator',
                description:
                  'Step-by-step roadmap for migrating to cloud-native data architectures',
                category: 'Data Engineering',
                format: 'eBook + Templates (45 pages)',
                features: [
                  'Migration Checklist',
                  'Architecture Patterns',
                  'Security Protocols',
                ],
                icon: '🗂️',
                color: 'from-purple-600 to-purple-800',
              },
              {
                title: 'GenAI Adoption Strategy Playbook',
                description:
                  'Navigate generative AI opportunities and risks across your enterprise',
                category: 'Strategy',
                format: 'Interactive Guide (52 pages)',
                features: [
                  'Use Case Finder',
                  'ROI Calculator',
                  'Implementation Timeline',
                ],
                icon: '🤖',
                color: 'from-orange-600 to-orange-800',
              },
              {
                title: 'Building High-Performing Data Teams',
                description:
                  'Organizational design and hiring strategies for sustainable data excellence',
                category: 'Talent & Org',
                format: 'PDF Guide (35 pages)',
                features: ['Role Blueprints', 'Skill Matrices', 'Hiring Guide'],
                icon: '👥',
                color: 'from-green-600 to-green-800',
              },
              {
                title: 'MLOps & ML Lifecycle Management',
                description:
                  'Production-ready framework for deploying and managing ML models at scale',
                category: 'ML Operations',
                format: 'Technical Guide (48 pages)',
                features: [
                  'Pipeline Templates',
                  'Monitoring Dashboards',
                  'Best Practices',
                ],
                icon: '⚙️',
                color: 'from-red-600 to-red-800',
              },
              {
                title: 'Change Management for AI Transformation',
                description:
                  'Organizational readiness and adoption strategies for sustained transformation',
                category: 'Change Mgmt',
                format: 'Workbook + Toolkit (40 pages)',
                features: [
                  'Readiness Assessment',
                  'Communication Plans',
                  'Training Modules',
                ],
                icon: '🎯',
                color: 'from-pink-600 to-pink-800',
              },
            ].map((playbook, idx) => (
              <motion.div
                key={idx}
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden hover:border-orange-600 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  },
                }}
                whileHover={{
                  y: -12,
                  boxShadow: '0 20px 40px rgba(234, 88, 12, 0.2)',
                  transition: { duration: 0.3 },
                }}
              >
                {/* Header Gradient */}
                <motion.div
                  className={`h-32 bg-gradient-to-r ${playbook.color} relative overflow-hidden flex items-center justify-center`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-6xl opacity-80">{playbook.icon}</div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                </motion.div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  <motion.p
                    className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {playbook.category}
                  </motion.p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {playbook.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {playbook.description}
                  </p>

                  {/* Features */}
                  <motion.div
                    className="space-y-2 mb-6"
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
                    {playbook.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="text-xs text-gray-400 flex items-center gap-2"
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                        {feature}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Format & Download */}
                  <div className="border-t border-gray-700 pt-6">
                    <p className="text-xs text-gray-600 mb-4">
                      {playbook.format}
                    </p>
                    <motion.button
                      className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3 rounded-lg hover:from-orange-700 hover:to-orange-600 transition-all flex items-center justify-center gap-2 group-hover:gap-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={18} /> Download Playbook
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Section 4: AI Transformation Timeline --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gray-50"
        id="timeline"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Your AI Transformation{' '}
            <span className="text-orange-600">Journey</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A phased approach to scaling AI—from foundation building to
            enterprise-wide deployment.
          </motion.p>

          <div className="relative">
            {/* Timeline Line Animation */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-600 via-orange-500 to-orange-600 transform -translate-x-1/2 hidden lg:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              style={{ transformOrigin: 'top' }}
            />

            <div className="space-y-12">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Foundation & Strategy (Weeks 1-4)',
                  description:
                    'Assess organizational readiness, define use cases, establish governance framework, and secure leadership alignment.',
                  tasks: [
                    'Conduct AI Readiness Assessment',
                    'Define High-Impact Use Cases (Top 5)',
                    'Build Governance & Risk Framework',
                    'Allocate Resources & Budget',
                  ],
                  icon: '📋',
                },
                {
                  phase: 'Phase 2',
                  title: 'Architecture & Acceleration (Weeks 5-12)',
                  description:
                    'Design data infrastructure, activate accelerators, and build proof-of-concepts for top use cases.',
                  tasks: [
                    'Cloud Architecture Design',
                    'Data Platform Setup & Integration',
                    'Deploy First Accelerators',
                    'POC & Pilot Development',
                  ],
                  icon: '🏗️',
                },
                {
                  phase: 'Phase 3',
                  title: 'Capability Building (Months 4-6)',
                  description:
                    'Expand team capabilities, scale successful pilots, and develop custom solutions for enterprise needs.',
                  tasks: [
                    'Build AI-Ready Data Foundation',
                    'Scale Successful POCs',
                    'Deploy Advanced Analytics',
                    'Establish ML Infrastructure',
                  ],
                  icon: '📈',
                },
                {
                  phase: 'Phase 4',
                  title: 'Scale & Optimize (Month 7+)',
                  description:
                    'Enterprise-wide deployment, continuous optimization, and sustaining momentum for ongoing innovation.',
                  tasks: [
                    'Production Deployment at Scale',
                    'Governance & Compliance Audit',
                    'Performance Optimization',
                    'Enterprise Adoption & Support',
                  ],
                  icon: '🚀',
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`${
                    idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex items-center gap-12`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="flex-1 bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <span className="text-xl font-bold text-orange-600">
                      {step.phase}
                    </span>

                    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                      {step.title}
                    </h3>

                    <p className="text-gray-700 mb-6">{step.description}</p>

                    <div className="space-y-2">
                      {step.tasks.map((task, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 text-sm text-gray-600"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          <span className="flex-shrink-0 w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold">
                            ✓
                          </span>
                          {task}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Timeline Dot */}
                  <motion.div
                    className="hidden lg:flex flex-col items-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <div className="w-16 h-16 bg-white border-4 border-orange-600 rounded-full flex items-center justify-center text-3xl shadow-lg z-10 relative">
                      {step.icon}
                    </div>
                  </motion.div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- Section 5: Success Metrics --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gradient-to-r from-orange-50 to-orange-100 text-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Expected Outcomes by Phase
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
                phase: 'Phase 1',
                metrics: [
                  '100% Readiness Assessment Complete',
                  '5+ Qualified Use Cases Identified',
                  'AI Budget & Resources Allocated',
                  'Governance Framework Established',
                ],
              },
              {
                phase: 'Phase 2',
                metrics: [
                  'Cloud Infrastructure Deployed',
                  '3+ POCs in Development',
                  'Data Strategy Finalized',
                  '40% Expected Time Savings',
                ],
              },
              {
                phase: 'Phase 3',
                metrics: [
                  '$2-5M Incremental Revenue Identified',
                  'First Models in Pilot Production',
                  'Team Capability +60%',
                  'Governance Compliance: 100%',
                ],
              },
              {
                phase: 'Phase 4',
                metrics: [
                  '15-25% Annual Productivity Gain',
                  '340% ROI Typical Achievement',
                  'Enterprise-Wide Adoption >80%',
                  'Sustained Innovation Velocity',
                ],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className="bg-white/95 p-8 rounded-xl border border-orange-200 hover:border-orange-600 hover:shadow-lg hover:shadow-orange-500/20 transition-all"
              >
                <motion.p
                  className="text-orange-600 font-bold text-sm mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.phase}
                </motion.p>

                <div className="space-y-3">
                  {item.metrics.map((metric, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <span className="text-orange-600 mt-1">→</span>
                      <span className="text-gray-900">{metric}</span>
                    </motion.div>
                  ))}
                </div>
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
              Playbook <span className="text-orange-600">FAQs</span>
            </h2>
          </div>
          <div className="lg:w-3/4 space-y-4">
            {[
              {
                q: 'Are these playbooks industry-specific?',
                a: 'Our playbooks are designed as enterprise-agnostic frameworks that address universal AI transformation challenges. However, we provide industry-specific examples and use case libraries for banking, healthcare, retail, manufacturing, and telecom.',
              },
              {
                q: 'Can I customize the playbooks for my organization?',
                a: 'Absolutely! All playbooks are provided in editable formats with templates, checklists, and customizable frameworks. Our expert team can also conduct structured workshops to tailor frameworks to your specific context.',
              },
              {
                q: 'What support do you provide with the playbooks?',
                a: 'Playbooks are available as self-service downloads. Additionally, we offer implementation support programs ranging from advisory consultations to embedded team engagements for organizations seeking hands-on guidance.',
              },
              {
                q: 'How frequently are playbooks updated?',
                a: 'We update our playbooks quarterly to reflect emerging AI trends, new regulatory requirements, and learnings from our latest implementations. Subscribers receive automatic updates and access to the latest versions.',
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

export default DataAIPlaybooks;
