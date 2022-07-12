import React, { useEffect, useState } from 'react';
import shopsQuery from './api/shopsQuery';
import productsQuery from './api/productsQuery';
import usersQuery from './api/usersQuery';
import Box from '@mui/material/Box';
import Header from './components/Header';
import ShopsMenu from './components/ShopsMenu/ShopsMenu';
import ProductCards from './components/ProductCards';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Footer from './components/Footer/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import {
  nameValidator,
  emailValidator,
  phoneValidator,
  addressValidator,
} from './utils/validators';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import './App.css';

export default function App() {
  const [fastfoods, setFastfoods] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeMenuBtn, setActiveMenuBtn] = useState('Shop');
  const [chosenShop, setChosenShop] = useState(null);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  console.log('User data: ', userData);
  const [ordersInCart, setOrdersInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [validName, setValidName] = useState({ value: true, message: '' });
  const [validEmail, setValidEmail] = useState({ value: true, message: '' });
  const [validPhone, setValidPhone] = useState({ value: true, message: '' });
  const [validAddress, setValidAddress] = useState({
    value: true,
    message: '',
  });

  useEffect(() => {
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

  useEffect(() => {
    let totalPrice = 0;
    ordersInCart.map(order => {
      totalPrice += order.price * order.quontity;
      return order;
    });

    setTotalPrice(totalPrice);
  }, [ordersInCart]);

  const ordersFromShopHandler = orderedProduct => {
    if (ordersInCart.length === 0) {
      return setOrdersInCart([{ ...orderedProduct, quontity: 1 }]);
    }

    const foundOrder = ordersInCart.find(
      order => order._id === orderedProduct._id,
    );

    if (foundOrder) {
      const chageQuontity = ordersInCart.map(order =>
        order._id === foundOrder._id
          ? { ...order, quontity: order.quontity + 1 }
          : order,
      );

      setOrdersInCart(chageQuontity);
    } else {
      setOrdersInCart([...ordersInCart, { ...orderedProduct, quontity: 1 }]);
    }
  };

  const ordersQuontityChangeHandler = orderWithChangedQuontity => {
    // console.log('Order with changed quontity: ', orderWithChangedQuontity);
    const changeQuontity = ordersInCart.map(order => {
      return order._id === orderWithChangedQuontity._id
        ? orderWithChangedQuontity
        : order;
    });

    setOrdersInCart(changeQuontity);
  };

  const deleteOrderHandler = product => {
    const filteredOrders = ordersInCart.filter(
      order => order._id !== product._id,
    );

    setOrdersInCart(filteredOrders);
  };

  const customerInputsChangeHandler = (text, identifier) => {
    if (identifier === 'name') {
      setUserData({ ...userData, name: text });
      setValidName(nameValidator(text));
    } else if (identifier === 'email') {
      setUserData({ ...userData, email: text });
      setValidEmail(emailValidator(text));
    } else if (identifier === 'phone') {
      setUserData({ ...userData, phone: text });
      setValidPhone(phoneValidator(text));
    } else if (identifier === 'address') {
      setUserData({ ...userData, address: text });
      setValidAddress(addressValidator(text));
    }
  };

  const submitOrderHandler = () => {
    const dataToSubmit = { ...userData, orders: ordersInCart };
    const { name, email, phone, address, orders } = dataToSubmit;
    if (
      nameValidator(name).value &&
      emailValidator(email).value &&
      phoneValidator(phone).value &&
      addressValidator(address).value &&
      orders.length !== 0
    ) {
      usersQuery(dataToSubmit);
    } else {
      setValidName(nameValidator(name));
      setValidEmail(emailValidator(email));
      setValidPhone(phoneValidator(phone));
      setValidAddress(addressValidator(address));
    }
  };

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
            setOrdersInCart={ordersFromShopHandler}
          />
        </ShopContainer>
      ) : (
        <>
          <ShopContainer>
            <ShoppingCart
              userData={userData}
              setUserData={customerInputsChangeHandler}
              ordersInCart={ordersInCart}
              setOrdersInCart={ordersQuontityChangeHandler}
              validName={validName}
              validEmail={validEmail}
              validPhone={validPhone}
              validAddress={validAddress}
              deleteOrder={deleteOrderHandler}
            />
          </ShopContainer>
          <CardAction>
            <TotalPriceContainer>
              <Typography
                component="h2"
                variant="h4"
                color="text.secondary"
              >{`Total price: $${totalPrice}`}</Typography>
              <SubmitButton
                variant="outlined"
                align="center"
                onClick={submitOrderHandler}
              >
                Submit
              </SubmitButton>
            </TotalPriceContainer>
          </CardAction>
        </>
      )}
      <Footer />
    </ThemeProvider>
  );
}

const ShopContainer = styled(Box)({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-around',
  maxHeight: '900px',
  marginTop: '64px',
  backgroundColor: 'transparent',
});

const CardAction = styled(CardActions)({
  justifyContent: 'flex-end',
  paddingRight: '20px',
  paddingBottom: '60px',
  marginTop: '30px',
});

const TotalPriceContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '40vw',
});

const SubmitButton = styled(Button)({
  width: '100%',
  maxWidth: '300px',
  maxHeight: '150px',
  paddingTop: '15px',
  paddingRight: '40px',
  paddingBottom: '15px',
  paddingLeft: '40px',
  borderRadius: '15px',
  fontSize: '20px',
});
