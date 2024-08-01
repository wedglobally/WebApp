import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Box, Divider } from "@mui/material";
import Slider from "react-slick";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Example ad data for each service with 50 items
const serviceAds = {
  makeupArtist: Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    images: [
      "https://via.placeholder.com/600x300?text=Makeup+Artist",
      "https://via.placeholder.com/600x300?text=Caterer",
      "https://via.placeholder.com/600x300?text=Planner",
      "https://via.placeholder.com/600x300?text=Decorator"
    ],
    description: `Ad ${i + 1} Description`,
  })),
  // Repeat for other services if needed...
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const ads = serviceAds[serviceId] || [];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <DashboardLayout>
      <SoftBox mt={3}>
        <Grid container spacing={4}>
          {ads.map((ad) => (
            <Grid item xs={12} key={ad.id}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Advertisement
                  </Typography>
                  <Divider />
                  <Box sx={{ mt: 2 }}>
                    <Slider {...carouselSettings}>
                      {ad.images.map((image, index) => (
                        <Box sx={{ padding: 2 }} key={index}>
                          <img
                            src={image}
                            alt={`Ad ${ad.id} Image ${index + 1}`}
                            style={{
                              width: '100%',
                              height: 'auto',
                            }}
                          />
                        </Box>
                      ))}
                    </Slider>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
};

export default ServiceDetail;
