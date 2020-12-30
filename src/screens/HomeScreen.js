import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { vh, vw } from '../units';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Ionicons';
// import CheckBox from '@react-native-community/checkbox';
import { CheckBox } from 'react-native-elements'

class HomeScreen extends React.Component {
    constructor(props) {
        console.log('constructor called')
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
            toggleCheckBox: true
            //'task2', 'task3', 'things to do part 4'
        }
    }

    displayComponent(i) {
        // console.log('displayComponent', i.item)
        // console.log('map checked: ', todo.todo, i.item.category)
        let count = 0
        i.item.Todos.map((todo) => {
            // console.log('map togglecheckbox: ', todo.todo) //.toggleCheckBox
            if (todo.todo.toggleCheckBox == true) {
                count++
            }
        })
        let percentage = 0
        if (i.item.Todos.length !== 0) {
            percentage = count / i.item.Todos.length
        }
        console.log('category, checkedCount, percentage: ', i.item.category, count, percentage)
        return <View style={styles.displayComponent}>
            <Text>{i.item.Todos.length} tasks</Text>
            {/* <Text>{i.item.Todos[0].todo.toggleCheckBox}</Text> */}
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{i.item.category} </Text>
            <View style={{
                // flex: 1, 
                flexDirection: 'row',
                backgroundColor: 'silver', width: 43 * vw, height: .5 * vh,
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
        // console.log('flatList2:', this.state.toggleCheckBox)
        var x = false
        return <View style={styles.displayComponent2}>
            <CheckBox
                style={{
                    backgroundColor: 'blue',
                    borderRadius: 20 * vw
                }}
                disabled={false}
                checked={i.item.toggleCheckBox}
                onPress={() => {
                    this.props.toggleTodo2(this.props.TodaysTodosList[i.index].id)
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
            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                flex: 1,
                marginRight: 5 * vw
            }}
            >
                <Text>{i.item.title} id: {i.item.id} desc: {i.item.description}</Text>
                <TouchableOpacity
                    onPress={() => this.props.deleteTodo(i.item.id)}
                >
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    }

    componentDidMount() {
        console.log('didMount*************')
        this.props.TODAYS_TODOS()
    }
    componentDidUpdate() {
        console.log('componentDidUpdate HomeScreen***********')
        // , this.props.categories[0].Todos[0].todo

    }

    render() {
        // console.log('redux state:', this.props.businessTodos, this.props.personalTodos)
        // console.log('redux state categories: ', this.props.categories)
        // console.log('actions', this.props.action2)
        // this.props.increment()
        // console.log('todaysToDoList redux', this.props.TodaysTodosList)
        return (
            <View style={{ //backgroundColor: 'white',
                flex: 1,
            }}
            >



                {/* style={{ width: 5 * vw, height: 5*vh }} */}
                <View
                    style={{ marginHorizontal: 5 * vw }}
                >
                    <View style={{
                        marginVertical: 5 * vw,
                        borderWidth: 1, flexDirection: 'row'
                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Icon4 name="ios-menu-outline" size={20} color="#929298" //Icon2 name="grip-lines"
                            />
                        </TouchableOpacity>
                        <View style={{ borderWidth: 1, flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
                            <TouchableOpacity>
                                <Icon3 name="search1" size={20} color="#929298" style={{ marginRight: 5 * vw }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon4 name="ios-notifications-outline" size={20} color="#929298" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 2 * vh }}>What's up Hur!</Text>
                    {/* <Text>CATEGORIES{this.props.businessTodos.Todos[0].todo.title}</Text> */}
                    <Text>CATEGORIES</Text>
                </View>
                <View style={{
                    borderWidth: 1,
                    //flex: 1,
                }} >
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={{ height: 20 * vh }}
                        data={this.props.categories}
                        renderItem={this.displayComponent}
                        keyExtractor={(item) => item.category}
                    />
                </View>
                <View style={{
                    flex: 1,
                    borderWidth: 1,
                    // marginBottom: 50 * vh,
                    borderColor: 'green',
                    marginHorizontal: 5 * vw
                }}>
                    <Text style={{ marginBottom: 2 * vh }}>Today's Task</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        //   style={{}}
                        data={this.props.TodaysTodosList}
                        renderItem={this.displayComponent2}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                <View style={styles.createButton}>
                    <TouchableOpacity
                        style={{
                            // borderWidth: 1,
                            backgroundColor: '#1e6fec',
                            width: 12.5 * vw,
                            height: 7.5 * vh,
                            borderRadius: 8 * vw,
                            alignItems: 'center',
                            justifyContent: 'center',
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
    return { businessTodos: categories[0], personalTodos: categories[1], categories, TodaysTodosList: state.reducer.TodaysTodosList }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(actions.action2()),
        TODAYS_TODOS: () => dispatch(actions.TODAYS_TODOS()),
        toggleTodo: (id) => dispatch(actions.toggleTodo(id)),
        toggleTodo2: (id, category) => dispatch(actions.toggleTodo2(id, category)),
        addTodo: (title) => dispatch(actions.addTodo(title)),
        deleteTodo: (id) => dispatch({ type: 'DELETE_TODO', payload: id })

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
        marginLeft: 5 * vw, //position: 'absolute'
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

        elevation: 5,
    },
    displayComponent2: {
        backgroundColor: 'white',
        marginBottom: 1.5 * vh,
        height: 8 * vh,
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 4 * vw,
        paddingLeft: 2 * vw
    }

})