// import { signin } from "../actions/AuthActions";

export default (state = { errorMessage: 'Please try again!', bool: false }, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            console.log('sign in reducer pass', action.payload.password, 'state.email ', action.payload.email) //state.email
            return { ...state, bool: true, email: action.payload.email, password: action.payload.password } //!state.bool
            return state
        case 'SIGN_UP':
            console.log('signup reducer', action.payload)
            return { ...state, bool: true, email: action.payload.email, password: action.payload.password }//!state.bool
        case 'LOG_OUT':
            console.log('logout reducer***')
            return { ...state, bool: false }//!state.bool
        case 'SET_USER_DETAILS':
            console.log('SET_USER_DETAILS reducer', action.payload) //, action.payload

            // var parts = String(action.payload.displayName).split('|')

            // console.log('parts: ', parts)
            return { ...state, userDetails: action.payload } //, firstName: parts[0], lastName: parts[1]

        case 'EDIT_DISPLAY_NAME':
            console.log('EDIT_DISPLAY_NAME reducer', action.payload.firstName, action.payload.lastName) //, action.payload
            return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName }

        case 'SET_NAME': //AT TIME OF LOGIN
            console.log('SET_NAME    reducer', action.payload) //, action.payload
            var parts = String(action.payload).split('|')
            // console.log('parts: ', parts)

            return { ...state, firstName: parts[0], lastName: parts[1] }

        // case 'SET_USER_PASSWORD':
        //     console.log('SET_USER_PASSWORD reducer', action.payload) //, action.payload
        //     return { ...state, password: action.payload }
        default:
            return state
    }
}