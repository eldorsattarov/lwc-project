import {LOGIN} from "../types/loginType";


const initialState = {
    isLoading: false,
    open: false,
    subdomain : "",
    token1 : "",
    valuess : [],
    products : []
};

export const loginReducer = (state=initialState,action) =>{
    if (action.types = LOGIN){
        return{
            ...state,
            ...action.payload
        }
    }
    return state
}
