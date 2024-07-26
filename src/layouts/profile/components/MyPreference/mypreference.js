import React from 'react';
import { Box, Grid, Card, Typography, TextField, MenuItem, Button } from '@mui/material';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Sample options for demonstration purposes
const religions = [
  "Christianity",
  "Islam",
  "Hinduism",
  "Buddhism",
  "Judaism",
  "Sikhism",
  "Other"
];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "India",
  "China",
  "Other"
];

const ageGroups = Array.from({ length: 63 }, (_, i) => i + 18);

function MyPreference() {
  return (
    <SoftBox component="form" sx={{ maxWidth: 600, m: "auto" }}>
      <Typography variant="h6" gutterBottom>
        My Preferences
      </Typography>
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Bride/Groom
            </SoftTypography>
          </SoftBox>
          <SoftInput type="text" placeholder="Bride or Groom" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Age
            </SoftTypography>
          </SoftBox>
          <Box display="flex" justifyContent="space-between">
            <TextField
              select
              label="From"
              defaultValue={ageGroups[0]}
              variant="outlined"
              fullWidth
              sx={{ mr: 1 }}
            >
              {ageGroups.map(age => (
                <MenuItem key={age} value={age}>
                  {age}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="To"
              defaultValue={ageGroups[ageGroups.length - 1]}
              variant="outlined"
              fullWidth
              sx={{ ml: 1 }}
            >
              {ageGroups.map(age => (
                <MenuItem key={age} value={age}>
                  {age}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Height
            </SoftTypography>
          </SoftBox>
          <Box display="flex" justifyContent="space-between">
            <SoftInput type="text" placeholder="From" sx={{ mr: 1 }} />
            <SoftInput type="text" placeholder="To" sx={{ ml: 1 }} />
          </Box>
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Marital Status
            </SoftTypography>
          </SoftBox>
          <TextField
            select
            variant="outlined"
            fullWidth
          >
            <MenuItem value="Doesn't Matter">Doesnt Matter</MenuItem>
            <MenuItem value="Single">Single</MenuItem>
            <MenuItem value="Divorced">Divorced</MenuItem>
            <MenuItem value="Widowed">Widowed</MenuItem>
          </TextField>
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Have Children
            </SoftTypography>
          </SoftBox>
          <TextField
            select
            variant="outlined"
            fullWidth
          >
            <MenuItem value="Doesn't Matter">Doesnt Matter</MenuItem>
            <MenuItem value="No">No</MenuItem>
            <MenuItem value="Ok, if not staying together">Ok, if not staying together</MenuItem>
          </TextField>
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Religion
            </SoftTypography>
          </SoftBox>
          <TextField
            select
            variant="outlined"
            fullWidth
          >
            {religions.map(religion => (
              <MenuItem key={religion} value={religion}>
                {religion}
              </MenuItem>
            ))}
          </TextField>
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Mother Tongue
            </SoftTypography>
          </SoftBox>
          <SoftInput type="text" placeholder="Mother Tongue" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Country Living in
            </SoftTypography>
          </SoftBox>
          <TextField
            select
            variant="outlined"
            fullWidth
          >
            {countries.map(country => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </TextField>
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Photo Settings
            </SoftTypography>
          </SoftBox>
          <SoftInput type="text" placeholder="Photo Settings" />
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth>
            Save
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );
}

export default MyPreference;
