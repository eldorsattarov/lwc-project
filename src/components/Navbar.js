import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    function changeBack() {

    }
    return (
        <div className="navbarTop">
            <div className='container'>
                <div className="row ">
                    <div className="vertical"></div>
                    <div className="col-12 mt-3 d-flex justify-content-between align-items-center ">
                        <Link to="/">
                            <img src="/images/Group 57 2.png" className="navbar-brand"/>
                        </Link>
                        <select className="text-white">
                            <option>EN</option>
                            <option>RU</option>
                            <option>UZ</option>
                        </select>
                        <label className="switch" onClick={changeBack}>
                            <input type="checkbox"/>
                            <span className="slider round">

                            </span>
                        </label>

                        <ul className="nav">
                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link> </li>
                            <li className="nav-item"><Link to="/design" className="nav-link">Works</Link> </li>
                            <li className="nav-item"><Link to="/technical" className="nav-link">Prices</Link> </li>
                            <li className="nav-item"><Link to="/" className="nav-link">For clients</Link> </li>
                            <li className="nav-item"><Link to="/contact" className="nav-link">Contacts</Link> </li>
                        </ul>
                        <a href="#" className="nav-link navNumber">+1 (647)-563-9114</a>
                        <span className="d-flex justify-content-center">
        <img src="/images/Polygon 4.png"/>
    </span><p className="start">Start a project</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;