import React from 'react';
import CustomerData from './CustomerData';
import OrderCards from './OrderCards';

export default function ShoppingCart({ ordersInCart }) {
  return (
    <>
      <CustomerData />
      <OrderCards ordersInCart={ordersInCart} />
    </>
  );
}
