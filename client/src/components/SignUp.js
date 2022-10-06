import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Grid, Paper, Avatar, TextField} from '@material-ui/core';
import Button from '@mui/material/Button';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

function SignUp({ setCurrentCaseManager }) {
    const paperstyle={padding :20, height:'50vh', width:350, margin:"100px auto"}
    const avatarStyle={backgroundColor: '#05b7f1'}
    const buttonstyle={backgroundColor: '#05b7f1'}

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    // const { name, email, password} = formData

    
    function onSubmit(e) {
        e.preventDefault()
        // const caseManager = {
        //         name,
        //         email,
        //         password
        //     }
            
            fetch('/signup', {
                method: "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            }).then((res) => {
                if(res.ok) {
                    res.json().then(caseManager => {
                        setCurrentCaseManager(caseManager)
                        navigate(`/dashboard`)
                    })
                }else {
                    res.json().then(json => setErrors(Object.entries(json.errors)))
                }
            })
        }
        
        const handleChange = (e) => {
            const { name, value } = e.target
            setFormData({...formData, [name]: value})
        }
        
        return (
            <Grid>
            <Paper elevation={10} style={paperstyle} onSubmit={onSubmit}>
                <Grid container direction={"column"} spacing={2}>
                    <form >
                        <Grid align= 'center' style={{padding: 10}}>
                            <Avatar style={avatarStyle}><LockOpenOutlinedIcon></LockOpenOutlinedIcon></Avatar>
                            <h2>Sign Up</h2>
                        </Grid>
                        <Grid item align='center' style={{padding: 10}}>
                            <TextField  variant='outlined' label="name" placeholder="Enter your name" fullWidth required name='name' value={formData.name} onChange={handleChange}/>
                        </Grid>

                        <Grid item align='center' style={{padding: 10}}>
                            <TextField variant='outlined' label="email" placeholder="Enter your email" fullWidth required name='email' value={formData.email} onChange={handleChange}/>
                        </Grid>

                        <Grid item align='center' style={{padding: 10}}>
                            <TextField variant='outlined' label="password" placeholder="Enter your password" type='password' fullWidth required name='password' value={formData.password} onChange={handleChange}/>
                        </Grid>

                        <Grid item align='center' style={{padding: 10}}>
                            <Button variant="contained" style={buttonstyle} type='submit' fullWidth>Sign Up</Button>
                        </Grid>

                    </form>
                </Grid>

                {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
            </Paper>
        </Grid>
    )
}

export default SignUp;