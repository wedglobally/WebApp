import { useEffect, useState } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// WedGlobally React components
import SoftBox from "components/SoftBox";

// WedGlobally React examples
import { MoreHorizOutlined } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import borders from "assets/theme/base/borders";
import breakpoints from "assets/theme/base/breakpoints";
import typography from "assets/theme/base/typography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../src/firebase";
import ActivitySummary from "./components/ActivitySummary/activitysummary";
import MySearches from "./components/MySearches/mysearches";
import PageLayout from "examples/LayoutContainers/PageLayout";

function Dashboard() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const { size } = typography;
  const { borderWidth, borderColor } = borders;
  const [user] = useAuthState(auth);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    // The event listener that's calling the handleTabsOrientation function when resizing the window.
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, []);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <DashboardLayout>
     {/* <DashboardNavbar />  */}

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
             <Grid>
             {/* Details Section */}
             <Grid item xs={12} md={6} xl={4}>
               <Card>
                 <SoftBox p={2}>
                   <Typography variant="h6" gutterBottom>
                     Activity Summary
                   </Typography>
                   <ActivitySummary/>
                 </SoftBox>
               </Card>
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
                      My Searches
                    </Typography>
                    <MySearches/>
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
                      My Searches
                    </Typography>
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
          <BottomNavigationAction label="Activity Stream" icon={<MoreHorizOutlined />} />
          <BottomNavigationAction label="My Searches" icon={<MoreHorizOutlined />} />
          <BottomNavigationAction label="My Preferences" icon={<MoreHorizOutlined />} />
          <BottomNavigationAction label="My Photos" icon={<MoreHorizOutlined />} />
          <BottomNavigationAction label="More" icon={<MoreHorizOutlined />} />
        </BottomNavigation>
      </SoftBox>

      {/* <Footer
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          bgcolor: "background.paper",
        }}
      /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
