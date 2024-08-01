import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import routes from '../../../routes'; // Ensure this path is correct
import SoftTypography from 'components/SoftTypography';

export default function TemporaryDrawer({ open, onToggleDrawer }) {
  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#D1A77A',
        color: '#FFFFFF',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      role="presentation"
      onClick={() => onToggleDrawer(false)}
    >
      <Box
        sx={{
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #E0B15E',
          justifyContent: 'center',
        }}
      >
        <SoftTypography variant="h6" color="#FFFFFF">
          Menu
        </SoftTypography>
      </Box>
      <Divider sx={{ borderColor: '#E0B15E' }} />
      
      <List>
        {routes.map(({ route, name, icon, key }) => (
          route ? (
            <ListItem key={key} disablePadding>
              <ListItemButton component={Link} to={route} onClick={() => onToggleDrawer(false)}>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={name} sx={{ color: '#FFFFFF' }} />
              </ListItemButton>
            </ListItem>
          ) : null
        ))}
      </List>
      
      <Divider sx={{ borderColor: '#E0B15E' }} />
      
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'flex-end',
          padding: '16px',
          borderTop: '1px solid #E0B15E',
        }}
      >
        <SoftTypography variant="body2" color="#FFFFFF">
          Footer Content
        </SoftTypography>
      </Box>
    </Box>
  );

  return (
    <Drawer
      open={open}
      onClose={() => onToggleDrawer(false)}
      PaperProps={{
        sx: {
          width: 250,
          backgroundColor: '#D1A77A',
          color: '#FFFFFF',
          borderRight: '1px solid #E0B15E',
          '& .MuiListItem-root': {
            '& .Mui-selected': {
              backgroundColor: '#E0B15E !important',
              color: '#FFFFFF !important',
            },
            '&:hover': {
              backgroundColor: '#B08D6C !important',
            },
          },
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}
