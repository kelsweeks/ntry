import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'

function LoggedOut({setIsAuthenticated}) {

    return (
        <div>
            <h1> Please sign up or login if you have an account.</h1>
                <>
                <Routes>
                    <Route path='/signup'>
                        <SignUp setIsAuthenticated={setIsAuthenticated} /> 
                    </Route>
                    <Route path='/login'>
                        <Login setIsAuthenticated={setIsAuthenticated} />
                    </Route>
                </Routes>

                </>
        </div>
    )
}

export default LoggedOut