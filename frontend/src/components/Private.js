import React from 'react';
import { Link } from 'react-router-dom';

export default function Private() {
  return (
      <>
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
                  <Link to="/Private">Private</Link>
                  <Link to="#">Collection</Link>
                  <Link to="#">Cottages</Link>
              </div>
              <div class="story-container my-5">
                  {/* <!-- Create Story Card --> */}
                  <div class="story-card create-story ">
                      <div class="profile-picture"></div>
                      <button class="create-button">+</button>
                      <p>Add Videos</p>
                  </div>

                  {/* <!-- Story Card --> */}
                  <div class="story-card">
                      <div class="story-header">
                          <img src="https://via.placeholder.com/40" alt="Profile-Picture" class="story-profile-pic" />
                      </div>
                      <div class="story-content">
                          <img src="https://via.placeholder.com/150x250" alt="Story Content" class="story-image" />
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
