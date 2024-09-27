import React from 'react';
import { AppBar } from "./materialItem";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const ApplicationBar = ({ open, handleDrawerOpen }) =>{
  
  return (
    <AppBar position="fixed" open={open} sx={{ backgroundColor: '#ba6f42', color: '#FFF' }}>
        <Toolbar>        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />            
          </IconButton>
          <Typography variant="h6" noWrap component="div"  sx={{ margin: 'auto' }}>
            Coffee Shop Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default ApplicationBar;