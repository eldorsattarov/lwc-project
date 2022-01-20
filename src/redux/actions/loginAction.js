import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";
import {LOGIN} from "../types/loginType";

export function updateState (data) {
    return{
        type : LOGIN,
        payload : data
    }
}


export function login(event, errors, values, history) {

}


export function login2(event, errors, values, history) {
    return function (dispatch) {

    }
}
