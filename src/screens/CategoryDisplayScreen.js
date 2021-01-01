import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { vh, vw } from '../units';
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux';
import * as actions from '../redux/actions'

var color = 'blue'

function CategoryDisplay(props) {
    const { route } = props
    color = route.params.categoryObj.color
    //We brought data from redux bec the params don't change when redux state changes, so in order
    //to show change on this screen we made a filteredCategory and passed it to the flatLISt
    const filteredCategory = props.categories.filter(obj => obj.category === route.params.categoryObj.category)
    console.log('filteredCategory: ', filteredCategory[0])
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
        console.log('flatList: ', i.item)
        return <View style={styles.displayComponent}>
            <View style={{
                // borderWidth: 1,
                // borderColor: 'red', 
                width: 12 * vw, marginLeft: -2 * vw
            }}
            >
                <CheckBox
                    disabled={false}
                    checked={i.item.todo.toggleCheckBox}
                    onPress={() => props.toggleTodo2(i.item.todo.id)}
                />
            </View>
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
                    justifyContent: 'space-between',
                    // flex: 1,
                    // marginRight: 5 * vw,
                    // borderWidth: 1,
                    width: 31 * vh,
                    paddingLeft: 9 * vw,
                    paddingRight: 3 * vw,
                    alignItems: 'center'
                }}
                >
                    <Text style={{ borderWidth: 0, marginLeft: -9 * vw }}>{i.index + 1}{')'} id: {i.item.todo.id},</Text>
                    <Text style={{ marginRight: 0 * vw }}>{i.item.todo.title},</Text>
                    <Text>{i.item.todo.date}/12/2020</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.deleteTodo(i.item.todo.id)}
                style={{ justifyContent: 'center' }}
            >
                <Text>Delete</Text>
            </TouchableOpacity>
        </View >

    }

    return <View style={{ flex: 1 }}>
        <Text>Category Display Screen:{route.params.category}</Text>
        <View style={{
            borderWidth: 1,
            borderColor: color,
            borderRadius: 5 * vw,
            flex: 1,
            margin: 10 * vw,
            paddingTop: 1 * vh,
            paddingHorizontal: 1 * vh,
        }}>
            <Text>hello</Text>
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
    displayComponent: {
        backgroundColor: 'white',
        marginBottom: 1.5 * vh,
        height: 8 * vh,
        // alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 4 * vw,
        paddingRight: 2 * vw,

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