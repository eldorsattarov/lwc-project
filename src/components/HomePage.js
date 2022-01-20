import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <div className="navbarTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">
                                <img src="./images/logo.svg"/>
                                <h4 className="mb-0 mt-2">OX HIRING | FRONTEND</h4>
                            </div>
                            <div className="">
                                <Link to="/product" className="btn btn-warning mr-3 text-white">Products</Link>
                                <Link to="/login" className="btn btn-success mr-3">Login</Link>
                                <Link to="/authorization" className="btn btn-success">Authorization</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img src="./images/oo.jpg" className=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
