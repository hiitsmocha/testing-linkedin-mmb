import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AboutUs } from './components/AboutUs';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Features />
      <AboutUs />
    </div>
  );
}

export default App;