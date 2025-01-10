import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../../Redux/slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Votre Panier</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price}€
            <button onClick={() => handleRemove(item.id)}>Retirer</button>
          </li>
        ))}
      </ul>
      <h3>Total : {total}€</h3>
      <button onClick={handleClear}>Vider le Panier</button>
    </div>
  );
};

export default Cart;
