import React, { useState, useEffect } from 'react';
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
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-blue-900/60"></div>
        </div>

        <div className="px-6 lg:px-24 max-w-4xl mx-auto">
          <nav className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-90">
            <span>Home</span> / <span>Insights</span> /{' '}
            <span className="text-blue-400">Data & AI Playbooks</span>
          </nav>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
            Your AI Transformation Playbook
          </h1>
          <p className="text-xl lg:text-2xl font-light mb-8 text-blue-100">
            Practical, Proven Frameworks for Enterprise AI Excellence
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Access battle-tested playbooks, implementation guides, and
            acceleration frameworks that compress AI transformation timelines by
            40-60%. Built from 450+ successful projects.
          </p>
        </div>
      </section>

      {/* --- Section 2: Content + Visual Section --- */}
      <section className="py-24 px-12 lg:px-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            {/* Animated gradient background */}
            <div className="absolute -top-10 left-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -z-0"></div>
            <div className="absolute -bottom-10 right-10 w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-20 -z-0"></div>

            <div className="relative z-10 flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
                alt="AI Playbook"
                className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-blue-600 p-4 text-white text-2xl shadow-lg rounded-lg">
                🎯
              </div>
              <div className="absolute top-20 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 p-4 text-white text-2xl shadow-lg rounded-lg">
                ⚡
              </div>
              <div className="absolute -bottom-6 right-10 bg-gradient-to-br from-purple-500 to-purple-600 p-4 text-white text-2xl shadow-lg rounded-lg">
                🚀
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              From Strategy to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                {' '}
                Scale
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our AI & Data playbooks distill years of experience across
              hundreds of transformations into actionable, step-by-step
              frameworks. Whether you're beginning your AI journey or scaling
              advanced capabilities, we have the playbook for your stage.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Each playbook includes strategy templates, implementation
              checklists, risk mitigation strategies, and success metrics.
              Download, customize, and deploy within your
              organization—accelerated support from our experts available upon
              request.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-blue-400 text-2xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-bold text-white">
                    450+ Projects Synthesized
                  </p>
                  <p className="text-gray-400 text-sm">
                    Frameworks built from real-world transformations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-blue-400 text-2xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-bold text-white">
                    40-60% Timeline Compression
                  </p>
                  <p className="text-gray-400 text-sm">
                    Proven to accelerate implementations significantly
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-blue-400 text-2xl flex-shrink-0">✓</div>
                <div>
                  <p className="font-bold text-white">Immediately Deployable</p>
                  <p className="text-gray-400 text-sm">
                    Ready-to-use templates and customizable for your business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Playbooks Grid --- */}
      <section className="py-24 px-12 lg:px-24 bg-black relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10 -z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Essential <span className="text-blue-400">Playbooks</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Comprehensive resources across every phase of AI transformation—from
            strategy to scale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                color: 'from-blue-600 to-blue-800',
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
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Header Gradient */}
                <div
                  className={`h-32 bg-gradient-to-r ${playbook.color} relative overflow-hidden flex items-center justify-center`}
                >
                  <div className="text-6xl opacity-80">{playbook.icon}</div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                </div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
                    {playbook.category}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {playbook.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {playbook.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {playbook.features.map((feature, i) => (
                      <div
                        key={i}
                        className="text-xs text-gray-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Format & Download */}
                  <div className="border-t border-gray-700 pt-6">
                    <p className="text-xs text-gray-500 mb-4">
                      {playbook.format}
                    </p>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 group-hover:gap-4">
                      <Download size={18} /> Download Playbook
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: AI Transformation Timeline --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50" id="timeline">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Your AI Transformation{' '}
            <span className="text-orange-600">Journey</span>
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            A phased approach to scaling AI—from foundation building to
            enterprise-wide deployment.
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-orange-600 to-blue-600 transform -translate-x-1/2 hidden lg:block"></div>

            {/* Timeline Steps */}
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
                <div
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex items-center gap-12 transition-all duration-700 ${
                    visibleSteps[idx]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <span className="text-xl font-bold text-orange-600">
                      {step.phase}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>

                    <div className="space-y-2">
                      {step.tasks.map((task, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm text-gray-600"
                        >
                          <span className="flex-shrink-0 w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold">
                            ✓
                          </span>
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex flex-col items-center">
                    <div className="w-16 h-16 bg-white border-4 border-orange-600 rounded-full flex items-center justify-center text-3xl shadow-lg z-10 relative">
                      {step.icon}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 5: Success Metrics --- */}
      <section className="py-24 px-12 lg:px-24 bg-gradient-to-r from-blue-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Expected Outcomes by Phase
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-blue-400 hover:bg-white/20 transition-all"
              >
                <p className="text-blue-400 font-bold text-sm mb-6">
                  {item.phase}
                </p>
                <div className="space-y-3">
                  {item.metrics.map((metric, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-blue-400 mt-1">→</span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* --- Section 7: CTA Section --- */}
      <section className="relative pt-20">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-blue-600 to-orange-600 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-gradient-to-br from-[#fff1ea] to-white shadow-2xl p-10 lg:p-16 rounded-xl">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-8">
                  Accelerate Your AI Journey
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Download our AI Transformation Playbooks today and start your
                  journey to enterprise AI excellence. Templates, frameworks,
                  and proven methodologies ready to deploy.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-orange-600 font-bold">✓</span> 6
                    Comprehensive Playbooks
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-orange-600 font-bold">✓</span>{' '}
                    Immediately Customizable Templates
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-orange-600 font-bold">✓</span> Expert
                    Support Available
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First name"
                      className="border-b-2 border-orange-300 py-3 outline-none focus:border-orange-600 w-full text-gray-900"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="border-b-2 border-orange-300 py-3 outline-none focus:border-orange-600 w-full text-gray-900"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-full border-b-2 border-orange-300 py-3 outline-none focus:border-orange-600 text-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full border-b-2 border-orange-300 py-3 outline-none focus:border-orange-600 text-gray-900"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:from-blue-700 hover:to-orange-700 transition-all rounded-lg flex items-center justify-center gap-2"
                  >
                    <Download size={18} /> Download All Playbooks
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAIPlaybooks;
