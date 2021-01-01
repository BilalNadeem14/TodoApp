import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ColorPicker } from 'react-native-color-picker'
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../redux/actions'
import { vh, vw } from '../units';
import Icons from 'react-native-vector-icons/AntDesign';

const colorPicker = (props) => {//{ navigation, route }, 
    // const [color, ]
    const [categoryName, setCategoryName] = useState('')

    return <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View
            style={{
                // flex: 1,
                height: 6 * vh,
                width: 6 * vh,
                // flexDirection: 'row-reverse',
                // alignItems: 'center'
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
                borderWidth: 1,
                borderColor: '#c5c5d4',
                borderRadius: 5 * vw,
                marginRight: 5 * vw,
                marginTop: 5 * vh

            }}
        >
            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
            >
                <Icons  //navigation.pop()
                    name="close" size={22} color="#c5c5d4" style={{
                        // left: 10 * vw,
                        // flexDirection: 'row',
                        // justifyContent: 'center',
                        // alignItems: 'center',
                        // alignSelf: 'center',
                        // borderWidth: 1,
                        // borderRadius: 5 * vw

                    }}
                />
            </TouchableOpacity>
        </View>

        <Input
            placeholder='Type Category Name'
            value={categoryName}
            onChangeText={setCategoryName}

        />
        {/* #6a6a83 */}
        <Text style={{ color: '#9ca5ad', fontSize: 20 }}>Choose your Color</Text>
        {/* {this.Picker()} */}
        <ColorPicker
            onColorSelected={color => {
                console.log('hello');
                alert(`Color selected: ${color} \n category added`);
                props.addCategory(categoryName, color);
                props.setCategoryColor(color) //no need for this action call
                props.navigation.goBack(); //navigate('CreateScreen')
                // props.route.params.nav.goBack();
            }}
            style={{ flex: 1 }}
        />
    </View>
}

const mapStateToProps = (state) => {
    return { state: state.reducer }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCategory: (category, color) => dispatch({ type: 'ADD_CATEGORY', payload: { category, color } }),
        setCategoryColor: (color) => dispatch({ type: 'SET_COLOR', payload: color }) //no need for this action
    }
}

// ColorPickerScreen
export default connect(mapStateToProps, mapDispatchToProps)(colorPicker)