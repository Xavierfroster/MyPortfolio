"use client";

import { motion } from "framer-motion";
import { FiShield, FiCpu, FiFileText, FiAward } from "react-icons/fi";

const steps = [
  { 
    year: "2021", 
    title: "Engineering Foundations", 
    text: "Graduated with a Bachelor of Electronics & Telecommunications Engineering from RTM Nagpur University, building a strong mathematical, algorithmic, and hardware-software system foundation." 
  },
  { 
    year: "2022", 
    title: "Advanced Specialization", 
    text: "Completed Post Graduate Diploma in Advanced Computing from CDAC Noida, mastering deep system patterns, MVC architectures, database schemas, and data structures." 
  },
  { 
    year: "Nov 2022", 
    title: "Joining C-DAC Noida", 
    text: "Appointed as a Project Engineer. Immediately undertook building mission-critical multi-tenant applications using Java, Spring MVC, and SQL, implementing advanced security layers." 
  },
  { 
    year: "Present", 
    title: "Enterprise Scaling & Auditing", 
    text: "Actively spearheading system integrations, database performance indexing, and automated communications. Spearheaded the security audit workflow to secure Safe-To-Host (STH) certifications for live portals." 
  },
];

const certificates = [
  {
    icon: <FiShield className="w-5 h-5 text-red-500" />,
    title: "Safe To Host (STH) Security Certificate",
    issuer: "MQAS Global",
    desc: "Obtained compliant clearance for live web applications following a strict, comprehensive application vulnerability assessment and security audit.",
    link: "https://www.mqasglobal.com/security.php",
    type: "Security Compliance"
  },
  {
    icon: <FiCpu className="w-5 h-5 text-red-500" />,
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Unisoft Technology / Red Hat",
    desc: "Certified in core command-line operations, shell automation, user security management, storage allocation, and firewall configurations.",
    type: "Systems & Security"
  },
  {
    icon: <FiFileText className="w-5 h-5 text-red-500" />,
    title: "Software Training Certificate",
    issuer: "Nidik Webcon Pvt. Ltd.",
    desc: "Completed technical training focusing on standard application modules, OOP design principles, and server integration cycles.",
    type: "Technical Training"
  }
];

export function Journey() {
  return (
    <section id="journey" className="relative min-h-screen py-32 px-6 bg-zinc-900/60 flex flex-col items-center justify-center border-b border-white/5">
      {/* Background design accents */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl w-full">
        <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-20 text-center font-semibold">The Journey & Credentials</h2>
        
        <div className="space-y-16 relative mb-28">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800 -translate-x-1/2" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className="relative flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24 w-full"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Timeline circle node */}
              <div className="absolute left-4 md:left-1/2 top-6 md:top-8 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-red-500 z-10 shadow-[0_0_15px_rgba(239,68,68,0.6)] border border-white/20 -translate-x-1/2 -translate-y-1/2" />
              
              {i % 2 === 0 ? (
                <>
                  {/* Left Column (Content) */}
                  <div className="w-full pl-12 md:pl-0 md:text-right md:pr-12 space-y-2">
                    <span className="text-zinc-700 text-3xl font-extrabold font-mono tracking-tighter">{step.year}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{step.title}</h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">{step.text}</p>
                  </div>
                  {/* Right Column (Empty) */}
                  <div className="hidden md:block" />
                </>
              ) : (
                <>
                  {/* Left Column (Empty) */}
                  <div className="hidden md:block" />
                  {/* Right Column (Content) */}
                  <div className="w-full pl-12 md:pl-12 md:text-left space-y-2">
                    <span className="text-zinc-700 text-3xl font-extrabold font-mono tracking-tighter">{step.year}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{step.title}</h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">{step.text}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications Sub-Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-3 justify-center mb-10">
            <FiAward className="w-6 h-6 text-red-500" />
            <h3 className="text-xl font-bold tracking-tight text-white">Professional Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-red-500/5 group"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] uppercase tracking-widest text-red-500 font-bold bg-red-500/5 border border-red-500/10 px-2 py-0.5 rounded">
                      {cert.type}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {cert.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors duration-300 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-zinc-500 font-semibold">{cert.issuer}</p>
                  </div>
                  
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                {cert.link && (
                  <div className="pt-4 border-t border-white/5 mt-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-red-500 hover:text-red-400 font-medium inline-flex items-center gap-1 transition-colors duration-300"
                    >
                      Audit Details &rarr;
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
