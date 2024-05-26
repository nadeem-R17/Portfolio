import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import dp from "../assets/dp.jpeg";
import bt from "../assets/bit-mesra.webp";
import classs from "../assets/class.jpg";
import { Typography, Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import profile from '../assets/profile.jpg';

const aboutTextStyles = {
  padding: "20px",
  color: "#fff",
  textAlign: "center",
  height: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageContainerStyles = {
  position: "relative",
  height: "60vh",
  width: "100%",
};

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent overlay
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
};

const imageStyles = {
  height: "60vh",
  width: "100%",
  objectFit: "cover",
  filter: "brightness(70%) contrast(110%) saturate(120%)", // apply filters for uniform look
};

const About = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div style={{ height: "60vh", width: "100%", backgroundColor: "#f5f5f5" }}>
      <Carousel showThumbs={false}>
        <div style={{ ...imageContainerStyles }}>
          {isLargeScreen ? (
            <img src={profile} alt="Nadeem Raza" style={{ ...imageStyles }} />
          ) : (
            <img src={dp} alt="Nadeem Raza" style={{ ...imageStyles }} />
          )}
          <Box sx={{ ...overlayStyles }}>
            <Typography
              variant="h5"
              component="p"
              sx={{ fontFamily: "'Roboto', sans-serif" }}
            >
              I am Nadeem Raza, a full stack developer with a solid technical
              foundation.
            </Typography>
          </Box>
        </div>
        <div style={{ ...imageContainerStyles }}>
          <img src={bt} alt="BIT Mesra" style={{ ...imageStyles }} />
          <Box sx={{ ...overlayStyles }}>
            <Typography
              variant="h5"
              component="p"
              sx={{ fontFamily: "'Roboto', sans-serif" }}
            >
              I graduated from BIT Mesra in 2024 with a Bachelor's degree in
              Electronics and Communication Engineering (ECE) and a CGPA of 8.44
              out of 10.
            </Typography>
          </Box>
        </div>
        <div style={{ ...imageContainerStyles }}>
          <img src={classs} alt="Classroom" style={{ ...imageStyles }} />
          <Box sx={{ ...overlayStyles }}>
            <Typography
              variant="h5"
              component="p"
              sx={{ fontFamily: "'Roboto', sans-serif" }}
            >
              My academic achievements include scoring 91.2% in my 10th grade
              ICSE board exams and 92.2% in my 12th grade CBSE board exams.
            </Typography>
          </Box>
        </div>
      </Carousel>
    </div>
  );
};

export default About;
