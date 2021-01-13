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


import { Provider } from 'react-redux';
import { createStore } from 'redux'; //applyMiddleware //for redux-thunk
import reducers from './src/redux/reducers'
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


class App extends React.Component {
  constructor(props) {
    super(props)

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
                borderWidth: 2, borderColor: 'gray', borderRadius: 13 * vw,
                height: 15 * vh,
                width: 25 * vw,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row'
              }}>
                <Image
                  source={{
                    uri: 'https://d2halst20r4hcy.cloudfront.net/a29/5de08/54a4/4953/a136/e87286e0f7d0/normal/50416.jpg',
                    height: 13 * vh,
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
                    borderRadius: 6 * vw,
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

        drawerContent={props => { setProgress(props.progress); return this.CustomDrawerContent(props) }}


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

      </ Drawer.Navigator >
    );
  }

  render() {
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
        <this.MyDrawer />
      </NavigationContainer>
    )
  }
}

export default () => (
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
)
