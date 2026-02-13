import React from 'react';
import { Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
              { name: "Retail", path: "/industrial/retail" },
              { name: "CPG", path: "/industrial/cpg" },
              { name: "Banking, Financial Services & Insurance", path: "/industrial/financial-services" },
              { name: "Telco, Media & Tech", path: "/industrial/telco-media" },
              { name: "Travel and Hospitality", path: "/industrial/travel-hospitality" },
              { name: "Healthcare & Life Sciences", path: "/industrial/life-sciences" },
              { name: "Industrials", path: "/industrial/industrials" }
            ]
          },
          {
            title: "Services",
            items: [
              { name: "Data Engineering", path: "/services/data-engineering" },
              { name: "Data Modernization", path: "/services/data-modernization" },
              { name: "LLMOps", path: "/services/llmops" },
              { name: "Digital Engineering", path: "/services/digital-engineering" }
            ]
          },
          {
            title: "Insights",
            items: [
              { name: "Case Studies", path: "/insights/case-studies" },
              { name: "Thought Leadership", path: "/insights/thought-leadership" },
              { name: "Data & AI Playbooks", path: "/insights/data-ai-playbooks" },
              { name: "Customer Voice", path: "/insights/customer-voice" }
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
                  className="hover:text-white transition"
                >
                  <Link to={item.path} className="cursor-pointer">
                    {item.name}
                  </Link>
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
        {/* <h5 className="text-lg font-bold mb-6 italic">Follow us on</h5>

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
        </div> */}
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
            { name: "Terms of Use", path: "/terms" },
            { name: "Privacy Policy", path: "/privacy" },
            { name: "Cookies Policy", path: "/cookies" },
            { name: "Third Party Security & Privacy Policy", path: "/third-party-policy" }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ color: "#f97316" }}>
              <Link to={item.path}>
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-gray-300 font-semibold">
          © Copyright 2026. Sigma. All rights reserved
        </div>

      </motion.div>

    </footer>
  );
};

export default Footer;
