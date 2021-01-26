import { showNotification, handleScheduleNotification, handleCancel, cancelNotification } from '../../notification.android'
// date: new Date(this.props.date.getFullYear(), this.props.date.getMonth(), this.props.date.getDate(), this.props.date.getHours(), this.props.date.getMinutes())

var ID = 100
const todayDate = new Date()
const initialState = {
    allTodos: [
        {
            Todos: [{ todo: { title: 'mobile phone', description: 'Business', toggleCheckBox: false, date: new Date(), id: '10' } }, { todo: { title: 'BusinessTodo2', description: 'Business', toggleCheckBox: false, date: new Date(2021, 0, 15), id: '20' } }],
            category: 'Business',
            color: 'blue'
        },
        {
            Todos: [{ todo: { title: 'personalTodo1', description: 'Personal', toggleCheckBox: false, date: new Date(), id: '30' } }, { todo: { title: 'personalTodo2', description: 'Personal', toggleCheckBox: false, date: new Date(2021, 0, 5), id: '40' } }],
            category: 'Personal',
            color: 'green'
        }
    ],
    // { title: 'todo1111', toggleCheckBox: false, id: '1', description: 'x' },
    // { title: 'todo2', toggleCheckBox: false, id: '2', description: 'x' },
    // { title: 'todo3', toggleCheckBox: false, id: '3', description: 'x' }
    TodaysTodosList: [],
    date: new Date(),
    render: {},
    render2: true,
    ID: 100
}
//Business: Personal: 
export default (state = initialState, action) => {
    // console.log('Reducer action called****', action)
    switch (action.type) {
        // case 'persist/PERSIST':
        //     var allTodos2 = state.allTodos
        //     allTodos2.map((category) => {
        //         category.Todos.map((item) => {
        //             // if (item.todo.date) {
        //             // var datex 
        //             item.todo.date = new Date(item.todo.date)
        //             console.log('we slay', typeof (item.todo.date))

        //         })
        //     })
        //     return { ...state, allTodos: allTodos2 }
        case "FIRST":
            console.log('First Reducer called*****************************************************************')
            var allTodos2 = state.allTodos
            allTodos2.map((category) => {
                category.Todos.map((item) => {
                    // if (item.todo.date) {
                    // var datex 
                    // console.log('we dont slay:', item.todo.date, 'type: ', typeof (item.todo.date), '*****************************')
                    // console.log('timestamp: ', new Date(item.todo.date.seconds * 1000))
                    item.todo.date = new Date(item.todo.date)
                    // console.log('we slay2222222222', typeof (item.todo.date.getDate()), item.todo.date)

                })
            })
            return { ...state, allTodos: allTodos2 }

        case "DateStampConvert":
            console.log('####################################DateStampConvert Reducer called*****************************************************************')
            var allTodos2 = state.allTodos
            allTodos2.map((category) => {
                category.Todos.map((item) => {
                    // if (item.todo.date) {
                    // var datex 
                    // console.log('we dont slay:', item.todo.date, 'type: ', typeof (item.todo.date), '*****************************')
                    // console.log('timestamp: ', new Date(item.todo.date.seconds * 1000))
                    item.todo.date = new Date(item.todo.date.seconds * 1000)
                    // new Date(item.todo.date)
                    console.log('we slay2222222222', typeof (item.todo.date.getDate()), item.todo.date.getDate(), ',dateObj: ', item.todo.date)

                })
            })
            return { ...state, allTodos: allTodos2 }

        case "INITIALIZE_STATE":
            console.log('fetchDataFromFirebase => INITIALIZE_STATE reducer', action.payload)
            return { ...state, allTodos: action.payload }
        case 'ADD':
            console.log('Reducer ADD action called****', action.payload)
            return state;
        case 'TODAYS_TODOS':
            // console.log('today reducer***************')
            // const date = action.payload
            state.allTodos.map((category) => {
                category.Todos.map((item) => {
                    // console.log('ifffffffffffffff', item.todo.date) //.todo.date
                    if (item.todo.date) {
                        // item.todo.date
                        var datex = new Date(item.todo.date)

                        // console.log('yayyyyyyyyyyy----------------------------', datex.getDate(), typeof (datex), typeof (item.todo.date), typeof (todayDate)) //item.todo.date.getDate()
                        if (item.todo.date.getDate() === todayDate.getDate()) { //item.todo.date.getDate()
                            // console.log('inside if')
                            state.TodaysTodosList.push(item.todo)
                            // state.TodaysTodosList.push(category.Todos.todo)
                        }
                    }
                })
            })
            // console.log('state', state.TodaysTodosList)
            return { ...state }
        case 'TOGGLE_TODO':
            // console.log('toggle reducer')
            var in1 = 0
            var in2 = 0


            var state2 = { ...state, allTodos: [...state.allTodos] }
            state.allTodos.map((category, index1) => { //state2.allTodos = 
                category.Todos.map((item, index2) => { //return 
                    console.log('item', item.todo.id)
                    console.log('action.payload:', action.payload)
                    if (item.todo.id == action.payload) {
                        console.log('Toggle Reducer inside if******', item.todo.toggleCheckBox)
                        console.log('Opposite inside if******', !item.todo.toggleCheckBox)
                        in1 = index1
                        in2 = index2
                        console.log('state.toggle before change', state.allTodos[index1].Todos[index2].todo.toggleCheckBox)
                        //item.todo.toggleCheckBox = !item.todo.toggleCheckBox
                        console.log('state.toggle', state.allTodos[index1].Todos[index2].todo.toggleCheckBox)
                    }
                    // return item
                })
            })
            //state2.allTodos[in1].Todos[in2].todo.toggleCheckBox = !state2.allTodos[in1].Todos[in2].todo.toggleCheckBox
            // {var Todos2 = [...state.allTodos[in1].Todos]
            // Todos2[in2].todo.toggleCheckBox = !Todos2[in2].todo.toggleCheckBox}
            var todo = { ...state.allTodos[in1].Todos[in2].todo }
            todo.toggleCheckBox = !todo.toggleCheckBox
            //state2.allTodos[in1].Todos[in2].todo = todo

            // var allTodos = [...state.allTodos]
            // var Todos = [...allTodos.[in1].Todos]
            // var todo2 = { ...Todos[in2].todo }
            //var Todos = [...allTodos.Todos[in2]]
            //var todo = { ...Todos.todo }

            // state2 = {
            //     allTodos: Todos
            // }

            // state2 = {...state, state.allTodos[in1].Todos[in2].todo.toggleCheckBox}

            console.log('state2: ', state2.allTodos[in1].Todos[in2].todo.toggleCheckBox)
            console.log('state.toggle', state.allTodos[in1].Todos[in2].todo.toggleCheckBox)

            // state =

            return { ...state2 }
        case 'TOGGLE_TODO2':
            var ind = 0
            var ind2A = 0
            var ind2B = 0
            // console.log('ACTION2 CALLED',) //state.TodaysTodosList)

            //Updating the Today'sTodoList
            state.TodaysTodosList.map((todo, index) => {
                if (todo.id === action.payload.id) {
                    ind = index
                    // console.log('ACTION2 inside if index:', index)

                    // console.log('before update todo.toggle', todo.toggleCheckBox)
                    // todo.toggleCheckBox = !todo.toggleCheckBox
                    // console.log('After update todo.toggle', todo.toggleCheckBox)
                }
            })

            // var stateX = { ...state, TodaysTodosList: [...state.TodaysTodosList] }
            // stateX.TodaysTodosList[ind] = { ...state.TodaysTodosList[ind] }
            // stateX.TodaysTodosList[ind].toggleCheckBox = !stateX.TodaysTodosList[ind].toggleCheckBox

            //Updating the original todo's list

            state.allTodos.map((category, indexA) => {
                category.Todos.map((item, indexB) => {
                    // console.log('ifffffffffffffff', item.todo.date) //.todo.date
                    if (item.todo.id === action.payload.id) {
                        // console.log('inside if')
                        ind2A = indexA
                        ind2B = indexB
                        // item.todo.toggleCheckBox = !item.todo.toggleCheckBox
                        // state.TodaysTodosList.push(category.Todos.todo)
                    }

                })
            })

            let newTodos = [...state.allTodos]
            newTodos[ind2A].Todos[ind2B].todo.toggleCheckBox = !newTodos[ind2A].Todos[ind2B].todo.toggleCheckBox
            console.log("toggleCheckBox, ind2A, ind2B", newTodos[ind2A].Todos[ind2B].todo.toggleCheckBox, ind2A, ind2B)
            // console.log('inside reducer state: ', newTodos[ind2A].Todos[ind2B])
            // console.log('*********ind: ', ind)
            state.render2 = !state.render2
            return ({ ...state, allTodos: [...newTodos] })

        //**************** */


        // state.TodaysTodosList[ind].toggleCheckBox = !state.TodaysTodosList[ind].toggleCheckBox


        // console.log('Test: state: ', state.TodaysTodosList[ind].toggleCheckBox)
        // console.log('Test new state: ', stateX.TodaysTodosList[ind].toggleCheckBox)

        // console.log('state.render', state.render)
        // return { ...state, render: !state.render }
        // var stateX = { ...state }
        // return { ...state, render: { ...state.render, x: ID++ } }
        // return { ...stateX }

        case 'ADD_TODO':
            //add: 1)date 2)title 3)category

            // checked, {title, date, category, color}



            //---------->//console.log('add todo reducer called, title: ', action.payload.category)
            // const stateX = 
            /*
            if (category === 'Business') {
                state.allTodos[0].Todos.push 
            }
            else if (category === 'Personal') {
                state.allTodos[1].Todos.push 
            }
            //OR
            state.allTodos.map((categoryType) => {
                if(categoryType.category === action.payload.category) {
                    categoryType.Todos.push()
                }
            })
            */

            // state.allTodos[0].Todos.push({ todo: { title: action.payload, description: 'Business', toggleCheckBox: false, date: 10, id: ++ID } }) // allTodos[0] is for Business category
            // console.log('todo added: ', state.allTodos[0].Todos)
            let newTodos3 = state.allTodos
            newTodos3.map((todoList, index) => {
                if (todoList.category === action.payload.category) {
                    //---------->//console.log('found', todoList.category)
                    //---------->//console.log('id: ', ID)//.getDate()
                    console.log('inside add Todo ****************************************', (state.ID).toString()) //++ID
                    todoList.Todos.push({ todo: { date: action.payload.date, id: ((++state.ID)).toString(), description: todoList.category, title: action.payload.title, toggleCheckBox: false } })

                    if (action.payload.date.getDate() === 4) {
                        // console.log('inside if')
                        // console.log('newly added todo:', todoList.Todos[todoList.Todos.length - 1])
                        // console.log('todoList after adding: ', todoList)
                        // state.TodaysTodosList.push({ date: action.payload.date.getDate(), id: ID.toString(), description: todoList.category, title: action.payload.title, toggleCheckBox: true })

                        // state.TodaysTodosList.push(123)
                        // state.TodaysTodosList[state.TodaysTodosList.length] = todoList.Todos[todoList.Todos.length - 1].todo
                        state.TodaysTodosList.push(todoList.Todos[todoList.Todos.length - 1].todo)
                    }
                    // checked, {title, date, category, color
                    //---------->//console.log('added one => ', todoList.Todos[todoList.Todos.length - 1])
                    //---------->//console.log(todoList.Todos.length)
                }
            })
            //---------->//console.log('total categories:', state.allTodos.length)
            //---------->//console.log('last category list:', state.allTodos[state.allTodos.length - 1])


            // console.log('comparision state:', state.allTodos[0].Todos[0].todo)
            // console.log(state.TodaysTodosList[3])
            // state.TodaysTodosList[3].id = 11
            // console.log('after update todayTodo:', state.TodaysTodosList[3])
            // console.log('state', state.allTodos[0].Todos[0].todo)

            handleScheduleNotification(state.ID, action.payload.title, action.payload.date, action.payload.category) //title, date, category, color

            state.render2 = !state.render2
            return { ...state, allTodos: [...newTodos3] }

            return { ...state, render: !render } //to just change the state and make it render
        case 'REMOVE_TODO':
        // addTodo(text) {
        //     this.setState({
        //         todos: [...this.state.todos,
        //         { id: id++, text: text }
        //         ]
        //     })
        // }

        // removeTodo(id) {
        //     this.setState({
        //         todos: this.state.todos.filter((todo) => todo.id !== id)
        //     })
        // }
        case 'ADD_CATEGORY': //no need for 'SET_COLOR', b/c its done here
            console.log('addCategory in reducer', action.payload.category, action.payload.color)
            state.allTodos.push({ Todos: [], category: action.payload.category, color: action.payload.color })
            console.log('1st category: ', state.allTodos[0].category)
            console.log('new category: ', state.allTodos[state.allTodos.length - 1])
            state.render2 = !state.render2
            return { ...state }

        case 'EDIT_CATEGORY':
            let storedIndex = ''
            console.log('edit reducer', action.payload)
            state.allTodos.map((obj, index) => {
                if (obj.category === action.payload.oldCategory) {
                    storedIndex = index
                    // console.log('reached', obj.category, storedIndex)
                }
                else {
                    // console.log('didnt reach', obj.category, storedIndex)
                }
            })

            newTodos = [...state.allTodos]
            console.log('old category in state, color', newTodos[storedIndex].category, newTodos[storedIndex].color)
            newTodos[storedIndex].category = action.payload.category
            newTodos[storedIndex].color = action.payload.color
            console.log('changed category in state, color', newTodos[storedIndex].category, newTodos[storedIndex].color)
            newTodos[storedIndex].Todos.map(obj => {
                obj.todo.description = action.payload.category
                console.log('desc ', obj.todo.description)
            })
            state.render2 = !state.render2
            return { ...state, allTodos: [...newTodos] }


        case 'DELETE_TODO':
            var ind2A = 0
            var ind2B = 0
            var newTodos2 = [...state.allTodos]
            console.log('delete reducer id: ', action.payload)
            newTodos2.map((category, indexA) => {
                category.Todos = category.Todos.filter((item, indexB) => {
                    // console.log('ifffffffffffffff', item.todo.date) //.todo.date

                    if (item.todo.id === action.payload) {
                        console.log('inside if DELETE_TODO, id', action.payload)
                        ind2A = indexA
                        ind2B = indexB
                        return false //false means that this todo will be removed

                        // item.todo.toggleCheckBox = !item.todo.toggleCheckBox
                        // state.TodaysTodosList.push(category.Todos.todo)
                    }
                    else {
                        return true
                    }
                })
            })

            let NewTodaysTodosList = state.TodaysTodosList.filter(item => {
                if (item.id === action.payload) {
                    return false
                }
                else {
                    return true
                }
            })
            cancelNotification(action.payload)
            state.render2 = !state.render2
            console.log('After deleting', state.allTodos[ind2A].Todos) //[ind2B].todo.toggleCheckBox
            return { ...state, allTodos: [...newTodos2], TodaysTodosList: [...NewTodaysTodosList] }

        case 'EDIT_TODO':
            let indexA = 0
            let indexB = 0
            let bool = false
            //--------->//console.log('Edit reducer', action.payload)
            let newTodos4 = [...state.allTodos]
            state.allTodos.map((obj, i1) => {
                if (obj.category === action.payload.category) {
                    //--------->//console.log('reachedddd', action.payload.category, i1)
                    indexA = i1
                    // console.log(obj.Todos) //check this 1st
                    // console.log('action.payload.id', action.payload.id)
                    obj.Todos.map((obj, i2) => {
                        //--------->//console.log('reached2, obj.todo.id, action.payload.id', obj.todo.id, ' === ', action.payload.id)
                        if (obj.todo.id.toString() === action.payload.id.toString()) {
                            indexB = i2
                            //--------->//console.log('reached3')
                            //--------->//console.log('todo', obj.todo) //check this 2nd
                            //--------->//console.log('edited todo', { date: action.payload.date, description: action.payload.category, id: action.payload.id, title: action.payload.title, toggleCheckBox: false })
                            // todo = action.payload//then 3rd //action.payload is { title, date, category, color, id }
                            bool = true
                        }
                    })
                }
            })

            if (bool) {
                //--------->//console.log('bool', bool)
                // console.log('inside if actual todo', newTodos4[indexA].Todos[indexB].todo)
                //this is good if we remove todaysTodoList
                //newTodos4[indexA].Todos[indexB].todo = { ...newTodos4[indexA].Todos[indexB].todo, date: action.payload.date, description: action.payload.category, id: action.payload.id, title: action.payload.title, toggleCheckBox: false }

                newTodos4[indexA].Todos[indexB].todo.date = action.payload.date
                newTodos4[indexA].Todos[indexB].todo.description = action.payload.category
                newTodos4[indexA].Todos[indexB].todo.id = action.payload.id
                newTodos4[indexA].Todos[indexB].todo.title = action.payload.title
                newTodos4[indexA].Todos[indexB].todo.toggleCheckBox = false

                //--------->//console.log('edited todo', newTodos4[indexA].Todos[indexB].todo)
                //--------->//console.log('actual todo', state.allTodos[indexA].Todos[indexB].todo)
                // console.log('allTodos: ', newTodos4)
                //--------->//console.log('todaysTodo', state.TodaysTodosList)
            }
            // console.log()
            // { ...state, allTodos: [...newTodos4] }
            //state

            cancelNotification(action.payload.id)
            handleScheduleNotification(action.payload.id, action.payload.title, action.payload.date, action.payload.category)
            state.render2 = !state.render2
            return { ...state, allTodos: [...newTodos4] }
        default:
            return state;
    }
}


// state.allTodos.map((obj,index) => {
//     if (obj.category === action.payload.category) {
//         console.log('reachedddd', action.payload.category)
//         console.log(obj.Todos) //check this 1st
//         obj.Todos.map((todo) => {
//             if(todo.id === action.payload.id){
//                 console.log(todo) //check this 2nd
//                 todo = action.payload//then 3rd //action.payload is { title, date, category, color, id }
//             }
//         })
//     }
// })


//isske baad call DisplayTodoScreen(editTodo) also inside categoryDisplayScreen as well