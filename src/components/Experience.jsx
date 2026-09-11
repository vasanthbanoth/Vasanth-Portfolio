import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
    const experiences = [
        {
            company: "AirDawg Labs",
            role: "AI/ML Engineer Intern",
            period: "May 2026 – Present",
            logo: "/images/airdawg-logo.png",
            color: "from-[#3b0764] to-[#1e1b4b]",
            tagColor: "bg-violet-600",
            description: [
                "Built Python LLM agent evaluation services and Dockerized pipelines for production benchmark runs and release gating.",
                "Applied pytest, docs, and support practices to cut defects across Claude/GPT evaluation outcomes.",
                "Partnered with research & eng to keep benchmarks fair, reproducible, and acceptance-aligned (~85% task acceptance)."
            ]
        },
        {
            company: "Xelron AI",
            role: "Software Developer Intern",
            period: "Mar 2026 – Aug 2026",
            logo: "/images/xelron-logo.png",
            color: "from-[#0f172a] to-[#1e3a8a]",
            tagColor: "bg-sky-600",
            description: [
                "Engineered end-to-end Python/TypeScript pipelines processing 10,000+ GitHub PRs with REST APIs for model evaluation.",
                "Designed AI-assisted validation features, improving reasoning accuracy by ~25%.",
                "Built GitHub Actions + Docker CI/CD, cutting release cycles by ~20%."
            ]
        },
        {
            company: "IIIT-Kota",
            role: "Software Developer Intern",
            period: "Jan 2025 – Apr 2025",
            logo: "/images/iiit-kota-logo.png",
            color: "from-[#1e3a8a] to-[#172554]",
            tagColor: "bg-blue-600",
            description: [
                "Architected the institute web app on React, Node.js & TypeScript, improving maintainability by ~40%.",
                "Integrated Redis caching on high-traffic REST APIs, cutting latency by ~40%.",
                "Implemented TDD and JWT auth, improving mobile retention by ~15%."
            ]
        },
        {
            company: "Orbitra Technologies",
            role: "Product Intern",
            period: "Nov 2025 – Dec 2025",
            logo: "/images/orbitra-logo.png",
            color: "from-[#1e3a8a] to-[#172554]",
            tagColor: "bg-blue-500",
            description: [
                "Conducted technical benchmarking on 5+ competitors to find gaps.",
                "Analyzed 10k+ data points via SQL to fix verification flow friction."
            ]
        },
        {
            company: "LeMiCi IQ",
            role: "Product Management Intern",
            period: "Oct 2025 – Nov 2025",
            logo: "/images/lemici-logo.png",
            color: "from-[#1e3a8a] to-[#172554]",
            tagColor: "bg-indigo-600",
            description: [
                "Documented PRDs & User Stories to guide engineering teams.",
                "Defined Acceptance Criteria to ensure technical feasibility.",
                "Led User Research & managed backlog using Jira/Agile."
            ]
        }
    ];

    return (
        <section id="experience" className="overflow-x-clip py-14 sm:py-20 lg:py-24">
            <h2 className="mb-10 text-center text-3xl font-bold sm:mb-16 sm:text-4xl lg:mb-20 lg:text-5xl">
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Experience</span>
            </h2>

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-1 pt-8 sm:gap-12 sm:px-2 sm:pt-12 md:grid-cols-2 xl:grid-cols-3">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ y: -8 }}
                        className={`group relative rounded-3xl border border-white/5 bg-gradient-to-br p-5 pt-16 shadow-2xl sm:p-8 sm:pt-20 ${exp.color}`}
                    >
                        {/* Ribbon Label */}
                        <div className={`absolute left-0 top-6 z-20 rounded-r-full px-4 py-2 text-xs font-bold tracking-wide text-white shadow-lg sm:top-8 sm:px-6 sm:text-sm ${exp.tagColor}`}>
                            {exp.company}
                        </div>
                        {/* Darker Triangle for Ribbon Effect */}
                        <div className="absolute left-0 top-[44px] border-l-[10px] border-t-[10px] border-l-transparent border-t-black/40 skew-y-12 sm:top-[52px]"></div>

                        {/* Overhanging Logo */}
                        <div className="absolute -top-10 right-2 z-20 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-[5px] border-[#050505] bg-white p-1 shadow-[0_0_20px_rgba(0,0,0,0.3)] sm:-top-12 sm:right-3 sm:h-24 sm:w-24 sm:border-[6px]">
                            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white">
                                {exp.logo ? (
                                    <img src={exp.logo} alt={exp.company} className="h-full w-full object-contain p-1" />
                                ) : (
                                    <span className="text-3xl font-bold text-gray-800">{exp.company.charAt(0)}</span>
                                )}
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="mb-2 flex min-h-[48px] items-end text-lg font-bold leading-tight text-white sm:min-h-[50px] sm:text-xl">{exp.role}</h3>
                            <div className="text-xs text-blue-200 font-medium mb-4 flex items-center gap-2 font-mono">
                                <i className="fa-regular fa-calendar" /> {exp.period}
                            </div>

                            {/* Icons */}
                            <div className="flex gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer backdrop-blur-sm border border-white/5">
                                    <i className="fa-solid fa-globe text-xs"></i>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#0077b5] transition-all cursor-pointer backdrop-blur-sm border border-white/5">
                                    <i className="fa-brands fa-linkedin-in text-xs"></i>
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-xs text-blue-100/80 leading-relaxed font-light flex items-start gap-2">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 shrink-0 opacity-80" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
