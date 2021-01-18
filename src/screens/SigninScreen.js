import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import AuthForm from '../components/AuthForm';
// import NavLink from '../components/NavLink';
// import { Context } from '../context/AuthContext';
// import { NavigationEvents } from 'react-navigation'
import * as actions from '../redux/actions/AuthActions'

const SigninScreen = (props) => {
  // const { state, signin, clearErrorMessage } = useContext(Context)
  //console.log(navigation)
  // console.log('state.token in sign in screen: ', state.token)
  const { navigation } = props
  React.useEffect(() => {
    const removeErrorMessage = navigation.addListener('focus', () => {
      // do something
      // clearErrorMessage()
    });
    return removeErrorMessage;
  }, [navigation])
  return (
    <View style={styles.container}>

      <AuthForm
        headerText="Sign In to your account"
        errorMessage={props.message}//''//{state.errorMessage}
        contextActionCallBack={props.signin}//{signin}    //() => {  }
        submitButtonText="Sign In"
        nav={navigation}
        routeName="SignUp"
      />
      {/* <NavLink 
              text="Don't have an account? Sign up instead"
              routeName="SignupScreen"
            /> */}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100
  }
});

const mapStateToProps = (state) => {
  console.log('mapStateToProps signin', state.authReducer.errorMessage)
  return { message: state.authReducer.errorMessage }//state.errorMessage }
}

const mapDispatchToProps = dispatch => {
  return {
    signin: (email, password) => dispatch(actions.signin(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);

