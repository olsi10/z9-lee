import React, { useState, useEffect } from "react";

const Cart = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>안녕하세요 {user.nickname}님</p>
          <p>전화번호: {user.phone}</p>
        </div>
      ) : (
        <p>User not loggined</p>
      )}
    </div>
  );
};

export default Cart;
