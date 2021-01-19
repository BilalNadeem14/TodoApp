import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { vh, vw } from '../../units';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as actions from '../../redux/actions/AuthActions'
import auth from '@react-native-firebase/auth';


//try doing export default
//try doing export default
//try doing export default
//try doing export default
//try doing export default
//try doing export default
//try doing export default
//try doing export default
//try doing export default

const CustomDrawerContent2 = (({ progress, ...props }) => { //{ navigation }
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
                                color: 'white',
                                marginLeft: -3 * vw
                            }}
                            icon={() => <Icon name="category" size={20} color="#a0a3a6" />}
                            onPress={() => props.navigation.navigate('Create')} //Linking.openURL('https://mywebsite.com/help')
                        />
                    </View>
                    <DrawerItem
                        label="Edit Details"
                        style={{ //backgroundColor: 'black',
                            marginLeft: -1.25 * vw
                        }}
                        labelStyle={{
                            color: 'white',
                            marginLeft: -3 * vw
                        }}
                        icon={() => <Icon name="edit" size={20} color="#a0a3a6" />}
                        onPress={() => props.navigation.navigate('EditUserNameScreen')} //Linking.openURL('https://mywebsite.com/help')
                    />
                    <DrawerItem
                        label="Log out"
                        style={{ //backgroundColor: 'black', 
                            marginLeft: -0.6 * vw
                        }}
                        labelStyle={{
                            color: 'white',
                            marginLeft: -3 * vw
                        }}
                        icon={() => <Icon name="logout" size={20} color="#a0a3a6" />} //Feather
                        onPress={() => {
                            auth()
                                .signOut()
                                .then(() => { console.log('User signed out!'); props.logout() });

                        }}
                    />
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
})

var mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

var mapStateToProps = state => {
    // console.log('customDrawer authState.bool : ', state.authReducer.bool)
    return { state }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent2)

// export default connect(null)(CustomDrawerContent)