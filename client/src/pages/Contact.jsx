import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [products, setProducts] = useState([]);

  // 서버로부터 상품 목록을 가져오는 함수
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/user");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  console.log(products);

  // 컴포넌트가 마운트될 때 서버로부터 상품 목록을 가져옴.
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>상품 목록</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <p>유저 이름: {product[0]}</p>
            <p>가입일: {product[1]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;