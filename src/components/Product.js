import React from 'react';
import {connect} from "react-redux";
import {updateState} from "../redux/actions/loginAction";
import {toast} from "react-toastify";
import Products from "./Products";

const Product = (props) => {

    let axios = require('axios');
    let FormData = require('form-data');
    let data = new FormData();
    data.append('_username', props.valuess["_username"]);
    data.append('_password', props.valuess["_password"]);
    data.append('_subdomain', props.valuess["_subdomain"]);

    let config = {
        method: 'get',
        // url: 'https://eldor.ox-sys.com/variations',
        url: `https://${props.valuess["_subdomain"]}.ox-sys.com/variations`,
        headers: {
            'Authorization': `'Bearer ${props.token1}'`,
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            props.updateState({products: response.data})
            console.log(props.products);
        })
        .catch(function (error) {
            // toast.error("Error");
        });



    return (
        <div className="productNew">
       <div className="container">
           <div className="row">
               <div className="col-12 text-center">
                   <h2>List of Products</h2>
               </div>
               <div className="">
                   <Products/>
               </div>
           </div>
       </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        token1: state.login.token1,
        valuess : state.login.valuess,
        products: state.login.products
    }
}
export default connect(mapStateToProps, {updateState})(Product);
