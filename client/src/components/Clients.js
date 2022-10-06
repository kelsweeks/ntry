import React from 'react'
import { useEffect, useState } from 'react'
// import {Link} from 'react-router-dom'
import ClientCard from './ClientCard'
// import ClientForm from './ClientForm'
import Button from '@mui/material/Button'
import { Grid } from '@material-ui/core'
import Home from './Home'


function Clients() {
    const [clients, setClients] = useState([])
    const [errors, setErrors] = useState(false)
    
    const buttonstyle={padding :5, backgroundColor: '#05b7f1', margin: "10px"}

    useEffect(() => {
        fetch('/clients')
        .then(res => {
            if(res.ok){
                res.json().then(setClients)
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [])

    const deleteClient = (id) => setClients(clients.filter(c => c.id !== id))

    const newClient = (NewClient) => {
        setClients(clients => [NewClient, ...clients])
    }

    const updateClient = (updatedClient) => setClients(clientobj => {
        return clientobj.map(client => {
            if(client.id === updatedClient.id){
                return updatedClient
            }else {
                return client
            }
        })
    })

    return (
        <div>
            <Grid container direction="row" spacing={4} justifyContent="space-evenly" align="center">
                <Grid item xs={3} sm={6} md={4}>
                    {clients.map(client => <ClientCard key={client.id} client={client} deleteClient={deleteClient} />)}
                </Grid>
            </Grid>

        </div>
    )
}

export default Clients

// updateClient={updateClient}