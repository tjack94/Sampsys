const initialState = {
    username: null,
    email: null,
    name: null
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case "GET_USER":
        return Object.assign({}, state, {username: action.payload.username, email: action.payload.email, name: action.payload.first_name +' '+action.payload.last_name})

        case "LOG_OUT":
        return Object.assign({}, state, {username: initialState.username, email: initialState.email, name: initialState.name})
        default: return state
    }
}