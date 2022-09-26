import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Grid, Paper, Avatar } from '@material-ui/core'
import {Link} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import DeleteIcon from '@mui/icons-material/Delete'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import ClientForm from './ClientForm'

function ClientCard({client, deleteClient, updateClient,}){
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

    const avatarStyle={backgroundColor: '#05b7f1'}
    const paperstyle={padding :20, height:'50vh', width:300, margin:"20px auto", backgroundColor: '#EDEDED'}
    const buttonstyle={padding :5, backgroundColor: '#05b7f1', margin: "10px", justify: 'center'}

    const navigate = useNavigate()

    // const updateClient = (updatedClient) => setClients(clientobj => {
    //     return clientobj.map(client => {
    //         if(client.id === updatedClient.id){
    //             return updatedClient
    //         }else {
    //             return client
    //         }
    //     })
    // })

    function handleDelete(){
        fetch('/clients/${client.id}',{
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok){
                deleteClient(client.id)
            }else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }

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

    // Add Link to the update form to update button 
    return (
        <Grid>
        <Paper variant="outlined" elevation={20} style={paperstyle}>
            <Grid align= 'center'>
                    <Avatar style={avatarStyle}><PersonIcon></PersonIcon></Avatar>
                    <h2>{client.name}</h2>
            </Grid>
            <h5>Age: {client.age}</h5>
            <h5>Date Of Birth: {client.date_of_birth}</h5>
            <h5>Address: {client.address}</h5>
            <h5>Phone: {client.phone}</h5>
            <h5>Email: {client.email}</h5>
            <h5> Brief Medical History:</h5>
            <a>{client.medical_history}</a>
        <ButtonGroup container='true'>
            <Button variant="contained" style={buttonstyle} startIcon={<DeleteIcon />} onClick={handleDelete} fullWidth>
                Delete
            </Button>
            <Button component={Link} to="/update" variant="contained" style={buttonstyle} fullWidth startIcon={<AutorenewIcon />} >
                Update
            </Button>
            {/* <Button variant="contained" style={buttonstyle} fullWidth startIcon={<AutorenewIcon />} onClick={handleClientUpdate}>Update</Button> */}
        </ButtonGroup>
        </Paper>
        </Grid>
    )
}

export default ClientCard

// updateClient={updateClient}