import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {login} from "../redux/actions/loginAction";

const Login = (props) => {
    return (
        <div className="loginPageOne">
            <div className="container">
                <div className="row">
                    <div className="loginPage w-100">
                        <div className="container">
                            <div className="row vh-100 justify-content-center align-items-center">
                                <div className="col-6 d-flex justify-content-center align-items-center">
                                          <div className="circle">
                                              <img src="./images/aa.png"/>
                                          </div>
                                </div>
                                <div className="col-5">
                                    <h2 className="text-center">Member Login</h2>
                                    <div className="card border-0">
                                        <div className="card-body">
                                            <AvForm onSubmit={(event, errors, values) => {props.login(event, errors, values, props.history)}}>
                                                <AvField type="text" name="_username" label="Username" required
                                                         errorMessage="To'ldirish majburiy"/>
                                                <AvField type="password" name="_password" label="Your password" required
                                                         errorMessage="To'ldirish majburiy"/>
                                                <AvField type="text" name="_subdomain" label="Subdomain" required
                                                         errorMessage="To'ldirish majburiy"/>
                                                <button type="submit" className="btn btn-success btn-block">Login</button>
                                            </AvForm>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default connect(null,{login})(Login);
