import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Platforms from './components/Platforms';
import Journey from './components/Journey';
import Benefits from './components/Benefits';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Platforms />
        <Journey />
        <Benefits />
      </main>
    </div>
  );
}

export default App;