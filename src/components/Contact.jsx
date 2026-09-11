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
        <section id="contact" className="flex items-center justify-center py-12 sm:py-16 lg:py-20">
            <div className="relative flex w-full max-w-4xl flex-col items-center overflow-hidden rounded-3xl border border-white/5 bg-sawad-card p-5 text-center shadow-2xl sm:p-8 md:p-12">

                <div className="absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-sawad-orange/10 blur-3xl"></div>

                <p className="mb-2 text-sm font-medium uppercase tracking-wide text-sawad-orange sm:text-lg">Connect with me</p>
                <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-white sm:mb-6 sm:text-5xl md:text-6xl">Get in touch</h2>

                <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:mb-10 sm:text-lg">
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
