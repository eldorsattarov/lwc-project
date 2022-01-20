import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {login2, updateState} from "../redux/actions/loginAction";

const Log = (props) => {
    return (
        <div className="Autorization vh-100">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 text-center">
                        <h4 className={`${props.subdomain !== "" ? "text-success font-weight-bold" : "text-danger font-weight-bold"}`}>{props.subdomain !== "" ? "Avtorizatsiyadan muaffaqiyatli o'tdingiz !" : "Avval avtorizatsiya qiling !"}</h4>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center align-items-center">
                    <div className="col-12 text-center">
                        <img src="./images/aaa.jpg" className="loginImg"/>
                    </div>
                    <div className="col-2 text-center mt-5">
                        <a href={`https://${props.subdomain}.ox-sys.com/login`}
                           className={`${props.subdomain !== "" ? "btn btn-success btn-block" : "btn btn-danger btn-block"}`}
                           target="_blank">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        subdomain: state.login.subdomain
    }
}

export default connect(mapStateToProps, {login2, updateState})(Log);
