import React, { useEffect }  from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadUser , logOut} from '../../actions/auth'
import {useHistory} from 'react-router-dom'
const Navbar = ({loadUser , logOut , user : {isAuthenticated , user}}) => {
   let history = useHistory()
   useEffect(() => {
       
       if(!isAuthenticated) {
         history.push("/login")
       }
       if(isAuthenticated) {
         loadUser()
       }

       //eslint-disable-next-line
    }, [isAuthenticated])

    const logout =() => {
       logOut()
    }
    return (
        <div className="bg-blue-700 h-20 flex justify-between sticky top-0 items-center shadow-xl">
           <div className="ml-4 sm:pl-16 text-2xl hover:text-white cursor-pointer ">MyTodo</div>
             {isAuthenticated ? (
                <ul className="flex  px-4 space-x-2">
                  <li className="sm:hidden">Welcome {user.name}</li>
                  <li onClick={logout} className="sm:pr-16 cursor-pointer hover:text-white">Logout</li>
               </ul>
             ) : (
                <ul className="flex mr-8 px-4 space-x-8">
                    <Link to="/login" className="hover:text-white">Login</Link>
                    <Link to="/register" className="hover:text-white">Register</Link>
                </ul>
             )}
        </div>
    )
}

const mapStateToProps = state => ({
  user : state.user
})

export default connect(mapStateToProps , {loadUser, logOut})(Navbar)
