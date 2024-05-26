import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Navbar";
import { Container, Box, Typography } from "@mui/material";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Contact from './Contact';
import Footer from './Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: "#003366",
      // main: "#068466",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#e0e0e0",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box borderBottom={2} borderColor="#003366">
  <Hero />
</Box>
      <Container>
        <Box id="about" sx={{ py: 8, textAlign: "center" }}>
          <Box sx={{ backgroundColor: "#003366", py: 0 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              About
            </Typography>
          </Box>
          <About />
        </Box>
        <Box id="projects" sx={{ py: 8, textAlign: "center" }}>
          <Box sx={{ backgroundColor: "#003366", py: 1 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              Projects
            </Typography>
          </Box>
          <Projects />
        </Box>
        <Box id="skills" sx={{ py: 8, textAlign: "center" }}>
          <Box sx={{ backgroundColor: "#003366", py: 1 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              Skills
            </Typography>
          </Box>
          <Skills />
              </Box>
              <Contact />
      </Container>
              <Footer/>
    </ThemeProvider>
  );
};

export default Home;
