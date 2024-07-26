import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import Avatar from "@mui/material/Avatar";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavCard from "examples/Sidenav/SidenavCard";
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";
import { useSoftUIController, setMiniSidenav } from "context";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../src/firebase";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [user] = useAuthState(auth);
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    window.addEventListener("resize", handleMiniSidenav);
    handleMiniSidenav();

    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            color={color}
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink to={route} key={key}>
          <SidenavCollapse
            color={color}
            key={key}
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <SoftTypography
          key={key}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          opacity={0.6}
          pl={3}
          mt={2}
          mb={1}
          ml={1}
          color="#FFFFFF"
        >
          {title}
        </SoftTypography>
      );
    } else if (type === "divider") {
      returnValue = <Divider key={key} sx={{ borderColor: "#E0B15E" }} />;
    }

    return returnValue;
  });

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, miniSidenav }}
      sx={{
        backgroundColor: "#D1A77A !important",
        color: "#FFFFFF",
        borderRight: "1px solid #E0B15E",
        "& .MuiListItem-root": {
          "& .Mui-selected": {
            backgroundColor: "#E0B15E !important",
            color: "#FFFFFF !important",
          },
          "& .Mui-selected:hover": {
            backgroundColor: "#B08D6C !important",
          },
          "&:hover": {
            backgroundColor: "#B08D6C !important",
          },
        },
        "& .MuiLink-root": { color: "#FFFFFF !important" },
        "& .MuiLink-root:hover": { backgroundColor: "#E0B15E !important" },
      }}
    >
      <SoftBox pt={3} pb={1} px={4} textAlign="center">
        <SoftBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <SoftTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </SoftTypography>
        </SoftBox>
        {/* <SoftBox
          component={NavLink}
          to="/"
          display="flex"
          alignItems="center"
          sx={{
            backgroundColor: "#D1A77A",
            padding: "0.5rem 1rem", // Adding some padding for better visual appearance
            borderRadius: "8px" // Optional: to make the background corners rounded
          }}
        >
          {brand && <SoftBox component="img" src={brand} alt="Soft UI Logo" width="2rem" />}
          <SoftBox
            width={!brandName && "100%"}
            sx={(theme) => ({
              ...sidenavLogoLabel(theme, { miniSidenav }),
              display: "flex",
              alignItems: "center",
            })}
          >
            <SoftTypography component="h6" variant="button" fontWeight="medium" color="#FFFFFF">
              {brandName}
            </SoftTypography>
          </SoftBox>
        </SoftBox> */}
      </SoftBox>
      <Divider sx={{ borderColor: "#E0B15E" }} />

      {!miniSidenav && (
        <SoftBox
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            borderBottom: '1px solid #E0B15E',
          }}
        >
          <Avatar
            src={user ? user.photoURL : 'https://via.placeholder.com/80'}
            alt="Profile Picture"
            sx={{ width: 80, height: 80, mb: 1 }}
          />
          <SoftTypography variant="h6" fontWeight="medium" color="#FFFFFF">
            {user ? user.displayName : 'Sign In'}
          </SoftTypography>
          <SoftTypography variant="body2" color="#FFFFFF">
            Premium Member
          </SoftTypography>
          <SoftBox display="flex" alignItems="center" mt={1}>
            <Icon sx={{ fontSize: 16, color: '#FFFFFF' }}>star</Icon>
            <SoftTypography variant="body2" color="#FFFFFF" ml={0.5}>
              24/7 Support
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      )}

      <List>{renderRoutes}</List>
      <SoftBox pt={2} my={2} mx={2} mt="auto">
        <SidenavCard />
      </SoftBox>
    </SidenavRoot>
  );
}

Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
