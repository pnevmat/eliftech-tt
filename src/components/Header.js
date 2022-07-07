import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export default function Header({ setActiveMenuBtn }) {
  const navButtons = ['Shop', 'Shopping Cart'];
  return (
    <AppBar position="relative">
      <NavMenu>
        {navButtons.map((button, i) => {
          return (
            <NavButton
              sx={{
                borderRight: i < navButtons.length - 1 ? '2px solid #fff' : '',
              }}
              key={button}
              variant="h6"
              color="inherit"
              noWrap
              onClick={e => setActiveMenuBtn(e.target.textContent)}
            >
              {button}
            </NavButton>
          );
        })}
      </NavMenu>
    </AppBar>
  );
}

const NavMenu = styled(Toolbar)(i => ({
  display: 'flex',
  alignItems: 'center',
}));

const NavButton = styled(Typography)({
  display: 'inline-block',
  paddingRight: '30px',
  paddingLeft: '30px',
  '&:hover': {
    cursor: 'pointer',
  },
});
