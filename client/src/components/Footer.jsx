import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Grid,
  Link,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.common.white,
}));

const handleLinkClick = (event, id) => {
  event.preventDefault();
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: theme.palette.primary.main,
        textAlign: "center",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom color="white">
            Follow Me
          </Typography>
          <Box display="flex" justifyContent="center">
            <StyledIconButton
              aria-label="Facebook"
              href="https://www.facebook.com/nadeem.raza.1238?mibextid=qi2Omg&rdid=soV7igcQ6csGRZuc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FKabekRXEJTf37jWV%2F%3Fmibextid%3Dqi2Omg"
              target="_blank"
            >
              <FaFacebook size={32} />
            </StyledIconButton>
            <StyledIconButton
              aria-label="Instagram"
              href="https://www.instagram.com/its_.nadeem._/?utm_source=qr&igsh=eDFycGJ4amR2eDh5"
              target="_blank"
            >
              <FaInstagram size={32} />
            </StyledIconButton>
            <StyledIconButton
              aria-label="GitHub"
              href="https://github.com/nadeem-R17"
              target="_blank"
            >
              <FaGithub size={32} />
            </StyledIconButton>
            <StyledIconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/nadeem-raza-2a9a28219/"
              target="_blank"
            >
              <FaLinkedin size={32} />
            </StyledIconButton>
            <StyledIconButton
              aria-label="LeetCode"
              href="https://leetcode.com/nadeem-12"
              target="_blank"
            >
              <FaCode size={32} />
            </StyledIconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom color="white">
            Contact Information
          </Typography>
          <Typography variant="body1" color="white">
            Email:{" "}
            <Link
              href="mailto:nadeemraza1217@gmail.com"
              color="inherit"
              underline="none"
            >
              nadeemraza1217@gmail.com
            </Link>
          </Typography>
          <Typography variant="body1" color="white">
            Phone: +123 456 7890
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom color="white">
            Quick Links
          </Typography>

          <Link
            href="#about"
            variant="body1"
            color="#FFFFFF"
            display="block"
            underline="none"
            onClick={(event) => handleLinkClick(event, "about")}
          >
            About
          </Link>
          <Link
            href="#projects"
            variant="body1"
            color="#FFFFFF"
            display="block"
            underline="none"
            onClick={(event) => handleLinkClick(event, "projects")}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            variant="body1"
            color="#FFFFFF"
            display="block"
            underline="none"
            onClick={(event) => handleLinkClick(event, "skills")}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            variant="body1"
            color="#FFFFFF"
            display="block"
            underline="none"
            onClick={(event) => handleLinkClick(event, "contact")}
          >
            Contact
          </Link>
        </Grid>
      </Grid>
      <Typography variant="body2" color="#FFFFFF" sx={{ mt: 4 }}>
        © 2024 Nadeem Raza. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
