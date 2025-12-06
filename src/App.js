import React, {useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App(){
  useEffect(()=>{document.title = 'Application Techno — Interactive';},[]);

  return (
    <div>
      <div className="shape s1" aria-hidden></div>
      <div className="shape s2" aria-hidden></div>

      <Navbar />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />

        {/* ⭐ FORCE FULL-WIDTH TO CENTER CONTACT FORM */}
        <div className="w-full flex justify-center">
          <Contact />
        </div>

      </main>

      <Footer />
    </div>
  );
}
