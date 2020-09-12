import React from 'react'
import AddItem from '../search/Search'
import Task from '../Tasks/task'
import UserCard from './UserCard'
const MainLayout = () => {
    return (
        <div className="bg-white h-screen sm:flex  ">
            <div className=" hidden sm:block sm:w-1/3 stickey top-0 ">
                <UserCard />
            </div>
            <div className="max-w-screen-lg  h-auto sm:w-2/3 md:w-2/3 ">
                {/* render Second Component */}
                <AddItem />
                <Task />
            </div>
        </div>
    )
}

export default MainLayout
