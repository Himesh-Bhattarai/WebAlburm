import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
  <>
      

      <div className="dashboard-container">
        {/* Navbar */}
        <div className="dashboard-navbar">
          <h1>Web Alburm</h1>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <h2>Welcome to Your Cloud Solution</h2>
          <p>Join us to secure, organize, and showcase your precious memories effortlessly.</p>
          <button>Learn More</button>
        </div>

        {/* Section 1: Save Your Media */}
        <div className="section">
          <h2>Secure Your Memories</h2>
          <p>We provide top-notch cloud storage for your images and videos, ensuring they are safe and always accessible.</p>
          <div className="video-placeholder">Video: How We Secure Your Data</div>
        </div>

        {/* Section 2: What We Offer */}
        <div className="section">
          <h2>Our Unique Features</h2>
          <p>From cloud storage to creative collages, we offer everything to manage your memories seamlessly.</p>
          <ul>
            <li>Easy-to-use folder organization</li>
            <li>Advanced security protocols</li>
            <li>Creative photo collages</li>
            <li>Password recovery options</li>
          </ul>
        </div>

        {/* Section 3: Folder Management */}
        <div className="section">
          <h2>Organize Folder-Wise</h2>
          <p>Keep your files neat and accessible with our intuitive folder system.</p>
          <div className="video-placeholder">Video: Folder Management Demo</div>
        </div>

        {/* Section 4: Password Recovery */}
        <div className="section">
          <h2>Forgot Password?</h2>
          <p>Recover your account securely with our innovative recovery process.</p>
          <div className="video-placeholder">Video: Password Recovery Steps</div>
        </div>

        {/* Section 5: Collages */}
        <div className="section">
          <h2>Create Stunning Collages</h2>
          <p>Design and showcase your memories with our exclusive collage templates.</p>
          <div className="video-placeholder">Example Collages</div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>&copy; 2025 Our Platform. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}