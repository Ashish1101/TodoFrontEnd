import React from 'react'
import {MdDelete} from 'react-icons/md'
import {deleteItem} from '../../actions/task'
import {connect} from 'react-redux'
// import Loading from './Spinner'
import Moment from 'react-moment'

const TaskItem= ({ title , id , deleteItem  , date}) => {
   

    return (
        <ul className="pl-2">
            <li key={id} className="m-2 p-4 text-md shadow-lg">{title}
            <span className="float-right mt-2" key={id} ><MdDelete onClick={() => deleteItem(id)}   /></span>
    <p className="text-xs"><Moment format="MMM Do YY">{date}</Moment></p>
    </li>
        
        </ul>
    )
}

const mapStateToProps = state => ({
    task : state.task
})

export default connect(mapStateToProps , {deleteItem})(TaskItem)
