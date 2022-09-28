import React from 'react';
import { useState, useEffect} from 'react';
import { Paper, Grid, TextField } from '@material-ui/core'
import Button from '@mui/material/Button';

function TestForm() {
    const [name, setName] = useState('')
    const [note, setNote] = useState('')
    const [upload, setUpload] = useState(null)
    const [files, setFiles] = useState([])
    const [case_managers, setCaseManagers] = useState([])
    
    const paperstyle={padding :20, height:'30vh', width:500, margin:"20px auto"}
    const buttonstyle={backgroundColor: '#05b7f1'}
    
    useEffect(() => {
        fetch('/case_managers')
        .then(res => res.json())
        .then(data => setCaseManagers(data))
    }, [])

    useEffect(() => {
        fetch('/files')
        .then(res => res.json())
        .then(data => setFiles(data))
    }, [])

    function handleUploadSubmit(e){
        e.preventDefault()

        const formData = new FormData()
        formData.append('case_manager_id', case_managers[0].id)
        formData.append('name', name)
        formData.append('note', note)
        formData.append('upload', upload)

        fetch('/files', {
            method: 'POST',
            body: formData
        })
    }

    return (
        <>
        <Grid>
            <Paper elevation={10} style={paperstyle} onSubmit={handleUploadSubmit}>
                <h1 align='center'> Upload a File </h1>
            <Grid container direction={"column"} spacing={2}>
                <Grid item align='center'>
                    <TextField variant='outlined' label="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </Grid>
                <Grid item align='center'>
                    <TextField variant='outlined' label="note" type="text" value={note} onChange={(e) => setNote(e.target.value)}/>
                </Grid>
                <Grid item align='center'>
                    <input variant='outlined' type="file"  accepts=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" onChange={(e) => setUpload(e.target.files[0])}/>
                </Grid>
                <Grid item align='center'>
                    <Button variant='contained'style={buttonstyle}type='submit'>Submit</Button>
                </Grid>
            </Grid>
            </Paper>
        </Grid>
            {/* <form onSubmit={handleUploadSubmit}>
                <h2>name</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <h2>note</h2>
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)}/>
                <h2>upload file</h2>
                <input type="file" accepts=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" onChange={(e) => setUpload(e.target.files[0])}/>
                <input type='submit'/>
            </form> */}
        </>
    )
}
export default TestForm;