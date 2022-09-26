import React from 'react';
import ResponsiveAppBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import '../App.css';
import Clients from './Clients';

// you see this page if you are logged in

function Home({logout,}) {
    const buttonstyle={padding :5, backgroundColor: '#05b7f1', margin: "10px"}

    return (
        <div>
            <ResponsiveAppBar/>
            <Button onClick={logout}> logout </Button>
            <h1>Home</h1>
            <Routes>
                <Route strict path='/clients'>
                    <Clients/>
                </Route>
            </Routes>
            <Button component={Link} to="/clients" variant="contained" style={buttonstyle}>
                Clients
            </Button>
        </div>
    )
}
export default Home;

// home component will include: 
    // NavBar
    // Hero
    //Footer