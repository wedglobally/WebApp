import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../../../../assets/websiteasset/img/Wedglobally_icon.png";
import { auth } from "../../../../firebase";

// Styled component for navigation buttonsß
const NavButton = styled(Button)({
  color: 'white', // Change font color to white
  margin: '0 10px',
  border: '2px solid white', // Add border
  borderRadius: '20px', // Add border-radius for oval shape
  padding: '5px 15px', // Add padding for spacing
  textDecoration: 'none',
  '&.active': {
    borderBottom: '2px solid white',
  },
  '&:hover': {
    backgroundColor: '#D1A77A', // Update hover color
    color: 'white', // Ensure text color contrasts with background
  }
});

// Styled component for the sign-in button
const SignInButton = styled(Button)({
  color: '#E0B15E',
  backgroundColor: 'white',
  margin: '0 10px',
  border: '2px solid white', // Add border
  borderRadius: '20px', // Add border-radius for oval shape
  padding: '5px 15px', // Add padding for spacing
  '&:hover': {
    backgroundColor: '#D1A77A', // Update hover color
  },
});

// Styled component for the dropdown menu
const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    backgroundColor: '#E0B15E',
    color: 'white',
    borderRadius: '8px',
    marginTop: '10px',
    minWidth: '200px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for better visibility
  },
  '& .MuiMenuItem-root': {
    padding: '10px 20px',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#D1A77A', // Update hover color
    },
  },
});

// Main component
const WedGloballyMenu = ({ menuItems }) => {
  const [user] = useAuthState(auth);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#E0B15E' }}>
      <Toolbar>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          {/* Logo on the left */}
          <Box display="flex" alignItems="center">
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
              WedGlobally
            </Typography>
          </Box>

          {/* Navigation buttons in the center */}
          <Box display="flex" justifyContent="center" flexGrow={1} position="relative">
            {menuItems.map((item) => (
              item.subMenu ? (
                <React.Fragment key={item.label}>
                  <NavButton
                    aria-controls={open ? 'about-menu' : undefined}
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                  >
                    {item.label}
                  </NavButton>
                  <StyledMenu
                    id="about-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      'aria-labelledby': 'about-us-button',
                    }}
                  >
                    {item.subMenu.map((subItem) => (
                      <MenuItem key={subItem.label} onClick={handleMenuClose} component="a" href={subItem.href}>
                        {subItem.label}
                      </MenuItem>
                    ))}
                  </StyledMenu>
                </React.Fragment>
              ) : (
                <NavButton key={item.label} href={item.href} className={item.className}>
                  {item.icon && React.createElement(item.icon, { sx: { marginRight: 1 } })}
                  {item.label}
                </NavButton>
              )
            ))}
          </Box>

          {/* Sign-in button on the right */}
          <Box>
            <SignInButton href="/wedglobally/authentication/sign-in">
              {user ? (<> {user.displayName} </>) : (<> Sign In </>)}
            </SignInButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Prop types for menu items
WedGloballyMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      icon: PropTypes.elementType,
      subMenu: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ),
      className: PropTypes.string,
    })
  ).isRequired,
};

export default WedGloballyMenu;
