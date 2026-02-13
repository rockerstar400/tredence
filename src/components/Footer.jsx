import React from 'react';
import { Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-12 lg:px-24 font-sans overflow-hidden">

  {/* Main Grid */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: { transition: { staggerChildren: 0.2 } }
    }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-20"
  >

    {[
      {
        title: "Industries",
        items: [
          "Retail",
          "CPG",
          "Banking, Financial Services & Insurance",
          "Telco, Media & Tech",
          "Travel and Hospitality",
          "Healthcare & Life Sciences",
          "Industrials"
        ]
      },
      {
        title: "Services",
        items: [
          "Data Engineering",
          "Data Modernization",
          "LLMOps",
          "Digital Engineering"
        ]
      },
      {
        title: "Insights",
        items: [
          "Case Studies",
          "Thought Leadership",
          "Data & AI Playbooks",
          "Customer Voice"
        ]
      }
    ].map((col, idx) => (

      <motion.div
        key={idx}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="text-xl font-bold mb-8">{col.title}</h4>

        <ul className="space-y-4 text-gray-400 text-sm font-medium">
          {col.items.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 6 }}
              className="hover:text-white cursor-pointer transition"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

    ))}

  </motion.div>

  {/* Social Links */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    viewport={{ once: true }}
    className="mb-14"
  >
    <h5 className="text-lg font-bold mb-6 italic">Follow us on</h5>

    <div className="flex gap-8">
      {[Twitter, Linkedin, Facebook, Youtube].map((Icon, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.2, y: -4 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="hover:text-orange-500 cursor-pointer"
        >
          <Icon size={22} />
        </motion.div>
      ))}
    </div>
  </motion.div>

  {/* Bottom Legal Bar */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    viewport={{ once: true }}
    className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-400 gap-6"
  >

    <div className="flex flex-wrap gap-6 font-bold uppercase tracking-wider text-white">
      {[
        "Terms of Use",
        "Privacy Policy",
        "Cookies Policy",
        "Third Party Security & Privacy Policy"
      ].map((item, i) => (
        <motion.a
          key={i}
          whileHover={{ color: "#f97316" }}
          href="#"
        >
          {item}
        </motion.a>
      ))}
    </div>

    <div className="text-gray-300 font-semibold">
      © Copyright 2026. Trends.Inc. All rights reserved
    </div>

  </motion.div>

</footer>

  );
};

export default Footer;
