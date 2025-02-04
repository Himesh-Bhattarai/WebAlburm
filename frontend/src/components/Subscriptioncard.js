import React from 'react'
import { Link } from 'react-router-dom'

export default function Subscriptioncard() {
  return (
   <>
        <div class="card my-2">
              <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                      <h5 class="card-title">Basic Plans</h5>
                      <p class="card-text">Some quick example </p>
                      <Link href="#" class="btn btn-primary">Go somewhere</Link>
                  </div>
          </div>
          <div class="card my-2">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">Pro</h5>
                  <p class="card-text">Some quick example t</p>
                  <Link href="#" class="btn btn-primary">Go somewhere</Link>
              </div>
          </div>
          <div class="card my-2">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">Advance</h5>
                  <p class="card-text">Some quick example </p>
                  <Link href="#" class="btn btn-primary">Go somewhere</Link>
              </div>
          </div>
   </>
  )
}
