import React, { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// @mui icons
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// WedGlobally React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// WedGlobally React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// Auth
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import MyPhotos from "./components/MyPhotos/myphotos";
import MyPreference from "./components/MyPreference/mypreference";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const ProfileOverview = () => {
  const [user] = useAuthState(auth);
  const [tabValue, setTabValue] = useState(0);

  return (
    <DashboardLayout>
      {/* <Header /> */}

      <SoftBox
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <SoftBox
          sx={{
            flex: 1,
            pt: 5,
            pb: 3,
            px: 2,
          }}
        >
          {tabValue === 0 && (
            <Grid >
              {/* Profile Information Section */}
              <Grid item xs={12} md={6} xl={4}>
                <ProfileInfoCard
                  title="Profile Information"
                  description={`Hi, I’m ${user ? user.displayName : 'User'}. Welcome to your profile page.`}
                  info={{
                    fullName: user ? user.displayName : 'User',
                    mobile: "(44) 123 1234 123", // Placeholder value
                    email: user ? user.email : 'user@example.com',
                    location: "USA", // Placeholder value
                  }}
                  social={[
                    {
                      link: "",
                      icon: <PersonIcon />,
                      color: "facebook",
                    },
                    {
                      link: "",
                      icon: <PersonIcon />,
                      color: "twitter",
                    },
                    {
                      link: "",
                      icon: <PersonIcon />,
                      color: "instagram",
                    },
                  ]}
                  action={{ route: "", tooltip: "Edit Profile" }}
                />
              </Grid>
            </Grid>
          )}

          {tabValue === 1 && (
            <Grid>
              {/* Details Section */}
              <Grid item xs={12} md={6} xl={4}>
                <Card>
                  <SoftBox p={2}>
                    <Typography variant="h6" gutterBottom>
                      Details
                    </Typography>
                    {/* Add your Details component here */}
                  </SoftBox>
                </Card>
              </Grid>
            </Grid>
          )}

          {tabValue === 2 && (
            <Grid>
              {/* My Preferences Section */}
              <Grid item xs={12} md={6} xl={4}>
                <Card>
                  <SoftBox p={2}>
                    <Typography variant="h6" gutterBottom>
                      My Preferences
                    </Typography>
                    <MyPreference />
                  </SoftBox>
                </Card>
              </Grid>
            </Grid>
          )}

          {tabValue === 3 && (
            <Grid >
              {/* My Photos Section */}
              <Grid item xs={12} md={6} xl={4}>
                <Card>
                  <SoftBox p={2}>
                    <Typography variant="h6" gutterBottom>
                      My Photos
                    </Typography>
                    <MyPhotos />
                  </SoftBox>
                </Card>
              </Grid>
            </Grid>
          )}

          {tabValue === 4 && (
            <Grid >
              {/* More Section */}
              <Grid item xs={12} md={6} xl={4}>
                <Card>
                  <SoftBox p={2}>
                    <Typography variant="h6" gutterBottom>
                      More
                    </Typography>
                    {/* Add additional sections or links here */}
                  </SoftBox>
                </Card>
              </Grid>
            </Grid>
          )}
        </SoftBox>

        <BottomNavigation
          sx={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            left: 0,
            bgcolor: "background.paper",
          }}
          value={tabValue}
          onChange={(event, newValue) => setTabValue(newValue)}
          showLabels
        >
          <BottomNavigationAction label="Profile Information" icon={<PersonIcon />} />
          <BottomNavigationAction label="Details" icon={<InfoIcon />} />
          <BottomNavigationAction label="My Preferences" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="My Photos" icon={<PhotoLibraryIcon />} />
          <BottomNavigationAction label="More" icon={<MoreHorizIcon />} />
        </BottomNavigation>
      </SoftBox>

      <Footer
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          bgcolor: "background.paper",
        }}
      />
    </DashboardLayout>
  );
};

export default ProfileOverview;
