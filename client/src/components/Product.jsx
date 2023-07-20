import React from "react";
import styled from "styled-components";

const Product = ({ image, text }) => {
  return (
    <Div>
      <img src={image} alt="" />
      <Text>{text}</Text>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 80% 20%;
  > img {
    width: 100%;
  }
`;

const Text = styled.div`
  font-family: Noto;
  font-weight: 200;
`;

export default Product;
