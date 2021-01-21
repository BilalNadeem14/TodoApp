import firestore from '@react-native-firebase/firestore';
import { store } from '../'


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



// func(() => {
//     return func => {
//         func({ type: ''})
//     }
// })



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



//Copy the functionality inside of reducer inside of action and then send data to firebase

const storeToFirebase = () => {
    firestore().collection('users').doc('BW0ZsLzqfhWnDr4FBN1v').update({
        name: 'Bilal',
        allTodos: store.getState().reducer.allTodos
        // age: 21
    })
}

const addTodo = (title, date, category, color) => {
    console.log('********************************************App store: ', store.getState().reducer.allTodos)
    storeToFirebase()
    return { type: 'ADD_TODO', payload: { title, date, category, color } }
    // call TODAYS_TODOS()
}

const editTodo = (title, date, category, color, id) => {
    return { type: 'EDIT_TODO', payload: { title, date, category, color, id } }
}
const editCategory = (category, color, oldCategory) => {
    return { type: 'EDIT_CATEGORY', payload: { category, color, oldCategory } }
}

const fetchDataFromFirebase = () => {
    // const userDocument = {}
    // const abc = await setTimeout(() => {
    //     console.log('fetchDataFromFirebase timed out')
    //     userDocument = await firestore()
    //     .collection('users')
    //     .doc('BW0ZsLzqfhWnDr4FBN1v').get()
    //     console.log('fetchDataFromFirebase action: ', userDocument.data().allTodos)
    // }, 5000)

    return async dispatch => {
        const userDocument = await firestore()
            .collection('users')
            .doc('BW0ZsLzqfhWnDr4FBN1v').get()

        // console.log('fetchDataFromFirebase action: ', userDocument.data().allTodos)
        // console.log('fetchDataFromFirebase  test---------------------------')
        dispatch({ type: 'INITIALIZE_STATE', payload: userDocument.data().allTodos })
        // return 
    }

}

export { action1, action2, TODAYS_TODOS, toggleTodo, toggleTodo2, addTodo, editTodo, editCategory, fetchDataFromFirebase }