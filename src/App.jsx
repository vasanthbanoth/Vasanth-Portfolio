import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import About from './components/About';
import ProjectList from './components/ProjectList'; // Using the new list view
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-web3-bg font-Outfit text-white selection:bg-sawad-lime selection:text-black">

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
            <ProjectList />
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
