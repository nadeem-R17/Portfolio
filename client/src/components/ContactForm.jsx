import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { styled } from '@mui/system';
import axios from 'axios';

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#ffffff",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: "100%",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


// ...

const handleSubmit = (e) => {
  e.preventDefault();

  // Check if any field in formData is empty
  const isAnyFieldEmpty = Object.values(formData).some(field => field === '');

  if (isAnyFieldEmpty) {
    console.log('Please fill out all fields.');
    return;
  }

  // Send a POST request to the server
  axios.post('http://localhost:3000/contact', formData)
    .then(response => {
      console.log('Form submitted:', response.data);
      // Clear the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Raise an alert
      alert('Form submitted successfully!');
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      // Inform the user
      alert('An error occurred while submitting the form. Please try again.');
    
    });
};

// ...

  return (
    <FormContainer component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" component="h1" color="#003366" gutterBottom>
        Contact Me
      </Typography>
      <StyledTextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <StyledTextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <StyledTextField
        label="Message"
        variant="outlined"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        required
      />
      <StyledButton type="submit" variant="contained" color="primary">
        Submit
      </StyledButton>
    </FormContainer>
  );
};

export default ContactForm;