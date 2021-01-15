import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer'
const AuthForm = ({ headerText, errorMessage, contextActionCallBack, submitButtonText, callBack, nav, routeName }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
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
                    onPress={() => contextActionCallBack({ email, password, callBack })} //signup({ email, password })
                />
            </Spacer>
            <TouchableOpacity onPress={() => nav.navigate(routeName)} >
                <Text style={{ color: 'blue', marginLeft: 10 }}>(navigate by passing navigation props in AuthForm.js){'\n'}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        //marginTop:15,
    }
});

export default AuthForm;