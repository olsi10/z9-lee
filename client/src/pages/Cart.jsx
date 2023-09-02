import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [userName, setUserName] = useState("");
  // const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function userInfo() {
      try {
        const res = await axios.get("http://localhost:3001/getUserName", {
          withCredentials: true,
        });
        setUserName(res.data.userName);
      } catch (error) {
        console.error(error);
      }
    }

    userInfo();
  }, []);

  console.log(userName);

  return (
    <div>
      <h2>{userName}님의 장바구니</h2>
      <p>분명눌럿는데안담기는매.직</p>
      {/* <ul>
        {cartItems.map((item) => (
          <li key={item.product_id}>
            상품 ID: {item.product_id}, 수량: {item.quantity}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Cart;
