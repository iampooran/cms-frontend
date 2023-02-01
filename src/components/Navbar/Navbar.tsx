import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from "@material-ui/icons/Menu";
//import MenuIcon from "@mui/material/MenuItem";
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Avatar from '@mui/material/Avatar';
import "./Navbar.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
            <ToggleButton value="justify" aria-label="justified"    sx={{color: 'white'}}>
                <FormatAlignJustifyIcon />
            </ToggleButton>
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SuperAdmin Name
          </Typography>
          <Typography variant="body1" component="div" sx={{ flexGrow: 3 }}>
            Super Admin Information
          </Typography>
          <div className="dropdown">
          <Avatar sx={{ mr: 2, bgcolor: 'white'}} className="profileIcon" >
            
            <AccountCircleIcon sx={{ color: '#1976D2' }} className="profileIcon2" fontSize="large"/>
            
          </Avatar>
          <div className="dropdown-content">
                <a href="#">Profile</a>
                <a href="#">Change Password</a>
                <a href="#">Log Out</a>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}