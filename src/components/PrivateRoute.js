import React from 'react';
import {connect} from 'react-redux'
import { Route , Redirect  } from 'react-router-dom'
const PrivateRoute = ({ component: Component,  user : {isAuthenticated} ,...rest  }) => (
    <Route {...rest} render={props => (
      isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          // state: { from: props.location }
        }}/>
      )
    )}/>
  )

  const mapStateToProps = state => ({
      user : state.user
  })

  export default connect(mapStateToProps , null)(PrivateRoute)

