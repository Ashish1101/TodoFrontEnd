import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TaskItems from './taskItems'
import {getTask} from '../../actions/task'
const Task = ({getTask , task : {tasks , error , loading}}) => {
    useEffect(() => {
        getTask()
        //console.log(task)
        //eslint-disable-next-line
    }, [])
    return (
        <div>
            {tasks.length !== 0 ? tasks.map(task => <TaskItems key={task._id} title={task.title} />) 
            : (<div>You have not task to show</div>)}
            Hello
        </div>
    )
}

const mapStateToProps = state => ({
    task : state.task
})

export default connect(mapStateToProps , {getTask})(Task)