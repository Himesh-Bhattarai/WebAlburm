import React from 'react';
import { Link} from 'react-router-dom';

export default function entrybar() {
  return (
            <>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand colortext" href="#">
                            Web Alburm
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav colortext me-auto mb-2 mb-lg-0">
                                <li className="nav-item colortext">
                                    <Link
                                        className="nav-link active colortext"
                                        aria-current="page"
                                        to="/Profile"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item colortext">
                                    <Link className="nav-link colortext" href="#">
                                        Link
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle colortext"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item colortext" href="#">
                                                Action
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item colortext" href="#">
                                                Another action
                                            </Link>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link className="dropdown-item colortext" href="#">
                                                Something else here
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link disabled colortext"
                                        aria-disabled="true"
                                    >
                                        Disabled
                                    </Link>
                                </li>
                            </ul>

                            <Link to="/Signup" className="btn btn-outline-success mx-1" tabindex="-1" role="button" aria-disabled="true">Login</Link>
                            <Link href="/Signup" className="btn btn-outline-success mx-1" tabindex="-1" role="button" aria-disabled="true">Signup</Link>
                        </div>
                    </div>
                </nav>
            </>
        );
    }

