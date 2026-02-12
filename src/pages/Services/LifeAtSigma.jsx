import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Heart,
  Users,
  Zap,
  Globe,
  Target,
} from 'lucide-react';
import Footer from '../../components/Footer';

const LifeAtSigma = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

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

        <div className="px-6 lg:px-24 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Where Innovation Meets Culture
          </h1>
          <p className="text-2xl lg:text-3xl font-light italic mb-8">
            Building the Future of Data & AI, Together
          </p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            At Sigma Data System, we don't just build software. We build
            careers, invest in people, and create an environment where brilliant
            minds solve the world's most challenging problems. Join a team that
            values impact, innovation, and your growth.
          </p>
        </div>
      </section>

      {/* --- Section 2: Culture & Values --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Core <span className="text-orange-600">Values</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Foundation principles guiding every decision and interaction at
            Sigma.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                value: 'Excellence',
                description:
                  "We relentlessly pursue excellence in everything we do—code quality, customer outcomes, and team culture. Excellence is not a destination; it's a mindset.",
                icon: '⭐',
              },
              {
                value: 'Impact',
                description:
                  'Every team member contributes to meaningful impact. We measure success by business outcomes—not just activity. Your work matters.',
                icon: '🎯',
              },
              {
                value: 'Integrity',
                description:
                  "We operate with unwavering integrity. We're honest with clients, with each other, and with ourselves. Trust is earned daily.",
                icon: '🤝',
              },
              {
                value: 'Growth',
                description:
                  'Growth mindset is fundamental. We invest in learning, skill development, and career advancement. We celebrate experimentation and learning from failure.',
                icon: '📈',
              },
              {
                value: 'Collaboration',
                description:
                  'Great solutions emerge from diverse perspectives working together. We break silos, share knowledge, and lift each other up.',
                icon: '🌐',
              },
              {
                value: 'Innovation',
                description:
                  'We challenge the status quo. Innovation comes from curiosity, psychological safety, and freedom to explore new ideas.',
                icon: '💡',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-10 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {item.value}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: What We Offer --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Employee <span className="text-orange-600">Experience</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Professional Growth',
                items: [
                  'Tuition reimbursement for certifications and degrees',
                  'Annual learning budget per employee',
                  'Executive coaching and mentorship programs',
                  'Internal skill-sharing and workshops',
                  'Conference attendance and speaking opportunities',
                ],
              },
              {
                title: 'Wellness & Balance',
                items: [
                  'Flexible work arrangements (remote, hybrid, on-site)',
                  'Competitive health, dental, and vision coverage',
                  'Mental health support and counseling services',
                  'Gym membership subsidies',
                  'Generous paid time off and sabbatical program',
                ],
              },
              {
                title: 'Compensation & Benefits',
                items: [
                  'Market-competitive salaries',
                  'Equity participation for all employees',
                  'Performance bonuses tied to company success',
                  '401(k) matching and financial planning support',
                  'Life insurance and disability coverage',
                ],
              },
              {
                title: 'Culture & Community',
                items: [
                  'Regular team events and social activities',
                  'Diversity and inclusion initiatives',
                  'Employee resource groups (ERGs)',
                  'Community volunteering opportunities',
                  'Collaborative, inclusive workplace culture',
                ],
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="text-2xl">
                    {idx === 0
                      ? '📚'
                      : idx === 1
                        ? '🧘'
                        : idx === 2
                          ? '💰'
                          : '🎉'}
                  </span>
                  {benefit.title}
                </h3>
                <ul className="space-y-4">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-orange-600 font-bold text-xl flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: Team Testimonials Carousel --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Stories from Our <span className="text-orange-600">Team</span>
          </h2>

          <div className="relative border-l-4 border-orange-600 pl-12 py-8">
            {/* Quote Icon */}
            <div className="absolute -left-8 top-0 bg-orange-600 text-white p-4 rounded-lg">
              <span className="text-2xl">💬</span>
            </div>

            {/* Testimonial Carousel */}
            <div className="space-y-12">
              {[
                {
                  quote:
                    'Sigma gave me the platform to go from software engineer to engineering leader. The mentorship, learning opportunities, and genuine investment in my growth have been transformative. This is a place where your ideas matter and your impact is visible.',
                  author: 'Priya Sharma',
                  title: 'Engineering Manager, Platform Team',
                  tenure: '3 years at Sigma',
                  image:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
                },
                {
                  quote:
                    "What struck me immediately was the culture of psychological safety. People genuinely listen to each other, disagree respectfully, and collaborate to find the best solutions. I've worked in many organizations, and this level of trust is rare.",
                  author: 'Rajesh Kumar',
                  title: 'Lead Data Scientist',
                  tenure: '2 years at Sigma',
                  image:
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
                },
                {
                  quote:
                    "The diversity of projects and clients means I'm constantly learning. One month I'm optimizing financial trading systems, the next I'm building healthcare analytics. The intellectual stimulation and variety keep the work exciting and fulfilling.",
                  author: 'Sarah Chen',
                  title: 'Senior Solutions Architect',
                  tenure: '4 years at Sigma',
                  image:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
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
                      <p className="text-gray-600 text-sm">
                        {testimonial.tenure}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
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

      {/* --- Section 5: Life at Sigma Photo Gallery --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            A Glimpse at <span className="text-orange-600">Team Life</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
                caption: 'Collaboration in action',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
                caption: 'Learning workshops',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
                caption: 'Team events',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
                caption: 'Innovation sprints',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
                caption: 'Diverse team members',
              },
              {
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
                caption: 'Office culture',
              },
            ].map((photo, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all h-64"
              >
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <p className="text-white font-bold text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 6: Diversity & Inclusion --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Diversity & <span className="text-orange-600">Inclusion</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            We believe diverse teams build better products. We're committed to
            creating an inclusive environment where every voice is heard and
            valued.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '45%',
                label: 'Women in Leadership',
                detail: '45% of leadership positions held by women',
              },
              {
                metric: '50+',
                label: 'Countries Represented',
                detail: 'Global team spanning 6 continents',
              },
              {
                metric: '100%',
                label: 'Equal Pay Certified',
                detail: 'No gender or demographic pay gaps',
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-10 bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-lg text-center hover:border-orange-500 hover:shadow-lg transition-all"
              >
                <div className="text-5xl font-bold text-orange-600 mb-2">
                  {stat.metric}
                </div>
                <p className="font-bold text-gray-900 mb-3">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 7: Open Positions --- */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Join Our <span className="text-orange-600">Team</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                role: 'Senior Software Engineer',
                team: 'Platform Engineering',
                location: 'San Francisco, CA',
                type: 'Full-time',
              },
              {
                role: 'Data Engineering Lead',
                team: 'Data Platform',
                location: 'New York, NY',
                type: 'Full-time',
              },
              {
                role: 'ML Engineer',
                team: 'AI & Analytics',
                location: 'Remote',
                type: 'Full-time',
              },
              {
                role: 'Solutions Architect',
                team: 'Professional Services',
                location: 'London, UK',
                type: 'Full-time',
              },
              {
                role: 'Product Manager',
                team: 'Product',
                location: 'San Francisco, CA',
                type: 'Full-time',
              },
              {
                role: 'DevOps Engineer',
                team: 'Infrastructure',
                location: 'Remote',
                type: 'Full-time',
              },
            ].map((job, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <p className="text-xs font-bold text-orange-600 uppercase mb-2">
                  {job.team}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {job.role}
                </h3>
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <p>📍 {job.location}</p>
                  <p>💼 {job.type}</p>
                </div>
                <button className="text-orange-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 8: FAQs --- */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold">
              Careers <span className="text-orange-600">FAQs</span>
            </h2>
          </div>
          <div className="lg:w-3/4 space-y-4">
            {[
              {
                q: 'What is the interview process like?',
                a: 'Our process typically includes: phone screen, technical assessment or case study, team interviews, and culture fit discussion. The process usually takes 2-3 weeks. We value your time and keep communication clear throughout.',
              },
              {
                q: 'Do you offer remote or flexible work arrangements?',
                a: 'Yes! We support fully remote, hybrid, and on-site options depending on the role and individual preference. We believe in flexibility and trust our team members to find arrangements that work for them.',
              },
              {
                q: 'What is professional development support like?',
                a: 'We provide annual learning budgets ($3,500+), tuition reimbursement for certifications, internal mentorship programs, conference attendance support, and dedicated time for skill development.',
              },
              {
                q: 'How do you approach diversity hiring?',
                a: 'Were committed to building a diverse team. We partner with diverse hiring networks, review job descriptions for inclusive language, and have diverse interview panels. We measure and track hiring diversity metrics.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-gray-200 bg-gray-50 p-6 -mx-6 rounded-lg"
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

      {/* --- Section 9: CTA Section --- */}
      <section className="relative pt-20">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-600 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="bg-[#fff1ea] shadow-2xl p-10 lg:p-16 flex flex-col lg:flex-row gap-12 rounded-lg">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-8">
                Ready to Make an Impact?
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                If you're passionate about data, AI, and building products that
                matter, let's talk. We'd love to hear from you.
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
                  placeholder="Role of Interest"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full"
                />
                <textarea
                  placeholder="Tell us about yourself"
                  rows="3"
                  className="bg-transparent border-b border-orange-300 py-3 outline-none focus:border-orange-600 w-full resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors rounded-sm"
                >
                  Apply Now
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

export default LifeAtSigma;
