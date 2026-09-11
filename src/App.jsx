import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-web3-bg font-Outfit text-white selection:bg-sawad-lime selection:text-black">
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[url('/images/noise.png')] opacity-50" />

          <div className="mx-auto max-w-screen-2xl lg:flex">
            <Sidebar />

            <main
              className="min-w-0 flex-1 px-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 sm:px-4 sm:pt-4 md:px-6 lg:ml-[360px] lg:px-6 xl:ml-[400px]"
            >
              <div className="mx-auto w-full max-w-5xl space-y-4">
                <Navbar />
                <BentoGrid />
                <About />
                <Skills />
                <Experience />
                <ProjectList />
                <Contact />
                <Footer />
              </div>
            </main>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
