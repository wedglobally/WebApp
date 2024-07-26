import React, { useState } from "react";
import { Grid, Pagination } from "@mui/material";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import SoftBox from "components/SoftBox";


// Example images - replace these paths with actual image paths
import makeupArtist from "../../../assets/images/Wedglobally/marketplace/makeupArtist.jpg";
import caterer from "../../../assets/images/Wedglobally/marketplace/caterer.jpeg";
import planner from "../../../assets/images/Wedglobally/marketplace/planner.jpeg";
import decorator from "../../../assets/images/Wedglobally/marketplace/Decorator.jpeg";
import jewelry from "../../../assets/images/Wedglobally/marketplace/jewelry.jpeg";
import venues from "../../../assets/images/Wedglobally/marketplace/venues.jpeg";
import photographer from "../../../assets/images/Wedglobally/marketplace/photographer.jpeg";
import invitations from "../../../assets/images/Wedglobally/marketplace/invitations.jpeg";
import djs from "../../../assets/images/Wedglobally/marketplace/makeupArtist.jpg";
import invitationService from "../../../assets/images/Wedglobally/marketplace/jewelry.jpeg";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

const itemsPerPage = 8; // Number of items per page

const services = [
  { title: "Makeup Artist", image: makeupArtist, description: "Professional makeup artists for weddings." },
  { title: "Caterer", image: caterer, description: "Top-notch catering services for your big day." },
  { title: "Planner", image: planner, description: "Experienced wedding planners to organize your event." },
  { title: "Decorator", image: decorator, description: "Creative decorators to beautify your wedding venue." },
  { title: "Jewelry", image: jewelry, description: "Exquisite jewelry for the bride and groom." },
  { title: "Venues", image: venues, description: "Beautiful venues to host your wedding." },
  { title: "Photographer", image: photographer, description: "Professional photographers to capture your moments." },
  { title: "Invitations", image: invitations, description: "Elegant wedding invitations." },
  { title: "DJs", image: djs, description: "Experienced DJs to entertain your guests." },
  { title: "Invitation Service", image: invitationService, description: "Services to manage your wedding invitations." },
];

const PaginatedMarketplace = () => {
  const [page, setPage] = useState(1);

  // Calculate the number of pages
  const pageCount = Math.ceil(services.length / itemsPerPage);

  // Get the cards to display for the current page
  const displayCards = services.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <DashboardLayout>
    <DashboardNavbar />
     <SoftBox mb={3}  alignItems="center">
     <SoftBox>
      <Grid container spacing={2}>
        {displayCards.map((service, index) => (
          <Grid item xs={12} md={6} xl={3} key={index}>
            <DefaultProjectCard
              image={service.image}
              label={service.title}
              title={service.title}
              description={service.description}
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "view profile",
              }}
              authors={[]} // Add any authors if necessary
            />
          </Grid>
        ))}
      </Grid>
      <SoftBox display="flex" justifyContent="center" mt={2}>
        <Pagination count={pageCount} page={page} onChange={handleChange} color="primary" />
      </SoftBox>
    </SoftBox>
     </SoftBox>
     <Footer/>
     </DashboardLayout>
     
    
  );
};

export default PaginatedMarketplace;
