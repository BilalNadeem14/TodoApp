import React, { useRef } from 'react';
import { connect } from 'react-redux'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { vh, vw } from '../units';
import * as actions from '../redux/actions'
import Icon3 from 'react-native-vector-icons/Feather';
import ModalComponent from '../components/modal'
import ColorModal1 from '../components/colorModal'

class CreateScreen extends React.Component {
    constructor(props) {
        // console.log('constructor create TodoForm')
        super(props)
        this.state = {
            Todos: {
                checked: false,
                name: '',
                description: ''
            },
            text: '',
            date: new Date(),
            category: 'notSetYet',
            color: 'purple'
        }
        this.todaysDate = new Date()
        // var modalRef = useRef()
        // this.modalRef = null
    }
    x = '5'

    // Picker = () => (
    //     <ColorPicker
    //         onColorSelected={color => alert(`Color selected: ${color}`)}
    //         style={{ flex: 1 }}
    //     />
    // )

    addTodo(todo) {
        this.setState({
            Todos: { ...Todos, todo }
        })
    }

    componentDidMount() {
        console.log('Did TodoForm')
        this.setState({
            category: this.props.category1,
            color: this.props.color1,
            text: this.props.title,
            date: this.props.date
            // date: new Date(this.props.date.getFullYear(), this.props.date.getMonth(), this.props.date.getDate(), this.props.date.getHours(), this.props.date.getMinutes())
        })
        console.log('todoForm: ', this.props.date)
        // console.log('cat1, col1', this.props.category1, this.props.color1)
    }
    componentDidUpdate() {
        // console.log('componentDidUpdate, TodoForm')

    }

    render() {
        return <View style={{
            // borderWidth: 1, borderColor: 'blue',
            flex: 1,
            backgroundColor: 'white'
            //justifyContent: 'center', 
        }}>

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
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Icons  //navigation.pop()
                        name="close" size={22} color="black" style={{
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

            <TextInput
                placeholder="Enter a new title"
                onChangeText={words => { this.setState({ text: words }, () => console.log('text', this.state.text)); }}
                defaultValue={this.x}
                value={this.state.text}
                style={styles.input}
                textAlign={'center'}
            />
            {/* <Button title="Add Todo" /> */}

            <View>
                <View style={{
                    // marginTop: 5 * vh,
                    marginLeft: 10 * vw,
                    // borderWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    {/* <Text>DateTime Picker</Text> */}

                    <ModalComponent
                        date={this.props.date}
                        setDate={(date) => this.setState({ date: date })}
                        ref={r => this.modalRef = r}
                    />
                    <TouchableOpacity
                        onPress={() => this.modalRef.show()}  //CALENDAR MODAL
                        style={{
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: '#c5c5d4',
                            borderRadius: 5 * vw,
                            height: 6 * vh,
                            // width: 22 * vw,
                            alignItems: 'center',
                            // justifyContent: 'center'
                            // justifyContent: 'space-between',
                            paddingLeft: 2.5 * vw,
                            paddingRight: 5 * vw
                        }}
                    >
                        <Icon3 name="calendar" size={20} color='#686968' />
                        {/* this.state.date.getDate() == this.props.globalDate.getDate() */}
                        {this.state.date.getDate() === this.todaysDate.getDate() && <Text //L.H.S date should be the date selected from calendar coming from redux And by default today's date in redux
                            style={{ color: '#686968' }}
                        >   Today</Text>}
                        {this.state.date.getDate() !== this.todaysDate.getDate() && <Text //L.H.S date should be the date selected from calendar coming from redux And by default today's date in redux
                        >   {this.state.date.getDate()}/{this.state.date.getMonth() + 1}</Text>}
                    </TouchableOpacity>
                    <ColorModal1
                        setCategory={(category) => this.setState({ category: category })}
                        setColor={(color) => this.setState({ color: color })}
                        nav={this.props.navigation}
                        ref={r => this.modalRef2 = r}
                    />
                    <Text>   </Text>
                    <TouchableOpacity
                        onPress={() => { this.modalRef2.show(); }} //this.props.navigation.navigate('ColorScreen')
                        style={{ flexDirection: 'row' }}
                    >
                        <View
                            style={{
                                borderWidth: 1, borderRadius: 5 * vw,
                                borderColor: '#c5c5d4',
                                height: 6 * vh,
                                width: 10 * vw,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <View
                                style={{
                                    borderWidth: 2, borderRadius: 5 * vw,
                                    borderColor: this.state.color,
                                    // height: 3.1 * vh,
                                    // width: 5.3 * vw,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <View style={{
                                    height: 2.5 * vh,
                                    width: 4.25 * vw,
                                    borderWidth: 2.6,
                                    borderColor: 'white',
                                    borderRadius: 5 * vw,
                                    backgroundColor: this.state.color
                                }}
                                >
                                </View>
                            </View>
                        </View>
                        {/* <Icon2 name="keyboard-arrow-up" size={20} color='black' /> */}
                    </TouchableOpacity>
                </View>
                {/* <View
                    style={{
                        marginTop: 5 * vh,
                        justifyContent: 'center',
                        borderWidth: 1,
                        flexDirection: 'row'
                    }}
                >
                    <Icon2 name="keyboard-arrow-up" size={20} color='black'
                        style={{ marginRight: 3 * vw }}
                    />
                    <Icon2 name="keyboard-arrow-up" size={20} color='black'
                        style={{ marginRight: 3 * vw }}
                    />
                    <Icon2 name="keyboard-arrow-up" size={20} color='black' // style={{ }} 
                    />
                </View> */}
            </View>

            <View   //*******Button */
                style={{
                    // borderWidth: 1,
                    flex: 1,
                    flexDirection: 'column-reverse',
                    alignItems: 'flex-end',
                    marginRight: 10 * vw,
                    marginBottom: 5 * vh,

                }}
            >
                <TouchableOpacity
                    style={{
                        height: vh * 6.5,
                        width: vw * 38,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#1e6fec',
                        borderRadius: vw * 20,
                        // alignSelf: 'flex-end',
                        flexDirection: 'row',
                        // borderWidth: 1

                    }}
                    onPress={() => {
                        if (this.state.category !== '' && this.state.text !== '') {

                            // if (this.props.date) {
                            //     console.log('onSubmit', this.props.date)
                            //     this.props.onSubmit(this.state.text, this.props.date, this.state.category, this.state.color, this.props.id);
                            // }
                            // else 
                            {
                                this.props.onSubmit(this.state.text, this.state.date, this.state.category, this.state.color, this.props.id);
                            }
                            this.setState({ text: '' })
                            this.props.navigation.goBack()
                        }
                        else {
                            alert('kindly select category and title')
                            // this.props.nav.goBack()
                        }
                        // this.props.TODAYS_TODOS()
                    }} //this.props.navigation.push('CreateScreen'); //this.props.navigation.goBack()
                >
                    {/* checked, {title, date, category, color} */}

                    {/* Todos: {
                    checked: false,
                    name: '',
                    description: ''
                    },
                    text: '',
                    date: new Date(),
                    category: 'notSetYet',
                    color: 'purple' */}
                    <Text style={{ color: 'white' }}>New Task   </Text>
                    {/* {this.state.category} */}
                    <Icon2 name="keyboard-arrow-up" size={20} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    }
}

const mapStateToProps = (state) => {
    const globalDate = state.reducer.date
    const category1 = state.reducer.allTodos[0].category
    const color1 = state.reducer.allTodos[0].color
    return { globalDate } //, category1, color1
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (title, date, category, color) => dispatch(actions.addTodo(title, date, category, color))
    }
}


CreateScreen.defaultProps = {
    category1: '',
    color1: 'black',
    title: '',
    date: new Date()
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen)


const styles = StyleSheet.create({
    input: {
        // borderWidth: 1,
        // borderColor: 'gray',
        height: 6.5 * vh,
        marginBottom: 5 * vh,
        marginTop: 20 * vh,
        marginHorizontal: 10 * vw,
        marginRight: 20 * vw,
        fontSize: 22,
        // alignItems: 'center'
        // width: 50 * vw,
        // alignSelf: 'center'
    }
})