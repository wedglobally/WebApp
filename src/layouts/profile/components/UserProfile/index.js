import React, { useState } from "react";
import { Box, TextField, Grid, Select, MenuItem, FormControl, InputLabel, Button, Typography } from "@mui/material";
import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

function UserProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    socialMedia: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedIn: ""
    },
    religion: "",
    caste: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      socialMedia: {
        ...formData.socialMedia,
        [name]: value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <SoftBox component="form"  sx={{ maxWidth: 600, m: "auto" }}>
      <Typography variant="h6" gutterBottom>
        User Profile
      </Typography>
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            First Name
            </SoftTypography>
          </SoftBox>
          <SoftInput type="text" placeholder="First Name" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Last Name
            </SoftTypography>
          </SoftBox>
          <SoftInput type="text" placeholder="Last Name"/>
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Email" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Phone number
            </SoftTypography>
          </SoftBox>
          <SoftInput type="Phone" placeholder="Phone Number" />
        </SoftBox>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" 
                 color="info" fullWidth>
            save
          </SoftButton>
        </SoftBox>
</SoftBox>
      
        
   
  );
}

export default UserProfile;
