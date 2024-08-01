import { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, Box, Divider } from "@mui/material";
import Slider from "react-slick";
import Icon from "@mui/material/Icon";
import { Person, Event, CheckCircle, CalendarToday, AdsClick } from "@mui/icons-material";
/* slick-carousel.css */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Carousel settings
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const ActivitySummary = () => {
  // Sample data for demonstration
  const [recentVisitors, setRecentVisitors] = useState([]);
  const [pendingInvitations, setPendingInvitations] = useState([]);
  const [acceptedInvitations, setAcceptedInvitations] = useState([]);
  const [todaysMatches, setTodaysMatches] = useState([]);

  useEffect(() => {
    // Fetch or set your data here
    // Example data
    setRecentVisitors([{ name: "John Doe" }, { name: "Jane Smith" }]);
    setPendingInvitations([{ event: "Meeting with John" }]);
    setAcceptedInvitations([{ event: "Lunch with Jane" }]);
    setTodaysMatches([{ match: "Team A vs Team B" }]);
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={3}>
        {/* Activity Summary */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Icon><Person /></Icon> Activity Summary
              </Typography>
              <Divider />
              <Typography variant="body2" sx={{ mt: 2 }}>
                Brief overview of recent activities
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Visitors */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Icon><Person /></Icon> Recent Visitors
              </Typography>
              <Divider />
              <Box sx={{ mt: 2 }}>
                {recentVisitors.map((visitor, index) => (
                  <Typography key={index} variant="body2">
                    {visitor.name}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Pending Invitations */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Icon><Event /></Icon> Pending Invitations
              </Typography>
              <Divider />
              <Box sx={{ mt: 2 }}>
                {pendingInvitations.map((invitation, index) => (
                  <Typography key={index} variant="body2">
                    {invitation.event}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Accepted Invitations */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Icon><CheckCircle /></Icon> Accepted Invitations
              </Typography>
              <Divider />
              <Box sx={{ mt: 2 }}>
                {acceptedInvitations.map((invitation, index) => (
                  <Typography key={index} variant="body2">
                    {invitation.event}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* View Today's Matches */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Icon><CalendarToday /></Icon> Todays Matches
              </Typography>
              <Divider />
              <Box sx={{ mt: 2 }}>
                {todaysMatches.map((match, index) => (
                  <Typography key={index} variant="body2">
                    {match.match}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Advertisement Carousel */}
        <Grid item xs={12}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                <Icon><AdsClick /></Icon> Advertisement
              </Typography>
              <Divider />
              <Box sx={{ mt: 2 }}>
                <Slider {...carouselSettings}>
                  <Box sx={{ padding: 2 }}>
                    <img src="https://via.placeholder.com/600x300?text=Ad+1" alt="Ad 1" style={{ width: '100%' }} />
                  </Box>
                  <Box sx={{ padding: 2 }}>
                    <img src="https://via.placeholder.com/600x300?text=Ad+2" alt="Ad 2" style={{ width: '100%' }} />
                  </Box>
                  <Box sx={{ padding: 2 }}>
                    <img src="https://via.placeholder.com/600x300?text=Ad+3" alt="Ad 3" style={{ width: '100%' }} />
                  </Box>
                </Slider>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActivitySummary;
