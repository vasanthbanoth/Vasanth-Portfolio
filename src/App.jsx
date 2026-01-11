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
    <div className="min-h-screen bg-web3-bg font-Outfit text-white selection:bg-sawad-lime selection:text-black">
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Background Noise/Gradient - toned down for Sawad style */}
          <div className="fixed inset-0 pointer-events-none opacity-50 -z-10 bg-[url('/images/noise.png')]"></div>

          <div className="max-w-screen-2xl mx-auto lg:flex">
            {/* Sidebar - Sticky on Desktop */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 p-4 lg:ml-[400px]">
              <div className="max-w-5xl mx-auto space-y-4">
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
