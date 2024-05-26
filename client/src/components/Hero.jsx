// import React from 'react';
// import { Box, Container, Typography, Button } from '@mui/material';

// import { TypeAnimation } from "react-type-animation";

// const Hero = () => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '70vh',
//         backgroundColor: '#f5f5f5',
//         textAlign: 'center',
//         padding: '2rem',
//       }}
//     >
//           <Typography variant="h3" component="h1" gutterBottom>
//           <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         'Hi, I am Nadeem Raza',
//         1000, // wait 1s before replacing "Mice" with "Hamsters"
//         'Welcome to my Portfolio',
//         1000,
//         'Explore my projects ',
//         1000,
//         'Get to know more about my work',
//         1000
//       ]}
//       wrapper="span"
//       speed={10}
//       style={{ display: 'inline-block' }}
//       repeat={Infinity}
//     />

//       </Typography>
//       <Typography variant="h5" component="p" gutterBottom>
//         A full stack web developer
//       </Typography>
//       <Button variant="contained" color="primary" size="large">
//         Learn More
//       </Button>
//     </Box>
//   );
// };

// export default Hero;

// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { TypeAnimation } from "react-type-animation";

// const Hero = () => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '70vh',
//         textAlign: 'center',
//         padding: '2rem',
//         background: 'linear-gradient(135deg, #ff6f61 30%, #ff9157 70%)',
//         position: 'relative',
//         overflow: 'hidden',
//         color: '#ffffff',
//       }}
//     >
//       {/* Decorative Lines */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 10px, transparent 10px, transparent 20px)',
//           zIndex: 1,
//         }}
//       />

//       <Box sx={{ position: 'relative', zIndex: 2 }}>
//         <Typography variant="h3" component="h1" gutterBottom>
//           <TypeAnimation
//             sequence={[
//               'Hi, I am Nadeem Raza',
//               1000,
//               'Welcome to my Portfolio',
//               1000,
//               'Explore my projects',
//               1000,
//               'Get to know more about my work',
//               1000
//             ]}
//             wrapper="span"
//             speed={10}
//             style={{ display: 'inline-block' }}
//             repeat={Infinity}
//           />
//         </Typography>
//         <Typography variant="h5" component="p" gutterBottom>
//           A full stack web developer
//         </Typography>
//         <Button variant="contained" color="secondary" size="large">
//           Learn More
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Hero;

// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { TypeAnimation } from "react-type-animation";

// const Hero = () => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '70vh',
//         textAlign: 'center',
//         padding: '2rem',
//         // background: 'linear-gradient(135deg, #003366 30%, #ff6f61 70%)',
//         background: 'linear-gradient(135deg, #068466 30%, #B7ECE8 70%)',
//         position: 'relative',
//         overflow: 'hidden',
//         color: '#ffffff',
//       }}
//     >
//       {/* Decorative Lines */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           // background: 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 10px, transparent 10px, transparent 20px)',
//           background: 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 10px, transparent 10px, transparent 20px)',

//           zIndex: 1,
//         }}
//       />

//       <Box sx={{ position: 'relative', zIndex: 2 }}>
//         <Typography variant="h3" component="h1" gutterBottom>
//           <TypeAnimation
//             sequence={[
//               'Hi, I am Nadeem Raza',
//               1000,
//               'Welcome to my Portfolio',
//               1000,
//               'Explore my projects',
//               1000,
//               'Get to know more about my work',
//               1000
//             ]}
//             wrapper="span"
//             speed={10}
//             style={{ display: 'inline-block' }}
//             repeat={Infinity}
//           />
//         </Typography>
//         <Typography variant="h5" component="p" gutterBottom>
//           A full stack web developer
//         </Typography>
//         <Button variant="contained" color="secondary" size="large">
//           Learn More
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Hero;

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#e0e0e0",
        color: "#003366",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        <TypeAnimation
          sequence={[
            "Hi, I am Nadeem Raza",
            1000,
            "Welcome to my Portfolio",
            1000,
            "Explore my projects",
            1000,
            "Get to know more about my work",
            1000,
          ]}
          wrapper="span"
          speed={10}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        A full stack web developer
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => scrollToSection("about")}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default Hero;
