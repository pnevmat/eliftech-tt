import React from 'react';
import CustomerData from './CustomerData';
import OrderCards from './OrderCards';

export default function ShoppingCart({
  userData,
  setUserData,
  ordersInCart,
  setOrdersInCart,
  validName,
  validEmail,
  validPhone,
  validAddress,
  deleteOrder,
}) {
  return (
    <>
      <CustomerData
        userData={userData}
        setUserData={setUserData}
        validName={validName}
        validEmail={validEmail}
        validPhone={validPhone}
        validAddress={validAddress}
      />
      <OrderCards
        ordersInCart={ordersInCart}
        setOrdersInCart={setOrdersInCart}
        deleteOrder={deleteOrder}
      />
    </>
  );
}
