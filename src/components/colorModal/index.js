import React, { Component } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { vh, vw } from '../../units'
import DatePicker from 'react-native-date-picker'
import { FlatList } from 'react-native-gesture-handler'



class ColorModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            content: {},
            date: new Date()
        }
    }

    displayComponent = (i) => {
        return <View style={{
            flex: 1,
            // borderWidth: 1 
        }}>
            <TouchableOpacity
                onPress={() => { this.props.setCategory(i.item.category); this.props.setColor(i.item.color); this.hide() }}
            >
                <Text>{i.index + 1}{')'} {i.item.category}</Text>
            </TouchableOpacity>
            {/* <View style={{ flex: 1, borderWidth: 1 }}></View> */}
        </View>
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
                        alignItems: 'center',
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
                            // flexDirection: 'column-reverse',
                            // alignItems: 'center',
                            elevation: 10 * vw,
                            borderRadius: 5 * vw,

                            backgroundColor: 'white',//'#5374E8',
                            // marginHorizontal: 25 * vw,
                            // marginBottom: 10 * vh,
                            top: 38 * vh,
                            // left: 35 * vw,
                            // alignSelf: 'center',
                            position: 'absolute',
                            paddingHorizontal: 5 * vw,
                            paddingTop: 2 * vw
                            // borderWidth: 1,
                            // borderColor: 'blue'
                        }}
                    >
                        <Text style={{
                            alignSelf: 'flex-start', //will only effect if parent is aligned centered
                            fontWeight: 'bold',
                            fontSize: 18
                        }}>Choose a category:</Text>
                        <FlatList
                            style={{ maxHeight: 20 * vh }}
                            showsVerticalScrollIndicator={false}
                            data={this.props.categories}
                            renderItem={this.displayComponent}
                            keyExtractor={(item) => item.category}
                        />
                        {/* <Text>{this.props.categories[0].category}</Text> */}
                        {/* <DatePicker
                            androidVariant="iosClone"
                            date={this.state.date}
                            onDateChange={(newDate) => this.setState({ date: newDate })}
                        /> */}
                        {/* <Text>{this.state.date.getDate()}</Text> */}
                        <TouchableOpacity
                            //Not working IDK why debugg :(
                            onPress={() => {
                                this.hide(); this.props.nav.navigate('ColorScreen',
                                    {   //no need for params
                                        // setCategory: (category) => this.props.setCategory(category), 
                                        // nav: this.props.nav
                                    })
                            }}
                            style={{
                                // position: 'absolute', //things will disapper bc absolute can not be applied on touchable opacity in this project idk why
                                // top: '8%',
                                // right: '50%', 
                                // alignSelf: 'center',
                            }}>
                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                //borderWidth: 1, 
                                top: -0.5 * vh,
                                marginLeft: 0.15 * vw
                            }}>
                                <Text style={{ color: '#5374E8', fontSize: 18 }}>+</Text>
                                <Text
                                    style={{ color: '#5374E8', marginLeft: 1 * vw }}
                                >Create New Category</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >

        )
    }
}

const mapStateToProps = state => {
    const categories = state.reducer.allTodos
    // console.log('categories: ', state.reducer)
    return { businessTodos: categories[0], personalTodos: categories[1], categories, TodaysTodosList: state.reducer.TodaysTodosList }
}



export default connect(mapStateToProps, actions, null, { forwardRef: true })(ColorModal) //mapDispatchToProps