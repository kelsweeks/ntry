import React from 'react'
import { Grid, Paper, Avatar } from '@material-ui/core'
import PersonIcon from '@mui/icons-material/Person'
import { useState, useEffect } from 'react'


function CaseManager({caseManager}) {
    const avatarStyle={backgroundColor: '#05b7f1'}
    const paperstyle = {backgroundColor: '#EDEDED', margin: '10px auto', height: '50vh', padding: '10px', borderradius: '20px'}
    const [name, email] = caseManager
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


    return (
        <Paper style={paperstyle}>

            <Grid align='center'>
                <Avatar style={avatarStyle}><PersonIcon></PersonIcon></Avatar>
                <h2>{caseManager.name}</h2>
                <h4>{caseManager.email}</h4>
            </Grid>
        </Paper>
    )
}

export default CaseManager