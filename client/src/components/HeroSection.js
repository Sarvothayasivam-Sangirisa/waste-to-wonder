import React from 'react';

function HeroSection() {
  return (
    <header className="bg-primary text-white py-5">
      <div className="container text-center">
        <h1 className="display-4">Welcome to Craft Haven</h1>
        <p className="lead">Where creativity meets craftsmanship</p>
        <a href="#booking" className="btn btn-light btn-lg mt-3">Book a Workshop</a>
      </div>
    </header>
  );
}

export default HeroSection;