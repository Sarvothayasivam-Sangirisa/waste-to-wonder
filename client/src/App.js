import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <Services />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;