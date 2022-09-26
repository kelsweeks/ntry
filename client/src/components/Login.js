import React from 'react';
import { Grid, Paper, Avatar, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import {useNavigate} from 'react-router-dom'
import {useState} from "react"

const Login=({updateCaseManager}) => {
    const paperstyle={padding :20, height:'40vh', width:300, margin:"20px auto"}
    const avatarStyle={backgroundColor: '#05b7f1'}
    const buttonstyle={backgroundColor: '#05b7f1'}

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const { name, email, password} = formData

    function onSubmit(e) {
        e.preventDefault()
        const caseManager = {
            name,
            email,
            password
        }
        fetch(`/login`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify(caseManager)
        })
        .then(res => {
            if(res.ok){
                res.json().then(caseManager => {
                    updateCaseManager(caseManager)
                    navigate.push(`/case_managers/${caseManager.id}`)
                })
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
    
    return (
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid align= 'center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon></LockOutlinedIcon></Avatar>
                    <h2>Login</h2>
                </Grid>
                <form onSubmit={onSubmit}>
                    <TextField variant='outlined' label="name" placeholder="Enter your name" fullWidth required name='name' value={name} onChange={handleChange}/>
                    {/* <input type='text' name='name' value={name} onChange={handleChange}/> */}
                    {/* <TextField label="email" placeholder="Enter your email" fullWidth required/>
                    <input type='text' name='email' value={email} onChange={handleChange} /> */}
                    <TextField variant='outlined' label="password" placeholder="Enter your password" type='password' fullWidth required name='password' value={password} onChange={handleChange}/>
                    {/* <input type='password' name='password' value={password} onChange={handleChange} /> */}
                    {/* <FormControlLabel
                        control={
                        <Checkbox
                            name= "checkedB"
                            color="primary"
                        />
                        }
                        label="Remember me"
                        /> */}
                    <Button variant="contained" style={buttonstyle} type='submit' fullWidth>Login</Button>
                </form>
                {errors? <div>{errors}</div>:null}
            </Paper>
            {/* {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null} */}
        </Grid>
    )
}

export default Login;

// onChange={(e) => setName(e.target.value)}
// onChange={(e) => setEmail(e.target.value)}
// onChange={(e) => setPassword(e.target.value)}