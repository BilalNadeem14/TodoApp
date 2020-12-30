import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './src/screens/HomeScreen'
import CreateScreen from './src/screens/CreateScreen'
import DisplayScreen from './src/screens/DisplayScreen'
import ColorPickerScreen from './src/screens/ColorPickerScreen'

import { Provider } from 'react-redux';
import { createStore } from 'redux'; //applyMiddleware //for redux-thunk
import reducers from './src/redux/reducers'

const Drawer = createDrawerNavigator()

const HomeStack = createStackNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, }}
  >
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="CreateScreen" component={CreateScreen} //options={{ headerShown: false }}
    />
    <HomeStack.Screen name="DisplayScreen" component={DisplayScreen} />
    <HomeStack.Screen name="ColorScreen" component={ColorPickerScreen} />
  </HomeStack.Navigator>
)


class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Create" component={CreateScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

export default () => (
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
)
