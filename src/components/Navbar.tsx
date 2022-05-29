import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props: {name: string, setName: (name: string) => void}) => {
    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        });

        props.setName('');
    }

    let menu;

    if(props.name === ''){
        menu = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link text-white">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link text-white">Register</Link>
                </li>
            </ul>
        );
    }else{
        menu = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link text-white" onClick={logout}>Logout</Link>
                </li>
            </ul>
        );
    }

    return(
        <nav className="navbar navbar-expand-lg bg-violet-gradient box-shadow">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {menu}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;