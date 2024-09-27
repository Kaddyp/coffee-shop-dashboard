import React from 'react'
import Sidebar from './sidebar';
import ApplicationBar from './applicationBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { DrawerHeader } from "./materialItem";


function Layout({children}) {
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <>    
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <ApplicationBar open={open} handleDrawerOpen={handleDrawerOpen}/>
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} /> 
        <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f2ece9', color: '#000000de'}}>
            <DrawerHeader />          
            {children}             
        </Box>      
      </Box>
    </>

  )
}

export default Layout;