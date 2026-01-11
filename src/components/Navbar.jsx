import React from 'react';

export default function Navbar() {
    return (
        <nav className="sticky top-4 z-50 bg-sawad-card/80 backdrop-blur-md border border-white/5 rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg shadow-black/20">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-web3-primary to-web3-secondary bg-clip-text text-transparent">
                Vasanth.
            </a>
            <ul className="flex gap-6 text-sm font-medium text-gray-400">
                <li><a href="#home" className="hover:text-sawad-lime transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-sawad-lime transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-sawad-lime transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-sawad-lime transition-colors">Work</a></li>
                <li><a href="#contact" className="hover:text-sawad-lime transition-colors">Contact</a></li>
            </ul>
        </nav>
    )
}
