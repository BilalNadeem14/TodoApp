import { combineReducers } from 'redux';
//import xyz1Reducer from './...'
//import **Reducer from './...'
import ManageTodosReducer from './ManageTodosReducer'

export default combineReducers({
    // myReducer1: xyz1Reducer,
    // myReducer2: xyz2Reducer
    reducer: ManageTodosReducer
})



//-------------------------