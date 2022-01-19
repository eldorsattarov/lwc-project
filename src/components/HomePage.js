import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <div className="navbarTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between mt-3 mb-3">
                            <h4>OX HIRING | FRONTEND</h4>
                            <Link to="/product" className="">Products</Link>
                           <div className="">
                               <Link to="/login" className="btn btn-success mr-3">Avtorizatsiya</Link>
                               <Link to="/log" className="btn btn-success">Login</Link>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
            };

            export default HomePage;
