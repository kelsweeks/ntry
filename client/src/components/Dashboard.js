import React, { useState, useEffect } from 'react'
import { Typography, Container, Grid, Button } from '@mui/material'
// import {Link} from 'react-router-dom'
// import { useTheme } from '@mui/material/styles'
// import CaseManager from './CaseManager'
// import {Link} from 'react-router-dom'
import Clients from './Clients'
// import ClientCard from './ClientCard'



function Dashboard(setCurrentCaseManager){
    // const theme = useTheme()
    // const appbarstyle={backgroundColor: '#05b7f1'}
    // const [caseManager, setCaseManager] = useState()
    const [errors, setErrors] = useState(false)
    const divstyle = {backgroundColor: '#D1E9FC', margin: '10px auto', height: '50vh', padding: '10px', borderradius: '20px'}
    const buttonstyle = {padding :5, backgroundColor: '#05b7f1', margin: "10px", color: "white"}
    
    useEffect(()=>{
        fetch(`/authorized_case_manager`)
        .then(res => {
            if(res.ok){
                res.json().then(caseManager => {
                    setCurrentCaseManager(caseManager)
                    console.log(caseManager)
                })
            }else {
                res.json().then(data => setErrors((data.errors)))
            }
        })
    }, [])

    if(errors) return <h1>{errors}</h1>

    return (
        <Container maxWidth="xl">
            <Button  variant="contained" style={buttonstyle} element={<Clients/>}>
                    Clients
            </Button>
            {/* <Button  style={buttonstyle} element={<Clients/>}>Clients</Button> */}
            <Typography variant="h4" align='center' sx={{ mb: 5 }}>Welcome to your dashboard!
                {/* <h4 align='center' >Welcome to your dashboard!</h4> */}
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    {/* <CaseManager updateCaseManager={updateCaseManager}/> */}
                    <div style={divstyle}>
                        <h4 align='center'>Display Case Manager Info Here</h4>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div style={divstyle}>
                        <h4 align= 'center'>something</h4>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <div style={divstyle}> 
                        <h4 align='center'>Display Clients Table Here</h4>
                        {/* <h4>{client.name}</h4> */}
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard

// Dashboard will include
    // panel on the side
    // Clients component
    // add file component
    // appointments component/calendar
    // LogOut button

