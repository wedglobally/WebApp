import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";
import logo from "../../../assets/websiteasset/img/Wedglobally_icon.png";
import { navbar, navbarContainer, navbarRow, navbarIconButton, navbarMobileMenu } from "examples/Navbars/DashboardNavbar/styles";
import { useSoftUIController, setTransparentNavbar, setMiniSidenav, setOpenConfigurator } from "context";
import team2 from "assets/images/team-2.jpg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";

function DashboardNavbar({ absolute, light, isMini, onToggleDrawer }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    window.addEventListener("scroll", handleTransparentNavbar);
    handleTransparentNavbar();

    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => {
    setMiniSidenav(dispatch, !miniSidenav);
    if (onToggleDrawer) onToggleDrawer(!miniSidenav); // Notify parent about drawer state
  };

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={<img src={team2} alt="person" />}
        title={["New message", "from Laur"]}
        date="13 minutes ago"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        image={<img src={logoSpotify} alt="person" />}
        title={["New album", "by Travis Scott"]}
        date="1 day"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        color="secondary"
        image={<Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>payment</Icon>}
        title={["", "Payment successfully completed"]}
        date="2 days"
        onClick={handleCloseMenu}
      />
    </Menu>
  );

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
    >
      <Toolbar
        sx={{
          ...navbarContainer,
          backgroundColor: '#E0B15E',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Distribute items in the toolbar
        }}
      >
        <SoftBox display="flex" alignItems="center">
          <IconButton onClick={() => onToggleDrawer(true)} color="inherit">
            <Icon>{miniSidenav ? "menu_open" : "menu"}</Icon>
          </IconButton>
          <SoftBox display="flex" alignItems="center" ml={2}>
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
            <SoftTypography variant="h6" component="div" sx={{ color: 'white' }}>
              WedGlobally
            </SoftTypography>
          </SoftBox>
          <SoftBox ml={2}>
            <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light />
          </SoftBox>
        </SoftBox>
        {!isMini && (
          <SoftBox sx={(theme) => navbarRow(theme, { isMini })}>
            <SoftBox pr={1}>
              <SoftInput
                placeholder="Search here..."
                icon={{ component: "search", direction: "left" }}
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputAdornment-root': { color: 'white' },
                }}
              />
            </SoftBox>
            <SoftBox color="white">
              <Link to="/authentication/sign-in">
                <IconButton sx={navbarIconButton} size="small">
                  <Icon sx={({ palette: { white } }) => ({ color: white.main })}>
                    account_circle
                  </Icon>
                  <SoftTypography variant="button" fontWeight="medium" color="white">
                    {user ? user.displayName : 'Sign In'}
                  </SoftTypography>
                </IconButton>
              </Link>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarMobileMenu}
                onClick={() => onToggleDrawer(true)}
              >
                <Icon className="text-white">{miniSidenav ? "menu_open" : "menu"}</Icon>
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                onClick={handleConfiguratorOpen}
              >
                <Icon>settings</Icon>
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <Icon className="text-white">notifications</Icon>
              </IconButton>
              {renderMenu()}
            </SoftBox>
          </SoftBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
  onToggleDrawer: PropTypes.func.isRequired,
};

export default DashboardNavbar;
