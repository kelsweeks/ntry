import React from 'react';
import ResponsiveAppBar from './NavBar';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import '../App.css';


const Home = () => {
    const buttonstyle={padding :5, backgroundColor: '#05b7f1', margin: "10px"}

    return (
        <div>
            <ResponsiveAppBar/>
            <h1>Home</h1>
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