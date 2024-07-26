import React, { useState } from "react";
import { Grid, Card, CardMedia, CardActions, Button, Typography, Modal, Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Input = styled("input")({
  display: "none",
});

const MyPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [editPhotoIndex, setEditPhotoIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotos([...photos, reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const handleEditPhoto = (index) => {
    setEditPhotoIndex(index);
    setOpen(true);
  };

  const handleDeletePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
    if (selectedPhotoIndex === index) {
      setSelectedPhotoIndex(null);
    }
  };

  const handleModalClose = () => {
    setOpen(false);
    setEditPhotoIndex(null);
  };

  const handleModalSave = () => {
    // Save edited photo details if any
    handleModalClose();
  };

  const handleSelectPhoto = (index) => {
    setSelectedPhotoIndex(index);
  };

  const handleNextPhoto = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrevPhoto = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)', padding: 2 }}>
      {/* Photo Grid (Left Side) */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', borderRight: '1px solid #ddd', paddingRight: 2 }}>
        <Grid container spacing={1}>
          {photos.map((photo, index) => (
            <Grid item xs={4} key={index} sx={{ mb: 1 }}>
              <Card sx={{ width: '100%' }}>
                <CardMedia
                  component="img"
                  image={photo}
                  alt={`Photo ${index + 1}`}
                  sx={{ height: 100, cursor: 'pointer' }}
                  onClick={() => handleSelectPhoto(index)}
                />
                <CardActions>
                  <IconButton color="primary" onClick={() => handleEditPhoto(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDeletePhoto(index)}>
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
          <Grid item xs={4} sx={{ mb: 1 }}>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" onChange={handlePhotoChange} />
              <Button variant="contained" component="span" startIcon={<AddPhotoAlternateIcon />} fullWidth>
                Add Photo
              </Button>
            </label>
          </Grid>
        </Grid>
      </Box>

      {/* Photo Preview (Right Side) */}
      {selectedPhotoIndex !== null && (
        <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <IconButton
            onClick={handlePrevPhoto}
            sx={{ position: 'absolute', left: 0, zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <CardMedia
            component="img"
            image={photos[selectedPhotoIndex]}
            alt={`Selected Photo`}
            sx={{ maxWidth: '100%', maxHeight: '80vh' }}
          />
          <IconButton
            onClick={handleNextPhoto}
            sx={{ position: 'absolute', right: 0, zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      )}

      {/* Modal for Editing Photos */}
      <Modal open={open} onClose={handleModalClose}>
        <Box sx={{ width: 400, p: 4, margin: "auto", marginTop: "10%", backgroundColor: "white", borderRadius: 1 }}>
          <Typography variant="h6" gutterBottom>
            Edit Photo
          </Typography>
          {/* Implement additional photo edit options here */}
          <Button onClick={handleModalSave} color="primary" variant="contained">
            Save
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default MyPhotos;
