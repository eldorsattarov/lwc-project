import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import Autorization from "./components/Autorization";
import Products from "./components/Products";
import Log from "./components/Log";
import {ToastContainer} from "react-toastify";
import Product from "./components/Product";
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/authorization" exact component={Autorization}/>
                <Route path="/login" exact component={Log}/>
                {/*<Route path="/product" exact component={Products}/>*/}
                <Route path="/product" exact component={Product}/>
            </Switch>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App;
