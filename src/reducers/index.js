import {combineReducers} from 'redux';
import user from '../reducers/auth'
import task from '../reducers/task'

export default combineReducers({
    user: user,
    task: task
})
