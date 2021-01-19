import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Button, Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import Spacer from '../components/Spacer'
import { connect } from 'react-redux';

import * as actions from '../redux/actions/AuthActions'
import { vh } from '../units';

const EditForm = ({ navigation, ...props }//{ headerText, errorMessage, contextActionCallBack, submitButtonText, callBack, nav, routeName, setErrorMessage, ...props }
) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <View style={{
            // backgroundColor: 'white', flex: 1
        }}>
            <Spacer>
                <Text h3 style={{ color: 'silver', marginTop: 3 * vh }}>Edit Name</Text>
            </Spacer>
            <Text style={{ marginTop: 12 * vh }}></Text>
            <Input
                label="First Name"
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="none"
                autoCorrect={false}
                style={{ color: 'silver' }}
            />
            <Input
                // secureTextEntry //it is same as => secureTextEntry={true}
                label="Last Name"
                // labelStyle={{ color: 'silver' }}
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="none"
                autoCorrect={false}
                style={{ color: 'silver' }}
            />
            {/* {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null} */}
            <Spacer>
                <Button

                    //buttonStyle={{height:100,backgroundColor: 'red' }} 
                    title={'submit'} //submitButtonText
                    onPress={() => {
                        // console.log('name: ', firstName, lastName)

                        // auth()
                        console.log('userDetails', props.userDetails)
                        props.userDetails.updateProfile({
                            displayName: 'Bilal Nadeem'
                        })
                            .then((data) => {
                                console.log('profile Updated data: ',) //data
                            })

                        // this.props.setUserDetails(user)
                        // this.props.editDisplayName(firstName, lastName)
                    }

                    }
                />
            </Spacer>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                {/* submitButtonText === 'Sign up' */}
                {true ? <Text style={{ color: 'silver', marginLeft: 10, fontSize: 16 }}>Changed your mind, Manage your tasks instead?{'\n'}</Text>
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

const mapStateToProps = (state) => {
    // console.log('edit screen: ', state.authReducer.userDetails)
    return {
        userDetails: state.authReducer.userDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // errorFunc: (msg) => dispatch({ type: 'ERROR', payload: msg }),
        editDisplayName: (firstName, lastName) => editDisplayName(firstName, lastName),
        setUserDetails: (user) => dispatch(actions.setUserDetails(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);