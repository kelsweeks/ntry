import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Grid, Paper, Avatar } from '@material-ui/core'
import PersonIcon from '@mui/icons-material/Person'
// import { useState, useEffect } from 'react'


function CaseManagerCard() {
    const avatarStyle={backgroundColor: '#05b7f1'}
    const paperstyle = {backgroundColor: '#D1E9FC', margin: '5px auto', height: '20vh', padding: '20px', borderradius: '20px', width: 300}
    const [caseManager, setCaseManager] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    
    const params = useParams()
    const {id} = params
    useEffect(()=> {
        fetch(`/case_managers/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(caseManager => {
                    setCaseManager(caseManager)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
    },[])

    // function handleUpdate() {
    //     fetch(`/case_managers/${case_managers.id}`, {
    //         method: 'PATCH',
    //         headers: { 'Content-Type': 'application/json' },
    //         body:JSON.stringify(cellValues)
    //     })
    //     .then(res => {
    //         if(res.ok){
    //             res.json().then(updateClient)
    //             event.target.reset()
    //         }else {
    //             res.json().then(data => setUpdatedErrors((data.errors)))
    //         }
    //     })
    
    // }

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    // console.log(caseManager)
    return (
        <Paper elevation={10} style={paperstyle}>

            <Grid align='left'>
                <Avatar style={avatarStyle}><PersonIcon></PersonIcon></Avatar>
                <h2>{caseManager.name}</h2>
                <h4>{caseManager.email}</h4>
            </Grid>
        </Paper>
        // <Paper elevation={10} style={paperstyle}>
        //     <h1>{caseManager.name}</h1>
        //     <h1>{caseManager.email}</h1>
        //     <h3>Appointments</h3>
        //     <ul>
        //         {caseManager.appointments.map(appointment => (
        //         <li>
        //             <h2>{appointment.client.name}</h2>
        //             <p> {appointment.date}</p>
        //         </li>
        //         ))}
        //     </ul>
        // </Paper>
    )
}
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
    
    // return (
    //     <Paper elevation={10} style={paperstyle}>

    //         <Grid align='center'>
    //             <Avatar style={avatarStyle}><PersonIcon></PersonIcon></Avatar>
    //             <h2>{caseManager.name}</h2>
    //             <h4>{caseManager.email}</h4>
    //         </Grid>
    //     </Paper>
    // )

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
