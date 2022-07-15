import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Shops({ fastfoods, setFastfoods, setChosenShop }) {
  const chosenShophandler = shopName => {
    setChosenShop(shopName);
    const modifiedFastfoods = fastfoods.map(fastfood => {
      return fastfood.title !== shopName
        ? { ...fastfood, disabled: true }
        : fastfood;
    });
    setFastfoods(modifiedFastfoods);
  };

  return (
    <>
      {fastfoods.map(fastfood => (
        <ListItemButton
          key={fastfood._id}
          disabled={fastfood.disabled}
          onClick={e => chosenShophandler(e.target.textContent)}
        >
          <ListItemText primary={fastfood.title} />
        </ListItemButton>
      ))}
    </>
  );
}
