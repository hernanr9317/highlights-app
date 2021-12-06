import React from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/#">Highlights App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/#">Highlights</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/#">Calendar and Data</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}
