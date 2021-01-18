// import { signin } from "../actions/AuthActions";

export default (state = { errorMessage: 'Please try again!', bool: true }, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            console.log('sign in reducer', action.payload)
            return state
        case 'SIGN_UP':
            console.log('signup reducer', action.payload)
            return { ...state, bool: !state.bool }
        case 'LOG_OUT':
            console.log('logout reducer***')
            return { ...state, bool: !state.bool }
        default:
            return state
    }
}