import React from 'react';
import { Link } from 'react-router-dom';


export default function Dashboard() {


  return (
    <>
    
      {/* <!-- Hero Section --> */}
      <div className="hero-section">
        <h1>Welcome to Our Website</h1>
        <p>Login or Sign Up to explore more</p>
        <button> <Link to="/Signup">Login</Link></button>
        <button>Sign Up</button>
      </div>

      {/* <!-- Features Section --> */}
      <div className="features-section">
        <h2>What We Offer</h2>
        <ul className="features-list">
          <li>Save your images and videos on our secure cloud platform to ensure they are never lost.</li>
          <li>Organize your photos into folders for easy management.</li>
          <li>Create beautiful collages to enjoy your photos in a creative way.</li>
          <li>Access your photos and videos even if you forget your password using our secure recovery process.</li>
        </ul>
      </div>

      {/* <!-- Offer Section --> */}
      <div className="offer-section">
        <h2>We Offer a Variety of Collages</h2>
        <div className="cottage-card">
          <img src="https://via.placeholder.com/300x200" alt="Cottage 1"/>
            <h3>Formal Collage</h3>
            <p>Enjoy a premium experience with Formal amenities.</p>
        </div>
        <div className="cottage-card">
          <img src="https://via.placeholder.com/300x200" alt="Cottage 2"/>
            <h3>Modern Collage</h3>
            <p>Modern way to see your memories.</p>
        </div>
      </div>
      {/* <!-- Security Section --> */}
      <div className="security-section">
        <h2>Secure Your Account</h2>
        <ul className="security-list">
          <li>In case of password recovery, provide the following:
            <ul>
              <li>Full Name</li>
              <li>Email</li>
              <li>Username</li>
              <li>Document Number</li>
              <li>Date of Birth</li>
            </ul>
          </li>
          <li>We also verify your identity by asking questions and providing five images from your account.</li>
          <li>You need to identify one image that you did not save, ensuring only the real account owner gains access.</li>
        </ul>
      </div>

      {/* <!-- Footer --> */}
      <footer class="footer">
        <div class="footer-container">
          {/* <!-- Footer Sections --> */}
          <div class="footer-about">
            <h4>About Us</h4>
            <p>
              Our platform ensures your memories are safe and organized.
              Save your photos and videos, create collages, and manage everything with ease.
            </p>
          </div>
          <div class="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: support@yourwebsite.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Cloud Street, Memory City</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Your Website. All Rights Reserved.</p>
        </div>
      </footer>

    </>
  );
}
