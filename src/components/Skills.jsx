import React from 'react';

const Skills = () => {
    const languages = ["C", "C++", "Python", "JavaScript", "TypeScript", "Java", "SQL"];
    const core = ["Data Structures & Algorithms", "DBMS", "Operating Systems", "OOP", "Computer Networks"];
    const backend = ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs", "Microservices"];
    const frontend = ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"];
    const dataAI = ["OpenCV", "MediaPipe", "Pandas", "NumPy", "Scikit-learn", "RAG", "LangChain"];
    const devops = ["Git", "Docker", "CI/CD", "AWS", "GCP", "VS Code", "Linux"];

    const icons1 = [
        "devicon-c-plain colored", "devicon-cplusplus-plain colored", "devicon-python-plain colored",
        "devicon-javascript-plain colored", "devicon-typescript-plain colored", "devicon-java-plain colored",
        "devicon-mysql-plain colored", "devicon-react-original colored", "devicon-nodejs-plain colored"
    ];

    const icons2 = [
        "devicon-html5-plain colored", "devicon-css3-plain colored", "devicon-tailwindcss-plain colored",
        "devicon-nextjs-plain text-white", "devicon-express-original text-white", "devicon-git-plain colored",
        "devicon-docker-plain colored", "devicon-amazonwebservices-original colored", "devicon-linux-plain text-white"
    ];


    return (
        <section
            id="skills"
            className="relative flex flex-col items-center justify-start overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-16"
        >
            <h2 className="mb-10 text-center text-3xl font-bold sm:mb-16 sm:text-4xl lg:text-6xl">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </h2>

            <div className="skills-container flex w-full max-w-[1400px] flex-col gap-3 sm:gap-4">

                {/* Languages & Core */}
                <div className="scroll" style={{ "--time": "35s" }}>
                    <div>
                        {languages.map((s, i) => <span key={i}>{s}</span>)}
                        {core.map((s, i) => <span key={i + 100}>{s}</span>)}
                    </div>
                    <div>
                        {languages.map((s, i) => <span key={i}>{s}</span>)}
                        {core.map((s, i) => <span key={i + 100}>{s}</span>)}
                    </div>
                </div>

                {/* Backend & Frontend */}
                <div className="scroll" style={{ "--time": "30s" }} dir="rtl">
                    <div>
                        {backend.map((s, i) => <span key={i}>{s}</span>)}
                        {frontend.map((s, i) => <span key={i + 100}>{s}</span>)}
                    </div>
                    <div>
                        {backend.map((s, i) => <span key={i}>{s}</span>)}
                        {frontend.map((s, i) => <span key={i + 100}>{s}</span>)}
                    </div>
                </div>

                {/* Data/AI & DevOps */}
                <div className="scroll" style={{ "--time": "40s" }}>
                    <div>
                        {dataAI.map((s, i) => <span key={i}>{s}</span>)}
                        {devops.map((s, i) => <span key={i + 100}>{s}</span>)}
                    </div>
                    <div>
                        {dataAI.map((s, i) => <span key={i}>{s}</span>)}
                        {devops.map((s, i) => <span key={i + 100}>{s}</span>)}
                    </div>
                </div>

                {/* Icons Row 1 */}
                <div className="scroll imgBox" style={{ "--time": "25s" }}>
                    <div>
                        {icons1.map((icon, i) => (
                            <i key={i} className={icon}></i>
                        ))}
                    </div>
                    <div>
                        {icons1.map((icon, i) => (
                            <i key={`clone-${i}`} className={icon}></i>
                        ))}
                    </div>
                </div>

                {/* Icons Row 2 */}
                <div className="scroll imgBox" style={{ "--time": "25s" }} dir="rtl">
                    <div>
                        {icons2.map((icon, i) => (
                            <i key={i} className={icon}></i>
                        ))}
                    </div>
                    <div>
                        {icons2.map((icon, i) => (
                            <i key={`clone-${i}`} className={icon}></i>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
