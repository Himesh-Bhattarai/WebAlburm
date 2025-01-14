import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <div className='login-body'>
          <div class="card w-25">
              <div class="card-header">
                  <h3>Login</h3>
                  <p>Welcome back! Please login to your account.</p>
              </div>
              <div class="card-body">
                  <form>
                      <div class="mb-3">
                          <label for="email" class="form-label">Email Address</label>
                          <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
                      </div>
                      <div class="mb-3">
                          <label for="password" class="form-label">Password</label>
                          <input type="password" class="form-control" id="password" placeholder="Enter your password" required/>
                      </div>
                      <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="rememberMe"/>
                              <label class="form-check-label" for="rememberMe">Remember Me</label>
                      </div>
                      <button type="submit" class="btn btn-custom w-100">Login</button>
                  </form>
              </div>
              <div class="card-footer text-center">
                  <small>Don't have an account? <Link to="/Signup">Sign Up</Link></small>
              </div>
          </div>
          </div>
    </>
  )
}
