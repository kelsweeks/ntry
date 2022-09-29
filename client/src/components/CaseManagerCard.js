import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Grid, Paper, Avatar } from '@material-ui/core'
import PersonIcon from '@mui/icons-material/Person'
// import { useState, useEffect } from 'react'


function CaseManagerCard() {
    const avatarStyle={backgroundColor: '#05b7f1'}
    const paperstyle = {backgroundColor: '#D1E9FC', margin: '10px auto', height: '20vh', padding: '10px', borderradius: '20px', width: 400}
    
    // const [caseManager, setCaseManager] = useState('')
    // const [errors,setErrors]= useState(false)
    // const {id} = useParams()
    
    // useEffect(() => {
    //     fetch(`/case_managers/${id}`)
    //     .then(res => {
    //         if(res.ok){
    //             res.json().then(setCaseManager)
    //         }else {
    //             res.json().then(data => setErrors(data.error))
    //         }
    //     })
    // })
    
    return (
        <Paper elevation={10} style={paperstyle}>

            <Grid align='center'>
                <Avatar style={avatarStyle}><PersonIcon></PersonIcon></Avatar>
                <h2>Case Manager Name (logged in)</h2>
                <h4>Email</h4>
            </Grid>
        </Paper>
    )
}

export default CaseManagerCard

// const [name, setName] = useState('')
// const [email, setEmail] = useState('')

// const [manager, setManager] = useState()
// const [errors, setErrors] = useState(false)

// const params = useParams()
// const {id} = params
// useEffect(()=>{
//     fetch(`/case_managers/${caseManager.id}`)
//     .then(res => {
//         if(res.ok){
//             res.json().then(manager => {
//                 setManager(manager)
//             })
//         }else {
//             res.json().then(data => setErrors(data.error))
//         }
//     })
// },[])

// if(errors) return <h1>{errors}</h1>
