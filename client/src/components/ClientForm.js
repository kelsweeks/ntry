import React from 'react'
import { Grid, Paper, Avatar, TextField } from '@material-ui/core'
import Home from './Home'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button'
import AutorenewIcon from '@mui/icons-material/Autorenew'

function ClientForm({client, deleteClient, updateClient}){
    const buttonstyle={padding :5, backgroundColor: '#05b7f1', width: 100, align: 'center', margin: "20px auto"}
    const paperstyle={padding :20, height:'80vh', width:500, margin:"20px auto"}
    const homebuttonstyle={padding :5, backgroundColor: '#05b7f1', margin: "10px"}

    const [errors, setErrors] = useState('')
    const [showButton, setShowButton] = useState(false)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [date_of_birth, setDateOfBirth] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [medical_history, setMedicalHistory] = useState('')
    const [updateErrors, setUpdateErrors] = useState('')

    // const updateClient = (updatedClient) => setClients(clientobj => {
    //     return clientobj.map(client => {
    //         if(client.id === updatedClient.id){
    //             return updatedClient
    //         }else {
    //             return client
    //         }
    //     })
    // })

    const handleClientUpdate = (e) => {
        e.preventDefault()

        const clientInfo = {
            name: name,
            age: age,
            date_of_birth: date_of_birth,
            address: address,
            phone: phone,
            email: email,
            medical_history: medical_history
        }
        fetch(`/clients/${client.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(clientInfo)
        })
        .then(res => {
            if(res.ok){
                res.json().then(updateClient)
                e.target.reset()
            }else {
                res.json().then(data => setUpdateErrors((data.errors)))
            }
        })
    }

    // const clientData = (e) => {
    //     console.log(e.target)
    // }
    return (
        <div>
            <Button component={Link} to="/" variant="contained" style={homebuttonstyle}>
                Home
            </Button>
            <Grid>
                <Paper elevation={10} style={paperstyle}>
                    <h2 align='center'>Update Client</h2>
                <Grid container direction={"column"} spacing={2} >

                    <Grid item>
                        <TextField variant='outlined' label="name" placeholder="update name" fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="age" placeholder="update age" fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="date of birth" placeholder="update birthday" fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="address" placeholder="update address" fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="phone" placeholder="update phone number" fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="email" placeholder="update email" fullWidth />
                    </Grid>
                    <Grid item >
                        <TextField variant='outlined' label="Add to medical history" placeholder="update medical history" fullWidth />
                    </Grid>
                    
                </Grid>
                <Grid item >
                    <Button variant="contained" style={buttonstyle} startIcon={<AutorenewIcon />} onClick={handleClientUpdate} fullWidth>Update</Button>
                </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

export default ClientForm