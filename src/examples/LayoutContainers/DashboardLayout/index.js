import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TemporaryDrawer from './drawer';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

const DashboardLayout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <TemporaryDrawer open={drawerOpen} onToggleDrawer={handleToggleDrawer} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: '100%',
          transition: 'margin 0.3s ease',
          marginLeft: drawerOpen ? '250px' : '0px', // Adjust as needed
        }}
      >
        <DashboardNavbar onToggleDrawer={handleToggleDrawer} />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
