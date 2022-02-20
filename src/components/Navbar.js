import React from 'react'

import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import '../styles/layout.css'

const Navbar = () => {
    return (
        <nav className="navbar myNavbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand myLink" to="/">FireCommerce</Link>
                <button className="navbar-toggler myToggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars sice={25} color="white" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link myLink" aria-current="page" to="/">User</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link myLink" to="/">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link myLink" to="/">Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link myLink" to="/">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar