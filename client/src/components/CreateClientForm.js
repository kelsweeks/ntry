import React from 'react'
import { Grid, Paper, Avatar, TextField, Form } from '@material-ui/core'
import Home from './Home'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button'
import TestForm from '../TestForm'
// import AutorenewIcon from '@mui/icons-material/Autorenew'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

function CreateClientForm({ addClient }){
    const buttonstyle={padding :5, backgroundColor: '#05b7f1', width: 100, align: 'center', margin: "20px auto"}
    const paperstyle={padding : '20px', height:'80vh', width:500, margin:'5px auto'}
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
    const navigate = useNavigate()


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
        const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    }
    function submitData(e) {
        console.log("I Clicked Add")
        e.preventDefault()
            // const client = {
            //     name: name,
            //     age: age,
            //     date_of_birth: date_of_birth,
            //     address: address,
            //     phone: phone,
            //     email: email,
            //     medical_history: medical_history
            // }
            fetch('/clients', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...formData})
            })
            .then(res => {
                if(res.ok) {
                    res.json().then(addClient)
                    navigate('/clients')
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
                    <Grid container align= 'center' direction={"column"} spacing={1}>
                    <form onSubmit={submitData}>
                        <h2 align='center'>Add New Client</h2>
                        <Grid item align='center' style={{padding: 10}}>
                            <TextField required name="name" variant='outlined' label="Name" sx={{margin: 3}} value={formData.name} onChange={handleChange} fullWidth />
                        </Grid>

                        <Grid item align='center' style={{padding: 10}}>
                            <TextField required name="age" variant='outlined' label="Age" sx={{margin: 3}} value={formData.age} onChange={handleChange} fullWidth />
                        </Grid>

                        <Grid item align='center' style={{padding: 10}}>
                            <TextField required name="date_of_birth" variant='outlined' label="Date of Birth" sx={{margin: 3}} value={formData.date_of_birth} onChange={handleChange} fullWidth />
                        </Grid>

                        <Grid item align='center' style={{padding: 10}}>
                            <TextField name="address" variant='outlined' label="Address" sx={{margin: 3}} value={formData.address} onChange={handleChange} fullWidth />
                        </Grid>

                        <Grid item align='center' style={{padding: 10}}>
                            <TextField name="phone" type="tel" variant='outlined' label="Phone" sx={{margin: 3}} value={formData.phone} onChange={handleChange} fullWidth />
                        </Grid>

                        <Grid item align='center' style={{padding: 10}}>
                            <TextField name="email" variant='outlined' label="Email" sx={{margin: 3}} value={formData.email} onChange={handleChange} fullWidth />
                        </Grid>

                        <Grid item align='center' style={{padding: 10}}>
                            <TextField name="medical_history" variant='outlined' label="Medical history" sx={{margin: 3}} value={formData.medical_history} onChange={handleChange} fullWidth />
                        </Grid>

                        <Grid item align='center' style={{padding: 10}}>
                            <Button variant="contained" style={buttonstyle} type='submit'sx={{margin: 3}} startIcon={<AddCircleOutlinedIcon />} fullWidth>Client</Button>
                        </Grid>
                    </form>
                    </Grid>


                </Paper>
                {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
                {/* <Paper>
                    <Grid>
                        <TestForm/>
                    </Grid>
                </Paper> */}
            </Grid>
        </div>
    )
}

export default CreateClientForm