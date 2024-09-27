import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, DrawerHeader } from "./materialItem";
  import Divider from '@mui/material/Divider';
  import IconButton from '@mui/material/IconButton';
  import ListItem from '@mui/material/ListItem';
  import List from '@mui/material/List';
  import ListItemIcon from '@mui/material/ListItemIcon';
  import ListItemText from '@mui/material/ListItemText';
  import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
  //import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  import { NAV_LIST_ITEMS } from "./navItems";


const Sidebar = ({ open, handleDrawerClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const handleSelect = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      variant="permanent"  
      open={open}
    >
        <DrawerHeader sx={{ backgroundColor: '#e0d4ce', color: 'rgba(0, 0, 0, 0.54)' }}>
          IntegrateSoft
          <IconButton onClick={handleDrawerClose} sx={{ p:2, color: 'rgba(0, 0, 0, 0.54)' }}>
            <ChevronLeftIcon />
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
          </IconButton>
        </DrawerHeader>
      <Divider />
      <List sx={{ backgroundColor: '#e0d4ce', color: '#FFF' }}>
        {NAV_LIST_ITEMS.map((item, id) => (
          <ListItem            
            key={id}
            component={Link}
            to={item.route}
            selected={id === selectedIndex}
            onClick={event => handleSelect(event, id)}
            sx={(id === selectedIndex) ? { backgroundColor: '#99613f', color: "white", fontWeight: 600} : { backgroundColor: '#e0d4ce', color: 'rgba(0, 0, 0, 0.54)'} }
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{ variant: "h5" }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;