// import { signin } from "../actions/AuthActions";

export default (state = { errorMessage: 'hello' }, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            console.log('sign in reducer')
            return state

        default:
            return state
    }
}