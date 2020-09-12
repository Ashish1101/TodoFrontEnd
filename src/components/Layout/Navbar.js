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
        <div className="bg-blue-400 h-20 flex justify-between sticky top-0 items-center">
           <div className="ml-4 text-2xl text-white hover:text-blue-800">Logo</div>
             {isAuthenticated ? (
                <ul className="flex mr-8 px-4 space-x-8">
                  <li>Welcome {user.name}</li>
                  <li onClick={logout}>Logout</li>
               </ul>
             ) : (
                <ul className="flex mr-8 px-4 space-x-8">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </ul>
             )}
        </div>
    )
}

const mapStateToProps = state => ({
  user : state.user
})

export default connect(mapStateToProps , {loadUser, logOut})(Navbar)
