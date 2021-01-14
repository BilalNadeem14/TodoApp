import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { vh, vw } from '../units';
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux';
import * as actions from '../redux/actions'
import Icons from 'react-native-vector-icons/AntDesign';

var color = 'blue'
let textColor = 'purple'
var num = 0
function CategoryDisplay(props) {
    const { route } = props
    const [status, setStatus] = useState('incomplete')
    color = route.params.categoryObj.color
    const date = new Date()
    //We brought data from redux bec the params don't change when redux state changes, so in order
    //to show change on this screen we made a filteredCategory and passed it to the flatLISt
    const filteredCategory = props.categories.filter(obj => obj.category === route.params.categoryObj.category)
    // console.log('CategoryDisplayScreen filteredCategory: ', filteredCategory[0])

    // console.log('allCategories: ', props.categories)

    // console.log('category screen: ', route.params.categoryObj.category)
    // console.log('color: ', color)

    // ,View style={{
    //     justifyContent: 'space-between',
    //     flexDirection: 'row',
    //     flex: 1,
    //     marginRight: 5 * vw
    // }}></View>

    var displayComponent = (i) => {
        // console.log('CategoryDisplayScreen flatList: ', i.item.todo)
        ++num
        let localStatus = 'complete'
        textColor = 'blue'
        if (i.item.todo.toggleCheckBox === false) {
            // setStatus('completed')
            localStatus = 'Incomplete'
            console.log('its ', status, 'status not set, renderIterated: ', num, 'todo date: ', i.item.todo.date)
            if (date.getDate() < i.item.todo.date) {
                localStatus = 'upcoming'
                textColor = 'green'
            }
            else if (date.getDate() > i.item.todo.date) {
                localStatus = 'overdue'
                textColor = 'red'
            }
        }
        // console.log('date: ', date.getDate())

        return <View style={{
            // borderWidth: 1,
            backgroundColor: 'white',
            marginBottom: 1.5 * vh,
            borderRadius: 4 * vw,
        }}>
            <View style={styles.displayComponent}>
                <View style={{
                    // borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // borderColor: 'red', 
                    // width: 12 * vw, 
                    // marginLeft: -2 * vw
                }}
                >
                    <CheckBox
                        disabled={false}
                        checked={i.item.todo.toggleCheckBox}
                        onPress={() => props.toggleTodo2(i.item.todo.id)}
                        style={{ alignSelf: 'center' }}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{
                        // flex: 1,
                        flexDirection: 'row',
                        // borderWidth: 1
                    }}
                        onPress={() => { props.navigation.navigate('DisplayScreen', i.item) }}
                    >
                        <View style={{
                            // justifyContent: 'space-between',
                            flexDirection: 'row',
                            // justifyContent: 'space-between',
                            // flex: 1,
                            // marginRight: 5 * vw,
                            // borderWidth: 1,

                            // width: 31 * vh,
                            paddingLeft: 9 * vw,
                            paddingRight: 3 * vw,
                            alignItems: 'center'
                        }}
                        >
                            {/* <Text style={{ borderWidth: 0, marginLeft: -9 * vw, borderWidth: 1 }}>{i.index + 1}{')'} id: {i.item.todo.id},</Text> */}

                            <Text style={{ marginLeft: -9 * vw, borderWidth: 0 }}>{i.item.todo.title}</Text>
                            {/* ,      {i.item.todo.date}/12/2020 */}

                            {/* <Text style={{ marginRight: 0 * vw }}>{i.item.todo.date}/12/2020</Text> */}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.deleteTodo(i.item.todo.id)}
                        style={{ justifyContent: 'center' }}
                    >
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View >
            <Text style={{ color: textColor, borderWidth: 0, alignSelf: 'flex-end', right: 2 * vw, bottom: 1 * vh, marginTop: -1 * vh }}
            >{localStatus}</Text>

        </View>

    }

    let count = 0
    route.params.categoryObj.Todos.map((todo) => {
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
    if (route.params.categoryObj.Todos.length !== 0) {
        percentage = count / route.params.categoryObj.Todos.length
    }

    return <View style={{ flex: 1 }}>
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


        {/* <TouchableOpacity
            onPress={() => props.navigation.navigate('EditCategory', { categoryObj: route.params.categoryObj })}
        >
            <Text>Category Display Screen: {route.params.categoryObj.category}, todos: {route.params.categoryObj.Todos.length}, color: {route.params.categoryObj.color}</Text>
        </TouchableOpacity> */}

        <View style={styles.displayComponentNew}>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('EditCategory', { categoryObj: route.params.categoryObj })}
            >
                <Text style={{ color: '#a0a3a6', }}>{route.params.categoryObj.Todos.length} tasks</Text>
                {/* <Text>{i.item.Todos[0].todo.toggleCheckBox}</Text> */}
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{route.params.categoryObj.category} </Text>
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
                        backgroundColor: route.params.categoryObj.color, width: percentage * 43 * vw, height: .5 * vh,
                        borderRadius: 3 * vw

                    }} >
                    </View>
                    <View style={{
                        borderWidth: .5 * vw,
                        borderColor: route.params.categoryObj.color,
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


        <View style={{
            borderWidth: 1,
            borderColor: color,
            // backgroundColor: color,
            borderRadius: 5 * vw,
            flex: 1,
            marginHorizontal: 10 * vw,
            marginVertical: 2 * vh,
            paddingTop: 1 * vh,
            paddingHorizontal: 1 * vh,
        }}>
            {/* <Text>hello</Text> */}
            <FlatList
                showsVerticalScrollIndicator={false}
                //   style={{}}
                data={filteredCategory[0].Todos} //route.params.categoryObj.Todos
                renderItem={displayComponent}
                keyExtractor={(item) => item.todo.id}
            />
        </View>
    </View >
}

const styles = StyleSheet.create({
    // containerStyle: {
    //     backgroundColor: color
    // }
    displayComponentNew: {
        marginLeft: 10 * vw,
        // borderWidth: 1,
        backgroundColor: 'white',
        width: 50 * vw,
        height: 15 * vh,
        marginRight: 5 * vw, //position: 'absolute'
        // marginBottom: 5 * vh,

        // alignSelf: 'center',

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
    displayComponent: {
        // backgroundColor: 'white',
        // marginBottom: 1.5 * vh,
        // height: 20 * vh,
        // alignItems: 'center',
        // borderWidth: 1,
        marginRight: 5 * vw,
        flexDirection: 'row',
        // borderRadius: 4 * vw,
        // paddingRight: 2 * vw,

        // justifyContent: 'space-between',
    }
})

const mapStateToProps = state => {
    const categories = state.reducer.allTodos
    // console.log('categories: ', state.reducer)
    return { categories }
}


const mapDispatchToProps = (dispatch) => {
    return {
        // increment: () => dispatch(actions.action2()),
        // TODAYS_TODOS: () => dispatch(actions.TODAYS_TODOS()),
        // toggleTodo: (id) => dispatch(actions.toggleTodo(id)),
        toggleTodo2: (id, category) => dispatch(actions.toggleTodo2(id, category)),
        // addTodo: (title) => dispatch(actions.addTodo(title)),
        deleteTodo: (id) => dispatch({ type: 'DELETE_TODO', payload: id })

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CategoryDisplay)