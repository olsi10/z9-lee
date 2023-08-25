import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mainImg from "../assets/shop/main.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  // 최고, 최저 상품 조회
  const [highestPriceProduct, setHighestPriceProduct] = useState(null);
  const [lowestPriceProduct, setLowestPriceProduct] = useState(null);

  // 정렬
  const [selectedOption, setSelectedOption] = useState("price"); // 기본 정렬 옵션

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          `http://localhost:3001/products?sort=${selectedOption}`
        );
        const { products: dataProducts, totalCount: dataTotalCount } =
          response.data;
        setProducts(dataProducts);
        setTotal(dataTotalCount);
        setHighestPriceProduct(highestPriceProduct);
        setLowestPriceProduct(lowestPriceProduct);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, [selectedOption]);

  return (
    <Container>
      <div className="animated-title">
        <div className="track">
          <div className="content">
            &nbsp;Safe production, safe products, safe earth, safe me, we start
            with you. &nbsp;안전한 생산, 안전한 제품, 안전한 지구, 안전한 나,
            우리는 당신과 함께 시작합니다.
            &nbsp;安全な生産、安全な製品、安全な地球、安全な私、私たちはあなたから始めます。
          </div>
        </div>
      </div>
      <Main>
        <img src={mainImg} alt="" />
        <Text>Start With You</Text>
        <Des>Make it our clean Earth</Des>
        <Button>More</Button>
      </Main>

      <Link to="/add">
        <button>상품 추가</button>
      </Link>

      <p>상품 갯수 {total}</p>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="id">품번순 오름</option>
        <option value="idd">품번순 내림</option>
        <option value="price">가격 순 오름</option>
        <option value="priced">가격 순 내림</option>
        <option value="inventory">재고량 순 오름</option>
        <option value="inventoryd">재고량 순 내림</option>
      </select>

      <h1>가장비싼제품 : 현수막 재활용한 지갑, 가격 : 34000</h1>
      <h1>가장재고가많은제품 : 폐타이어 재사용 신호등 화분, 재고량 : 22</h1>

      <Products>
        {products.map((product) => (
          <Link key={product[0]} to={`/product/${product[0]}`}>
            <Div>
              <p>품번: {product[0]}</p>
              <p>제품명: {product[1]}</p>
              <p>가격: {product[2]}</p>
              <p>재고량: {product[5]}</p>
              <img src={product[4]} alt="" />
            </Div>
          </Link>
        ))}
      </Products>
    </Container>
  );
};

const Products = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Div = styled.div`
  width: 80%;
  height: auto;
  border: 0.1px solid black;

  img {
    width: 100%;
  }
`;

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

// const BillBoard = styled.div`
//   width: 100%;
//   height: 72px;
//   background-color: #ECF1F4;
//   padding-top: 40px;
//   font-size: 24px;
//   overflow: hidden;
// `;

export default Shop;
