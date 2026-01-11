import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectList() {
    const projects = [
        {
            title: "Medi-Core-Gen-AI",
            type: "AI & Healthcare",
            year: "2025",
            image: "work-3.png", // Reusing/Placeholder
            link: "https://github.com/vasanthbanoth/Medi-Core-Gen-AI",
            github: "https://github.com/vasanthbanoth/Medi-Core-Gen-AI",
            desc: "Advanced Generative AI system for medical diagnostics and core healthcare data analysis using LLMs.",
            stack: [
                { icon: "fa-solid fa-brain text-rose-400", name: "GenAI" },
                { icon: "devicon-python-plain colored", name: "Python" },
                { icon: "devicon-tensorflow-original colored", name: "TensorFlow" }
            ]
        },
        {
            title: "NewsScanAI-NLP",
            type: "NLP & ML",
            year: "2025",
            image: "work-1.png", // Reusing/Placeholder
            link: "https://github.com/vasanthbanoth/NewsScanAI-NLP",
            github: "https://github.com/vasanthbanoth/NewsScanAI-NLP",
            desc: "NLP-powered news aggregator that scans, categorizes, and summarizes global news streams in real-time.",
            stack: [
                { icon: "devicon-python-plain colored", name: "Python" },
                { icon: "fa-solid fa-language text-blue-400", name: "NLP" },
                { icon: "devicon-scikitlearn-plain colored", name: "Scikit-learn" }
            ]
        },
        {
            title: "FitFrame",
            type: "Web Application",
            year: "2025",
            image: "fitframe.png",
            link: "https://fit-frame.vercel.app/",
            github: "https://github.com/vasanthbanoth",
            desc: "AI-powered fitness tracking application developed to revolutionize home workouts with real-time posture correction.",
            stack: [
                { icon: "devicon-react-original colored", name: "React" },
                { icon: "devicon-tailwindcss-plain colored", name: "Tailwind" },
                { icon: "fa-solid fa-brain text-rose-400", name: "AI" }
            ]
        },
        {
            title: "Music App", // Renamed from KT Music Player
            type: "Full Stack",
            year: "2024",
            image: "music-app.png",
            link: "https://github.com/vasanthbanoth/kt-music-player",
            github: "https://github.com/vasanthbanoth/kt-music-player",
            desc: "A feature-rich music player built with modern technologies, supporting custom playlists and equalizer settings.",
            stack: [
                { icon: "devicon-javascript-plain colored", name: "JS" },
                { icon: "devicon-css3-plain colored", name: "CSS" },
                { icon: "fa-solid fa-music text-blue-400", name: "Audio API" }
            ]
        },
    ];

    return (
        <section id="projects" className="py-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative rounded-3xl overflow-hidden bg-[#111] border border-white/10 hover:border-purple-500/50 transition-all duration-500 shadow-xl shadow-black h-full flex flex-col"
                    >
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden bg-black">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10"></div>

                            {/* Hover Scale Effect on Image */}
                            <div className={`w-full h-full bg-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}>
                                <img
                                    src={`/images/${project.image}`}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<i class="fa-solid fa-layer-group text-6xl text-white/5"></i>'; }}
                                />
                            </div>

                            {/* Year Badge */}
                            <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-purple-400">
                                {project.year}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 pt-2 flex flex-col flex-1 relative z-20">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                    <p className="text-sm text-gray-400 line-clamp-2">{project.desc}</p>
                                </div>
                            </div>

                            <div className="mt-auto">
                                {/* Tech Stack Row */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tech, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:border-purple-500/30 transition-colors" title={tech.name}>
                                            <i className={`${tech.icon} text-lg`}></i>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                    <div className="flex gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
                                            <i className="fa-brands fa-github"></i>
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </div>

                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors inline-flex items-center gap-2">
                                        Check Live <i className="fa-solid fa-arrow-right text-xs"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
