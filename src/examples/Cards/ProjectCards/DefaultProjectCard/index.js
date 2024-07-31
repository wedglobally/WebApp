import React, { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

// WedGlobally React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";

function DefaultProjectCard({ image, label, title, description, action, authors, showInterested }) {
  const [interested, setInterested] = useState(false);
  const navigate = useNavigate();

  const handleToggleInterested = (event) => {
    event.stopPropagation(); // Prevent the click event from triggering the card click
    setInterested(!interested);
  };

  const handleCardClick = () => {
    if (action.type === "internal") {
      navigate(action.route);
    } else {
      window.open(action.route, "_blank");
    }
  };

  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <SoftAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1.25,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
        cursor: "pointer", // Add cursor style for clickable feedback
      }}
    >
      <SoftBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          src={image}
          component="img"
          title={title}
          height="200"
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </SoftBox>
      <SoftBox pt={3} px={0.5}>
        <SoftBox mb={1}>
          <SoftTypography
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            textGradient
          >
            {label}
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={1}>
          <SoftTypography variant="h5" textTransform="capitalize">
            {title}
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={3} lineHeight={0}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            {description}
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <SoftButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              color={action.color}
              onClick={(event) => event.stopPropagation()} // Prevent card click
            >
              {action.label}
            </SoftButton>
          ) : (
            <SoftButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              color={action.color}
              onClick={(event) => event.stopPropagation()} // Prevent card click
            >
              {action.label}
            </SoftButton>
          )}
          <SoftBox display="flex">{renderAuthors}</SoftBox>
          {showInterested && (
            <SoftButton
              variant={interested ? "contained" : "outlined"}
              color="primary"
              onClick={handleToggleInterested}
              sx={{ marginLeft: "auto" }}
            >
              {interested ? "Interested" : "Interested"}
            </SoftButton>
          )}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: [],
  showInterested: false, // Default to not showing the "Interested" button
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
  showInterested: PropTypes.bool, // Prop to toggle the display of the "Interested" button
};

export default DefaultProjectCard;
