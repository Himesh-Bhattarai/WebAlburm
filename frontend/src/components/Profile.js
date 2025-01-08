import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className='Profile-container'>
        <div className='rightmenu'>
          <div className='ProfilePicture'>
            Profile
          </div>

          <div className='UserName'>
            Himeshchanchal Bhattarai
          </div>
          <hr/>
          <div className='NavMenu'>
          <div className='Navitem'>
            tima
          </div>
            <div className='Navitem'>
            falam
          </div>
            <div className='Navitem'>
              tima
            </div>
            <div className='Navitem'>
              falam
            </div>
          </div>

        </div>
        <div className='contantSection'>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="#">Home feed</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " href="#">Images</Link>
            </li>
           
            <li class="nav-item">
              <Link class="nav-link" href="#">Videos</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">Folder Collection</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">Cottage</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">Private</Link>
            </li>
       
          </ul>

        </div>
      </div>
    </>
  )
}
