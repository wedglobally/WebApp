import React, { useState } from "react";
import { Card, Grid, Box, Autocomplete, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { styled } from '@mui/material/styles';
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import Paper from '@mui/material/Paper'; 
// Example options for the Autocomplete component
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  // Add more options as needed
];

// Example options for other filters
const locations = [
  { title: 'New York' },
  { title: 'Los Angeles' },
  { title: 'Chicago' },
  // Add more options as needed
];

const countries = [
  { title: 'USA' },
  { title: 'Canada' },
  { title: 'UK' },
  // Add more options as needed
];

const religions = [
  { title: 'Christianity' },
  { title: 'Islam' },
  { title: 'Hinduism' },
  // Add more options as needed
];

const genders = [
  { title: 'Male' },
  { title: 'Female' },
  { title: 'Other' },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function WGSearchComponent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SoftBox sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <Item>
            <Autocomplete
              multiple
              id="tags-standard"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              defaultValue={[top100Films[0]]} // Example default value
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  placeholder="Search Profiles"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              )}
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <SoftButton variant="gradient" color="dark" fullWidth>
              <SearchIcon />
              &nbsp;Search
            </SoftButton>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <IconButton onClick={handleClickOpen} color="primary">
              <FilterListIcon />
            </IconButton>
          </Item>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Filter Options</DialogTitle>
        <DialogContent>
          {/* Filter by Year */}
          <TextField
            label="Year"
            variant="standard"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          {/* Filter by Location */}
          <Autocomplete
            options={locations}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Location"
                variant="standard"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
          {/* Filter by Country */}
          <Autocomplete
            options={countries}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Country"
                variant="standard"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
          {/* Filter by Religion */}
          <Autocomplete
            options={religions}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Religion"
                variant="standard"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
          {/* Filter by Age */}
          <Box display="flex" justifyContent="space-between" mt={2}>
            <TextField
              label="Age From"
              type="number"
              variant="standard"
              sx={{ mr: 1 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Age To"
              type="number"
              variant="standard"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          {/* Filter by Gender */}
          <Autocomplete
            options={genders}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Gender"
                variant="standard"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </SoftBox>
  );
}

export default WGSearchComponent;
