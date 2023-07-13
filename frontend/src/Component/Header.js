import React from "react";

import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container">
                <NavLink to="/" className="navbar-brand">ABC</NavLink>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" >
                            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/products" className="nav-link">Product</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/addproduct" className="nav-link">Add Product</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Home;