import React from "react";
import styled from "styled-components";
import mainImg from "../assets/shop/main.jpg";
import product from "../json/shopProduct.json";

const Shop = () => {
  return (
    <Container>
      <div className="animated-title">
        <div className="track">
          <div className="content">&nbsp;Safe production, safe products, safe earth, safe me, we start with you.    &nbsp;안전한 생산, 안전한 제품, 안전한 지구, 안전한 나, 우리는 당신과 함께 시작합니다.    &nbsp;安全な生産、安全な製品、安全な地球、安全な私、私たちはあなたから始めます。</div>
        </div>
      </div>
      <Main>
        <img src={mainImg} alt="" />
        <Text>Start With You</Text>
        <Des>Make it our clean Earth</Des>
        <Button>More</Button>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Main = styled.div`
  width: 100%;
  height: 900px;
  overflow: hidden;
  > img {
    width: 100%;
    filter: brightness(70%);
  }
`;

const Text = styled.div`
  position: absolute;
  top: 577px;
  left: 460px;
  font-family: inter;
  font-weight: bold;
  font-size: 148px;
  color: #fff;
  letter-spacing: 4px;
`;

const Des = styled.div`
  position: absolute;
  top: 947px;
  left: 835px;
  font-family: inter;
  font-weight: 300;
  font-size: 24px;
  color: #fff;
`;

const Button = styled.div`
  position: absolute;
  top: 1027px;
  left: 865px;
  width: 200px;
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 3.2;
  font-family: inter;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: black;
  }
`;

const BillBoard = styled.div`
  width: 100%;
  height: 72px;
  background-color: #ECF1F4;
  padding-top: 40px;
  font-size: 24px;
  overflow: hidden;
`;

export default Shop;
