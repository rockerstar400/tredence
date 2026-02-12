import React, { useState } from 'react';
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
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/75 to-purple-900/60"></div>
        </div>

        {/* Animated glow effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>

        <div className="px-6 lg:px-24 max-w-4xl mx-auto relative z-10">
          <nav className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-90">
            <span>Services</span> /{' '}
            <span className="text-blue-400">LLMOps</span>
          </nav>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Operationalizing Large Language Models with Confidence
          </h1>
          <p className="text-2xl lg:text-3xl font-light italic mb-8 text-blue-100">
            From Experimentation to Enterprise-Grade LLM Deployment
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Large language models are revolutionary—but bringing them to
            production at scale requires engineering discipline, governance
            rigor, and operational maturity. We help enterprises move from
            ChatGPT experiments to production LLM systems driving measurable
            business value.
          </p>
        </div>
      </section>

      {/* --- Section 2: The LLMOps Challenge --- */}
      <section className="py-24 px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto relative">
          {/* Background glow */}
          <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"></div>

          <h2 className="text-4xl font-bold text-center mb-16 relative z-10 text-white">
            From Experimental{' '}
            <span className="text-blue-400">to Enterprise-Ready</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Challenges */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-950/20 border border-red-500/30 p-10 rounded-lg">
              <h3 className="text-2xl font-bold text-red-300 mb-8 flex items-center gap-3">
                <span>⚠️</span> Common LLM Challenges
              </h3>
              <ul className="space-y-4">
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
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-gray-300"
                  >
                    <span className="text-red-400 font-bold flex-shrink-0 mt-1">
                      ×
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-950/20 border border-blue-500/30 p-10 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-300 mb-8 flex items-center gap-3">
                <span>✓</span> LLMOps Solutions
              </h3>
              <ul className="space-y-4">
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
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-gray-300"
                  >
                    <span className="text-blue-400 font-bold flex-shrink-0 mt-1">
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

      {/* --- Section 3: Core LLMOps Capabilities --- */}
      <section className="py-24 px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            LLMOps <span className="text-blue-400">Capabilities</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div
                key={idx}
                className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: LLMOps Platform Stack --- */}
      <section className="py-24 px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Technology <span className="text-blue-400">Ecosystem</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg text-center hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all group"
              >
                <p className="text-xs text-blue-400 font-bold uppercase mb-2">
                  {tech.category}
                </p>
                <p className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: Implementation Roadmap --- */}
      <section className="py-24 px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            LLMOps Implementation <span className="text-blue-400">Roadmap</span>
          </h2>

          <div className="space-y-8">
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
              <div
                key={idx}
                className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-lg hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">{item.phase}</h3>
                  <span className="bg-blue-500/20 text-blue-400 px-4 py-1 text-sm font-bold rounded-full whitespace-nowrap ml-4">
                    {item.timeline}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.activities.map((activity, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight
                        size={18}
                        className="text-blue-400 flex-shrink-0 mt-0.5"
                      />
                      <p className="text-gray-300">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 6: Success Metrics --- */}
      <section className="py-24 px-12 lg:px-24 bg-gradient-to-r from-blue-950 to-purple-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Expected Outcomes & <span className="text-blue-400">ROI</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-lg text-center backdrop-blur-sm hover:border-blue-500 transition-all"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {item.metric}
                </div>
                <p className="font-bold text-white mb-3">{item.label}</p>
                <p className="text-sm text-gray-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 7: FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold text-white">
              LLMOps <span className="text-blue-400">FAQs</span>
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
                className="border-b border-gray-700 bg-gray-900 p-6 -mx-6 rounded-lg"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full py-4 flex justify-between items-center text-left hover:text-blue-400 transition-colors"
                >
                  <span className="text-lg font-bold text-white pr-8">
                    {faq.q}
                  </span>
                  {activeFaq === idx ? (
                    <ChevronUp
                      size={20}
                      className="flex-shrink-0 text-blue-400"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="flex-shrink-0 text-gray-500"
                    />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="pb-4 text-gray-400 text-sm leading-relaxed border-t border-gray-700 pt-4 animate-fade-in">
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
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-blue-600 to-purple-600 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-gradient-to-br from-gray-900 to-black shadow-2xl p-10 lg:p-16 flex flex-col lg:flex-row gap-12 rounded-lg border border-gray-800">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-8 text-white">
                Ready to Operationalize LLMs at Scale?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Let's discuss your LLM initiatives and build a roadmap to
                enterprise-grade, cost-optimized, production-ready systems.
              </p>
            </div>
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First name"
                    className="bg-gray-800/50 border-b border-blue-400/50 py-3 outline-none focus:border-blue-400 w-full text-white placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="bg-gray-800/50 border-b border-blue-400/50 py-3 outline-none focus:border-blue-400 w-full text-white placeholder-gray-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="bg-gray-800/50 border-b border-blue-400/50 py-3 outline-none focus:border-blue-400 w-full text-white placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="bg-gray-800/50 border-b border-blue-400/50 py-3 outline-none focus:border-blue-400 w-full text-white placeholder-gray-500"
                />
                <textarea
                  placeholder="Describe your LLM initiatives"
                  rows="3"
                  className="bg-gray-800/50 border-b border-blue-400/50 py-3 outline-none focus:border-blue-400 w-full resize-none text-white placeholder-gray-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:from-blue-700 hover:to-purple-700 transition-all rounded-sm"
                >
                  Schedule LLMOps Consultation
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

export default LLMOps;
