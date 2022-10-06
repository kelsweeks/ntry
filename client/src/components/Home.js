import React from 'react';
// import ResponsiveAppBar from './NavBar';
// import { Routes, Route } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import {Link} from 'react-router-dom';
import '../App.css';
// import Clients from './Clients';
import Login from './Login'
import Button from '@mui/material/Button';
import { Grid, Paper, Avatar, TextField, Typography } from '@material-ui/core';
import Logo from '../assets/Logo.svg'
import hero from '../assets/hero.png'
// you see this page if you are logged in

function Home({logout,setCurrentCaseManager}) {
    const buttonstyle={ variant: 'contained', size: 'large', padding :10, backgroundColor: '#05b7f1', margin: "20px", color: 'white' }
    const divstyle = {backgroundColor: '#171C24', margin: '100px auto', height: '60vh', padding: 20, borderradius: '70px', width: 900}

    return (
        <div align='center'>
            <Paper elevation={10} style={divstyle}>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                        <img align='center' src={hero} style={{height: '40vh', padding: 10, }}></img>
                        <br/>
                        {/* <h1 style={{color: 'white', padding: 50, margin: '10px auto'}}> Welcome to Current Your agencies tool for doing good</h1> */}
                        <Button style={buttonstyle} href={'/signup'}> SIGNUP </Button> <Button style={buttonstyle} href={'/login'}> LOGIN </Button>
                    </Grid>
                </Grid>
            </Paper>
            {/* <Login setCurrentCaseManager={setCurrentCaseManager}/> */}
        </div>
    )
}
export default Home;

// home component will include: 
    // NavBar
    // Hero
    //Footer