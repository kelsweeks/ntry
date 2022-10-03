import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { Grid, Paper, Avatar } from '@material-ui/core'
import {Link} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import DeleteIcon from '@mui/icons-material/Delete'
import AutorenewIcon from '@mui/icons-material/Autorenew'
// import UpdateClientForm from './ClientForm'

function ClientCard({caseManager, client, deleteClient, updateClient,}){
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
    
    const toggleButton = () => {
        setShowButton(!showButton)
    }

    // const updateClient = (updatedClient) => setClients(clientobj => {
    //     return clientobj.map(client => {
    //         if(client.id === updatedClient.id){
    //             return updatedClient
    //         }else {
    //             return client
    //         }
    //     })
    // })
    const params = useParams()
    function handleDelete(){
        fetch(`/clients/${client.id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            if(res.ok){
                deleteClient(id)
                navigate(`/dashboard`)
            }else {
                res.json().then(data => setErrors(data.errors))
                // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
        console.log("I am trying to delete")
        console.log(id)
    }

    const handleClientUpdate = (e) => {
        // console.log("I Clicked Update")
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
                navigate(`/dashboard`)
            }else {
                res.json().then(data => setUpdateErrors((data.errors)))
            }
        })
        console.log("I Clicked Update")
        console.log(clientInfo)
    }

    const clientData = (e) => {
        console.log(e.target)
    }
    const {id} = useParams()
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
            <Button variant="contained" style={buttonstyle} startIcon={<AutorenewIcon />} onClick={toggleButton} fullWidth >
                Update
            </Button>
            {/* <Button variant="contained" style={buttonstyle} fullWidth startIcon={<AutorenewIcon />} onClick={handleClientUpdate}>Update</Button> */}
        </ButtonGroup>
        {showButton ?                           
            <form onSubmit={handleClientUpdate}>
                <h1>Update A Client</h1>
                <input placeholder={client.name} onChange={(e) => setName(e.target.value)}></input> 
                <input placeholder={client.age} onChange={(e) => setAge(e.target.value)}></input>
                <input placeholder={client.date_of_birth} onChange={(e) => setDateOfBirth(e.target.value)}></input>
                <input placeholder={client.address} onChange={(e) => setAddress(e.target.value)}></input>
                <input placeholder={client.phone} onChange={(e) => setPhone(e.target.value)}></input>
                <input placeholder={client.email} onChange={(e) => setEmail(e.target.value)}></input>
                <input placeholder={client.medical_history} onChange={(e) => setMedicalHistory(e.target.value)}></input>
                <br/>
                <input type='submit' value='Update'></input>
            </form>
            : null}
        </Paper>
        </Grid>
    )
}

export default ClientCard

// updateClient={updateClient}