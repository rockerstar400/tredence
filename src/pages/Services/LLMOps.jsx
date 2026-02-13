import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  Cpu,
  GitBranch,
  BarChart3,
  Lock,
} from 'lucide-react';
import Footer from '../../components/Footer';

const LLMOps = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="font-sans antialiased">
      {/* --- Section 1: Hero Banner with Dark Theme --- */}
      <motion.section
        className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/75 to-purple-900/60"></div>
        </motion.div>

        {/* Animated glow effects */}
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
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
              <span className="text-orange-600">LLMOps</span>
          </motion.nav>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Operationalizing Large Language Models with Confidence
          </motion.h1>

          <motion.p
            className="text-2xl lg:text-3xl font-light italic mb-8 text-orange-100"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            From Experimentation to Enterprise-Grade LLM Deployment
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Large language models are revolutionary—but bringing them to
            production at scale requires engineering discipline, governance
            rigor, and operational maturity. We help enterprises move from
            ChatGPT experiments to production LLM systems driving measurable
            business value.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* --- Section 2: The LLMOps Challenge --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto relative">
          {/* Animated Background Glow */}
          <motion.div
            className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <motion.h2
            className="text-4xl font-bold text-center mb-16 relative z-10 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            From Experimental
              <span className="text-orange-600">to Enterprise-Ready</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Challenges Panel */}
            <motion.div
              className="bg-gradient-to-br from-orange-50/80 to-orange-100/80 border border-orange-300 p-10 rounded-lg"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -6 }}
            >
              <h3 className="text-2xl font-bold text-orange-700 mb-8 flex items-center gap-3">
                <span>⚠️</span> Common LLM Challenges
              </h3>

              <motion.ul
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {[
                  'Model versioning and rollback complexity',
                  'Prompt engineering without reproducibility',
                  'Cost explosion from API overuse',
                  'Latency and reliability at scale',
                  'Hallucination and factuality risks',
                  'Data privacy and security compliance',
                  'Limited observability into model behavior',
                  'Difficulty measuring model performance',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-4 text-black"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <span className="text-orange-600 font-bold flex-shrink-0 mt-1">
                      ×
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Solutions Panel */}
            <motion.div
              className="bg-gradient-to-br from-orange-50/80 to-orange-100/80 border border-orange-300 p-10 rounded-lg"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -6 }}
            >
              <h3 className="text-2xl font-bold text-orange-700 mb-8 flex items-center gap-3">
                <span>✓</span> LLMOps Solutions
              </h3>

              <motion.ul
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {[
                  'Reproducible prompt engineering frameworks',
                  'Model API cost optimization & monitoring',
                  'Production-grade caching & rate limiting',
                  'Latency optimization & fallback strategies',
                  'Factuality verification & RAG integration',
                  'Data governance & PII protection',
                  'Comprehensive observability & monitoring',
                  'A/B testing & performance measurement',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-4 text-black"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <span className="text-orange-600 font-bold flex-shrink-0 mt-1">
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

      {/* --- Section 3: Core LLMOps Capabilities --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Subtle animated background glow */}
        <motion.div
          className="absolute top-20 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            LLMOps <span className="text-orange-600">Capabilities</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              {
                title: 'Prompt Engineering Pipelines',
                description:
                  'Versioned, reproducible prompt management. A/B testing, performance metrics, and collaboration workflows.',
                icon: <GitBranch className="w-8 h-8" />,
              },
              {
                title: 'Model Monitoring & Observability',
                description:
                  'Real-time model performance tracking, quality metrics, cost monitoring, and anomaly detection.',
                icon: <BarChart3 className="w-8 h-8" />,
              },
              {
                title: 'Fine-Tuning & Adaptation',
                description:
                  'Custom model fine-tuning for domain-specific performance. Transfer learning and few-shot optimization.',
                icon: <Cpu className="w-8 h-8" />,
              },
              {
                title: 'RAG & Knowledge Integration',
                description:
                  'Retrieval-augmented generation for fact-grounding. Integration with knowledge bases and domain data.',
                icon: <Zap className="w-8 h-8" />,
              },
              {
                title: 'AI Governance & Compliance',
                description:
                  'Responsible AI frameworks, bias detection, explainability, and regulatory compliance automation.',
                icon: <Shield className="w-8 h-8" />,
              },
              {
                title: 'Production Deployment',
                description:
                  'Multi-model orchestration, fallback strategies, cost optimization, and performance guarantees.',
                icon: <Lock className="w-8 h-8" />,
              },
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:border-orange-600 transition-all hover:shadow-xl hover:shadow-orange-600/20"
                variants={{
                  hidden: { opacity: 0, y: 60 },
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

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
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

      {/* --- Section 4: LLMOps Platform Stack --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Subtle Animated Background Glow */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Technology <span className="text-orange-600">Ecosystem</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {[
              { name: 'OpenAI', category: 'LLM Provider' },
              { name: 'Anthropic Claude', category: 'LLM Provider' },
              { name: 'Google GenAI', category: 'LLM Provider' },
              { name: 'Meta Llama', category: 'Open Source' },
              { name: 'LangChain', category: 'Framework' },
              { name: 'Guardrails AI', category: 'Governance' },
              { name: 'Weights & Biases', category: 'Monitoring' },
              { name: 'Vellum', category: 'Prompt Mgmt' },
              { name: 'Arize AI', category: 'Observability' },
              { name: 'Prompt Flow', category: 'Orchestration' },
              { name: 'Ray Serve', category: 'Inference' },
              { name: 'Hugging Face', category: 'Model Hub' },
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg text-center hover:border-orange-600 hover:shadow-lg hover:shadow-orange-600/20 transition-all"
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.07, y: -4 }}
              >
                <motion.p
                  className="text-xs text-orange-600 font-bold uppercase mb-2"
                  whileHover={{ letterSpacing: '1px' }}
                  transition={{ duration: 0.2 }}
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

      {/* --- Section 5: Implementation Roadmap --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Subtle animated glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-white">LLMOps Implementation</span> <span className="text-orange-600">Roadmap</span>
          </motion.h2>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              {
                phase: 'Phase 1: Experimentation & Assessment',
                timeline: 'Weeks 1-4',
                activities: [
                  'Current LLM initiatives audit',
                  'Use case prioritization workshop',
                  'Cost, latency, and quality benchmarking',
                  'Governance & compliance requirements mapping',
                ],
              },
              {
                phase: 'Phase 2: Foundation & Orchestration',
                timeline: 'Weeks 5-12',
                activities: [
                  'LLMOps platform setup and integration',
                  'Prompt engineering framework implementation',
                  'Model versioning and deployment pipeline',
                  'Initial monitoring and observability setup',
                ],
              },
              {
                phase: 'Phase 3: Intelligence & Optimization',
                timeline: 'Weeks 13-20',
                activities: [
                  'RAG integration for fact-grounding',
                  'Fine-tuning for domain adaptation',
                  'Performance optimization & cost reduction',
                  'Governance framework automation',
                ],
              },
              {
                phase: 'Phase 4: Production & Scale',
                timeline: 'Weeks 21-28',
                activities: [
                  'Enterprise deployment & scaling',
                  'Multi-model orchestration',
                  'Advanced monitoring and incident response',
                  'Team training & operational handoff',
                ],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 p-8 rounded-lg hover:border-orange-600 hover:shadow-lg hover:shadow-orange-600/20 transition-all"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.h3
                  className="text-xl font-bold text-gray-900"
                  whileHover={{ color: '#ea580c' }}
                  >
                    {item.phase}
                  </motion.h3>

                  <motion.span
                    className="bg-orange-500/20 text-orange-600 px-4 py-1 text-sm font-bold rounded-full whitespace-nowrap ml-4"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
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
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                >
                  {item.activities.map((activity, i) => (
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
                      <p className="text-gray-700">{activity}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 6: Success Metrics --- */}
      <motion.section
        className="py-24 px-12 lg:px-24 bg-gradient-to-r from-orange-50 to-orange-100 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
           <span className="text-black">Expected Outcomes & </span> <span className="text-orange-600">ROI</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {[
              {
                metric: '60-75%',
                label: 'Cost Reduction',
                detail: 'Through API optimization and model caching',
              },
              {
                metric: '10x',
                label: 'Faster Deployment',
                detail: 'From weeks to days for new model versions',
              },
              {
                metric: '95%+',
                label: 'Quality Consistency',
                detail: 'Through monitoring and governance automation',
              },
              {
                metric: '<100ms',
                label: 'P95 Latency',
                detail: 'Production-grade response times',
              },
              {
                metric: '3-6 months',
                label: 'ROI Payback',
                detail: 'Typical timeline to positive business impact',
              },
              {
                metric: '100%',
                label: 'Compliance',
                detail: 'Regulatory and governance requirements met',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-gradient-to-br from-gray-100/50 to-white/50 border border-orange-300 rounded-lg text-center backdrop-blur-sm hover:border-orange-600 transition-all"
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 0px 30px rgba(59,130,246,0.3)',
                }}
              >
                <motion.div
                  className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {item.metric}
                </motion.div>

                <p className="font-bold text-gray-900 mb-3">{item.label}</p>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- Section 7: FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold text-gray-900">
              LLMOps <span className="text-orange-600">FAQs</span>
            </h2>
          </div>
          <div className="lg:w-3/4 space-y-4">
            {[
              {
                q: 'Should we use closed-source models like GPT-4 or open-source alternatives?',
                a: 'It depends on your use case, cost structure, and control requirements. We evaluate both and often recommend a hybrid approach—using closed-source for high-quality output and open-source for cost-sensitive workloads.',
              },
              {
                q: 'How do we prevent LLM hallucinations in production?',
                a: 'Through RAG (retrieval-augmented generation), fact-checking layers, and model output validation. We implement multiple safeguards ensuring only factually grounded responses reach users.',
              },
              {
                q: 'What are typical LLM API costs and how do we optimize them?',
                a: 'Costs vary dramatically by model and usage. We implement caching, prompt optimization, batching, and selective model usage reducing costs by 60-75% typically.',
              },
              {
                q: 'How do we handle data privacy with LLM APIs?',
                a: 'We implement PII redaction, data minimization, and option for on-premises LLM deployment where sensitive data is involved. Compliance frameworks ensure regulatory adherence.',
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
                  <span className="text-lg font-bold text-gray-900 pr-8">
                    {faq.q}
                  </span>
                  {activeFaq === idx ? (
                    <ChevronUp
                      size={20}
                      className="flex-shrink-0 text-orange-600"
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

export default LLMOps;
