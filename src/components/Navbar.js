import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-bottom bg-light">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">H-Football</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active" href="#search">Search</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" href="#lastVideos">Last videos</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    )
}
