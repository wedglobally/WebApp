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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(10px)',
        boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)',
        backgroundImage: 'linear-gradient(135deg, #e0b15e, #4E8098, #2A3D66)',
        color: '#FFFFFF',
      }}
      role="presentation"
      onClick={() => onToggleDrawer(false)}
    >
      <Box
        sx={{
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid rgba(224, 177, 94, 0.5)',
          justifyContent: 'center',
        }}
      >
        <SoftTypography variant="h6" color="#FFFFFF">
          Menu
        </SoftTypography>
      </Box>
      <Divider sx={{ borderColor: 'rgba(224, 177, 94, 0.5)' }} />
      
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
      
      <Divider sx={{ borderColor: 'rgba(224, 177, 94, 0.5)' }} />
      
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'flex-end',
          padding: '16px',
          borderTop: '1px solid rgba(224, 177, 94, 0.5)',
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
          borderRight: '1px solid rgba(224, 177, 94, 0.5)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)',
          backgroundImage: 'linear-gradient(135deg, rgba(224, 177, 94, 0.8) 0%, rgba(209, 167, 122, 0.8) 100%)',
          '& .MuiListItem-root': {
            '& .Mui-selected': {
              backgroundColor: 'rgba(224, 177, 94, 0.7) !important',
              color: '#FFFFFF !important',
            },
            '&:hover': {
              backgroundColor: 'rgba(176, 141, 108, 0.8) !important',
            },
          },
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}
