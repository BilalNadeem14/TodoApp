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
    return { type: 'null' }
}

const logout = () => {
    // console.log('logout action')
    return { type: 'LOG_OUT' }
}

export { signin, signup, logout }