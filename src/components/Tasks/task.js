import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TaskItems from './TaskItems'
import {getTask } from '../../actions/task'
// import Loading from './Spinner'
const Task = ({getTask , task}) => {
    useEffect(() => {
        getTask()

      
        //console.log(task)
        //eslint-disable-next-line
    }, [])
   
   

    
    return (
        <div>
            {task.tasks.length !== 0 ? task.tasks.map((item) => <TaskItems key={item._id} id={item._id}  title={item.title } date={item.date} />) 
            : (<div className="text-center font-bold">You have not task to show</div>)}

        </div>
    )
}

const mapStateToProps = state => ({
    task : state.task
})

export default connect(mapStateToProps , {getTask })(Task)