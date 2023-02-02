import * as React from 'react';
import {FC} from 'react'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'; 
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ListItems } from '../../components/ListItems/ListItems';
import { logout } from '../../utils/redux/reducer/authentication-slice';
import { useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import "./Navbar.scss"
import { mdTheme, AppBar, Drawer } from '.';




const Navbar: FC<{ Component: FC }> = ({ Component }) => {
  const dispatch = useDispatch()

  const handleLogOut = () =>{
    dispatch(logout())
  }
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
  <>
  <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
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
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {ListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Component/>
        </Box>
      </Box>
    </ThemeProvider>
  </>)
}

export default Navbar