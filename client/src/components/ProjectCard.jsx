import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaGithub } from "react-icons/fa";
import { IconButton } from "@mui/material";
const ProjectCard = ({ image, title, description, link }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="medium" color="primary" href={link} target="_blank" centerRipple>
          <FaGithub />
          <Typography>View on GitHub</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
