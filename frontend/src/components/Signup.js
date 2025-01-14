import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
   <>
   <div className='signup-body'>
      <div class="card w-25">
        <div class="card-header">
          <h3>Sign Up</h3>
          <p>Create your account and join us today!</p>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="fullName" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="fullName" placeholder="Enter your full name" required/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter your password" required/>
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password" required/>
            </div>
            <button type="submit" class="btn btn-custom w-100">Sign Up</button>
          </form>
        </div>
        <div class="card-footer text-center">
          <small>Already have an account? <Link href="#">Login here</Link></small>
        </div>
      </div>
      </div>

   </>
  )
}
