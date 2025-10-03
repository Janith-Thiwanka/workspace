import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🌾 FarmConnect</h3>
          <p>Connecting farmers directly with customers</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📧 info@farmconnect.com</p>
          <p>📞 +94 77 123 4567</p>
          <p>📍 Colombo, Sri Lanka</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 FarmConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;