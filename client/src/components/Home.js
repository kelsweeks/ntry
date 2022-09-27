import React from 'react';
// import ResponsiveAppBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import '../App.css';
import Clients from './Clients';

// you see this page if you are logged in

function Home({logout,}) {
    const buttonstyle={padding :5, backgroundColor: '#05b7f1', margin: "10px"}

    return (
        <div align='center'>
            <h1>This is the ("HOME") landing page</h1>
            <a> I want this page to be the first page a user sees when they come to app -- if a user is not logged in, this is the only page they can access</a>
            <h4>it should include:</h4>
                <li>Login Component</li>
                <li>SignUp Option</li>
            {/* <ResponsiveAppBar/>
            <Button onClick={logout}> logout </Button>
            <h1>Home</h1>
            <Routes>
                <Route strict path='/clients'>
                    <Clients/>
                </Route>
            </Routes>
            <Button component={Link} to="/clients" variant="contained" style={buttonstyle}>
                Clients
            </Button> */}
        </div>
    )
}
export default Home;

// home component will include: 
    // NavBar
    // Hero
    //Footer