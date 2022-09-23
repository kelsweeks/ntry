import React from 'react';
import { Grid, Paper, Avatar, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useNavigate} from 'react-router-dom'
import {useState} from "react"

const Login=({setisAuthenticated}) => {
    const paperstyle={padding :20, height:'40vh', width:300, margin:"20px auto"}
    const avatarStyle={backgroundColor: '#05b7f1'}
    const buttonstyle={backgroundColor: '#05b7f1'}

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const[refresh, setRefresh] = useState(false)
    // const navigate = useNavigate()
    // const [errors, setErrors] = useState([])

    // const onSubmit =(e) => {
    //     e.preventDefault()
    //     const user ={
    //         name,
    //         email,
    //         password
    //     }
    //     fetch(`/login`,{
    //         method: 'POST',
    //         headers:{'Content-Type': 'application/json'},
    //         body: JSON.stringify(user)
    //     })
    //     .then(res => {
    //         if(res.ok){
    //             res.json().then(user => {
    //                 setIsAuthenticated(true)
    //                 navigate.push(`/dashboard`)
    //             })
    //         }else {
    //             res.json().then(json => setErrors(json.errors))
    //         }
    //     })
    // }
    return (
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid align= 'center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon></LockOutlinedIcon></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField label="name" placeholder="Enter your name" fullWidth required/>
                <TextField label="email" placeholder="Enter your email" fullWidth required/>
                <TextField label="password" placeholder="Enter your password" type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name= "checkedB"
                        color="primary"
                />
                }
                label="Remember me"
                />
                <Button variant="contained" style={buttonstyle} type='submit' fullWidth>Login</Button>
            </Paper>
            {/* {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null} */}
        </Grid>
    )
}

export default Login;

// onChange={(e) => setName(e.target.value)}
// onChange={(e) => setEmail(e.target.value)}
// onChange={(e) => setPassword(e.target.value)}