import React, { useState } from 'react';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Craft Workshop',
    date: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      service: 'Craft Workshop',
      date: '',
      message: ''
    });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="booking" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Book a Service</h2>
        {isSubmitted ? (
          <div className="alert alert-success text-center">
            Thank you for your booking! We'll contact you shortly to confirm.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input 
                type="text" 
                className="form-control" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Service Type</label>
              <select 
                className="form-select" 
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option>Craft Workshop</option>
                <option>Custom Art</option>
                <option>School Program</option>
                <option>Private Lesson</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Preferred Date</label>
              <input 
                type="date" 
                className="form-control" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Special Requests</label>
              <textarea 
                className="form-control" 
                rows="3" 
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2">Submit Booking</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Booking;