import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">WebAlburm</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/dashbaord">Dashboard</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">PostFeed</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">MyImages</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">MyVideo</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/action">Action</Link></li>
                  <li><Link className="dropdown-item" to="/another-action">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/something-else">Something else here</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
             <Link to = "/Signup" className="btn btn-outline-success mx-1" tabindex="-1" role="button" aria-disabled="true">Login</Link>
             <Link href="/Signup" className="btn btn-outline-success mx-1" tabindex="-1" role="button" aria-disabled="true">Signup</Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
