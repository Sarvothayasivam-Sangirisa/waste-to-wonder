import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      comment: "The pottery workshop transformed how I see clay! The instructor was patient and knowledgeable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      comment: "My kids loved the school holiday program. They came home excited to show off their creations every day.",
      rating: 4
    },
    {
      name: "Emma Rodriguez",
      comment: "The custom portrait I commissioned was absolutely stunning. Worth every penny!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">What Our Customers Say</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="card-text fst-italic">"{testimonial.comment}"</p>
                  <p className="card-text fw-bold">- {testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;