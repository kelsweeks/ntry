import React, { useState, useEffect } from 'react'
import { Typography, Container, Grid, Button } from '@mui/material'
// import {Link} from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import CaseManagerCard from './CaseManagerCard'
// import {Link} from 'react-router-dom'
import Clients from './Clients'
import TestForm from '../TestForm'
import ClientTable from './ClientTable'
import ClientContainer from './ClientContainer'
import CreateClientForm from './CreateClientForm'
import UpdateClient from './UpdateClient'
import {useNavigate} from 'react-router-dom'
// import ClientCard from './ClientCard'



function Dashboard({setCurrentCaseManager, currentCaseManager}){
    const theme = useTheme()
    // const appbarstyle={backgroundColor: '#05b7f1'}
    // const [caseManager, setCaseManager] = useState()
    const [errors, setErrors] = useState(false)
    const navigate= useNavigate()
    const divstyle = {backgroundColor: '#D1E9FC', margin: '10px auto', height: '50vh', padding: '10px', borderradius: '20px'}
    const buttonstyle = {padding :5, backgroundColor: '#05b7f1', margin: "10px", color: "white"}
    

    
    useEffect(()=>{


        if(!currentCaseManager){
            fetch(`/authorized_case_manager`)
                .then(res => {
                if(res.ok){
                    res.json().then(caseManager => {
                    setCurrentCaseManager(caseManager)
                    console.log(caseManager)
                })
                }else {
                res.json().then(data => {
                    setErrors((data.errors))
                    navigate('/login')
                })
                }
        })
        } 
    }, [])

    const [clients, setClients] = useState([])
    const deleteClient = (id) => setClients(current => current.filter(c => c.id !== id))
    const updateClient = (updatedClient) => setClients(current => {
        return current.map(client => {
            if(client.id === updatedClient.id){
                return updatedClient
            }else {
                return client
            }
        })
    })

    if(errors) return <h1>{errors}</h1>

    return (
        <Container maxWidth="xl">
            <Typography variant="h4" sx={{ mb: 5 }} style={{padding: 20, margin: 10}}>
                Hi {currentCaseManager.name}, welcome back!
            </Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={3}>
                    <CaseManagerCard />
                    {/* <div style={divstyle}>
                        <h4 align='center'>Display Case Manager Info Here</h4>
                    </div> */}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TestForm setCurrentCaseManager={setCurrentCaseManager}/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CreateClientForm setCurrentCaseManager={setCurrentCaseManager}/>
                </Grid>
                {/* <Grid item xs={12} sm={6} md={3}>
                    <UpdateClient setCurrentCaseManager={setCurrentCaseManager}/>
                </Grid> */}
                {/* <Grid item xs={12} md={12} lg={8}>
                    <div style={divstyle}>
                        <h4 align= 'center'>something</h4>
                    </div>
                </Grid> */}
                <Grid item xs={12} md={6} lg={12}>
                    <Clients deleteClient={deleteClient} updateClient={updateClient}/>
                </Grid>
                <Grid item xs={12} md={6} lg={12}>
                    <ClientTable deleteClient={deleteClient} updateClient={updateClient}/>
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

