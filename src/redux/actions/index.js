const action1 = (value) => {
    return {
        type: 'Subtract',
        payload: value
    }
}



// function dispatch(action2) 
// {
//     return 0
// } 

// dispatch(action2)



const action2 = (name) => {
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch({
    //             type: 'ADD',
    //             payload: name
    //         })
    //     }, 2000)
    // }

    // return {
    //     type: 'ADD',
    //     payload: name
    // }

    return {
        type: 'ADD',
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name)
            }, 5000)
        })
    }
}

const TODAYS_TODOS = () => {

    return {
        type: 'TODAYS_TODOS',
        payload: 10 //todays date from the arguments will be sent from the HomeScreen
    }
}

const toggleTodo = (id) => {
    // console.log('toggle action called**********', id)
    return { type: 'TOGGLE_TODO', payload: id }
}

const toggleTodo2 = (id, category) => {
    // console.log('toggle action called**********', id)
    return { type: 'TOGGLE_TODO2', payload: { id, category } }
}

const addTodo = (title, date, category, color) => {
    return { type: 'ADD_TODO', payload: { title, date, category, color } }
    // call TODAYS_TODOS()
}

const editTodo = (title, date, category, color, id) => {
    return { type: 'EDIT_TODO', payload: { title, date, category, color, id } }
}
const editCategory = (category, color, oldCategory) => {
    return { type: 'EDIT_CATEGORY', payload: { category, color, oldCategory } }
}

export { action1, action2, TODAYS_TODOS, toggleTodo, toggleTodo2, addTodo, editTodo, editCategory }