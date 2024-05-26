// import React from "react";
// import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { SiCplusplus, SiJavascript, SiPython, SiNodedotjs, SiReact, SiMongodb, SiMendix } from "react-icons/si";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: theme.spacing(2),
//     backgroundColor: "#f5f5f5",
//   },
//   icon: {
//     fontSize: "2rem",
//     marginBottom: theme.spacing(1),
//   },
// }));

// const skillsData = [
//   { name: "C++", icon: <SiCplusplus /> },
//   { name: "JavaScript", icon: <SiJavascript /> },
//   { name: "Python", icon: <SiPython /> },
//   { name: "Node.js", icon: <SiNodedotjs /> },
//   { name: "React.js", icon: <SiReact /> },
//   { name: "MongoDB", icon: <SiMongodb /> },
//   { name: "Mendix", icon: <SiMendix /> },
//   // Add more skills here
// ];

// const Skills = () => {
//   const classes = useStyles();

//   return (
//     <Box id="skills" sx={{ py: 8, textAlign: 'center' }}>
//       <Typography variant="h3" component="h2" gutterBottom>
//         Skills
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {skillsData.map((skill, index) => (
//           <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
//             <Card className={classes.card}>
//               <CardMedia className={classes.icon}>{skill.icon}</CardMedia>
//               <CardContent>
//                 <Typography variant="h6">{skill.name}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Skills;

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card as MuiCard,
  CardContent,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiReact,
  SiMongodb,
    SiExpress,
    SiC,
    SiMui,
    SiGithub,
    SiHtml5,
    SiCss3,
    SiDjango,
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: "#f5f5f5",
}));

const Icon = styled(CardMedia)(({ theme }) => ({
  fontSize: "2rem",
  marginBottom: theme.spacing(1),
}));

const skillsData = [
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C", icon: <SiC /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "MUI", icon: <SiMui /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "HTML", icon: <SiHtml5  /> },
  { name: "CSS", icon: <SiCss3  /> },
  { name: "Django", icon: <SiDjango  /> },
  { name: "SQL", icon: <BsFiletypeSql /> },
  { name: "Github", icon: <SiGithub  /> },
  //   { name: "Mendix", icon: <SiMendix /> },
  // Add more skills here
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 8, textAlign: "center" }}>
      {/* <Typography variant="h3" component="h2" gutterBottom>
        Skills
      </Typography> */}
      <Grid container spacing={4} justifyContent="center">
        {skillsData.map((skill, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
            <Card>
              <Icon>{skill.icon}</Icon>
              <CardContent>
                <Typography variant="h6">{skill.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
