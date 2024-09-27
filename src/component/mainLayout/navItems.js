import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import * as ROUTES from "../../pages/routes";

export const NAV_LIST_ITEMS = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    route: ROUTES.DASHBOARD
  },
  {
    name: "Orders",
    icon: <ListAltIcon />,
    route: ROUTES.ORDERS
  },
  {
    name: "Employees",
    icon: <PeopleIcon />,
    route: ROUTES.EMPLOYEES
  },
  {
    name: "Products",
    icon: <ShoppingBasketIcon />,
    route: ROUTES.PRODUCTS
  }
];
