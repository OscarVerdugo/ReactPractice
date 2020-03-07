import {createStore} from "redux";

import data from "./data.json";

const initialState = {
    projects:data
}


const reducer = (state = initialState, action) =>{

    // switch(action.type){
    //     case "
    // }
    return state;

}

export default createStore(reducer,initialState);