import React from 'react'
import { Grid, Paper, Avatar, TextField } from '@material-ui/core'
import Home from './Home'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button'
import TestForm from '../TestForm'
// import AutorenewIcon from '@mui/icons-material/Autorenew'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

function CreateClientForm({ newClient }){
    const buttonstyle={padding :5, backgroundColor: '#05b7f1', width: 100, align: 'center', margin: "20px auto"}
    const paperstyle={padding :20, height:'80vh', width:500, margin:"20px auto"}
    const homebuttonstyle={padding :5, backgroundColor: '#05b7f1', margin: "10px"}
    const [showButton, setShowButton] = useState(false)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [date_of_birth, setDateOfBirth] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [medical_history, setMedicalHistory] = useState('')
    const [updateErrors, setUpdateErrors] = useState('')


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

    // const handleChange = (e) => {
    //     const {name, value} = e.target
    //     setFormData({...formData, [name]: value})
    // }
    const submitData = (e) => {
        console.log("I Clicked Add")
        e.preventDefault()
            const client = {
                name: name,
                age: age,
                date_of_birth: date_of_birth,
                address: address,
                phone: phone,
                email: email,
                medical_history: medical_history
            }
            fetch('/clients', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(client)
            })
            .then(res => {
                if(res.ok) {
                    res.json().then(newClient => {
                        newClient(newClient)
                        e.target.reset()
                    })
                }else {
                    res.json().then(json => setUpdateErrors(Object.entries(json.errors)))
                }
            })
    }
    return (
        <div>
            <Grid>
            {errors?errors.map(e => <div>{e}</div>):null}
                <Paper elevation={10} style={paperstyle}>
                    <h2 align='center'>Add New Client</h2>
                <form onSubmit={submitData}>
                <Grid container direction={"column"} spacing={2} >

                    <Grid item>
                        <TextField variant='outlined' label="Name" value={formData.name} onChange={(e) => setName(e.target.value)} fullWidth />
                    </Grid>
                    {/* <Grid item>
                        <TextField variant='outlined' label="Name" value={formData.name} fullWidth>
                            <input value={formData.name} onChange={(e) => setName(e.target.value)}></input>
                        </TextField>
                    </Grid> */}

                    <Grid item >
                        <TextField variant='outlined' label="Age" value={formData.age} onChange={(e) => setAge(e.target.value)} fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="Date of Birth" value={formData.date_of_birth} onChange={(e) => setDateOfBirth(e.target.value)} fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="Address" value={formData.address} onChange={(e) => setAddress(e.target.value)} fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="Phone" value={formData.phone} onChange={(e) => setPhone(e.target.value)} fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="Email" value={formData.email} onChange={(e) => setEmail(e.target.value)} fullWidth />
                    </Grid>

                    <Grid item >
                        <TextField variant='outlined' label="Medical history" value={formData.medical_history} onChange={(e) => setMedicalHistory(e.target.value)} fullWidth />
                    </Grid>

                    <Grid item >
                        <Button variant="contained" style={buttonstyle} type='submit' startIcon={<AddCircleOutlinedIcon />} fullWidth>Client</Button>
                    </Grid>
                </Grid>
                </form>
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