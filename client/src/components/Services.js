import React from 'react';

function Services() {
  const services = [
    {
      title: "Craft Workshops",
      description: "Hands-on workshops for all skill levels",
      icon: "🎨"
    },
    {
      title: "Custom Art",
      description: "Commission unique pieces from our artisans",
      icon: "✏️"
    },
    {
      title: "School Programs",
      description: "Educational programs for students of all ages",
      icon: "🏫"
    }
  ];

  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="display-4 mb-3">{service.icon}</div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;