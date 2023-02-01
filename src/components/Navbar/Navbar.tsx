import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Avatar from '@mui/material/Avatar';
import "./Navbar.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../utils/redux/reducer/authentication-slice';


export default function Navbar() {
  const dispatch = useDispatch()

  const handleLogOut = () =>{
    dispatch(logout())
  }
  
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
                <Link to="/profile">Profile</Link>
                <Link to="/changepassword">Change Password</Link>
                <Link to="/login" onClick={handleLogOut}>Log Out</Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}