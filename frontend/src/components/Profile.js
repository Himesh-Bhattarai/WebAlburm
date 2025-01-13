import React from 'react'
import Navbar from './Navbar'


export default function Profile() {
  return (
    <>
<div className='profile-navbar-component'>
      <Navbar />
</div>
    <div className='main-container'>
      <div className='Background-container'>
          <img src="your-image-url" alt="Background" />

      </div>
      <div className='profile-section'>
        <div className='user-profile-div'>
        <img src='./public/FrontBackground/images.jpg' alt='user-profile'/>
        </div>
        <div className='user-content'>
          <span className='user-name'> </span>
          <div className="user-button">
            <button className='btn btn-success my-1 mx-1'>Add Images</button>
              <button className='btn btn-success my-1 mx-1'>Add Videos</button>
              <button className='btn btn-success my-1 mx-1'>Update profile</button>
              <button className='btn btn-success my-1 mx-1'>Update Background</button>

          </div>
        </div>

      </div>
      <div className='user-images&contant'>


      </div>
    </div>
    </>
  )
}
