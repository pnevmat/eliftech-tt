import React, { Fragment } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PeopleIcon from '@mui/icons-material/People';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';

export default function Shops({ fastfoods, setChosenShop }) {
  return (
    <>
      {fastfoods.map(fastfood => (
        <ListItemButton
          key={fastfood}
          onClick={e => setChosenShop(e.target.textContent)}
        >
          <ListItemIcon>{/* <DashboardIcon /> */}</ListItemIcon>
          <ListItemText primary={fastfood} />
        </ListItemButton>
      ))}

      {/* <ListItemButton>
        <ListItemIcon>
					<ShoppingCartIcon />
					</ListItemIcon>
        <ListItemText primary="FCK" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
					<PeopleIcon />
					</ListItemIcon>
        <ListItemText primary="FoxiFF" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
					<BarChartIcon />
					</ListItemIcon>
        <ListItemText primary="Pelmeni" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
					<LayersIcon />
					</ListItemIcon>
        <ListItemText primary="HataPuz" />
      </ListItemButton> */}
    </>
  );
}
