import React from 'react'
import { Typography, Container, Grid, Button } from '@mui/material'
// import { useTheme } from '@mui/material/styles'
import CaseManager from './CaseManager'
// import {Link} from 'react-router-dom'
import Clients from './Clients'
// import ClientCard from './ClientCard'



function Dashboard({client,updateCaseManager,}){
    // const theme = useTheme()
    const divstyle = {backgroundColor: '#D1E9FC', margin: '10px auto', height: '50vh', padding: '10px', borderradius: '20px'}
    // const appbarstyle={backgroundColor: '#05b7f1'}
    const buttonstyle={padding :5, backgroundColor: '#05b7f1', margin: "10px", color: "white"}
    return (
        <Container maxWidth="xl">
            {/* <Button component={Link} to="/clients" variant="contained" style={buttonstyle} updateCaseManager={updateCaseManager}>
                    Clients
            </Button> */}
            <Button  style={buttonstyle} element={<Clients/>}>Clients</Button>
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

