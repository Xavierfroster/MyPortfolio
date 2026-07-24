"use client";

import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiShield, FiCpu, FiGrid } from "react-icons/fi";

const skillCategories = [
  {
    icon: <FiCode className="w-5 h-5 text-red-500" />,
    title: "Backend & APIs",
    skills: ["Java (Core & EE)", "Spring Boot", "Spring MVC", "RESTful Web Services", "Hibernate / JPA / HQL"],
  },
  {
    icon: <FiDatabase className="w-5 h-5 text-amber-500" />,
    title: "Database Engineering",
    skills: ["MySQL", "PostgreSQL", "PL/SQL", "Native SQL Tuning", "HQL Optimization"],
  },
  {
    icon: <FiShield className="w-5 h-5 text-emerald-500" />,
    title: "Security & Auditing",
    skills: ["JWT & JWE Tokenization", "MQAS STH Audit Compliance", "Secure Data Transmission", "Data Cryptography"],
  },
  {
    icon: <FiCpu className="w-5 h-5 text-blue-500" />,
    title: "DevOps & Environments",
    skills: ["Docker", "Linux Administration (RHEL)", "Git / SVN Version Control", "Enterprise Shell Automation"],
  },
  {
    icon: <FiGrid className="w-5 h-5 text-purple-500" />,
    title: "Frontend & Scripting",
    skills: ["JavaScript (ES6+)", "ReactJS", "Next.js (App Router)", "HTML5 & Tailwind CSS", "Modern Web Layouts"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-32 px-6 bg-black flex items-center justify-center border-b border-white/5">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[300px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">Technical Profile</h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Core Engineering Capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl border border-white/5 bg-zinc-900/10 backdrop-blur-md flex flex-col gap-6 hover:border-white/10 transition-all duration-300 group hover:shadow-lg hover:shadow-red-500/[0.02]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>
              
              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg border border-white/5 bg-white/5 text-xs text-zinc-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
