import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ColorPicker } from 'react-native-color-picker'
import { Input } from 'react-native-elements';
import * as actions from '../redux/actions'
import { vh, vw } from '../units';
import Icons from 'react-native-vector-icons/AntDesign';

const CategoryForm = (props) => {//{ navigation, route }, 
    // const [color, ]
    const [categoryName, setCategoryName] = useState('')
    const [stateColor, setStateColor] = useState('gray')
    useEffect(() => {
        if (props.categoryName) {
            console.log('props.categoryName', props.categoryName, props.colorName)
            setCategoryName(props.categoryName)
            console.log('prop color', props.colorName)
        }
    }, [])
    console.log('component rendered',)
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
                borderRadius: 3 * vh,
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
        {/* <Text style={{ color: 'white' }}>{stateColor}</Text> */}
        <Input
            placeholder='Type Category Name'
            // placeholderTextColor="blue"
            color='#9ca5ad'
            value={categoryName}
            onChangeText={setCategoryName}
        // style={{ color: 'white' }}

        />
        {/* #6a6a83 */}
        <Text style={{ color: '#9ca5ad', fontSize: 20 }}>Choose your Color</Text>
        {/* {this.Picker()} */}
        <ColorPicker
            defaultColor={props.colorName}
            onColorSelected={color => {
                console.log('hello');
                alert(`Color selected: ${color} \n category added`);
                if (props.oldCategory !== '' && props.oldCategory) {
                    console.log('props.oldCategory')
                    props.onSubmit(categoryName, color, props.oldCategory)
                    props.navigation.goBack(); //navigate('CreateScreen')
                }
                else if (categoryName !== '') {
                    props.onSubmit(categoryName, color)
                    props.navigation.goBack(); //navigate('CreateScreen')
                }
                else {
                    alert('kindly enter category')
                }
                // props.addCategory(categoryName, color);

                // props.route.params.nav.goBack();
            }}
            style={{ flex: 1 }}
        />
    </View>
}

CategoryForm.defaultProps = {
    categoryName: '',
    colorName: ''
}

export default CategoryForm