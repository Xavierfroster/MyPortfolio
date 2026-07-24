"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiClock, FiLayers, FiPercent, FiDatabase, FiMessageSquare } from "react-icons/fi";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ value, duration = 1.5, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(value.replace(/[^0-9]/g, ""));
    if (isNaN(end) || end === 0) {
      return;
    }

    const totalMs = duration * 1000;
    const intervalTime = 30; // 30ms steps
    const totalSteps = totalMs / intervalTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  // If value is non-numeric (e.g. "Nearly 4"), handle specially
  if (value.toLowerCase().includes("nearly")) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <FiClock className="w-6 h-6 text-indigo-400" />,
      value: "Nearly 4",
      suffix: " Years",
      label: "Tech Expertise",
      desc: "CDAC Project Engineer since Nov 2022 (completing 4 years in Nov 2026).",
      glow: "hover:shadow-indigo-500/10",
    },
    {
      icon: <FiLayers className="w-6 h-6 text-sky-400" />,
      value: "67",
      suffix: "+ Colleges",
      label: "e-SLCMS Deployments",
      desc: "Architected enterprise systems across 2 AIIMS and 65 DMER state medical colleges.",
      glow: "hover:shadow-sky-500/10",
    },
    {
      icon: <FiPercent className="w-6 h-6 text-emerald-400" />,
      value: "35",
      suffix: "% Improvement",
      label: "Latency Reduction",
      desc: "Optimized critical relational queries and API response times across multi-tenant servers.",
      glow: "hover:shadow-emerald-500/10",
    },
    {
      icon: <FiDatabase className="w-6 h-6 text-blue-400" />,
      value: "100",
      suffix: "K+ Records",
      label: "Secure Data Pipelines",
      desc: "Maintained structural integrity and user access management for high-capacity applications.",
      glow: "hover:shadow-blue-500/10",
    },
    {
      icon: <FiMessageSquare className="w-6 h-6 text-purple-400" />,
      value: "5",
      suffix: "K+ Daily Messages",
      label: "Communication Hub",
      desc: "Configured automated notification engines via WhatsApp and custom integrations.",
      glow: "hover:shadow-purple-500/10",
    },
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative py-24 px-6 bg-zinc-950/40 border-y border-white/5 overflow-hidden"
    >
      {/* Background soft glowing blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[300px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">Performance & Impact</h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Engineering Systems at National Scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md transition-all duration-300 shadow-sm ${stat.glow} flex flex-col justify-between h-[220px] cursor-default group`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-zinc-500 font-light leading-relaxed mt-2">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
