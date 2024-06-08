import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, TableChart, BarChart, CalendarToday, ViewKanban } from '@mui/icons-material';
import './Sidebar.css';

const Sidebar = () => (
  <Drawer variant="permanent" className="sidebar">
    <List>
      <ListItem button component={Link} to="/" className="sidebar-item">
        <ListItemIcon><Dashboard className="sidebar-icon" /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/tables" className="sidebar-item">
        <ListItemIcon><TableChart className="sidebar-icon" /></ListItemIcon>
        <ListItemText primary="Tables" />
      </ListItem>
      <ListItem button component={Link} to="/charts" className="sidebar-item">
        <ListItemIcon><BarChart className="sidebar-icon" /></ListItemIcon>
        <ListItemText primary="Charts" />
      </ListItem>
      <ListItem button component={Link} to="/calendar" className="sidebar-item">
        <ListItemIcon><CalendarToday className="sidebar-icon" /></ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
      <ListItem button component={Link} to="/kanban" className="sidebar-item">
        <ListItemIcon><ViewKanban className="sidebar-icon" /></ListItemIcon>
        <ListItemText primary="Kanban Board" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
