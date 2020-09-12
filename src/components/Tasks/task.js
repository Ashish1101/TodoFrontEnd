import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TaskItems from './TaskItems'
import {getTask } from '../../actions/task'
// import Loading from './Spinner'
const Task = ({getTask , task : {tasks , error , loading}}) => {
    useEffect(() => {
        getTask()

      
        //console.log(task)
        //eslint-disable-next-line
    }, [])
   
   
    
    return (
        <div>
            {tasks.length !== 0 ? tasks.map(task => <TaskItems  id={task._id}  title={task.title } key={task._id} />) 
            : (<div className="text-center font-bold">You have not task to show</div>)}
        </div>
    )
}

const mapStateToProps = state => ({
    task : state.task
})

export default connect(mapStateToProps , {getTask })(Task)