import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Shops from './Shops';
import { styled } from '@mui/material/styles';

export default function ShopsMenu({ fastfoods, setFastfoods, setChosenShop }) {
  return (
    <Drawer variant="permanent">
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: [1],
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Shops:
        </Typography>
      </Toolbar>
      <Divider />
      <List component="nav">
        <Shops
          fastfoods={fastfoods}
          setFastfoods={setFastfoods}
          setChosenShop={setChosenShop}
        />
      </List>
    </Drawer>
  );
}

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop,
})(({ theme }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));
