import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cart from "../assets/icons/cart.png";

const Navigation = () => {
  return (
    <Header>
      <Logo>
        <Link to="/">지구리</Link>
      </Logo>
      <Item>
        <Link to="/shop">Shop</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/user">User</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact1">Contact1</Link>
        <Cart>
          <Link to="/cart">
            <img src={cart} alt="장바구니" />0
          </Link>
        </Cart>
      </Item>
    </Header>
  );
};

const Header = styled.div`
  width: 100%;
  height: 135px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

const Logo = styled.div`
  margin: 100px;
  font-size: 48px;
  font-family: PyeongChangPeace;
`;

const Item = styled.div`
  display: flex;
  width: 800px;
  justify-content: space-evenly;

  /* 폰트 설정 */
  font-size: 20px;
  font-family: inter;
  font-weight: 200;
  color: black;
  text-decoration: none;
`;

const Cart = styled.div``;

export default Navigation;
