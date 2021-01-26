import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import Spacer from './Spacer'
import { connect } from 'react-redux';
import firestore from '@react-native-firebase/firestore';

import * as actions from '../redux/actions/AuthActions'
var firstName = 'ab'
var lastName = ""
const AuthForm = ({ headerText, errorMessage, contextActionCallBack, submitButtonText, callBack, nav, routeName, setErrorMessage, ...props }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('') //userName
    console.log('render***************************************')
    return (
        <View style={{ flex: 1 }}>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            {submitButtonText === 'Sign up' && <Input
                label="User Name"
                value={userName}
                onChangeText={(name2) => {
                    let name = name2.split(' ')
                    firstName = name[0]
                    lastName = ""
                    if (name.length > 1) {
                        lastName = name[1]
                    }

                    setUserName(name2);
                    console.log('userName: ', firstName + '|' + lastName)
                }}
                // autoCapitalize="none"
                autoCorrect={false}
            />}
            {/* <Text>firstName: {firstName} {lastName}</Text> */}
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail} //setEmail is same as => (newEmail) => setEmail(newEmail) 
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                secureTextEntry //it is same as => secureTextEntry={true}
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button

                    //buttonStyle={{height:100,backgroundColor: 'red' }} 
                    title={submitButtonText}
                    onPress={() => {
                        console.log('submitButtonText', submitButtonText)
                        // try {
                        if (email === '' || password === '') {
                            setErrorMessage("Don't leave the fields empty")
                        }
                        else {
                            if (submitButtonText === 'Sign up') {
                                auth()
                                    .createUserWithEmailAndPassword(email, password)
                                    .then((data) => {
                                        console.log('***User account created & signed in! ===============> userId', data.user.uid);

                                        firestore()
                                            .collection('Users')
                                            .doc(data.user.uid)
                                            .set({
                                                name: 'Ada Lovelace',
                                                age: 30,
                                                allTodos: [
                                                    {
                                                        Todos: [],
                                                        category: 'Business',
                                                        color: 'blue'
                                                    },
                                                ]
                                            })
                                            .then(() => {
                                                console.log('User added!');
                                            });

                                        props.setUserDetails(data.user)
                                        props.setName(firstName + '|' + lastName)
                                        console.log('setName done', firstName + '|' + lastName)


                                        data.user.updateProfile({
                                            displayName: firstName + '|' + lastName
                                        })
                                            .then(() => {
                                                console.log('profile Updated')
                                            })
                                        contextActionCallBack(email, password, callBack)

                                    })
                                    .catch(error => {
                                        if (error.code === 'auth/email-already-in-use') {
                                            console.log('That email address is already in use!');
                                            setErrorMessage('That email address is already in use!')
                                        }

                                        if (error.code === 'auth/invalid-email') {
                                            console.log('That email address is invalid!');
                                            setErrorMessage('That email address is invalid!')
                                        }

                                        console.error(error);
                                    });
                            }
                            else if (submitButtonText === 'Sign In') {
                                // let Data = {}
                                auth()
                                    .signInWithEmailAndPassword(email, password)
                                    .then((data) => {
                                        console.log('User account signed in!');

                                        // console.log('data of user', data.user)
                                        props.setUserDetails(data.user)
                                        props.setName(data.user.displayName)

                                        // data.user.updateProfile({
                                        //     displayName: 'bilal'
                                        // })
                                        //     .then(() => {
                                        //         console.log('profile Updated')
                                        //     })

                                        contextActionCallBack(email, password)
                                    })
                                    .catch(error => {
                                        if (error.code === 'auth/email-already-in-use') {
                                            console.log('That email address is already in use!');
                                            setErrorMessage('That email address is already in use!')
                                        }

                                        else if (error.code === 'auth/invalid-email') {
                                            console.log('That email address is invalid!');
                                            setErrorMessage('That email address is invalid!')
                                        }

                                        else if (error.code === 'auth/wrong-password') {
                                            console.log('That password is invalid!');
                                            setErrorMessage('That password is invalid!')
                                        }
                                        else {
                                            setErrorMessage(error.code)
                                        }

                                        console.error('error: ', error);
                                    });

                                // auth()
                                // Data.user.updateProfile({
                                //     displayName: 'new'
                                // })
                                //     .then(() => {
                                //         console.log('profile Updated')
                                //     })
                                //     .catch(err => {
                                //         console.log('data not updated error: ', err)
                                //     })

                                // try {
                                //     const data =  await smomepromise();
                                //     if(data){
                                //         console.log('profile Updated',data)
                                //     }
                                // console.log('new')
                                // } catch (error) {
                                //     console.log('data not updated error: ', err)
                                // }

                            }

                        }
                        // }
                        // props.savePassword(password)


                    }

                    } //signup({email, password})
                />
            </Spacer>
            <TouchableOpacity onPress={() => nav.navigate(routeName)} >
                {submitButtonText === 'Sign up' ? <Text style={{ color: 'blue', marginLeft: 10, fontSize: 16 }}>Already have an account, Sign in instead?{'\n'}</Text>
                    : <Text style={{ color: 'blue', marginLeft: 10, fontSize: 16 }}>Don't have an account, Sign up?</Text>}
                {/* (navigate by passing navigation props in AuthForm.js) */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        // borderWidth: 1
        //marginTop:15,
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        // errorFunc: (msg) => dispatch({ type: 'ERROR', payload: msg }),
        setUserDetails: (user) => dispatch(actions.setUserDetails(user)),
        setName: (displayName) => dispatch({ type: 'SET_NAME', payload: displayName })
        // savePassword: (pass) => dispatch(actions.savePassword(pass))
    }
}

export default connect(null, mapDispatchToProps)(AuthForm);