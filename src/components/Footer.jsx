import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-2 py-8 text-center text-sm text-gray-400 sm:text-base">
      <p>© {new Date().getFullYear()} Vasanth Banoth. All rights reserved.</p>
      <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
        <a href="https://github.com/vasanthbanoth" target="_blank" rel="noreferrer" className="transition-colors hover:text-web3-primary">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/vasanthbanoth" target="_blank" rel="noreferrer" className="transition-colors hover:text-web3-primary">
          LinkedIn
        </a>
        <a href="https://twitter.com/vasanthonx" target="_blank" rel="noreferrer" className="transition-colors hover:text-web3-primary">
          Twitter
        </a>
      </div>
    </footer>
  );
}
