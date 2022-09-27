// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Menu from '@mui/icons-material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { Link } from 'react-router-dom'

// const pages = ['SignUp', 'Login'];

// export default function ButtonAppBar({ currentCaseManager, updateCaseManager}) {
//     const appbarstyle={backgroundColor: '#05b7f1'}
//     const loginbuttonstyle={backgroundColor: 'white'}

//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     return (
//     <Box sx={{ flexGrow: 1 }}>
//         <AppBar style={appbarstyle} position="static">
//             <Toolbar>
//             <IconButton
//                 size="large"
//                 edge="start"
//                 color="inherit"
//                 aria-label="menu"
//                 sx={{ mr: 2 }}
//             >
//             <MenuIcon />
//             </IconButton>
//             {/* <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'left',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                     display: { xs: 'block', md: 'none' },
//                 }}
//             >
//             {pages.map((page) => (
//                     <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">
//                         {currentCaseManager ? <Link style={{textDecoration: "none", color:"black"}} to={`/${page}`}>{page}</Link> : null }
//                     </Typography>
//                     </MenuItem>
//                 ))}   
//             </Menu> */}
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                 CURRENT
//             </Typography>
//             <Button style={loginbuttonstyle}>Login</Button>
//             </Toolbar>
//         </AppBar>
//         </Box>
//     );
// }