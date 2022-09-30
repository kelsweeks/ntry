import React, { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid'
// import { Paper, Grid, TextField } from '@material-ui/core'
import Button from '@mui/material/Button'
import TableActions from './TableActions'





function DataTable({deleteClient, updateClient}) {

    const paperstyle={padding : 20, height:'30vh', width: '75%', margin:"10px auto"}
    const [clients, setClients] = useState([])

    // const [tableData, setTableData] = useState([])
    // const [errors, setErrors] = useState(false)
    // const [updateErrors, setUpdateErrors] = useState('')
    const params = useParams()
    const navigate = useNavigate()
    

    // function handleDelete() {
    //     console.log("You Clicked Delete!")
    // }

    // const deleteClient = (id) => setClients(current.filter(client => client.id !== id))
    // const updateClient = (updatedClient) => setClients(current => {
    //     console.log(updatedClient)
    //     return current.map(client => {
    //         if(client.id === updatedClient.id){
    //             return updatedClient
    //         }else {
    //             return client
    //         }
    //     })
    // })

    useEffect(() => {
        fetch('/clients')
        .then((data) => data.json())
        .then((data) => setClients(data))
    }, [])

    const [deleteErrors, setDeleteErrors] = useState(false)
    const [updateErrors, setUpdateErrors] = useState('')

    function handleClickDelete({deleteClient, cellValues, rowId, }) {
        console.log(clients)
        console.log("I Clicked Delete!");
        
        // fetch(`/clients/${params.id}`,{
        //     method: 'DELETE',
        //     headers: {'Content-Type': 'application/json'}
        // })
        // .then(res => {
        //     if(res.ok){
        //         deleteClient(clients)
        //         navigate(`/dashboard`)
        //     }else {
        //         res.json().then(data => setDeleteErrors(data.errors))
        //         // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        //     }
        // })
        
    }
        
        

    const [updatedErrors, setUpdatedErrors] = useState('')
    function handleClickUpdate(event, cellValues, updatedClient, client) {
        console.log(clients);
        console.log("I Clicked Update")
        event.preventDefault()
        
        // fetch(`/clients/${client.id}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json' },
        //     body:JSON.stringify(cellValues)
        // })
        // .then(res => {
        //     if(res.ok){
        //         res.json().then(updateClient)
        //         event.target.reset()
        //     }else {
        //         res.json().then(data => setUpdatedErrors((data.errors)))
        //     }
        // })
    
    }
    
    const handleCellClick = (param, event) => {
        event.stopPropagation();
    }
    
    const buttonstyle={backgroundColor: '#05b7f1'}
    const [rowId, setRowId] = useState()
    
    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'name', headerName: 'NAME', width: 200, editable: true},
        {field: 'age', headerName: 'AGE', width: 125, editable: true},
        {field: 'date_of_birth', headerName: 'DOB', width: 125, editable: true},
        {field: 'phone', headerName: 'PHONE', width: 150, editable: true, sortable: false},
        {field: 'email', headerName: 'EMAIL',width: 150, editable: true, sortable: false},
        {field: 'address', headerName: 'ADDRESS',width: 150, editable: true, sortable: false},
        {field: 'medical_history', headerName: 'MEDICAL HISTORY', width: 600, editable: true, sortable: false},
        {
            field: 'Update', width: 150,
            renderCell: (cellValues) => {
                return (
                    <Button
                    variant="contained"
                    style={buttonstyle}
                    onClick={(event) => {
                        handleClickUpdate(event, cellValues);
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
                        handleClickDelete(event, cellValues);
                    }}
                >
                DELETE
                </Button>
            );
            }
        },
        // {
        //     field: 'actions',
        //     headerName: 'ACTIONS',
        //     type: 'actions',
        //     renderCell: params=> (
        //         <TableActions {...{params, rowId, setRowId}}/>
        //     ),
        // },
        // [rowId]
    ]

    return (
        <>
            <div elevation={10} style={{height: 500, width: '100%', paddingBottom: '20px'}}>
                <DataGrid
                    rows={clients}
                    rowHeight={80}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                    rowsPerPageOptions={[5, 10, 20]}
                    getRowId={(row) => row.id}
                    getRowSpacing={params => ({
                        top: params.isFirstVisible ? 0 : 5,
                        bottom: params.isLastVisible ? 0 : 5
                    })}
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