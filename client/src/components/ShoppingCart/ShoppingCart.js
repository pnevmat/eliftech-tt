import React from 'react';
import CustomerData from './CustomerData';
import OrderCards from './OrderCards';

export default function ShoppingCart({
  userData,
  setUserData,
  ordersInCart,
  setOrdersInCart,
}) {
  return (
    <>
      <CustomerData userData={userData} setUserData={setUserData} />
      <OrderCards
        ordersInCart={ordersInCart}
        setOrdersInCart={setOrdersInCart}
      />
    </>
  );
}
