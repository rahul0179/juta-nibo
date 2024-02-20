import React from "react";
import "../Cart/Cart.css";

const Cart = (props) => {
  let { cart } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandtotal = total + shipping + tax;
  return (
    <div className="cart">
      <h1 className="Order">Order show</h1>
      <div className="other">
        <p>Selected Item : {quantity}</p>
        <p>Total Price :{total}</p>
        <p>Total Shipping:{shipping}</p>
        <p>Tax :{tax}</p>
        <p>Grand ToTal :{grandtotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
