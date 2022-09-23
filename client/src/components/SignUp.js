import React from 'react';
import { Grid, Paper, Avatar, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SignUp=() => {
    const paperstyle={padding :20, height:'45vh', width:300, margin:"20px auto"}
    const avatarStyle={backgroundColor: '#05b7f1'}
    const buttonstyle={backgroundColor: '#05b7f1'}
    return (
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid align= 'center'>
                    <Avatar style={avatarStyle}><LockOpenOutlinedIcon></LockOpenOutlinedIcon></Avatar>
                    <h2>Sign Up</h2>
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
                <Button variant="contained" style={buttonstyle} type='submit' fullWidth>Sign Up</Button>
            </Paper>
        </Grid>
    )
}

export default SignUp;