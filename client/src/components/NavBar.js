import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import WavesIcon from '@mui/icons-material/Waves';
import Home from './Home'
// import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
// import Logo from '../assets/Logo.png'
import Logo from '../assets/Logo.svg'
// import PersonIcon from '@mui/icons-material/Person'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = ['SignUp', 'Login'];
const settings = ['Dashboard', 'Logout'];

function ResponsiveAppBar({ currentCaseManager, updateCaseManager}) {
    const logostyle ={width: 100, height: 100} 
    // const paperstyle={padding :20, height:'40vh', width:300, margin:"20px auto"}
    // const buttonstyle={backgroundColor: "#05b7f1"}
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const navigate = useNavigate()

    const handleLogOut = () => {
        fetch('/logout',{
            method: "DELETE"
        })
        .then(res => {
            if(res.ok) {
                updateCaseManager("")
                navigate('/login')
            }
        })
    }

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const appbarstyle={backgroundColor: '#05b7f1'}
    return (
        <AppBar style={appbarstyle}position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            {/* <WavesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
                variant="h6"
                noWrap
                component="a"
                element={<Home/>}
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
            <img src={Logo} alt='Current Logo' style={logostyle}></img>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon style={{color: '#FF3C00'}}/>
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    backgroundColor: 'black'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                        {/* { !currentCaseManager ? <Link style={{textDecoration: "none", color:"black"}} to={`/${page}`}>{page}</Link> : null } */}
                        <Link style={{textDecoration: "none", color:"#FF3C00"}} to={`/${page}`}>{page}</Link>
                    </Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>


            {/* <WavesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                <img src={Logo} alt='Current Logo' style={logostyle}></img>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                <Link style={{textDecoration: "none", color:"white"}} to={`/${page}`}>{page}</Link>
                </Button>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                { !currentCaseManager? <Button onClick={handleLogOut}>Log Out</Button> : null}
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon style={{color: "#FFDD00"}} ></AccountCircleIcon>
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                        {currentCaseManager ? <Link style={{textDecoration: "none", color:"black"}}to={`/${setting}`}>{setting}</Link> : null }
                    </Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;

// import React from 'react';
// import {Link} from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <div>NavBar</div>
//   )
// }

// export default NavBar

// NavBar component will include
    // signup
    // Login button 
    
    /// MAYBE
    //About