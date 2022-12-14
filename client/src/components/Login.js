import React from 'react';
import { Grid, Paper, Avatar, TextField, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import {useNavigate} from 'react-router-dom'
import {useState} from "react"
import {Link} from 'react-router-dom';

function Login({currentCaseManager, setCurrentCaseManager }) {
    const paperstyle={padding :20, height:'50vh', width:350, margin:"100px auto"}
    const avatarStyle={backgroundColor: '#05b7f1'}
    const buttonstyle={backgroundColor: '#05b7f1'}

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    // const { name, password} = formData

    function onSubmit(e) {
        e.preventDefault()
        // const formData = {
        //     name,
        //     password
        // }
        fetch(`/login`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(caseManager => {
                    setCurrentCaseManager(caseManager)
                    navigate(`/dashboard`)
                })
            }else {
                res.json().then(json => {
                    setErrors(json.errors)
                    console.log(json)
                }
                )
            }
        })
        
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
    // if (currentCaseManager) {
    //     navigate(`/dashboard`)
    // }
    return (
        <Grid>
            <Paper elevation={10} style={paperstyle} onSubmit={onSubmit}>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item align= 'center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon></LockOutlinedIcon></Avatar>
                        <h2>Login</h2>
                    </Grid>
                    <form >
                        <Grid item align='center' style={{padding: 10}}>
                            <TextField variant='outlined' label="name" placeholder="Enter your name" fullWidth required name='name' value={formData.name} onChange={handleChange}/>
                        </Grid>
                        <Grid item align='center' style={{padding: 10}}>
                            <TextField variant='outlined' label="password" placeholder="Enter your password" type='password' fullWidth required name='password' value={formData.password} onChange={handleChange}/>
                        </Grid>
                        <Grid item align='center' style={{padding: 10}}>
                            <Button variant="contained" style={buttonstyle} type='submit' fullWidth>Login</Button>
                        </Grid>
                    </form>
                    {errors? <div>{errors}</div>:null}
                    <Typography align='center'> Do you have an account ?
                        <Link style={{textDecoration: "none", color:"#05b7f1"}}to="/signup" >
                            Sign Up 
                        </Link>
                    </Typography>
                </Grid>

            </Paper>
            {/* {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null} */}
        </Grid>
    )
}

export default Login;

// onChange={(e) => setName(e.target.value)}
// onChange={(e) => setEmail(e.target.value)}
// onChange={(e) => setPassword(e.target.value)}