import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Let’s Build Something
              <span className="block text-orange-500">Extraordinary</span>
            </h2>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Have a project in mind? Want to modernize your data or scale AI?
              We’d love to hear from you.
            </p>

            <div className="space-y-6 text-gray-700">
              <div>
                <p className="text-orange-500 font-semibold">Email</p>
                <p>contact@sigma.com</p>
              </div>

              <div>
                <p className="text-orange-500 font-semibold">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>

              <div>
                <p className="text-orange-500 font-semibold">Location</p>
                <p>Global Delivery Centers</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-3xl p-10 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h3>

            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="space-y-6"
            >
              {[
                { type: 'text', placeholder: 'Full Name' },
                { type: 'email', placeholder: 'Email Address' },
                { type: 'text', placeholder: 'Company Name' },
              ].map((field, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500 transition"
                  />
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500 transition resize-none"
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
