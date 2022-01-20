import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {login, updateState} from "../redux/actions/loginAction";
import {toast} from "react-toastify";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {TOKEN_NAME} from "../tools/constants";

const Autorization = (props) => {
    const auth = (event, errors, values) => {
        props.updateState({valuess : values})
        console.log(props.valuess);
        console.log(values)
        props.updateState({subdomain: values["_subdomain"]});
        console.log("sub = " + props.subdomain);

        let axios = require('axios');
        let FormData = require('form-data');
        let data = new FormData();
        data.append('_username', values["_username"]);
        data.append('_password', values["_password"]);
        data.append('_subdomain', values["_subdomain"]);
        let config = {
            method: 'post',
           url: `https://${values["_subdomain"]}.ox-sys.com/security/auth_check`,
            headers: {

            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                localStorage.setItem(TOKEN_NAME, response.data.token + " " + response.data.lifetime);
                props.updateState({token1 : response.data.token});
                toast.success("Success");
                props.history.push("/");
            })
            .catch(function (error) {
                console.log(error);
                toast.error("Error")
            });
    }
    return (
        <div className="loginPageOne">
            <div className="container">
                <div className="row">
                    <div className="loginPage w-100">
                        <div className="container">
                            <div className="row vh-100 justify-content-center align-items-center">
                                <div className="col-6 d-flex justify-content-center align-items-center">
                                    <div className="circle">
                                        <img src="./images/zzz.jpg"/>
                                    </div>
                                </div>
                                <div className="col-5 border p-3">
                                    <h2 className="text-center text-primary font-weight-bold">Member Authorization</h2>
                                    <div className="card border-0">
                                        <div className="card-body">
                                            {/*<AvForm onSubmit={(event, errors, values) => {props.login(event, errors, values, props.history)}}>*/}
                                            <AvForm onSubmit={auth}>
                                                <AvField type="text" name="_username" label="Username" required
                                                         errorMessage="To'ldirish majburiy"/>
                                                <AvField type="password" name="_password" label="Your password" required
                                                         errorMessage="To'ldirish majburiy"/>
                                                <AvField type="text" name="_subdomain" label="Subdomain" required
                                                         errorMessage="To'ldirish majburiy"/>
                                                <button type="submit"
                                                        className="btn btn-success btn-block">Authorization
                                                </button>
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
    )
}
const mapStateToProps = (state) => {
    return {
        subdomain: state.login.subdomain,
        token1: state.login.token1,
        valuess : state.login.valuess
    }
};
export default connect(mapStateToProps, {login, updateState})(Autorization);
