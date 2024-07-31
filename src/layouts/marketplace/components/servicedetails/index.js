import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SoftBox from "components/SoftBox";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import makeupArtist from "../../../../assets/images/Wedglobally/marketplace/makeupArtist.jpg";
import caterer from "../../../../assets/images/Wedglobally/marketplace/caterer.jpeg";
import planner from "../../../../assets/images/Wedglobally/marketplace/planner.jpeg";
import decorator from "../../../../assets/images/Wedglobally/marketplace/Decorator.jpeg";

// Example ad data for each service with 50 items
const serviceAds = {
  makeupArtist: Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    images: [
      {makeupArtist},
      {caterer},
      {planner},
      {decorator}
    ],
    description: `Ad ${i + 1} Description`,
  })),
  // Repeat for other services if needed...
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const ads = serviceAds[serviceId] || [];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={3}>
        <Grid container spacing={4}>
          {ads.map((ad) => (
            <Grid item xs={12} key={ad.id}>
              {/* Each card takes up the full width of the container */}
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {ad.description}
                  </Typography>
                  <SoftBox mb={2}>
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={10}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      navigation
                      style={{
                        width: "100%", // Ensures Swiper uses full width of its container
                        maxWidth: "100%", // Constrains the Swiper width to the card
                      }}
                    >
                      {ad.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={image}
                            alt={`Ad ${ad.id} Image ${index + 1}`}
                            style={{
                              width: "100%", // Ensure images fill the SwiperSlide
                              height: "auto",
                              maxWidth: "100%", // Constrain the image within the SwiperSlide
                              display: "block",
                              margin: "0 auto", // Center the image
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </SoftBox>
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
