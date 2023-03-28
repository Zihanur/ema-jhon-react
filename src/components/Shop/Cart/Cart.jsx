import React from 'react';

const Cart = ({cart}) => {
  console.log(cart)

  let totalPrice = 0;
  let totalCharge = 0;
  let totalTax = 0;
  let totalGrand = 0;
  for (const product of cart) {
    totalPrice += product.price;
    totalCharge += product.shipping;
    totalTax += totalPrice*7/100;
    totalGrand += totalPrice + totalCharge + totalTax;
  }
  
  return (
    <div>
      <h1>Order Summary</h1>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${totalCharge}</p>
        <p>Tax: ${totalTax.toFixed(2)}</p>
        <h4>Grand Total: ${totalGrand.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;