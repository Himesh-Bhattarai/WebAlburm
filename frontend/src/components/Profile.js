import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Profile() {


  return (
    <>
      <div className='profile-navbar-component '>
        <Navbar />
      </div>
      <div className="container my-3">
        {/* Cover Photo Section */}
        <div className="cover-photo">
          <button className="add-cover-photo">Add cover photo</button>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <img src="" alt="Profile-Picture" className="profile-pic" />
          <div className="profile-info">
            <h1>Hike Man</h1>
          </div>
          <div className="profile-buttons">
            <button>Add to Feed</button>
            <button>Edit profile</button>
          </div>
        </div>
        <hr />

        {/* Navigation Bar */}
        <div className="nav-bar">
          <Link to="/Photos">Photos</Link>
          <Link to="/Videos">Videos</Link>
          <Link to="#">Private</Link>
          <Link to="#">Collection</Link>
          <Link to="#">Cottages</Link>
        </div>
      </div>
     
    </>
  );
}
