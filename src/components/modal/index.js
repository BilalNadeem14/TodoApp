import React, { Component } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { vh, vw } from '../../units'
import DatePicker from 'react-native-date-picker'



class ModalComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            content: {},
            date: new Date()
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
                        borderWidth: 1,
                        borderColor: 'red'
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
                            date={this.state.date}
                            onDateChange={(newDate) => { this.setState({ date: newDate }); this.props.setDate(newDate) }}
                        />
                        {/* <Text>{this.state.date.getDate()}</Text> */}
                        <TouchableOpacity
                            //Not working IDK why debugg :(
                            onPress={() => { this.hide() }}
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