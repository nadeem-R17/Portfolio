import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProjectCard from "./ProjectCard.jsx";
import ecocart from "../assets/ecocart.png";
import todo from "../assets/todo.png";
import portfolio from "../assets/portfolio.png";
import freelearn from "../assets/freelearn.png";

const projects = [
  {
    image: ecocart,
    title: "ECOCART",
    description:
      " E-commerce website with secure authentication & responsive shopping features.",
    link: "https://github.com/nadeem-R17/EcoCart",
  },
  {
    image: portfolio,
    title: "Portfolio",
    description:
      "Personal website showcasing skills, academic achievements, and projects.",
    link: "https://github.com/nadeem-R17/Portfolio",
  },
  {
    image: todo,
    title: "Todo App",
    description:
      "Task management application for creating, reading, updating, and deleting tasks.",
    link: "https://github.com/nadeem-R17/Todo-Task",
  },
  {
    image: freelearn,
    title: "FreeLearn",
    description:
      "Educational platform offering YouTube videos and extensive study materials.",
    link: "https://github.com/nadeem-R17/Freelearn",
  },
];

const Projects = () => {
  return (
    <Container id="projects" sx={{ py: 8, minHeight: "100vh" }}>
      {/* <Typography variant="h4" component="h2" gutterBottom>
        My Projects
      </Typography> */}
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
