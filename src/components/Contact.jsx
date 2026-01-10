import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="bg-sawad-card rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col items-center text-center relative overflow-hidden">

                <div className="absolute top-0 right-0 w-64 h-64 bg-sawad-orange/10 rounded-full blur-3xl -z-10"></div>

                <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                    LET'S WORK <br />
                    <span className="text-sawad-orange">TOGETHER</span>
                </h2>

                <p className="text-gray-400 max-w-xl mb-10 text-lg">
                    Have a project in mind? Let's build something amazing. I'm available for freelance wok and full-time opportunities.
                </p>

                <form action="https://api.web3forms.com/submit" method="POST" className="w-full max-w-md flex flex-col gap-4">
                    <input type="hidden" name="access_key" value="0844ac3e-917d-4338-9171-76f498466a5e" />

                    <div className="relative">
                        <input type="email" name="email" placeholder="Your Email Address" required
                            className="w-full bg-black/50 border border-white/10 rounded-full py-4 px-6 text-white focus:outline-none focus:border-sawad-orange transition-colors"
                        />
                        <button type="submit" className="absolute right-2 top-2 bottom-2 bg-sawad-orange text-black font-bold px-6 rounded-full hover:bg-white transition-colors">
                            Send
                        </button>
                    </div>
                </form>

                <div className="mt-12 flex gap-8">
                    <a href="mailto:thevasanthbanoth@gmail.com" className="text-gray-400 hover:text-white transition-colors">thevasanthbanoth@gmail.com</a>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400">+91 9912860300</span>
                </div>
            </div>
        </section>
    )
}
