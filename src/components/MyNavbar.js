import React from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/movies'>Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/profile'>Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="navbar-nav">
            <Link className="nav-link" to='/cart'>Cart</Link>
        </div>
        <div className="navbar-nav">
            <Link className="nav-link" to='/login'>Login</Link>
        </div>
        <div className="navbar-nav">
            <div className="nav-link">Logout</div>
        </div>
    </nav>
        </div>
    );
}

export default MyNavbar;
