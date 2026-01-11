import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
    const experiences = [
        {
            company: "IIIT-Kota",
            role: "Full Stack Developer",
            period: "Jan 2025 – Apr 2025",
            logo: "/images/iiit-kota-logo.png",
            color: "from-[#1e3a8a] to-[#172554]",
            tagColor: "bg-blue-600",
            description: [
                "Refactored official website using React & Node.js, improving maintainability.",
                "Optimized rendering & caching, reducing load time by 40%.",
                "Enhanced mobile responsiveness, boosting traffic by 15%."
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
        <section id="experience" className="py-24">
            <h2 className="text-4xl lg:text-5xl font-bold mb-20 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Experience</span>
            </h2>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ y: -8 }}
                        className={`relative rounded-3xl p-8 pt-20 bg-gradient-to-br ${exp.color} border border-white/5 shadow-2xl group`}
                    >
                        {/* Ribbon Label */}
                        <div className={`absolute top-8 left-0 ${exp.tagColor} text-white font-bold px-6 py-2 rounded-r-full shadow-lg z-20 text-sm tracking-wide`}>
                            {exp.company}
                        </div>
                        {/* Darker Triangle for Ribbon Effect */}
                        <div className="absolute top-[52px] left-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-black/40 skew-y-12"></div>

                        {/* Overhanging Logo */}
                        <div className="absolute -top-12 -right-4 w-24 h-24 rounded-full bg-white p-1 shadow-[0_0_20px_rgba(0,0,0,0.3)] z-20 flex items-center justify-center border-[6px] border-[#050505] overflow-hidden">
                            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white">
                                {exp.logo ? (
                                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-1" />
                                ) : (
                                    <span className="text-3xl font-bold text-gray-800">{exp.company.charAt(0)}</span>
                                )}
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-white mb-2 leading-tight min-h-[50px] flex items-end">{exp.role}</h3>
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
