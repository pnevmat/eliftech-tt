import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Header from './components/Header';
import ShopsMenu from './components/ShopsMenu/ShopsMenu';
import ProductCards from './components/ProductCards';
import CustomerData from './components/CustomerData';
import OrderCards from './components/OrderCards';
import Footer from './components/Footer/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import './App.css';

function App() {
  const [activeMenuBtn, setActiveMenuBtn] = useState('Shop');
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {activeMenuBtn === 'Shop' ? (
        <ShopContainer>
          <ShopsMenu />
          <ProductCards />
        </ShopContainer>
      ) : (
        <ShopContainer>
          <CustomerData />
          <OrderCards />
        </ShopContainer>
      )}
      <Footer />
    </ThemeProvider>
  );
}

const ShopContainer = styled(Box)({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-around',
  marginTop: '64px',
});

export default App;
