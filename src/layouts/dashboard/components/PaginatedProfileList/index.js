import React, { useState } from "react";
import { Grid, Box, Pagination, Card, CardContent, Typography, Button, Avatar, CardActions } from "@mui/material";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Example data for the DefaultProjectCard component
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import SoftBox from "components/SoftBox";

const itemsPerPage = 8; // Number of items per page

const PaginatedProfileList = () => {
  const [page, setPage] = useState(1);

  // Sample data to be used for the cards
  const cardData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    image: homeDecor3,
    label: `project #${index + 1}`,
    title: "minimalist",
    description: "Different people have different taste, and various types of music.",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "view profile",
    },
    authors: [
      { image: team4, name: "Peterson" },
      { image: team3, name: "Nick Daniel" },
      { image: team2, name: "Ryan Milly" },
      { image: team1, name: "Elena Morison" },
    ],
  }));

  // Calculate the number of pages
  const pageCount = Math.ceil(cardData.length / itemsPerPage);

  // Get the cards to display for the current page
  const displayCards = cardData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <SoftBox>
      <Grid container spacing={2}>
        {displayCards.map((card) => (
          <Grid item xs={12} md={6} xl={3} key={card.id}>
            <DefaultProjectCard
              image={card.image}
              label={card.label}
              title={card.title}
              description={card.description}
              action={card.action}
              authors={card.authors}
              showInterested={true} 
            />
          </Grid>
        ))}
      </Grid>
      <SoftBox display="flex" justifyContent="center" mt={2}>
        <Pagination count={pageCount} page={page} onChange={handleChange} color="primary" />
      </SoftBox>
    </SoftBox>
  );
};

export default PaginatedProfileList;
