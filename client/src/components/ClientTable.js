import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Paper, Grid, TextField } from '@material-ui/core'

const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'name', headerName: 'NAME', width: 200, editable: true},
    {field: 'age', headerName: 'AGE', width: 125, editable: true},
    {field: 'date_of_birth', headerName: 'DOB', width: 125, editable: true},
    {field: 'phone', headerName: 'PHONE', width: 150, editable: true},
    {field: 'email', headerName: 'EMAIL',width: 150, editable: true},
    {field: 'address', headerName: 'ADDRESS',width: 150, editable: true},
    {field: 'medical_history', headerName: 'MEDICAL HISTORY', width: 600, editable: true}
]

const DataTable = () => {
    const paperstyle={padding : 20, height:'30vh', width: '75%', margin:"10px auto"}

    const [tableData, setTableData] = useState([])
    const [errors, setErrors] = useState(false)


    useEffect(() => {
        fetch('/clients')
        .then((data) => data.json())
        .then((data) => setTableData(data))
    }, [])

    return (

            <div elevation={10} style={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={tableData}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                    rowsPerPageOptions={[5, 10, 20]}
                />
            </div>
        
    )
}

export default DataTable

// TODO: Columns in Data Table should include:
    // ID 
    // Name
    // Age
    // Date of Birth
    // Address
    // Phone
    // Email
    // Medical History

    // Update Client
    // Delete Client