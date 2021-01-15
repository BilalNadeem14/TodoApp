const signin = (email, password) => {
    console.log('yay we called the action ')
    return { type: 'SIGN_IN', payload: { email, password } }
}

export { signin }