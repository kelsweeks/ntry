import React from 'react'
import { Grid, Paper, Avatar, TextField } from '@material-ui/core'
import Home from './Home'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button'
import TestForm from '../TestForm'
// import AutorenewIcon from '@mui/icons-material/Autorenew'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

function CreateClientForm({ addClient }){
    const buttonstyle={padding :5, backgroundColor: '#05b7f1', width: 100, align: 'center', margin: "20px auto"}
    const paperstyle={padding :20, height:'80vh', width:500, margin:"20px auto"}
    const homebuttonstyle={padding :5, backgroundColor: '#05b7f1', margin: "10px"}


    const [formData, setFormData] = useState({
        name: '',
        age: '',
        date_of_birth: '',
        address: '',
        phone: '',
        email: '',
        medical_history: '',
    })
    const [errors, setErrors] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    function onSubmit(e) {
        e.preventDefault()

        fetch('/clients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(addClient)
            }else {
                res.json().then(data => setErrors((data.errors)))
            }
        })
    }
    // const [showButton, setShowButton] = useState(false)
    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')
    // const [date_of_birth, setDateOfBirth] = useState('')
    // const [address, setAddress] = useState('')
    // const [phone, setPhone] = useState('')
    // const [email, setEmail] = useState('')
    // const [medical_history, setMedicalHistory] = useState('')
    // const [updateErrors, setUpdateErrors] = useState('')

    // const updateClient = (updatedClient) => setClients(clientobj => {
    //     return clientobj.map(client => {
    //         if(client.id === updatedClient.id){
    //             return updatedClient
    //         }else {
    //             return client
    //         }
    //     })
    // })

    // const handleClientUpdate = (e) => {
    //     e.preventDefault()

    //     const clientInfo = {
    //         name: name,
    //         age: age,
    //         date_of_birth: date_of_birth,
    //         address: address,
    //         phone: phone,
    //         email: email,
    //         medical_history: medical_history
    //     }
    //     fetch(`/clients/${client.id}`, {
    //         method: 'PATCH',
    //         headers: { 'Content-Type': 'application/json' },
    //         body:JSON.stringify(clientInfo)
    //     })
    //     .then(res => {
    //         if(res.ok){
    //             res.json().then(updateClient)
    //             e.target.reset()
    //         }else {
    //             res.json().then(data => setUpdateErrors((data.errors)))
    //         }
    //     })
    // }

    // const clientData = (e) => {
    //     console.log(e.target)
    // }
    return (
        <div>
            {/* <Button component={Link} to="/" variant="contained" style={homebuttonstyle}>
                Home
            </Button> */}
            <Grid>
            {errors?errors.map(e => <div>{e}</div>):null}
                <Paper elevation={10} style={paperstyle} onSubmit={onSubmit}>
                    <h2 align='center'>Update Client</h2>
                <Grid container direction={"column"} spacing={2} >

                    <Grid item>
                        <TextField variant='outlined' label="name" value={formData.name} onChange={handleChange} fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="age" value={formData.age} onChange={handleChange} fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="date of birth" value={formData.date_of_birth} onChange={handleChange} fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="address" value={formData.address} onChange={handleChange} fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="phone" value={formData.phone} onChange={handleChange} fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="email" value={formData.email} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item >
                        <TextField variant='outlined' label="Add to medical history" value={formData.medical_history} onChange={handleChange} fullWidth />
                    </Grid>
                    
                </Grid>
                <Grid item >
                    <Button variant="contained" style={buttonstyle} type='submit' startIcon={<AddCircleOutlinedIcon />} fullWidth>Create</Button>
                </Grid>
                </Paper>
                {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
                <Paper>
                    <Grid>
                        <TestForm/>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

export default CreateClientForm