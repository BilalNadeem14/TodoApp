const signin = (email, password) => {
    console.log('yay we called the signin action ', email, password)
    return { type: 'SIGN_IN', payload: { email, password } }
}

const signup = (email, password, callback) => {

    console.log('yay we called the signup action ', email, password, callback)
    callback()
    if (email == 'bilal' && password == 'blue') {
        // callback()
        return { type: 'SIGN_UP', payload: { email, password } }
    }
    return { type: 'SIGN_UP', payload: { email, password } }
    return { type: 'null' }
}

const logout = () => {
    // console.log('logout action')
    return { type: 'LOG_OUT' }
}

const setUserDetails = (user) => {
    // console.log('setUserDetails action')
    return { type: 'SET_USER_DETAILS', payload: user }
}

const editDisplayName = (firstName, lastName) => {//now write a case in reducer and check functionality
    return { type: 'EDIT_DISPLAY_NAME', payload: { firstName, lastName } }
}

// const savePassword = (pass) => {
//     console.log('savePass action')
//     return { type: 'SET_USER_PASSWORD', payload: pass }
// }

export { signin, signup, logout, setUserDetails, editDisplayName } //savePassword