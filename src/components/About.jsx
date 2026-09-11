import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    const customSkills = [
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "SQL", icon: "devicon-mysql-plain colored" },
        { name: "DSA", icon: "fa-solid fa-code-branch text-yellow-400" },
        { name: "DBMS", icon: "fa-solid fa-database text-blue-400" },
        { name: "OS", icon: "fa-solid fa-microchip text-green-400" },
        { name: "OOP", icon: "fa-solid fa-cubes text-purple-400" },
        { name: "Networks", icon: "fa-solid fa-network-wired text-red-400" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", icon: "devicon-express-original text-white" },
        { name: "Flask", icon: "devicon-flask-original text-white" },
        { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
        { name: "REST APIs", icon: "fa-solid fa-server text-indigo-400" },
        { name: "Microservices", icon: "fa-solid fa-share-nodes text-pink-400" },
        { name: "React.js", icon: "devicon-react-original colored" },
        { name: "Next.js", icon: "devicon-nextjs-plain text-white" },
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
        { name: "OpenCV", icon: "devicon-opencv-plain colored" },
        { name: "Pandas", icon: "devicon-pandas-plain text-white" }, // White for visibility
        { name: "NumPy", icon: "devicon-numpy-plain colored" },
        { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
        { name: "RAG", icon: "fa-solid fa-brain text-rose-400" },
        { name: "LangChain", icon: "fa-solid fa-link text-emerald-400" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
        { name: "GCP", icon: "devicon-googlecloud-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain text-blue-500" }, // Manual blue
        { name: "Linux", icon: "devicon-linux-plain text-white" } // White for visibility
    ];

    return (
        <section id="about" className="pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
            <div className="mb-0">
                <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold sm:mb-8 sm:gap-4 sm:text-4xl lg:text-5xl">
                    <span className="h-3 w-3 shrink-0 animate-pulse rounded-full bg-cyan-400 sm:h-4 sm:w-4"></span>
                    EDUCATION
                </h2>
                <div className="group flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/5 bg-sawad-card p-5 transition-colors duration-500 hover:border-cyan-400/30 sm:gap-6 sm:p-6 md:flex-row md:items-center">
                    <div className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-6">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-2 sm:h-16 sm:w-16">
                            <img src="/images/iiit-kota-logo.png" alt="IIIT Kota" className="h-full w-full object-contain" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-base font-medium text-gray-300 sm:text-lg">Indian Institute of Information Technology, Kota</p>
                            <p className="mt-1 text-xs text-gray-500 sm:text-sm">B.Tech in Computer Science &amp; Engineering · Nov 2022 – May 2026</p>
                            <p className="mt-1 text-xs text-gray-500 sm:text-sm">Rajasthan, India</p>
                        </div>
                    </div>
                    <div className="w-full md:mt-0 md:w-auto">
                        <div className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2.5 transition-colors group-hover:bg-white/10 sm:px-6 sm:py-3">
                            <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Branch</span>
                            <span className="text-base font-bold text-white">CSE</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
