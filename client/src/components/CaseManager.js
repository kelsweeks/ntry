import React from 'react'
import { Grid, Paper, Avatar } from '@material-ui/core'
import PersonIcon from '@mui/icons-material/Person'

function CaseManager({caseManager}) {
    const avatarStyle={backgroundColor: '#05b7f1'}
    const paperstyle = {backgroundColor: '#EDEDED', margin: '10px auto', height: '50vh', padding: '10px', borderradius: '20px'}
    
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