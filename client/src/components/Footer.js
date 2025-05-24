import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Craft Haven</h5>
            <p>123 Artisan Street, Creative City</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@crafthaven.example</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h5>Opening Hours</h5>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Craft Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;