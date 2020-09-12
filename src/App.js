import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {store , persistor}  from './store'
import Navbar from './components/Layout/Navbar'
import MainLayout from './components/Layout/MainLayout'
//import {Router , Route , Switch} from 'react-router'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import SetAuthToken from './utils/Token'
import { PersistGate } from 'redux-persist/integration/react'
import PrivateRoute from './components/PrivateRoute'
if(localStorage.token) {
   SetAuthToken(localStorage.token)
}

const App = () => {
  return (
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        {/* <MainLayout /> */}
        <Router>
        <Navbar />
           <Switch>
              <PrivateRoute exact path="/main"  component={MainLayout} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
           </Switch>
        </Router>
        </PersistGate>
     </Provider>
  );
}

export default App;
