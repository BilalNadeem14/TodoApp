import React, { useState, useContext } from 'react';
import { View, StyleSheet, Button } from 'react-native';
//import { Text, Input } from 'react-native-elements'
// import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
// import NavLink from '../components/NavLink'
var count = 1
const SignupScreen = ({ navigation, }) => { //func
  // const { state, signup, clearErrorMessage } = useContext(AuthContext)
  const [counter, setCounter] = useState(0)
  const timer = async () => {
    setInterval(() => console.log('signup counter: ', count), 1000)
  }
  React.useEffect(() => {
    console.log('useEffect')
    return () => console.log('useEffect returned************************')
  }, [counter])

  //console.log('type of signup counter outside func: ', typeof(counter))
  //console.log('type of printing count:', typeof(count) )
  React.useEffect(() => {
    const removeErrorMessage = navigation.addListener('focus', () => {
      // do something
      // clearErrorMessage()
    });
    return removeErrorMessage;
  }, [navigation])

  // console.log('signup rerender state', state)
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up"
        errorMessage=''//{state.errorMessage}
        submitButtonText="Sign up"
        contextActionCallBack={() => { }}//signup} // it means take whatever appropriate argument you think and will work same as => ({ email, password }) => signup({ email, password})
        callBack={() => { }} //func} //this func is coming from app.js to change the value of bool
        nav={navigation}
        routeName="SignIn"
      />
      {/* <NavLink
              routeName="SigninScreen"
              text="Already have an account? sign in instead!"
            /> */}
      <Button title="increment" onPress={() => { count = count + 1 }} />
      <Button title="increment" onPress={() => { setCounter(counter + 1) }} />
    </View>
  )
};
/*
SignupScreen.navigationOptions = {
        headerShown: null
}
*/
/*
<Text style={{ fontSize: 48 }}>SignupScreen</Text>
            <Button title="Go to Signin" onPress={() => navigation.navigate('SigninScreen')} />
            <Button title="Go to main flow" onPress={() => func()} />
*/
// navigation.navigate('Home')
const styles = StyleSheet.create({
  container: {
    //borderColor: 'red',
    borderWidth: 10,
    // margin:10,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100
  },

});

export default SignupScreen;