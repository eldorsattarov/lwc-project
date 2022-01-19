import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Products from "./components/Products";
import Log from "./components/Log";
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/log" exact component={Log}/>
                <Route path="/product" exact component={Products}/>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
