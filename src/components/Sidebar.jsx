import React from 'react';
import { motion } from 'framer-motion';

export default function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="z-50 flex w-full flex-col p-4 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[400px]"
    >
      <div className="no-scrollbar relative flex h-full w-full flex-col overflow-x-hidden overflow-y-auto rounded-3xl border border-white/5 bg-sawad-card p-8 group">
        <div className="absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-sawad-lime/5 blur-3xl transition-colors duration-500 group-hover:bg-sawad-lime/10" />

        <div>
          {/* Old layout: large circle photo — clean, no red ring / glow */}
          <div className="relative mb-8 aspect-square w-full overflow-hidden rounded-full bg-[#3a0d10]">
            <img
              src="/images/user-profile.jpg?v=clean2"
              alt="Vasanth Banoth"
              className="h-full w-full object-cover object-center"
              width={900}
              height={900}
              decoding="async"
            />
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-black/50 px-3 py-1 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-xs font-medium text-white/90">Available for work</span>
            </div>
          </div>

          <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">Vasanth Banoth</h1>
          <p className="mb-6 text-lg text-gray-400">AI &amp; Software Engineer based in India.</p>

          <a
            href="https://www.google.com/maps/place/Hyderabad,+Telangana"
            target="_blank"
            rel="noopener noreferrer"
            className="group/item mb-4 flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:border-web3-primary/50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-web3-primary to-web3-secondary text-black shadow-lg shadow-web3-primary/20 transition-transform group-hover/item:scale-110">
              <i className="fa-solid fa-location-dot text-lg" />
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors group-hover/item:text-web3-primary">
                Home Town
              </p>
              <p className="font-medium leading-tight text-white">Hyderabad, Telangana</p>
            </div>
          </a>

          <div className="group/item mb-4 flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:border-sawad-orange/50">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sawad-orange text-black shadow-lg shadow-sawad-orange/20 transition-transform group-hover/item:scale-110">
              <i className="fa-solid fa-envelope text-lg" />
            </div>
            <div className="overflow-hidden">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors group-hover/item:text-sawad-orange">
                Email
              </p>
              <a
                href="mailto:workbyvasanth@gmail.com"
                className="block truncate font-medium leading-tight text-white transition-colors hover:text-sawad-orange"
              >
                workbyvasanth@gmail.com
              </a>
            </div>
          </div>

          <div className="group/item mb-6 flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:border-cyan-400/50">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-black shadow-lg shadow-cyan-400/20 transition-transform group-hover/item:scale-110">
              <i className="fa-solid fa-phone text-lg" />
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors group-hover/item:text-cyan-400">
                Phone
              </p>
              <a
                href="tel:+919912860300"
                className="font-medium leading-tight text-white transition-colors hover:text-cyan-400"
              >
                +91-9912860300
              </a>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <div className="mb-6 flex gap-4">
            <a
              href="https://github.com/vasanthbanoth"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-white hover:text-black"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="https://twitter.com/vasanthonx"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-white hover:text-black"
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/vasanthbanoth"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-white hover:text-black"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>

          <a
            href="/Vasanth_Resume.pdf"
            download
            className="block w-full rounded-xl bg-white py-4 text-center text-lg font-bold text-black transition-colors duration-300 hover:bg-sawad-lime"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
}
