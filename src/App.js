import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import routes from "routes";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import brand from "assets/websiteasset/img/Wedglobally_icon.png";
import WeddingMatchmakingHome from "layouts/home/component/homepage";
import { auth } from "../src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "layouts/authentication/sign-in";
import Dashboard from "layouts/dashboard";
import NewHome from "layouts/home/component/homepage/NewHome";
import AboutUs from "layouts/website/aboutus/aboutus";
import ContactUs from "layouts/website/contactus/contactus";
import ActivitySummary from "layouts/dashboard/components/ActivitySummary/activitysummary";
import MySearches from "layouts/dashboard/components/MySearches/mysearches";



export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);

  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );

  // Conditionally render Sidenav based on the current layout and route
  const shouldRenderSidenav = layout === "dashboard" && pathname !== "/" && pathname !== "/about" && pathname !== "/contactus";

  if (loading) {
    return <div>Loading...</div>; // Optionally add a better loading indicator
  }

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={themeRTL}>
        <CssBaseline />
        {shouldRenderSidenav && (
          <Sidenav
            //color={sidenavColor}
            brand={brand}
            brandName="WedGlobally"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        )}
        <Configurator />
        {configsButton}
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={user ? <Navigate to="/dashboard" /> : <NewHome />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/authentication/sign-in" />} />
          <Route path="/authentication/sign-in" element={user ? <Navigate to="/dashboard" /> : <SignIn />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* <Route path="/dashboard/activitysummary" element={<ActivitySummary />} />
        <Route path="/dashboard/mysearches" element={<MySearches />} /> */}
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {shouldRenderSidenav && (
        <Sidenav
         // color={sidenavColor}
          brand={brand}
          brandName="WedGlobally"
          routes={routes}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        />
      )}
      <Configurator />
      {configsButton}
      <Routes basename="/WedGlobally">
        {getRoutes(routes)}
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <NewHome />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/authentication/sign-in" />} />
        <Route path="/authentication/sign-in" element={user ? <Navigate to="/dashboard" /> : <SignIn />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* <Route path="/dashboard/activitysummary" element={<ActivitySummary />} />
        <Route path="/dashboard/mysearches" element={<MySearches />} /> */}

      </Routes>
    </ThemeProvider>
  );
}
