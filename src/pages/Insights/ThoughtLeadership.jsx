import React, { useState, useEffect } from 'react';
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

  return (
    <div className="font-sans antialiased">
      {/* --- Section 1: Hero Banner with Parallax --- */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
        </div>

        <div className="px-6 lg:px-24 max-w-4xl mx-auto">
          <nav className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-90">
            <span>Home</span> / <span>Insights</span> /{' '}
            <span className="text-orange-500">Thought Leadership</span>
          </nav>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-down">
            Forward-Thinking Perspectives
          </h1>
          <p className="text-xl lg:text-2xl font-light italic mb-8">
            Strategic Insights on AI, Data, and Digital Transformation
          </p>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Expert perspectives from Tredence leaders on emerging technologies,
            enterprise transformation trends, and the future of AI-driven
            decision-making.
          </p>
        </div>
      </section>

      {/* --- Section 2: Featured Article (Hero Block) --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
              alt="Featured Article"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-12 z-20">
              <p className="text-orange-300 text-sm font-bold tracking-widest uppercase mb-4">
                Featured Article
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                The Future of Enterprise AI: From Hype to Hyperscale Reality
              </h2>
              <p className="text-lg text-gray-100 max-w-2xl mb-8">
                Why organizations that treat AI as a strategic asset—not a cost
                center—will win the next decade. A framework for moving beyond
                pilots to production-scale impact.
              </p>

              <div className="flex flex-col md:flex-row md:items-center gap-6 text-gray-100">
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

                <button className="mt-auto md:mt-0 md:ml-auto inline-flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors group-hover:gap-4">
                  Read Article <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Content + Sidebar --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-bold mb-12">
              Latest <span className="text-orange-600">Perspectives</span>
            </h2>

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
                <article
                  key={idx}
                  className="pb-12 border-b border-gray-300 last:border-b-0 group hover:bg-white p-8 -m-8 rounded-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="h-48 rounded-lg overflow-hidden bg-orange-600">
                        <img
                          src={article.image}
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
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60"
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
                        <button className="text-orange-600 font-bold flex items-center gap-2 hover:gap-4 transition-all group-hover:text-orange-700">
                          Read Article <ChevronRight size={18} />
                        </button>
                        <button className="text-gray-400 hover:text-orange-600 transition-colors">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Subscribe CTA */}
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-8 rounded-lg mb-12 sticky top-24">
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
            </div>

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
          </div>
        </div>
      </section>

      {/* --- Section 4: Experts Grid --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Meet the <span className="text-orange-600">Visionaries</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Industry veterans and thought leaders who are shaping the future of
            enterprise AI.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div
                key={idx}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all group"
              >
                <div className="h-64 overflow-hidden bg-orange-600">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">{expert.name}</h3>
                  <p className="text-orange-600 font-bold text-sm mb-2">
                    {expert.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-6">{expert.focus}</p>
                  <button className="text-orange-600 font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all w-full">
                    Follow <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* --- Section 6: CTA Section --- */}
      <section className="relative pt-20">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-600 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-[#fff1ea] shadow-2xl p-10 lg:p-16 rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Sharpen Your Strategic Thinking
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
                Subscribe to our thought leadership newsletter and stay ahead of
                enterprise AI and data transformation trends. Get exclusive
                insights, research reports, and expert commentary delivered to
                your inbox.
              </p>

              <div className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    className="flex-1 px-6 py-4 border-2 border-orange-300 rounded-lg outline-none focus:border-orange-600 text-lg"
                  />
                  <button className="bg-orange-600 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors rounded-lg whitespace-nowrap">
                    Subscribe Now
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  ✓ No spam • ✓ Industry insights • ✓ Unsubscribe anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThoughtLeadership;
