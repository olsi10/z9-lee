import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";

const ProductAdd = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    inventory: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/product", product);
      console.log("상품 추가 완료");
      navigate("/shop");
      // 상품 추가 후 처리 (예: 페이지 리다이렉트)
    } catch (error) {
      console.error("상품 추가 에러:", error);
    }
  };

  return (
    <Container>
      <h2>상품 추가</h2>
      <form onSubmit={handleSubmit}>
        <label>
          제품명:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
        <label>
          가격:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </label>
        <label>
          재고량:
          <input
            type="number"
            name="inventory"
            value={product.inventory}
            onChange={handleChange}
          />
        </label>
        <label>
          설명:
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </label>
        <label>
          이미지 URL:
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
          />
        </label>
        <button type="submit">추가</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default ProductAdd;
