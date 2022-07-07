import React, { useEffect, useState } from 'react';
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
  const [ordersInCart, setOrdersInCart] = useState([]);
  const [fastfoods, setFastfoods] = useState([]);
  const [products, setProducts] = useState([]);
  const [chosenShop, setChosenShop] = useState(null);

  useEffect(() => {
    const fastfoodsData = [
      {
        title: 'Donalds',
        products: [
          {
            img: 'https://source.unsplash.com/random',
            title: 'Ham-Burger',
            price: '10',
          },
          {
            img: 'https://source.unsplash.com/random',
            title: 'Cheese-burger',
            subheader: 'Most popular',
            price: '15',
          },
          {
            img: 'https://source.unsplash.com/random',
            title: 'Big-Mack',
            price: '30',
          },
        ],
      },
      {
        title: 'FCK',
        products: [
          {
            img: 'https://source.unsplash.com/random',
            title: 'FCurger',
            price: '5',
          },
          {
            img: 'https://source.unsplash.com/random',
            title: 'Cheese-FCurger',
            subheader: 'Most popular',
            price: '15',
          },
          {
            img: 'https://source.unsplash.com/random',
            title: 'FCK-Naggets',
            price: '30',
          },
        ],
      },
      {
        title: 'FoxiFF',
        products: [
          {
            img: 'https://source.unsplash.com/random',
            title: 'FoxiFF-Burger',
            price: '20',
          },
          {
            img: 'https://source.unsplash.com/random',
            title: 'FoxiFF-Nuggets',
            subheader: 'Most popular',
            price: '25',
          },
          {
            img: 'https://source.unsplash.com/random',
            title: 'FoxiFF-Cola',
            price: '7',
          },
        ],
      },
      {
        title: 'HataPuz',
        products: [
          {
            img: 'https://source.unsplash.com/random',
            title: 'HataPuz-Borshch',
            price: '20',
          },
          {
            img: 'https://source.unsplash.com/random',
            title: 'HataPuz-Kotleti',
            subheader: 'Most popular',
            price: '25',
          },
          {
            img: 'https://source.unsplash.com/random',
            title: 'HataPuz-Stake',
            price: '35',
          },
        ],
      },
      {
        title: 'Pelmeni',
        products: [
          {
            img: 'https://source.unsplash.com/random',
            title: 'Ti-za-pelmen-zaplatil',
            price: '5',
          },
          {
            img: 'https://source.unsplash.com/random',
            title: 'Okroshka',
            subheader: 'Most popular',
            price: '7',
          },
          {
            img: 'https://source.unsplash.com/random',
            title: 'Pirojok',
            price: '8',
          },
        ],
      },
    ];

    if (products.length === 0) {
      let fastfoods = [];
      fastfoodsData.map(fastfood => {
        fastfoods = [...fastfoods, fastfood.title];
        return fastfood;
      });

      setFastfoods(fastfoods);
      setProducts(fastfoodsData);
    }
  }, [products.length]);

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
