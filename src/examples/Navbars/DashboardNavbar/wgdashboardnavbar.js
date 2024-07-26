import { useState, useEffect } from "react";

import WedGloballyMenu from 'layouts/home/component/header/menu';
import { AppBar, Grid, Tab, Tabs } from '@mui/material';
import ActivitySummary from 'layouts/dashboard/components/ActivitySummary/activitysummary';
import SoftBox from 'components/SoftBox';
import WGSearchComponent from 'components/WGAutoComplete';
import PaginatedProfileList from 'layouts/dashboard/components/PaginatedProfileList';
import SoftTypography from 'components/SoftTypography';
import Cube from 'examples/Icons/Cube';
import Document from 'examples/Icons/Document';
import Settings from 'examples/Icons/Settings';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
const menuItems = [
    { label: 'Home', href: '/wedglobally', className: 'active' },
    { label: 'Our Products', href: '/wedglobally', className: 'active' },
    {
      label: 'About Us',
      subMenu: [
        { label: 'Vision & Purpose', href: '/wedglobally/about/vision-purpose' },
        { label: 'Key Journey', href: '/wedglobally/about/key-journey' },
        { label: 'Key People', href: '/wedglobally/about/key-people' },
        { label: 'Board of Directors', href: '/wedglobally/about/board-of-directors' },
        { label: 'Investors', href: '/wedglobally/about/investors' },
        { label: 'About Us', href: '/wedglobally/about' },
      ],
    },
    { label: 'Contact Us', href: '/wedglobally/contactus' },
  ];
export default function WGDashboardNavBar() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);

    window.onscroll = function (e) {
        const nav = document.querySelector('.navbar')
        // if (window.scrollY > 0) {
        //     nav.classList.add('affix');
        // }
        // if (window.scrollY === 0) {
        //     nav.classList.remove('affix')
        // }
    };
    return (
        <>
         {/* <WedGloballyMenu menuItems={menuItems} /> */}
         
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
              <AppBar position="static">
                <Tabs
                  orientation={tabsOrientation}
                  value={tabValue}
                 // onChange={handleSetTabValue}
                  sx={{ background: "transparent" }}
                >
                  <Tab label="Summary" icon={<Cube />} />
                  <Tab label="Searches" icon={<Cube />} />
                  <Tab label="Messages" icon={<Document />} />
                  <Tab label="Settings" icon={<Settings />} />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
        
        <SoftBox p={3}>
          {/* Conditional Rendering Based on Tab Selection */}
          {tabValue === 0 && (
            <SoftBox>
              <ActivitySummary/>
              {/* Add your Summary content here */}
            </SoftBox>
          )}
          {tabValue === 1 && (
            <SoftBox>
              <SoftBox mb={3} alignItems="center">
                <WGSearchComponent />
              </SoftBox>
              <SoftBox mb={3}>
                <PaginatedProfileList />
              </SoftBox>
            </SoftBox>
          )}
          {tabValue === 2 && (
            <SoftBox>
              <SoftTypography variant="h4" gutterBottom>
                Messages Content
              </SoftTypography>
              {/* Add your Messages content here */}
            </SoftBox>
          )}
          {tabValue === 3 && (
            <SoftBox>
              <SoftTypography variant="h4" gutterBottom>
                Settings Content
              </SoftTypography>
              {/* Add your Settings content here */}
            </SoftBox>
          )}
        </SoftBox>
        </>
    )
}
