import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await axios.get(`http://localhost:3001/api/cart`);
        setCartItems(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCart();
  }, []);

  return (
    <div>
      <h2>장바구니</h2>
      <p>분명눌럿는데안담기는매.직</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product_id}>
            상품 ID: {item.product_id}, 수량: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
