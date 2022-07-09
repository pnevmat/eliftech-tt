import React, { useEffect, useState } from 'react';
import shopsQuery from './api/shopsQuery';
import productsQuery from './api/productsQuery';
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
  const [fastfoods, setFastfoods] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeMenuBtn, setActiveMenuBtn] = useState('Shop');
  const [chosenShop, setChosenShop] = useState(null);
  const [ordersInCart, setOrdersInCart] = useState([]);

  useEffect(() => {
    // const fastfoodsData = [
    //   {
    //     title: 'Donalds',
    //     products: [
    //       {
    //         img: 'https://source.unsplash.com/random',
    //         title: 'Ham-Burger',
    //         price: '10',
    //       },
    //       {
    //         img: 'https://source.unsplash.com/random',
    //         title: 'Cheese-burger',
    //         subheader: 'Most popular',
    //         price: '15',
    //       },
    //       {
    //         img: 'https://source.unsplash.com/random',
    //         title: 'Big-Mack',
    //         price: '30',
    //       },
    //     ],
    //   },
    // ];

    const timoutId = setTimeout(() => {
      shopsQuery().then(({ data }) => {
        setFastfoods(data);
      });

      productsQuery().then(({ data }) => {
        setProducts(data);
      });
    }, 1500);

    return () => clearTimeout(timoutId);
  }, []);

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setActiveMenuBtn={setActiveMenuBtn} />
      {activeMenuBtn === 'Shop' ? (
        <ShopContainer>
          <ShopsMenu fastfoods={fastfoods} setChosenShop={setChosenShop} />
          <ProductCards
            chosenShop={chosenShop}
            products={products}
            ordersInCart={ordersInCart}
            setOrdersInCart={setOrdersInCart}
          />
        </ShopContainer>
      ) : (
        <ShopContainer>
          <CustomerData />
          <OrderCards ordersInCart={ordersInCart} />
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
