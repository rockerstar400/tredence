import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Star,
  Play,
  Quote,
} from 'lucide-react';
import Footer from '../../components/Footer';

const CustomerVoice = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [npsCounter, setNpsCounter] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  // NPS Counter animation
  useEffect(() => {
    const target = 94;
    const duration = 2000;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setNpsCounter(Math.floor(target * progress));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="px-6 lg:px-24 max-w-4xl mx-auto">
          <nav className="mb-12 text-sm font-medium flex justify-center gap-2 opacity-90">
            <span>Home</span> / <span>Insights</span> /{' '}
            <span className="text-orange-500">Customer Voice</span>
          </nav>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
            Customer Stories
          </h1>
          <p className="text-2xl lg:text-4xl font-light italic mb-8">
            Real Impact, Real Results, Real Customer Voices
          </p>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Hear directly from our customers how Tredence partnerships have
            transformed their businesses, solved their biggest challenges, and
            accelerated their digital evolution.
          </p>
        </div>
      </section>

      {/* --- Section 2: NPS Highlight Section --- */}
      <section className="py-24 px-12 lg:px-24 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center">
              <div className="mb-8">
                <div className="text-8xl font-bold text-orange-600">
                  {npsCounter}
                  <span className="text-6xl">%</span>
                </div>
                <p className="text-2xl font-bold text-gray-900 mt-4">
                  Customer Satisfaction Score
                </p>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our Net Promoter Score reflects the depth of customer
                satisfaction and advocacy. This isn't just a number—it's a
                testament to the transformative impact we deliver and the
                trusted partnerships we build.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <Star size={20} className="text-orange-600" />
                  <span>94% customers recommend us</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <Star size={20} className="text-orange-600" />
                  <span>340% average ROI delivered</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <Star size={20} className="text-orange-600" />
                  <span>8.6/10 satisfaction rating</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                alt="Customer Satisfaction"
                className="rounded-xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Featured Testimonial Carousel --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Customers Say
          </h2>

          <div className="relative border-l-4 border-orange-600 pl-12 py-8 mb-12">
            {/* Quote Icon */}
            <div className="absolute -left-8 top-0 bg-orange-600 text-white p-4 rounded-lg">
              <Quote size={28} />
            </div>

            {/* Testimonials Carousel */}
            <div className="space-y-12">
              {[
                {
                  quote:
                    "Tredence didn't just implement a data warehouse—they transformed our entire approach to decision-making. Within 6 months, we went from reactive to predictive across every business unit. The ROI has been extraordinary, but the real value is in the competitive advantage we've gained.",
                  author: 'Sarah Chen',
                  title: 'Chief Data Officer',
                  company: 'Global Financial Services Firm',
                  image:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
                  companyLogo:
                    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=200',
                },
                {
                  quote:
                    "What impressed us most wasn't just Tredence's technical expertise—it was their deep understanding of healthcare. They spoke our language, understood our compliance requirements, and delivered a solution that clinicians actually want to use. Patient outcomes have visibly improved.",
                  author: 'Dr. Michael Patel',
                  title: 'Chief Medical Officer',
                  company: 'Multi-Hospital Healthcare Network',
                  image:
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
                  companyLogo:
                    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=200',
                },
                {
                  quote:
                    "Our inventory optimization savings alone have paid for the engagement multiple times over. But beyond the numbers, Tredence helped us build internal capabilities so we're not dependent on consultants. That's true partnership.",
                  author: 'James Wellington',
                  title: 'VP Supply Chain',
                  company: 'International Retail Corporation',
                  image:
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
                  companyLogo:
                    'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=200',
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-500 ${
                    selectedTestimonial === idx
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 absolute translate-x-8'
                  }`}
                  style={{
                    pointerEvents:
                      selectedTestimonial === idx ? 'auto' : 'none',
                  }}
                >
                  <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 mb-10 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-xl text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-orange-600 font-bold mb-1">
                        {testimonial.title}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {testimonial.company}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={16}
                              className="text-orange-600"
                              fill="currentColor"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-6 mt-12">
              <button
                onClick={() =>
                  setSelectedTestimonial(
                    selectedTestimonial === 0 ? 2 : selectedTestimonial - 1
                  )
                }
                className="p-3 border border-gray-300 rounded-lg hover:border-orange-600 hover:bg-orange-50 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-3">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedTestimonial(i)}
                    className={`w-4 h-4 rounded-full transition-all ${
                      selectedTestimonial === i
                        ? 'bg-orange-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setSelectedTestimonial(
                    selectedTestimonial === 2 ? 0 : selectedTestimonial + 1
                  )
                }
                className="p-3 border border-gray-300 rounded-lg hover:border-orange-600 hover:bg-orange-50 transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Video Testimonials Grid --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Video <span className="text-orange-600">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Hear directly from customer executives about their transformation
            journey with Tredence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title:
                  'Accelerating Digital Transformation at a Fortune 500 Bank',
                customer: 'Global Bank Corporate',
                duration: '5:32',
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
              },
              {
                title:
                  'Modernizing Patient Experience Through Data Integration',
                customer: 'Large Healthcare Network',
                duration: '4:18',
                image:
                  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
              },
              {
                title: 'Winning Market Share with AI-Driven Retail Analytics',
                customer: 'Major Retailer',
                duration: '6:15',
                image:
                  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600',
              },
            ].map((video, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Video Thumbnail */}
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded">
                  {video.duration}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                  <h3 className="font-bold mb-2 group-hover:text-orange-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-300">{video.customer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: Customer Highlights Grid --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Customers{' '}
            <span className="text-orange-600">Trust Tredence</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'End-to-End Transformation',
                description:
                  'From strategy through design, build, and scale—we handle every phase with accountability and expertise.',
                icon: '🎯',
              },
              {
                title: 'Industry Domain Expertise',
                description:
                  'Deep knowledge of banking, healthcare, retail, and other sectors ensures relevance and compliance.',
                icon: '🏆',
              },
              {
                title: 'Proven Accelerators',
                description:
                  '450+ successful projects have yielded battle-tested frameworks that compress timelines by 40-60%.',
                icon: '⚡',
              },
              {
                title: 'Partnership Philosophy',
                description:
                  'We embed with your teams, transfer knowledge, and build sustainable internal capabilities.',
                icon: '🤝',
              },
              {
                title: 'Measurable ROI',
                description:
                  '340% average ROI delivered—we align our success with your business outcomes, not activity.',
                icon: '📈',
              },
              {
                title: 'Innovation at Scale',
                description:
                  'Access to 150+ AI/ML accelerators and 12+ GenAI agents that turn strategy into impact quickly.',
                icon: '🚀',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 6: Success Stories Spotlight --- */}
      <section className="py-24 px-12 lg:px-24 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Transformation <span className="text-orange-600">Stories</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'From Siloed Data to Real-Time Intelligence',
                company: 'Global Insurance Provider',
                challenge:
                  'Data spread across 40+ fragmented systems with no unified view for decision-making.',
                solution:
                  'Deployed a unified data platform with AI-driven analytics and real-time dashboards.',
                results: [
                  '$18M annual cost reduction through optimized claims processing',
                  '45% faster underwriting with AI risk models',
                  'Customer lifetime value increased by 32%',
                ],
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
              },
              {
                title: 'Converting Data Insights into Market Leadership',
                company: 'Multi-National CPG Corporation',
                challenge:
                  'Unable to compete with agile competitors due to slow demand forecasting and inventory management.',
                solution:
                  'Implemented AI-powered demand planning and supply chain optimization platform.',
                results: [
                  '$22M reduction in excess inventory',
                  '94% forecast accuracy (up from 67%)',
                  '15 days reduction in time-to-market',
                ],
                image:
                  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600',
              },
            ].map((story, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-10">
                  <p className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-3">
                    {story.company}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {story.title}
                  </h3>

                  <div className="space-y-6 mb-8">
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

                  <div>
                    <p className="text-sm font-bold text-gray-600 uppercase mb-4">
                      Results
                    </p>
                    <div className="space-y-3">
                      {story.results.map((result, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg"
                        >
                          <span className="text-orange-600 font-bold flex-shrink-0 mt-0.5">
                            ✓
                          </span>
                          <p className="text-sm text-gray-800">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all text-lg">
              See All Customer Stories <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* --- Section 7: FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold">
              Customer <span className="text-orange-600">FAQs</span>
            </h2>
          </div>
          <div className="lg:w-3/4 space-y-4">
            {[
              {
                q: 'How long does a typical transformation take?',
                a: 'Most transformations span 6-18 months depending on scope and complexity. We deliver quick wins in the first 90 days to demonstrate value while building toward sustained business impact.',
              },
              {
                q: 'Will you help us build internal AI capabilities?',
                a: 'Absolutely—knowledge transfer and capability building are core to our engagement model. We embed our team with yours, document our methodologies, and transition work to your team as it matures.',
              },
              {
                q: "What if we don't have AI expertise internally?",
                a: "That's exactly the problem we solve. We provide end-to-end support from strategy through scale, and we train your teams along the way. Many organizations start with zero AI expertise and become leaders in their category.",
              },
              {
                q: 'Can you share customer references?',
                a: "We have extensive reference customers across industries. We'll connect you with relevant peers who can share their experiences during the sales process.",
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

      {/* --- Section 8: CTA Section --- */}
      <section className="relative pt-20">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-600 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-[#fff1ea] shadow-2xl p-10 lg:p-16 flex flex-col lg:flex-row gap-12 rounded-xl">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-8">
                Join Leading Organizations Transforming with Tredence
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Let's discuss how we can accelerate your AI transformation
                journey. Hear from our customers about their experience and
                explore how we can deliver similar impact for your organization.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  ✓ Customer success stories & metrics
                  <br />
                  ✓ Speaking with our customers
                  <br />✓ Customized transformation roadmap
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First name"
                    className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full text-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full text-gray-900"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full text-gray-900"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full text-gray-900"
                />
                <textarea
                  placeholder="What transformation challenges are you facing?"
                  rows="3"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full resize-none text-gray-900"
                ></textarea>
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors rounded-sm w-full"
                >
                  Schedule Customer Conversation
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

export default CustomerVoice;
