import React, { Fragment } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Shops({ fastfoods, setChosenShop }) {
  return (
    <>
      {fastfoods.map(fastfood => (
        <ListItemButton
          key={fastfood._id}
          onClick={e => setChosenShop(e.target.textContent)}
        >
          <ListItemText primary={fastfood.title} />
        </ListItemButton>
      ))}
    </>
  );
}
