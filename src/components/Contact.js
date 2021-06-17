import React from 'react';
import {AvForm,AvField} from 'availity-reactstrap-validation';
import {Link} from "react-router-dom";

const Contact = () => {

    return (
        <div className="main mt-5">
            <div className="row">
                <div className="vertical"></div>
                <div className="col-12 mt-5">
                    <span className="design">CONTACT US</span><br/>
                    <span className="text-white">Let’s get to the nex level together</span>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6 mt-4">
                   <form>
                       <label key="lab" className="label1">Full name</label>
                       <input type="text" id="lab" className="" placeholder="Enter your first name"/>
                       <label key="lab2" className="label2">Email</label>
                       <input type="email" id="lab2" className="" placeholder="Enter your email"/>
                       <label key="lab3" className="label3">How can we help!</label>
                       <textarea type="text" id="lab3" className="" placeholder="Your massage"/>
                       <button type="submit" className="btn">Send</button>
                   </form>
                </div>
                <div className="col-6 mt-4">
    <div className="mt-4 ml-3">
        <a href="#" className="text-decoration-none text-white">
            <img src="/images/Vector (12).png"/>
            <span className="ml-3">+1 (647)-563-9114</span>
        </a>
    </div>
                    <div className="mt-4 ml-3">
                        <a href="#" className="text-decoration-none text-white">
                            <img src="/images/email 1.png"/>
                            <span className="ml-3">lead@gmail.com</span>
                        </a>
                    </div>
                    <div className="mt-4 ml-3">
                        <a href="#" className="text-decoration-none text-white">
                            <img src="/images/Vector (13).png"/>
                            <span className="ml-3">Margaretenstraße 70/3, 1050 Vienna, Austria</span>
                        </a>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="contactCard">
                                <div className="card-body">
                                    <h5 className="text-white">BECOME A CLIENT </h5>
                                    <span className="text-white">business@LEAD.com</span>
                                    <img src="/images/Arrow 3.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h5 className="text-white mb-3 mt-4">FOLLOW US</h5>
                            <img src="/images/Vector (14).png"/>
                            <img src="/images/Vector (15).png" className="ml-3"/>
                            <img src="/images/free-icon-instagram-1384015 2.png" className="ml-3"/>
                        </div>
                        <div className="col-6 mt-4">
                            <div className="contactCard3">
                                <div className="card-body">
                                    <h5 className="">BECOME A CLIENT </h5>
                                    <span className="">business@LEAD.com</span>
                                    <img src="/images/Arrow 3.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-4">
                            <div className="contactCard">
                                <div className="card-body">
                                    <h5 className="text-white">JOIN LEAD TEAM </h5>
                                    <span className="text-white">business@LEAD.com</span>
                                    <img src="/images/Arrow 3.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;