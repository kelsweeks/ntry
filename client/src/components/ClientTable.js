import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Paper, Grid, TextField } from '@material-ui/core'
import Button from '@mui/material/Button'

const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
}
const handleCellClick = (param, event) => {
    event.stopPropagation();
}

const buttonstyle={backgroundColor: '#05b7f1'}

const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'name', headerName: 'NAME', width: 200, editable: true},
    {field: 'age', headerName: 'AGE', width: 125, editable: true},
    {field: 'date_of_birth', headerName: 'DOB', width: 125, editable: true},
    {field: 'phone', headerName: 'PHONE', width: 150, editable: true},
    {field: 'email', headerName: 'EMAIL',width: 150, editable: true},
    {field: 'address', headerName: 'ADDRESS',width: 150, editable: true},
    {field: 'medical_history', headerName: 'MEDICAL HISTORY', width: 600, editable: true},
    {
        field: 'Update', width: 150,
        renderCell: (cellValues) => {
            return (
                <Button
                variant="contained"
                style={buttonstyle}
                onClick={(event) => {
                    handleClick(event, cellValues);
                }}
            >
            UPDATE
            </Button>
        );
        }
    },
    {
        field: 'Delete',valign: 'center', width: 200,
        renderCell: (cellValues) => {
            return (
                <Button
                variant="contained"
                style={buttonstyle}
                onClick={(event) => {
                    handleClick(event, cellValues);
                }}
            >
            DELETE
            </Button>
        );
        }
    }
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
        <>
            <div elevation={10} style={{height: 500, width: '100%', paddingBottom: '20px'}}>
                <DataGrid
                    rows={tableData}
                    rowHeight={80}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                    rowsPerPageOptions={[5, 10, 20]}
                    onCellClick={handleCellClick}
                />
            </div>
        </>
        
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