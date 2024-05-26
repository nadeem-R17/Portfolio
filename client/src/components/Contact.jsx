// import React from "react";
// import { Box, Typography, Grid, IconButton } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
// import ContactForm from "./ContactForm";

// const useStyles = makeStyles((theme) => ({
//   iconButton: {
//     margin: theme.spacing(1),
//     color: theme.palette.primary.main,
//   },
// }));

// const Contact = () => {
//   const classes = useStyles();

//   return (
//     <Box id="contact" sx={{ py: 8 }}>
//       <Typography variant="h3" component="h2" gutterBottom>
//         Contact
//       </Typography>
//       <Grid container spacing={4}>
//         <Grid item xs={12} lg={6}>
//           <ContactForm />
//         </Grid>
//         <Grid item xs={12} lg={6} container justifyContent="center" alignItems="center">
//           <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
//             <IconButton className={classes.iconButton} aria-label="Facebook" href="https://facebook.com">
//               <FaFacebook size={32} />
//             </IconButton>
//             <IconButton className={classes.iconButton} aria-label="Instagram" href="https://instagram.com">
//               <FaInstagram size={32} />
//             </IconButton>
//             <IconButton className={classes.iconButton} aria-label="GitHub" href="https://github.com">
//               <FaGithub size={32} />
//             </IconButton>
//             <IconButton className={classes.iconButton} aria-label="LinkedIn" href="https://linkedin.com">
//               <FaLinkedin size={32} />
//             </IconButton>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Contact;

// import React from "react";
// import { Box, Grid, IconButton } from "@mui/material";
// import { styled } from '@mui/system';
// import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
// import ContactForm from "./ContactForm";

// const StyledIconButton = styled(IconButton)(({ theme }) => ({
//   margin: theme.spacing(1),
//   color: theme.palette.primary.main,
// }));

// const Contact = () => {
//   return (
//     <Box id="contact" sx={{ py: 8 }}>
//       {/* <Typography variant="h3" component="h2" gutterBottom>
//         Contact
//       </Typography> */}
//       <Grid container spacing={4}>
//         <Grid item xs={12} lg={6}>
//           <ContactForm />
//         </Grid>
//         <Grid item xs={12} lg={6} container justifyContent="center" alignItems="center">
//           <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
//             <StyledIconButton aria-label="Facebook" href="https://facebook.com">
//                           <FaFacebook size={32} />
//             </StyledIconButton>
//             <StyledIconButton aria-label="Instagram" href="https://instagram.com">
//               <FaInstagram size={32} />
//             </StyledIconButton>
//             <StyledIconButton aria-label="GitHub" href="https://github.com">
//               <FaGithub size={32} />
//             </StyledIconButton>
//             <StyledIconButton aria-label="LinkedIn" href="https://linkedin.com">
//               <FaLinkedin size={32} />
//             </StyledIconButton>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Contact;

import React from "react";
import { Box, Grid } from "@mui/material";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8, background: "#e0e0e0" }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
