import { combineReducers } from "redux";


const userInitialState = {
    username: null,
    email: null,
    name: null, 
    userId: null
}

 function userInfo(state=userInitialState, action){
    switch(action.type){
        case "GET_USER":
        return Object.assign({}, state, {username: action.payload.username, email: action.payload.email, name: action.payload.first_name +' '+action.payload.last_name, userId: action.payload.id})

        case "LOG_OUT":
        return Object.assign({}, state, {username: userInitialState.username, email: userInitialState.email, name: userInitialState.name})
        default: return state
    }
};
function questionInfo(state = {}, action){
    switch (action.type) {
        case "SET_TYPE":
        return Object.assign({}, state, {questionType: action.payload})  
        default: return state
    }
}

export default combineReducers({userInfo, questionInfo })