import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { ColorPicker } from 'react-native-color-picker'
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../redux/actions'

const colorPicker = (props) => {//{ navigation, route }, 
    // const [color, ]
    const [categoryName, setCategoryName] = useState('')

    return <View style={{ flex: 1, backgroundColor: 'black' }}>
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