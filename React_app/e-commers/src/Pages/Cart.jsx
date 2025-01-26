import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Store/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
