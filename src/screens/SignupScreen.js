import React, { useState, useContext } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
//import { Text, Input } from 'react-native-elements'
// import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import * as actions from '../redux/actions/AuthActions'
// import NavLink from '../components/NavLink'
var count = 1
const SignupScreen = ({ navigation, func, ...props }) => { //func
  // const { state, signup, clearErrorMessage } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState(''); //please try again!
  React.useEffect(() => {
    const removeErrorMessage = navigation.addListener('blur', () => {
      // do something
      // clearErrorMessage()
      setErrorMessage('')

    });
    return removeErrorMessage;
  }, [navigation])

  React.useEffect(() => {
    // func()
  }, [])

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up"
        errorMessage={errorMessage}//''//{state.errorMessage}
        submitButtonText="Sign up"
        contextActionCallBack={props.signup}//() => { } //signup} // it means take whatever appropriate argument you think and will work same as => ({ email, password }) => signup({ email, password})
        callBack={func} //() => { }} //this func is coming from app.js to change the value of bool
        nav={navigation}
        routeName="SignIn"
        setErrorMessage={setErrorMessage}
      />
      {/* <NavLink
              routeName="SigninScreen"
              text="Already have an account? sign in instead!"
            /> */}

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
    // borderWidth: 10,
    // margin:10,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100
  },

});

const mapStateToProps = (state) => {
  // console.log('mapStateToProps signup', state.authReducer) //.errorMessage
  return {
    message: 'we removed errorMessage from redux '//state.authReducer.errorMessage 
  }//state.errorMessage }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (email, password, callback) => dispatch(actions.signup(email, password, callback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);