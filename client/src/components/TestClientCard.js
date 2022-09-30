import React from 'react'
import { Card } from '@mui/material';
import {Link} from 'react-router-dom'
// import ClientDetail from './ClientDetail'

// Client Card displays the Client information

function TestClientCard({client}) {
    const {id, name, age, date_of_birth, address, phone, email, medical_history} = client
    console.log(client)
    return (
        <Card>
            <div>
                <Link to={`/productions/${id}`}> <h2>{name}</h2></Link>
                <p>{age}</p>
                <p>{date_of_birth}</p>
                <p>{address}</p>
                <p>{phone}</p>
                <p>{email}</p>
                <p>{medical_history}</p>
            </div>
        </Card>
    )
}

export default TestClientCard