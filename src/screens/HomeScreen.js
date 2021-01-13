import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
// import { Input } from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { vh, vw } from '../units';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
// import CheckBox from '@react-native-community/checkbox';
import { CheckBox, Input } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker';
// import { } from 'react-native';

import { showNotification, handleScheduleNotification, handleCancel, cancelNotification } from '../notification.android' //.android
import PushNotification from 'react-native-push-notification';

class HomeScreen extends React.Component {
    constructor(props) {
        // console.log('constructor called')
        super(props)
        this.state = {
            screenName: 'HomeScreen',
            arr: ['1', '2'],
            // TodaysTodosList: this.props.TodaysTodosList,
            // [
            //     { title: 'todo1', toggleCheckBox: false, id: '1' },
            //     { title: 'todo2', toggleCheckBox: false, id: '2' },
            //     { title: 'todo3', toggleCheckBox: false, id: '3' }
            // ],
            toggleCheckBox: true,
            sort: 'Today',
            sortedList: [],
            text: '',
            show: false,
            red: 'blue',
            render: '',
            // func: () => this.sort()
            //'task2', 'task3', 'things to do part 4'
        }
        this.displayComponent = this.displayComponent.bind(this)
    }

    displayComponent(i) {
        // console.log('1st flatList runing index:', i.index)
        // console.log('displayComponent', i.item)
        // console.log('map checked: ', todo.todo, i.item.category)
        let count = 0
        i.item.Todos.map((todo) => {
            // console.log('map togglecheckbox: ', todo.todo) //.toggleCheckBox
            try {
                if (todo.todo.toggleCheckBox == true) {
                    count++
                }
            }
            catch (err) {
                console.log('error', err)
                console.log('**************************************************todo: ', todo)
            }
        })
        let percentage = 0
        if (i.item.Todos.length !== 0) {
            percentage = count / i.item.Todos.length
        }
        // console.log('category, checkedCount, percentage: ', i.item.category, count, percentage)
        return <View style={styles.displayComponent}>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CategoryScreen', { categoryObj: i.item })}
            >
                <Text style={{ color: '#a0a3a6', }}>{i.item.Todos.length} tasks</Text>
                {/* <Text>{i.item.Todos[0].todo.toggleCheckBox}</Text> */}
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{i.item.category} </Text>
                <View style={{
                    // flex: 1, 
                    flexDirection: 'row',
                    backgroundColor: '#dedede', width: 43 * vw, height: .5 * vh, //'silver'
                    marginTop: 3 * vh,
                    borderRadius: 3 * vw
                    // alignSelf: 'center',
                    // marginLeft: -2 * vw
                }}>
                    <View style={{
                        // flex: 1, 
                        flexDirection: 'row',
                        backgroundColor: i.item.color, width: percentage * 43 * vw, height: .5 * vh,
                        borderRadius: 3 * vw

                    }} >
                    </View>
                    <View style={{
                        borderWidth: .5 * vw,
                        borderColor: i.item.color,
                        borderTopLeftRadius: 1.5 * vw,
                        borderTopRightRadius: 1.5 * vw,
                        height: 1 * vh,
                        width: 0.1 * vw,
                        // marginBottom: 10 * vh
                        marginTop: -.49 * vh,
                        marginLeft: -.5 * vw
                        // marginLeft: 5 * vw

                    }} />
                </View>
            </TouchableOpacity>
        </View>
    }
    // flex: 0.2,
    // backgroundColor: "grey",
    // borderWidth: 5,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // borderRadius: 10 * vw


    //Remove************

    // this.props.categories

    // state.allTodos.map((category) => {
    //     category.Todos.map((item) => {
    //         // console.log('ifffffffffffffff', item.todo.date) //.todo.date
    //         if (item.todo.date === 10) {
    //             // console.log('inside if')
    //             state.TodaysTodosList.push(item.todo)
    //             // state.TodaysTodosList.push(category.Todos.todo)
    //         }
    //     })
    // })

    displayComponent2 = (i) => {
        let date = new Date()
        let localStatus = 'completed'
        let textColor = 'blue'
        if (i.item.toggleCheckBox === false) {
            // setStatus('completed')
            localStatus = 'Incomplete'
            // console.log('its ', localStatus, 'renderIterated: ', 'todo date: ', i.item.date)
            if (date.getDate() < i.item.date.getDate()) {
                localStatus = 'upcoming'
                textColor = 'green'
            }
            else if (date.getDate() > i.item.date.getDate()) {
                localStatus = 'overdue'
                textColor = 'red'
            }
        }



        // console.log('flatList2:', this.state.toggleCheckBox)
        var x = false
        return <View style={{
            // borderWidth: 1, 
            backgroundColor: 'white', marginBottom: 1.0 * vh,
            elevation: 0.5, borderRadius: 4 * vw,
        }}>
            <View style={styles.displayComponent2}>
                <CheckBox
                    style={{
                        backgroundColor: 'blue',
                        borderRadius: 20 * vw
                    }}
                    disabled={false}
                    checked={i.item.toggleCheckBox}
                    onPress={() => {
                        this.props.toggleTodo2(i.item.id)  //this.props.TodaysTodosList[i.index].id
                        //---------->// this.sort()

                        // console.log('state Today: ', this.props.TodaysTodosList[i.index])
                        // console.log('state original: ', this.props.categories[0].Todos[0].todo)
                    }}
                    // title='Click Here'

                    value={i.item.toggleCheckBox}  //TodaysTodosList[i.index].toggleCheckBox
                    onValueChange={(newValue) => { //Wiil not work bec this props doesn't belomg to this check box type

                        // console.log('onPress i.item: ', i.item)
                        // const arrCopy = [...this.state.TodaysTodosList]
                        // arrCopy[i.index].toggleCheckBox = newValue
                        // TodaysTodosList[i.index].toggleCheckBox: newValue
                        // this.setState({ TodaysTodosList: [...arrCopy] })
                        // console.log('todo id***:', this.props.TodaysTodosList[i.index].id)
                        this.props.toggleTodo2(this.props.TodaysTodosList[i.index].id, this.props.TodaysTodosList[i.index].description)
                        // i.item.toggleCheckBox = !i.item.toggleCheckBox 
                        //Won't work
                        console.log('state: ', this.props.TodaysTodosList[i.index])
                        console.log('state: ')

                    }}
                />
                <TouchableOpacity
                    style={{ flex: 1, width: 35 * vh }}
                    onPress={() => { this.props.navigation.navigate('DisplayScreen', { todo: i.item }) }}
                >
                    <View style={{
                        // justifyContent: 'space-between',
                        flexDirection: 'row',
                        flex: 1,
                        // marginRight: 5 * vw,
                        // borderWidth: 1,
                        alignItems: 'center'
                    }}
                    >
                        {/* id: {i.item.id} desc: {i.item.description} */}
                        <Text>{i.item.title}</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1, justifyContent: 'center',
                        marginRight: 0 * vw,
                        marginLeft: -0 * vw,
                        // borderWidth: 1
                    }}
                    onPress={() => {
                        this.props.deleteTodo(i.item.id, this.sort);
                        // this.sort()
                    }}
                >
                    <Icon5 name="delete" size={20} color="black" style={{ marginRight: 1 * vw }} //#a0a3a6
                    />
                    {/* <Text >Delete</Text> */}
                </TouchableOpacity>
                {/* style={{ marginRight: 0 * vw, }} */}


            </View>
            <Text style={{
                color: textColor,
                borderWidth: 0,
                alignSelf: 'flex-end',
                right: 2 * vw,
                bottom: 1 * vh,
                marginTop: -1 * vh
            }}
            >{localStatus}</Text>
        </View>
    }

    componentDidMount() {
        console.log('Home didMount*************')
        this.props.TODAYS_TODOS()
        this.setState({
            sortedList: this.props.TodaysTodosList
        })
        this.sort()
        // this.setState({ render: !this.state.render })

        // this.props.TODAYS_TODOS()

        // console.log('TodaysTodosList', this.props.TodaysTodosList)


        PushNotification.createChannel(
            {
                channelId: "zxc123", // (required)
                channelName: "My channel", // (required)
                channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
                playSound: false, // (optional) default: true
                soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                importance: 4, // (optional) default: 4. Int value of the Android notification importance
                vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
    }
    componentDidUpdate() {
        if (this.props.reduxRender !== this.state.render) {
            console.log('**********************************************************redux render: ', this.props.reduxRender)
            this.setState({ render: this.props.reduxRender })
            this.sort()
        }
        // console.log('componentDidUpdate HomeScreen************************************************')
        // this.sort()
        // , this.props.categories[0].Todos[0].todo
    }

    // static getDerivedStateFromProps(props, state) {
    //     // console.log('redux render: ', props.reduxRender)

    //     //console.log(props.reduxRender, 'state: ', state.render)
    //     if (props.reduxRender !== state.render) {
    //         //console.log('redux render: ', props.reduxRender)
    //         // this.sort()
    //         // this.setState({ render: props.reduxRender })
    //     }

    //     console.log('getDerivedStateFromProps****************************************************************')

    // }
    todoList2 = []
    sort = () => {

        let todoList = []
        const date = new Date()
        console.log('sort called', this.state.sort)
        if (this.state.sort === 'Today') {
            this.props.categories.map((obj) => {
                obj.Todos.map((obj2) => {
                    if (obj2.todo.date.getDate() === date.getDate()) {
                        todoList.push(obj2.todo)
                        console.log('obj2.todo.date', obj2.todo.date)
                        console.log('todoList.length', todoList.length)
                    }
                })
            })
            this.setState({
                sortedList: todoList
            })

            // this.setState({
            //     sortedList: this.props.TodaysTodosList
            // })
            // console.log('Today')

            // console.log(this.props.TodaysTodosList)//this.state.sortedList)
        }
        else if (this.state.sort === 'All') {
            this.props.categories.map((obj) => {
                obj.Todos.map((obj2) => {
                    todoList.push(obj2.todo)
                    console.log('todoList.length', todoList.length)
                })
            })
            this.setState({
                sortedList: todoList
            })
            console.log('All')

        }
        else if (this.state.sort === 'Completed') {
            this.props.categories.map((obj) => {
                obj.Todos.map((obj2) => {
                    if (obj2.todo.toggleCheckBox === true) {
                        todoList.push(obj2.todo)
                        //---------->//console.log('todoList.length', todoList.length)
                    }
                })
            })
            console.log('todoList.length', todoList.length)

            this.setState({
                sortedList: todoList
            })
            console.log('Completed')
        }
        else if (this.state.sort === 'Upcoming') {
            this.props.categories.map((obj) => {
                obj.Todos.map((obj2) => {
                    if (obj2.todo.date.getDate() > date.getDate() && obj2.todo.toggleCheckBox !== true) {
                        todoList.push(obj2.todo)
                        console.log('obj2.todo.date', obj2.todo.date)
                        console.log('todoList.length', todoList.length)
                    }
                })
            })
            this.setState({
                sortedList: todoList
            })
            console.log('Upcoming')
        }
        else if (this.state.sort === 'Overdue') {
            this.props.categories.map((obj) => {
                obj.Todos.map((obj2) => {
                    if (obj2.todo.date.getDate() < date.getDate() && obj2.todo.toggleCheckBox !== true) {
                        todoList.push(obj2.todo)
                        console.log('*******obj2.todo.toggleCheckBox', obj2.todo.toggleCheckBox)
                        console.log('obj2.todo.date', obj2.todo.date)
                        console.log('todoList.length', todoList.length)
                    }
                })
            })
            this.setState({
                sortedList: todoList
            })
            console.log('Overdue')
        }
        else if (this.state.sort === 'Search') {
            console.log('inside sort and search')
            this.props.categories.map((obj) => {
                obj.Todos.map((obj2) => {
                    if (this.search(obj2.todo.title)) {

                        todoList.push(obj2.todo)
                        // console.log('*******obj2.todo.toggleCheckBox', obj2.todo.toggleCheckBox)
                        // console.log('obj2.todo.date', obj2.todo.date)
                        console.log('todoList.length', todoList.length)
                    }
                })
            })
            // this.setState({ text: '' })
            this.setState({
                sortedList: todoList
            })
            console.log('Search')
        }
        this.todoList2 = todoList
    }
    search = (title) => {
        let text = this.state.text
        let temp = 'Bilal Bix'
        temp = title
        let selected = 0
        //highest is of no use right now
        let highest = 0 //highest number of characters matched
        let match = false
        //convert temp to lower case
        //find character by character if text=== any pair of characters in temp

        // console.log('inside search: ', text)

        // this.setState({ sort: 'Search' }, () => this.sort())
        console.log('temp OR title: ', temp, ' text', this.state.text)
        // console.log('length', temp.length)
        for (let i = 0; i < temp.length; i++) {
            // console.log('for loop: ', temp[i], '===', text[0])
            if (temp[i] === text[0]) {
                // console.log('true1*****************')
                let count = 0
                // let z = 0
                for (let j = i; j < temp.length && j < j + text.length; j++) {
                    // console.log('*******2nd loop running')
                    if (temp[j] === text[count]) {
                        // console.log('*****************true2 ')
                        count++
                        if (count > highest) {
                            // console.log('inside 3rd if')
                            highest = count
                            selected = i //selected should be pushed to the array and then assigned to sortedList
                        }
                    }
                    else {
                        // console.log('Break')
                        break;
                        console.log('After Break')
                    }
                }

                // console.log('Big if')

                // highest = count
                // selected = i //selected should be pushed to the array and then assigned to sortedList
            }
            if (highest === text.length) {


                // console.log('matched at index ', i, 'highest: ', highest)
                match = true
                break;
            }
            // console.log('big for loop', i)
        }
        // console.log('highest, selected', highest, '----', selected)
        console.log('match: ', match)
        // console.log('inside search: ', temp[1], text[1])
        return match

    }

    // getSortedList = () => {
    //     // this.state.sortedList
    //     var arr = this.sort()
    //     return arr
    // }


    // x = ''
    // red = 'black'
    render() {
        // console.log('redux state:', this.props.businessTodos, this.props.personalTodos)
        // console.log('redux state categories: ', this.props.categories)
        // console.log('actions', this.props.action2)
        // this.props.increment()
        // console.log('todaysToDoList redux', this.props.TodaysTodosList)
        return (
            <View style={{
                backgroundColor: '#F9FAFF',
                flex: 1,
            }}
            >

                {/* style={{ width: 5 * vw, height: 5*vh }} */}
                <View
                    style={{ marginHorizontal: 6.5 * vw }}
                >
                    <View style={{
                        marginTop: 5.5 * vh,
                        marginBottom: 5 * vw,
                        // borderWidth: 1,
                        flexDirection: 'row'
                    }}>
                        {this.state.show === false ? <TouchableOpacity
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Icon4 name="ios-menu-outline" size={20} color="#a0a3a6" //Icon2 name="grip-lines"
                            />
                        </TouchableOpacity> : null}

                        {this.state.show === true ? <TouchableOpacity
                            onPress={() => this.setState({ show: false })}
                        >
                            <Icon4 name="arrow-back" size={20} color="#a0a3a6" //Icon2 name="grip-lines"
                            />
                        </TouchableOpacity> : null}

                        {/* {this.state.show === true ? <TextInput
                            placeholder="Enter a new title"
                            // placeholderTextColor='red' //#9ca5ad
                            onChangeText={words => { this.setState({ text: words }, () => console.log('text', this.state.text)); }}
                            // defaultValue={this.x}
                            value={this.state.text}
                            style={{
                                marginTop: -2 * vh, marginLeft: 5 * vw, borderBottomWidth: 1,
                                // width: 50 * vw, 
                                height: 8 * vh, color: '#a0a3a6', fontWeight: 'bold'
                            }}
                            returnKeyType='send'

                        // textAlign={'center'}
                        /> : null} */}

                        {this.state.show === true ? <View style={{
                            // borderWidth: 1,
                            width: 75 * vw,
                            marginTop: -2 * vh,
                        }}>
                            <Input
                                rightIcon={
                                    <TouchableOpacity
                                        onPress={() => {
                                            // this.setState({ show: false })
                                            // this.search(this.state.text); //this.state.text
                                            if (this.state.text === '') {
                                                this.setState({ red: 'red' })
                                                // this.setState({ text: '' })
                                            }
                                            else {
                                                this.setState({ show: false })
                                                this.setState({ red: 'black' })
                                                this.setState({ sort: 'Search' }, () => this.sort())
                                            }
                                            console.log('onSubmit Text: ', this.state.text)
                                            // this.setState({ text: '' })
                                        }}
                                    >
                                        <Icon3 name="search1" size={20} color="#a0a3a6" style={{ marginRight: 5 * vw }} />
                                    </TouchableOpacity>
                                    // <Icon
                                    //   name='user'
                                    //   size={24}
                                    //   color='black'
                                    // />
                                }
                                returnKeyType='search'
                                onSubmitEditing={(event) => {

                                    if (this.state.text === '') {
                                        this.setState({ red: 'red' })
                                    }
                                    else {
                                        this.setState({ show: false })
                                        this.setState({ red: 'black' })
                                        this.setState({ sort: 'Search' }, this.sort)
                                    }
                                    // this.search(event.nativeEvent.text); //this.state.text


                                    console.log('onSubmitEditing: ', event.nativeEvent.text)
                                    // this.setState({ text: '' })
                                }}
                                placeholder='Type Title Name'
                                // textAlign={'center'}
                                placeholderTextColor={this.state.red === 'red' ? this.state.red : ''}
                                color='#9ca5ad'
                                value={this.state.text} //categoryName
                                onChangeText={(newText) => this.setState({ text: newText })} //setCategoryName
                                style={{
                                    // marginTop: -3.58 * vh,
                                    // marginRight: -50 * vw,

                                    width: 30 * vw,
                                    // marginLeft: -10
                                    // borderBottomWidth: 1
                                }} //color: 'white'

                            /></View> : null}

                        <View style={{
                            // borderWidth: 1, 
                            flexDirection: 'row', flex: 1, justifyContent: 'flex-end'
                        }}>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    show: true
                                })}
                            >
                                {!this.state.show && <Icon3 name="search1" size={20} color="#a0a3a6" style={{ marginRight: 5 * vw }} />}
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleScheduleNotification(10, 'demoTodo', new Date(), 'TitleOfTodo')}    //showNotification('Todays Tasks', 'title of the todo')}
                            >
                                <Icon4 name="ios-notifications-outline" size={20} color="#a0a3a6" />
                            </TouchableOpacity>

                            {/* <TouchableOpacity
                                onPress={() => cancelNotification()}
                            >
                                <Icon4 name="ios-notifications-outline" size={20} color="#a0a3a6" />
                            </TouchableOpacity> */}

                        </View>
                    </View>
                    <Text style={{
                        fontSize: 28, fontWeight: 'bold',
                        marginBottom: 2 * vh, //fontFamily: 'Poppins-Italic'
                    }}
                    >What's up Bilal!</Text>
                    {/* <Text>CATEGORIES{this.props.businessTodos.Todos[0].todo.title}</Text> */}
                    {/* #aeb1b0 */}
                    <Text
                        style={{
                            color: '#a0a3a6',
                            fontWeight: 'bold',
                            fontSize: 13,
                            marginTop: 1 * vh,
                            marginBottom: 0 * vh
                        }}
                    > CATEGORIES</Text>
                </View>
                <View style={{
                    borderWidth: 0,
                    marginLeft: 6.5 * vw
                    // alignItems: 'center',
                    // justifyContent: 'center'
                    //flex: 1,
                }} >
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={{ height: 20 * vh, }}
                        data={this.props.categories}
                        renderItem={this.displayComponent}
                        keyExtractor={(item) => item.category}
                    />
                </View>
                <View style={{
                    flex: 1,
                    // borderWidth: 1,
                    // marginBottom: 50 * vh,
                    borderColor: 'green',
                    marginHorizontal: 6.5 * vw
                }}>
                    {/* <Text
                        style={{
                            color: '#a0a3a6',
                            fontWeight: 'bold',
                            marginBottom: 3 * vh,
                            marginVertical: 2 * vh
                        }}
                    > Today's Task{this.state.sort} Tasks</Text> */}
                    <Picker
                        selectedValue={this.state.sort}
                        style={{
                            height: 3 * vh,
                            width: 50 * vw,// marginBottom: 5 * vh,
                            // borderWidth: 1, borderColor: 'red' 
                            color: '#a0a3a6',
                            // fontWeight: 'bold',

                            marginBottom: 3 * vh,
                            marginVertical: 2 * vh
                        }}
                        //not working
                        itemStyle={{ fontFamily: 'Poppins-SemiBold', fontWeight: 'bold', }}
                        onValueChange={(itemValue, itemIndex) => {
                            if (itemValue !== 'Search') {
                                // (this.state.text !== '') {
                                this.setState({ sort: itemValue }, () => this.sort())
                            }
                        }
                        }>
                        <Picker.Item label="Today's Tasks" value="Today" />
                        <Picker.Item label="All Tasks" value="All" />
                        <Picker.Item label="Completed Tasks" value="Completed" />
                        <Picker.Item label="Upcoming Tasks" value="Upcoming" />
                        <Picker.Item label="Overdue Tasks" value="Overdue" />
                        <Picker.Item label="Searched Tasks" value="Search" />
                    </Picker>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        //   style={{}}
                        data={this.todoList2} //this.state.sortedList
                        renderItem={this.displayComponent2}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                <View style={styles.createButton}>
                    <TouchableOpacity
                        style={{
                            // borderWidth: 1,
                            backgroundColor: '#0769FF',//'#1e6fec',
                            width: 12.5 * vw,
                            height: 7.5 * vh,
                            borderRadius: 8 * vw,
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: 5 * vh
                            // margin: 10 * vw
                            // position: 'absolute',
                            // right: 3,
                            // bottom: 15
                        }}
                        // this.props.increment();
                        onPress={() => { this.props.navigation.navigate('CreateScreen') }}
                    >
                        <Icon name="plus" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const categories = state.reducer.allTodos
    // console.log('categories: ', state.reducer)
    return { businessTodos: categories[0], personalTodos: categories[1], categories, TodaysTodosList: state.reducer.TodaysTodosList, reduxRender: state.reducer.render2 }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(actions.action2()),
        TODAYS_TODOS: () => dispatch(actions.TODAYS_TODOS()),
        toggleTodo: (id) => dispatch(actions.toggleTodo(id)),
        toggleTodo2: (id, category) => dispatch(actions.toggleTodo2(id, category)),
        addTodo: (title) => dispatch(actions.addTodo(title)),
        deleteTodo: (id, callback) => { dispatch({ type: 'DELETE_TODO', payload: id }); callback() }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen) //{ action1: actions.action1 } //actions

// export default HomeScreen

const styles = StyleSheet.create({
    createButton: {
        position: 'absolute',
        right: 5 * vw,
        bottom: 4.5 * vh,

    },
    displayComponent: {
        // borderWidth: 1,
        backgroundColor: 'white',
        width: 50 * vw,
        height: 15 * vh,
        marginRight: 5 * vw, //position: 'absolute'
        // marginBottom: 5 * vh,
        alignSelf: 'center',
        // flexDirection: 'column',
        // justifyContent: 'center'
        paddingTop: 2 * vh,
        paddingLeft: 3 * vw,
        borderRadius: 5 * vw,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
    },
    displayComponent2: {
        // backgroundColor: 'white',
        // marginBottom: 1.0 * vh,
        // elevation: 0.5
        // borderRadius: 4 * vw,
        // height: 8 * vh,

        // justifyContent: 'space-between',
        // alignItems: 'center',
        flexDirection: 'row',

        paddingLeft: 2 * vw,
        // borderWidth: 1,

    }

})