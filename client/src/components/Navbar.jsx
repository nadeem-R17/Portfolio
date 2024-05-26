import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSidebarOpen(open);
    };
    
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToTop = () => {window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })};
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#003366" }}>
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        {!isMobile && (
          <>
            <Button color="inherit" onClick={() => scrollToTop()}>Home</Button>
            <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
            <Button color="inherit" onClick={() => scrollToSection('projects')}>Projects</Button>
            <Button color="inherit" onClick={() => scrollToSection('skills')}>Skills</Button>
            <Button color="inherit" onClick={() => scrollToSection('contact')}>Contact</Button>
          </>
        )}
      </Toolbar>
      <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
    </AppBar>
  );
};

export default Navbar;
