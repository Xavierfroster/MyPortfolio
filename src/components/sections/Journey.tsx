"use client";

import { motion } from "framer-motion";

export function Journey() {
  const steps = [
    { year: "2021", title: "Engineering Foundations", text: "Graduated with a Bachelor of Electronics & Telecommunications Engineering from RTM Nagpur University, building a strong analytical and systemic problem-solving foundation." },
    { year: "2022", title: "Specialized Training", text: "Completed Post Graduate Diploma in Advanced Computing from CDAC Noida, mastering deep architectural patterns, system design, and advanced backend engineering." },
    { year: "Nov 2022", title: "Joining C-DAC", text: "Started as a Project Engineer. Immediately dove into designing enterprise-level applications using Java, Spring MVC, and MySQL, directly impacting mission-critical systems." },
    { year: "Present", title: "Scaling & Security", text: "Currently actively leading API integrations at C-DAC. Decreased latencies by 35% through SQL optimization and automated large-scale WhatsApp communications managing 10,000+ daily requests." },
  ];

  return (
    <section className="relative min-h-screen py-32 px-6 bg-zinc-900 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-20 text-center">The Journey</h2>
        
        <div className="space-y-16 relative">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-700 md:-translate-x-1/2" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute left-[6.5px] top-6 md:relative md:left-auto md:top-auto flex w-3 h-3 md:w-4 md:h-4 rounded-full bg-white z-10 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
              
              <div className={`flex-1 w-full pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} space-y-3`}>
                <span className="text-zinc-600 text-3xl font-bold font-mono tracking-tighter">{step.year}</span>
                <h3 className="text-2xl md:text-3xl font-semibold">{step.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">{step.text}</p>
              </div>
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
