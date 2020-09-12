import { connect } from 'react-redux'
import React from 'react'
const UserCard = ({user : {user : {name}} , task : {tasks}}) => {
    return (
        <div className=" w-64 h-64 mx-32 my-32 shadow-2xl fixed top-0 ">
            <div className="my-16">
    <h2 className="text-center font-bold ">Welcome <span className="text-purple-400">{name}</span> </h2>
             <p className="pl-2 my-4 ml-12 font-medium">Tasks to be done {tasks.length}</p>
            </div>
        </div>
    )
}

const mapToStateProps = state => ({
    user : state.user,
    task: state.task
})

export default connect(mapToStateProps , null) (UserCard)
