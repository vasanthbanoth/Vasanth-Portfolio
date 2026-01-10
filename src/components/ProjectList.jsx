import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectList() {
    const projects = [
        {
            title: "FitFrame",
            type: "Web Application",
            year: "2025",
            image: "work-1.png",
            link: "https://fit-frame.vercel.app/",
            desc: "AI-powered fitness tracking application."
        },
        {
            title: "KT Music Player",
            type: "Full Stack",
            year: "2024",
            image: "work-2.png",
            link: "https://github.com/vasanthbanoth/kt-music-player",
            desc: "A feature-rich music player built with modern technologies."
        },
        {
            title: "NTT Data Task",
            type: "Demo",
            year: "2024",
            image: "work-3.png",
            link: "https://ntt-data-task-mpz92p9oe-vasanthbanoths-projects.vercel.app/",
            desc: "Assessment project showcasing frontend skills."
        },
    ];

    return (
        <section id="projects" className="py-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 flex items-center gap-4">
                <span className="w-4 h-4 rounded-full bg-sawad-orange animate-pulse"></span>
                RECENT PROJECTS
            </h2>

            <div className="flex flex-col gap-4">
                {projects.map((project, index) => (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-sawad-card p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
                    >
                        {/* Hover Background Reveal */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex-1">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-sawad-orange transition-colors duration-300">{project.title}</h3>
                            <p className="text-gray-400">{project.desc}</p>
                        </div>

                        <div className="relative z-10 min-w-max text-right">
                            <span className="block text-gray-500 font-mono text-sm mb-1">{project.type} • {project.year}</span>
                            <span className="inline-flex items-center gap-2 text-white font-medium group-hover:translate-x-2 transition-transform">
                                View Project <span className="text-sawad-orange">→</span>
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}
