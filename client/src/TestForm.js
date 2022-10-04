import React, { useContext } from 'react';
import { useState, useEffect} from 'react';
import { Paper, Grid, TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import AppContext from "./App"
// import axios from 'axios'

function TestForm() {
    const [name, setName] = useState('')
    const [note, setNote] = useState('')
    const [upload, setUpload] = useState(null)
    const [files, setFiles] = useState([])
    const [caseManagers, setCaseManagers] = useState([])
    // const [latestUpload, setLatestUpload] = useContext(AppContext)
    
    const paperstyle={padding : '20px', height:'40vh', width:300, margin:"5px auto"}
    const buttonstyle={backgroundColor: '#05b7f1'}
    
    useEffect(() => {
        fetch(`/case_managers`)
        .then(res => res.json())
        .then(data => setCaseManagers(data))
    }, [])

    function handleFileSubmit(e){
        e.preventDefault()
        const data = new FormData()
        data.append('name', name)
        data.append('note', note)
        data.append('upload', upload)
        // data.append("caseManager[upload]", e.target.upload.file[0])

        fetch('/files', {
            method: 'POST',
            body: data
        })
        // .then(res => res.json())
        // .then(data => {
        //     setLatestUpload(data.image_url)
        // })
        console.log('I Clicked Upload + and UPLOADED AN IMAGE')
    }

    return (
        <>
        <Grid>
            <Paper elevation={10} style={paperstyle} >
                <h1 align='center'> Add a Picture </h1>
            <Grid container direction={"column"} spacing={2}>
                <Grid item align='center'>
                    <TextField variant='outlined' label="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </Grid>
                <Grid item align='center'>
                    <TextField variant='outlined' label="note" type="text" value={note} onChange={(e) => setNote(e.target.value)}/>
                </Grid>
                <Grid item align='center'>
                    <input variant='outlined' type="file" name="upload" accepts="image/*" multiple={false} onChange={(e) => setUpload(e.target.files[0])} />
                </Grid>
                <Grid item align='center'>
                    {/* <img id="photo-preview" src={image_path}></img> */}
                    <Button variant='contained' style={buttonstyle} type='submit' onClick={handleFileSubmit}>Upload</Button>
                </Grid>
            </Grid>
            </Paper>
        </Grid>
        </>
    )
}
export default TestForm;