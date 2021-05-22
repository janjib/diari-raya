import React, { useContext } from 'react'
import {Redirect, Route} from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const PrivateRoute = ({component:Component,...rest}) => {

    const {currentUser} = useContext(AppContext)

    return (
        <Route 
        {...rest}
        render={props => {
         return currentUser ? <Component {...props}/> : <Redirect to = '/' />
        }}
        >

        </Route>
    )
}

export default PrivateRoute