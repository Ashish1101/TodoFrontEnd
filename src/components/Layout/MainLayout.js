import React from 'react'
import AddItem from '../search/Search'
import Task from '../Tasks/task'
const MainLayout = () => {
    return (
        <div className="bg-white h-screen sm:flex  ">
            <div className=" bg-green-400  hidden sm:block sm:w-1/3 ">
                render first Component
                Hello first + user Profile and total
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
