import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import TaskItems from './TaskItems'
import {getTask } from '../../actions/task'
// import Loading from './Spinner'
const Task = ({getTask , tasks}) => {
    useEffect(() => {
        getTask()

      
        //console.log(task)
        //eslint-disable-next-line
    }, [])
   
   console.log('tasks', tasks)

    
    return (
       <Fragment>
           {tasks.length !== 0 ? tasks.map((item) => 
           <TaskItems key={item._id} date={item.date} title={item.title} id={item._id} />) : (<div>You have no active tasks</div>)}
       </Fragment>
    )
}

const mapStateToProps = state => ({
    tasks: state.task.tasks
})

export default connect(mapStateToProps , {getTask })(Task)