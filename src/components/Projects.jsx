import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title: "FitFrame - AI Fitness",
            type: "Web Application",
            image: "work-1.png", // Keeping placeholder for now, or use a generic one if available
            link: "https://fit-frame.vercel.app/",
            desc: "AI-powered fitness tracking application."
        },
        {
            title: "KT Music Player",
            type: "Full Stack App",
            image: "work-2.png",
            link: "https://github.com/vasanthbanoth/kt-music-player",
            desc: "A feature-rich music player built with modern technologies."
        },
        {
            title: "NTT Data Task",
            type: "Demo Assessment",
            image: "work-3.png",
            link: "https://ntt-data-task-mpz92p9oe-vasanthbanoths-projects.vercel.app/",
            desc: "Assessment project showcasing frontend skills."
        },
    ];

    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="text-web3-primary tracking-widest uppercase text-sm">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">My Latest Work</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
                    >
                        <img src={`/images/${project.image}`} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-4">
                                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-web3-primary mb-2">{project.type}</p>
                                <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-full border border-web3-primary text-web3-primary hover:bg-web3-primary hover:text-black transition-all font-medium">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/vasanthbanoth?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                    View All Repositories on GitHub <span className="text-xl">→</span>
                </a>
            </div>
        </section>
    )
}
