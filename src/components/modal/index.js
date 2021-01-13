import React, { Component, useState } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { vh, vw } from '../../units'
import DatePicker from 'react-native-date-picker'

import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native';


const Time = (props) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        console.log('currentDate:', selectedDate) //currentDate
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            {/* <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
            </View> */}
            <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={(e, value) => {
                        onChange(e, value)
                        console.log('value', value.getMinutes());
                        props.setTime(value)
                    }}
                />
            )}
            <Text>{date.getHours()}</Text>
        </View>
    );
};




class ModalComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            content: {},
            date: this.props.date//new Date()
            // dateTime: { date: new Date(), time: new Date() }
        }
    }

    show = () => {
        this.setState((prev) => {
            return {
                ...prev,
                visible: true
            }
        })
    }

    hide = () => {
        // this.setState({
        //     visible:false
        // })

        this.setState((prev) => {
            return {
                ...prev,
                visible: false
            }
        })
    }

    render() {
        return (
            <Modal
                key={'accepted'}
                onBackdropPress={this.hide}
                transparent={true}
                visible={this.state.visible}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent', //rgba(0,0,0,.5)
                        justifyContent: 'center',
                        // marginHorizontal: 5 * vw,
                        // marginRight: 20 * vw,
                        // borderWidth: 1,
                        // borderColor: 'red'
                    }}
                >
                    <View
                        style={{
                            // width: vw * 90,
                            // flex: 0.5,
                            // flexDirection: 'row-reverse',
                            alignItems: 'center',
                            // alignSelf: 'center',
                            elevation: 10 * vw,
                            borderRadius: 10 * vw,
                            borderTopLeftRadius: 10 * vw,
                            borderTopRightRadius: 10 * vw,
                            backgroundColor: 'white',//'#5374E8',
                            marginHorizontal: 5 * vw,
                            marginBottom: 5 * vh
                            // borderWidth: 1,
                            // borderColor: 'blue'
                        }}
                    >
                        <DatePicker
                            androidVariant="iosClone"
                            date={this.state.date} //.dateTime.date
                            onDateChange={(newDate) => { this.setState({ date: newDate }); }} //...this.state.dateTime, 
                        />

                        {/* //commented */}
                        {/* <Text>the parent date:{this.state.dateTime.date.getDate()} time: {this.state.dateTime.date.getHours()}</Text> */}


                        {/* <Time //commented
                            setTime={(time) => this.setState({ dateTime: { ...this.state.dateTime, time: time } })}
                        /> */}

                        <TouchableOpacity
                            //Not working IDK why debugg :(
                            onPress={() => { this.props.setDate(this.state.date); this.hide() }} //dateTime
                            style={{
                                // position: 'absolute', //things will disapper bc absolute can not be applied on touchable opacity in this project idk why
                                // top: '8%',
                                // right: '50%', 
                                alignSelf: 'center',
                            }}>
                            <View //closing blue line 
                                style={{
                                    backgroundColor: 'white',//'#5374E8',
                                    width: 40 * vw,
                                    height: 5.6 * vh,
                                    borderRadius: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginVertical: 2 * vh
                                    // fontFamily: Fonts.poppinsMedium,
                                }} >
                                <Text
                                    style={{ color: '#5374E8' }}
                                >Save Date And Time</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        )
    }
}

export default ModalComponent