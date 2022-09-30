import React from 'react'
import  { Link, useParams, useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { CardContent } from '@mui/material';


// Client Detail provides the client information for the Client Card

function ClientDetail({deleteClient}) {
    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const params = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
    //GET to '/productions/:id'
    fetch(`/clients/${params.id}`)
    .then(res => { 
        if(res.ok){
        console.log('okay')
        res.json().then(data => {
            setClient(data)
            setLoading(false)
        })
        } else {
        console.log('error')
        res.json().then(data => setErrors(data.error))
        }
    })
    },[])

    function handleDelete(){
        //DELETE to `/clients/${params.id}`
        fetch(`/clients/${params.id}`,{
            method:'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            if(res.ok){
                deleteClient(id)
                navigate('/dashboard')
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
    }   

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    const {id, name, age, date_of_birth, address, phone, email, medical_history} = client

    return (
        <CardContent>
            <h1>{name}</h1>
            <div className='wrapper'>
                <div>
                    <h3>Age:</h3>
                        <p>{age}</p>
                    <h3>Date Of Birth:</h3>
                        <p>{date_of_birth}</p>
                    <h3>Address:</h3>
                        <p>{address}</p>
                    <h3>Phone:</h3>
                        <p>{phone}</p>
                    <h3>Email:</h3>
                        <p>{email}</p>
                    <h3>Medical History:</h3>
                        <p>{medical_history}</p>
                </div>
            </div>
            <button><Link to={`/clients/${id}/edit`}>Edit Client</Link></button>
            <button onClick={handleDelete}>Delete Client</button>
        </CardContent>
    )
}

export default ClientDetail