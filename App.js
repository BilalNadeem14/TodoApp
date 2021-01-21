import React, { useState } from 'react';
import { View, Text, Button, TextInput, useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import HomeScreen from './src/screens/HomeScreen'
import CreateScreen from './src/screens/CreateTodoScreen'
import DisplayScreen from './src/screens/EditTodoScreen'
import ColorPickerScreen from './src/screens/CreateCategoryScreen'
import CategoryScreen from './src/screens/CategoryDisplayScreen'
import EditCategoryScreen from './src/screens/EditCategoryScreen'
import SignIn from './src/screens/SigninScreen'
import SignUp from './src/screens/SignupScreen'
import EditNameScreen from './src/screens/EditDisplayNameScreen'

import { connect, Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux'; //applyMiddleware //for redux-thunk
// import { createLogger } from 'redux-logger'
// import thunk from 'redux-thunk'
// import reducers from './src/redux/reducers'
import * as actions from './src/redux/actions/AuthActions'
import CustomDrawerContent2 from './src/components/drawerComponent/CustomDrawer'


import { vh, vw } from './src/units';
import Animated, { block } from 'react-native-reanimated';

import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator()

const HomeStack = createStackNavigator()

const HomeStackScreen = (props) => {
  return <Animated.View style={
    [{ flex: 1, overflow: 'hidden' }, props.style,]//props.style // backgroundColor: 'red',borderRadius: 10 * vw 
  }>
    <View style={{ flex: 1, borderRadius: 10 * vw, elevation: 5 }}>
      <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, }}
      >
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="CreateScreen" component={CreateScreen} //options={{ headerShown: false }}
        />
        <HomeStack.Screen name="DisplayScreen" component={DisplayScreen} />
        <HomeStack.Screen name="ColorScreen" component={ColorPickerScreen} />
        <HomeStack.Screen name="EditCategory" component={EditCategoryScreen} />
        <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} />
      </HomeStack.Navigator>
    </View>
  </Animated.View>
}

const AuthStack = createStackNavigator()

const AuthStackScreen = ({ func }) => {
  // console.log('App.js func: ', func)
  return (
    <AuthStack.Navigator>
      {/* <AuthStack.Screen name="SignUp" component={SignUp} func={func} /> */}
      <AuthStack.Screen name="SignUp">
        {({ navigation }) => <SignUp
          navigation={navigation}
          func={func}
        />}
      </AuthStack.Screen>

      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  )
}


// export default mapDispatchToProps
// (props) => 

class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: false
    }

  }

  CustomDrawerContent = ({ progress, ...props }) => { //{ navigation }
    // console.log('progress', progress)

    return (
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <>
          <View style={{
            flex: 1,
            marginTop: 10 * vh,
            marginLeft: 15 * vw
            // borderWidth: 1 
          }}>
            <View style={{
              flexDirection: 'row'
            }}
            >
              <View style={{
                borderWidth: 2, borderColor: 'gray', borderRadius: 12.5 * vw,
                height: 25 * vw,
                width: 25 * vw,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row'
              }}>
                <Image
                  source={{
                    uri: 'https://d2halst20r4hcy.cloudfront.net/a29/5de08/54a4/4953/a136/e87286e0f7d0/normal/50416.jpg',
                    height: 22 * vw,
                    width: 22 * vw
                  }}
                  // resizeMode='center'
                  style={{
                    borderRadius: 8 * vh, borderWidth: 3,// padding: 5 * vh,
                    borderColor: 'transparent',
                  }}
                />

              </View>

              <TouchableOpacity
                style={{
                  // borderWidth: 1, 
                  marginLeft: 19 * vw,
                  marginTop: -3 * vh, height: 6 * vh
                }}
                onPress={() => {
                  props.navigation.goBack()
                }}
              >
                <Icon4
                  style={{
                    color: 'white',
                    // position: 'absolute',
                    // right: 10 * vw,
                    // marginTop: -5 * vh,
                    borderWidth: 1,
                    borderColor: 'gray',//'#a0a3a6',//'#c5c5d4',
                    borderRadius: 6 * vh,
                    padding: 1.5 * vw,

                  }}
                  name="chevron-back" size={25} color='white'//"#a0a3a6" //Icon2 name="grip-lines"
                />
              </TouchableOpacity>
            </View>

            <Text style={{
              fontSize: 30, fontFamily: 'Poppins-SemiBold',
              color: 'white', marginTop: 5 * vh, marginBottom: 3 * vh
            }}
            >Bilal{'\n'}Nadeem</Text>

            <View style={{
              // backgroundColor: 'blue', 
              // borderWidth: 2,
              // margin: 10,
            }}>
              {/* <TouchableOpacity>
              <Text>Home Screen</Text>
            </TouchableOpacity> */}
              <DrawerItem
                label="Home Screen"
                // itemStyle={{ backgroundColor: 'black', borderWidth: 1, margin: 10 }}
                style={{ //backgroundColor: 'black', 
                  marginLeft: -1.25 * vw
                }}
                labelStyle={{ color: 'white', marginLeft: -3 * vw }}
                icon={() => <Icon4 name="home" size={20} color="#a0a3a6" />}
                onPress={() => props.navigation.navigate('Home')} //Linking.openURL('https://mywebsite.com/help')
              />
              <DrawerItem
                label="Log out"

                onPress={() => this.props.logout()}
              />
            </View>
            <View style={{
              // backgroundColor: 'black',
              //  borderWidth: 1
            }}>
              <DrawerItem
                label="Create Screen"
                style={{ //backgroundColor: 'black',
                  marginLeft: -1.25 * vw
                }}
                labelStyle={{
                  color: 'white', marginLeft: -3 * vw
                }}
                icon={() => <Icon name="category" size={20} color="#a0a3a6" />}
                onPress={() => props.navigation.navigate('Create')} //Linking.openURL('https://mywebsite.com/help')
              />
            </View>
          </View>
        </>
      </DrawerContentScrollView>
    );

    return (
      <View style={{ height: 2 * vh, width: 2 * vw, borderWidth: 1, backgroundColor: 'blue', flex: 1 }}>
        <Text>Hello</Text>
        <Button
          title="Go somewhere"
          onPress={() => {
            // Navigate using the `navigation` prop that you received
            props.navigation.navigate('SomeScreen');
          }}
        />
      </View>
    );
  }

  // CustomDrawerContent = connect(mapStateToProps, mapDispatchToProps)(this.CustomDrawerContent)


  MyDrawer = () => {
    const dimensions = useWindowDimensions();

    var isLargeScreen = dimensions.width >= 768;
    isLargeScreen = false

    const [progress, setProgress] = useState(new Animated.Value(0))

    const scale = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [1, 0.87],

    })

    const borderRadius = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [0, 40],

    })

    const screensStyles = { borderRadius, transform: [{ scale }] }

    return (
      <Drawer.Navigator
        drawerType='slide'//'permanent'// //back
        drawerStyle={{
          width: '76%',
          backgroundColor: '#0E1F55'
        }}
        overlayColor="transparent"
        initialRouteName="Home"
        // //not working
        drawerContentOptions={{
          activeBackgroundColor: 'white',
          activeTintColor: 'green',
          inActiveTintColor: 'green',
          // itemStyle: { backgroundColor: 'black', borderWidth: 1, margin: 30 * vh }

        }}
        contentContainerStyle={{ flex: 1 }}

        sceneContainerStyle={{ backgroundColor: '#0E1F55', }} //transparent //#0E1F55

        drawerContent={props => { setProgress(props.progress); return <CustomDrawerContent2 {...props} /> }} // this.CustomDrawerContent(props)


      // drawerContent={({ navigation }) => {
      //   return (
      //     // height: 2 * vh, width: 2 * vw, 
      //     <View style={{ borderWidth: 1, backgroundColor: '#0E1F55', flex: 1 }}>
      //       <Text>Hello</Text>
      //       <Button
      //         title="Go somewhere"
      //         onPress={() => {
      //           // Navigate using the `navigation` prop that you received
      //           navigation.navigate('Home');
      //         }}
      //       />
      //     </View>
      //   )
      // }}
      // <this.CustomDrawerContent />
      >
        <Drawer.Screen name="Home"  //component={HomeStackScreen}
        >
          {props => <HomeStackScreen {...props} style={screensStyles} />}
        </Drawer.Screen>
        <Drawer.Screen name="Create" component={CreateScreen} />
        <Drawer.Screen name="EditUserNameScreen" component={EditNameScreen} />
      </ Drawer.Navigator >
    );
  }

  callBackFunc = () => {
    console.log('call back func called yayyy!!!!---------------------------------------------')
    this.setState({ bool: !this.state.bool }) //!this.state.bool
  }

  render() {
    console.log('App------------------------------------------------------', this.props.globalBool)
    return (
      <NavigationContainer>
        {/* <Drawer.Navigator
          // openByDefault
          drawerType={'back'}
          drawerStyle={{ width: '80%', backgroundColor: '#0E1F55' }}
        // drawerType={true ? 'permanent' : 'back'}
        // // drawerStyle={false ? null : { width: '100%' }}
        // overlayColor="transparent"
        >
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Create" component={CreateScreen} />
        </Drawer.Navigator> */}
        {/* this.props.bool or this.state.bool or store.getState().authReducer.bool */}
        {this.props.globalBool ? <this.MyDrawer /> :

          <AuthStackScreen func={() => this.callBackFunc()} />
        }
      </NavigationContainer>
    )
  }
}

var mapStateToProps = (state) => {
  // console.log('----------------------------------------------------------------mapStateToProps APP.js', state.authReducer.bool)
  return { globalBool: state.authReducer.bool }
}

var mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}


App = connect(mapStateToProps, null)(App2)

import { store, persistedStore } from './src/redux'
//--------------Store-------------------------

// import { persistStore, persistReducer } from 'redux-persist'
// // // import { createLogger } from 'redux-logger'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// // '@react-native-community/async-storage'

import { PersistGate } from 'redux-persist/integration/react';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['reducer', 'authReducer']
// }

// var persistedReducer = persistReducer(persistConfig, reducers)
// // {}, 
// var store = createStore(persistedReducer, applyMiddleware(thunk)); //createLogger(), 

// var persistedStore = persistStore(store)



const myLogger = (store) => (next) => (action) => {
  console.log('logged action ', action)
  next(action)  //if we don't call this next() then the action is not reaching our reducer, it is not moving any further
}

// createStore(reducers, {}, applyMiddleware(myLogger, createLogger(), thunk)) //(reducers, initialState, applyMiddleware(myLogger, logger() //as i'm just passing the reference and not calling it))  //applyMiddleware takes an arg which is the middleware we want to use 

// var mapStateToProps = (state) => {
//   console.log('----------------------------------------------------------------mapStateToProps APP.js')
//   return { globalBool: state.authReducer.bool }
// }

// var mapDispatchToProps = dispatch => {
//   return {
//     logout: () => dispatch(actions.logout())
//   }
// }

// export default connect(mapStateToProps, null)(App)

console.log('App store: ', store.getState().authReducer.bool)


export default () => (
  <Provider store={store}
  >
    <PersistGate persistor={persistedStore} loading={null}>
      <App />
    </PersistGate>
  </Provider>
)
