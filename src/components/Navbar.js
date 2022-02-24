// React stuff
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// icons
import { FaBars, FaCartPlus } from 'react-icons/fa'

const Navbar = () => {

    const { cartItems } = useSelector(state => state.cartReducer)
    const { user } = JSON.parse(localStorage.getItem("currentUser"))

    const logout = () => {
        localStorage.removeItem("currentUser")
        window.location.reload()
    }

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
                            <Link className="nav-link myLink" aria-current="page" to="/">{user.email.substring(0, user.email.length - 10)}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link myLink" to="/orders">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={logout} className="nav-link myLink" to="/">Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link myLink" to="/cart">
                                <FaCartPlus /> <span className="cart-counter">{cartItems.length > 0 && cartItems.length}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar