import React, { useState, useEffect } from 'react'
import TestClientCard from './TestClientCard'
import Container from '@mui/material/Container';
// import { DataGrid } from '@material-ui/data-grid'

// The Client Container Component is the Table where clients are displayed
function ClientContainer({clients}) {
    return (
        <div>
            <Container>
                <h1>The Client Table</h1>
                {/* {clients.map(client => <TestClientCard  key={client.id} client={client}  />)} */}
                {clients.map(client => <TestClientCard key={client.id} client={client}  />)}
            </Container>
        </div>
    )
}

export default ClientContainer