import React, { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0844ac3e-917d-4338-9171-76f498466a5e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id="contact" className="py-20 flex justify-center items-center">
            {/* Reusing the 'Sawad' card style from the previous UI */}
            <div className="w-full max-w-4xl bg-sawad-card rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col items-center text-center relative overflow-hidden shadow-2xl">

                {/* Background Blob - Subtle Orange/Purple mix */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-sawad-orange/10 rounded-full blur-3xl -z-10"></div>

                {/* Headers from 'Latest Text' with Orange Accent */}
                <p className="text-sawad-orange text-lg font-medium mb-2 tracking-wide uppercase">Connect with me</p>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif tracking-tight">Get in touch</h2>

                <p className="text-gray-400 max-w-2xl mb-10 text-lg leading-relaxed">
                    I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
                </p>

                <form onSubmit={onSubmit} className="w-full max-w-2xl space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col text-left">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-sawad-orange focus:ring-1 focus:ring-sawad-orange transition-all font-medium"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-sawad-orange focus:ring-1 focus:ring-sawad-orange transition-all font-medium"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col text-left">
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            required
                            rows="6"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-sawad-orange focus:ring-1 focus:ring-sawad-orange transition-all resize-none font-medium"
                        ></textarea>
                    </div>

                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-10 py-4 bg-sawad-orange border border-sawad-orange hover:bg-white hover:text-black hover:border-white rounded-full text-black font-bold transition-all duration-300 group shadow-lg"
                        >
                            Submit now
                            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform text-sm"></i>
                        </button>
                    </div>
                    <p className="text-center text-gray-400 mt-4 text-sm">{result}</p>
                </form>

            </div>
        </section>
    );
};

export default Contact;
