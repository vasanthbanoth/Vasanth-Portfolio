import React from 'react';

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 text-center text-gray-400">
            <p>© 2025 Vasanth Banoth. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
                <a href="https://GitHub.com/vasanthbanoth" target="_blank" className="hover:text-web3-primary transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/vasanthbanoth" target="_blank" className="hover:text-web3-primary transition-colors">LinkedIn</a>
                <a href="https://twitter.com/vasanthonx" target="_blank" className="hover:text-web3-primary transition-colors">Twitter</a>
            </div>
        </footer>
    )
}
