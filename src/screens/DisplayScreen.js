import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm'
import { editTodo } from '../redux/actions/index'
//* as actions
var filteredCategory = []
class DisplayScreen extends React.Component {
    constructor(props) {
        super(props)
        // console.log('displayScreen route.params', this.props.route.params)
        this.state = {
            screenName: 'DisplayScreen'
        }
        filteredCategory = this.props.categories.filter(obj => obj.category === this.props.route.params.todo.description)
        // console.log('filteredCategory: ', filteredCategory)
        // console.log('DisplayTodoScreen', this.props.route.params.todo.date)
        console.log('params', this.props.route.params)
        // this.props.editTodo(0, 0, 0, 0, 1)  //just testing the editTodo action     
    }

    render() {
        return (
            <TodoForm
                //we need id
                //filteredCategory[0].category, this.props.route.params.todo.id
                onSubmit={(title, date, category, color, id) => this.props.editTodo(title, date, category, color, id)} //edit action from redux //this.props.addTodo
                navigation={this.props.navigation}
                category1={filteredCategory[0].category} //this.props.route.params.todo.description       //{this.props.category1}
                color1={filteredCategory[0].color} //
                title={this.props.route.params.todo.title}
                id={this.props.route.params.todo.id}
                date={this.props.route.params.todo.date}
            />
            // <View>
            //     <Text>Home</Text>
            // </View>
        )
    }
}
//redux right way => find category, color by todo.id
//but i will get through todo.description === categoryName

const mapStateToProps = state => {
    const categories = state.reducer.allTodos
    // console.log('categories: ', state.reducer)
    return { categories, }

    // this.props.route.params.todo.description

}

const mapDispatchToProps = (dispatch) => {
    return {
        // increment: () => dispatch(actions.action2()),
        // TODAYS_TODOS: () => dispatch(actions.TODAYS_TODOS()),
        // toggleTodo: (id) => dispatch(actions.toggleTodo(id)),
        // toggleTodo2: (id, category) => dispatch(actions.toggleTodo2(id, category)),
        // addTodo: (title) => dispatch(actions.addTodo(title)),
        // deleteTodo: (id) => dispatch({ type: 'DELETE_TODO', payload: id })
        editTodo: (title, date, category, color, id) => dispatch(editTodo(title, date, category, color, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayScreen)