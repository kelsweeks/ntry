import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Grid, Paper, Avatar } from '@material-ui/core'
// import AppContext from './App'
import TestForm from '../TestForm'
import PersonIcon from '@mui/icons-material/Person'


function CaseManagerCard() {
    const avatarStyle={backgroundColor: 'white', width: 100, height: 100}
    const paperstyle = {backgroundColor: '#D1E9FC', margin: '5px auto', height: '30vh', padding: '20px', borderradius: '20px', width: 300}
    const [caseManager, setCaseManager] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    // const [latestUpload, setLatestUpload] = useContext(AppContext)
    const [profileUpload, setUpload] = useState([])

    
    const params = useParams()
    const {id} = params
    useEffect(()=> {
        fetch(`/case_managers/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(caseManager => {
                    setCaseManager(caseManager)
                    // setLatestUpload(data.image_url)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
    },[])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    // console.log(caseManager)
    return (
        <Paper elevation={10} style={paperstyle}>

            <Grid align='left'>
                 {/* conditionally render image */}
                <Avatar style={avatarStyle} src={caseManager.image_path}></Avatar>
                <h2>{caseManager.name}</h2>
                <h4>{caseManager.email}</h4>
                
            {/* <TestForm/> */}
            
            </Grid>
        </Paper>
    )
}

export default CaseManagerCard

