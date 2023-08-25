import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const ShopProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`http://localhost:3001/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    setCartItems([...cartItems, product]);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <Div>
          <h2>품번: {product[0]}</h2>
          <p>제품명: {product[1]}</p>
          <p>가격: {product[2]}</p>
          <p>설명: {product[3]}</p>
          <img src={product[4]} alt={product.name} />
        </Div>
        <Button>
          <button onClick={addToCart}>장바구니</button>
        </Button>
        <Link to="/cart">
          <p>장바구니로 이동</p>
        </Link>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
`;

const Div = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Button = styled.div`
  width: 200px;
  height: 80px;

  button {
    width: 100%;
    background-color: green;
    color: #fff;
    font-weight: 500;
    font-family: "noto";
  }
`;

export default ShopProduct;
