
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';

function App() {
  return (
    <div className="min-h-screen space-bg relative overflow-x-hidden">
      <StarField />
      <div className="nebula-glow fixed inset-0 pointer-events-none" />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Toaster />
    </div>
  );
}

export default App;
