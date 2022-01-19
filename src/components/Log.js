import React from 'react';
import {AvForm , AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {login2} from "../redux/actions/loginAction";

const Log = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <AvForm onSubmit={(event, errors, values) => {props.login2(event, errors, values, props.history)}}>
                                    <AvField type="text" name="_username"
                                             label="username" required errorMessage="To'ldirish majburiy"/>
                                    <AvField type="password" name="_password" label="Your password" required errorMessage="To'ldirish majburiy"/>
                                    <button type="submit" className="btn btn-success btn-block">Sign in</button>
                                </AvForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null,{login2})(Log);
