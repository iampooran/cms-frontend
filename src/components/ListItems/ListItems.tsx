import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { Link } from 'react-router-dom';
import "./ListItems.scss"
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const ListItems = (
  <React.Fragment>
    <Link className="sidebarLink" to="/dashboard">
    <ListItemButton>    
      <ListItemIcon>      
        <DashboardIcon />        
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    </Link>
    <Link className="sidebarLink" to="/adduser">
    <ListItemButton>
      <ListItemIcon>
        <PersonAddAltIcon/>
      </ListItemIcon>
      <ListItemText primary="Add Admin" />
    </ListItemButton>
    </Link>
    <Link className="sidebarLink" to="/userlist">
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Admin List" />
    </ListItemButton>
    </Link>
    <Link className="sidebarLink" to="/profile">
    <ListItemButton>
      <ListItemIcon>
        <AccountBoxIcon  />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);