import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

const Sidebar = ({ open, toggleDrawer }) => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    toggleDrawer(false)();
  };

  const scrollToTop = () => {window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })};

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{ width: 'auto' }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem button onClick={() => scrollToTop()}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection('about')}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection('projects')}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection('skills')}>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection('contact')}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
