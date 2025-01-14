import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'


export default function Profile() {
  return (
    <>
<div className='profile-navbar-component'>
      <Navbar />
</div>
      <div class="container">
        {/* <!-- Cover Photo Section --> */}
        <div class="cover-photo">
          <button class="add-cover-photo">Add cover photo</button>
        </div>

        {/* <!-- Profile Section --> */}
        <div class="profile-section">
          <img src="" alt="Profile-Picture" class="profile-pic"/>
            <div class="profile-info">
              <h1>Hike Man</h1>
            </div>
            <div class="profile-buttons">
              <button>Add to story</button>
              <button>Edit profile</button>
            </div>
        </div>
        <hr />


        {/* <!-- Navigation Bar --> */}
        <div class="nav-bar">
          <Link href="#">Photos</Link>
          <Link href="#">Videos</Link>
          <Link href="#">Private</Link>
          <Link href="#">Collection</Link>
          <Link href="#">Cottages</Link>
        </div>
        
      </div>
    </>
  )
}
