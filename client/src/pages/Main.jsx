import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import intro1 from "../assets/video/intro1.mp4";
import intro2 from "../assets/video/intro2.mp4";
import intro3 from "../assets/video/intro3.mp4";
import intro4 from "../assets/video/intro4.mp4";
import intro5 from "../assets/video/intro5.mp4";
import scroll from "../assets/icons/scroll.png";
import mainHand from "../assets/product/main-hand.png";
import { products } from "../json/MianProduct";
import blog1 from "../assets/product/product1.png";
import blog2 from "../assets/product/product2.png";
import blog3 from "../assets/product/product3.png";
import blog4 from "../assets/product/product4.png";

// 스크롤
import { Element, Link } from "react-scroll";

const Main = () => {
  // 비디오 랜덤 재생
  const videoArr = [intro1, intro2, intro3, intro4, intro5];
  const [RandomVid, setRandomVid] = useState();

  useEffect(() => {
    // 컴포넌트가 마운트되면 랜덤 동영상 설정
    RandomVideo();
    // 일시적으로 에러 해결
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function RandomVideo() {
    const vidNum = Math.floor(Math.random() * videoArr.length);
    setRandomVid(videoArr[vidNum]);
  }

  const [dataList, setDataList] = useState([]);

  const imgArr = [blog1, blog2, blog3, blog4];

  useEffect(() => {
    setDataList(products);
  }, []);

  return (
    <Container>
      {/* 인트로 비디오 */}
      <IntroDiv>
        <Text>
          My home planet saved
          <br /> with my
          <br /> own hands
        </Text>
        <Intro>
          {/* RandomVid 값이 존재할 때만 source 태그를 렌더링 */}
          {RandomVid && (
            <video autoPlay loop muted onEnded={RandomVideo}>
              <source src={RandomVid} />
            </video>
          )}
        </Intro>
        <Link to="productDiv" smooth={true} duration={800}>
          <ScrollDiv className="scroll">
            <p>click to scroll</p>
            <img src={scroll} alt="스크롤" />
          </ScrollDiv>
        </Link>
      </IntroDiv>

      {/* 프로덕트 소개 */}
      <Element name="productDiv">
        <ProductDiv>
          <p>지구리의 베스트 셀러</p>
          <ProductList>
            {dataList.map((product, index) => (
              <ProductItem key={index}>
                {/* 이미지 배열에 저장해서 불러오기 */}
                <img src={imgArr[index]} alt="" />
                <p>{product.text}</p>
              </ProductItem>
            ))}
          </ProductList>
        </ProductDiv>
      </Element>

      {/* 지구리 소개 */}
      <IntroText>
        <Title>지구리에 대한 짧은 소개</Title>
        <Description>
          <DesDiv>
            <p>안전한 제조, 성분</p>
            <p>
              안전한 제조방법과 재료를 사용하여
              <br />
              지구와 당신만을 위한 제품을 제작합니다. 걱정마세요!
            </p>
          </DesDiv>
          <DesDiv>
            <p>18개의 환경 기관의 인증</p>
            <p>
              안전성과 환경을 생각한 제품을 통해
              <br />
              18개의 환경 기관에서 인증을 받아 신뢰도를 향상시켰습니다.
            </p>
          </DesDiv>
          <DesDiv>
            <p>원데이 클래스 운영</p>
            <p>
              전국에 36개, 해외에 12개의 공방을 운영하고 있습니다.
              <br /> 원데이 클래스를 통해 직접 지구를 지킨다는 자부심을
              느껴보세요!
            </p>
          </DesDiv>
        </Description>
      </IntroText>

      <Middle>
        <img src={mainHand} alt="" />
      </Middle>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;

// 스르륵 사라지는 애니메이션
const fadeOutAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
  display: block;
}
`;

const Text = styled.div`
  font-family: Noto;
  font-weight: 700;
  font-size: 66px;
  line-height: 120px;
  color: #fff;
  position: absolute;
  top: 292px;
  left: 125px;
  z-index: 99;
  opacity: 0;
`;

const IntroDiv = styled.div`
  width: 100%;
  height: 1000px;
  overflow-y: hidden;
  &:hover ${Text} {
    animation: ${fadeOutAnimation} 1s ease-in-out forwards;
  }
`;

const Intro = styled.div`
  width: 100%;
  height: 100%;
  filter: brightness(40%);
`;

const ScrollDiv = styled.div`
  color: #fff;
  position: absolute;
  top: 990px;
  left: 880px;
  &:hover {
    cursor: pointer;
  }
`;

const ProductDiv = styled.div`
  height: 500px;
  margin: 270px 130px 130px 130px;
  > p {
    font-size: 36px;
    font-weight: 700;
    font-family: Noto;
    color: #1e1e1e;
  }
`;

const ProductList = styled.div`
  height: 490px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 120px;
`;

const IntroText = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ecf1f4;
  padding: 50px 100px 100px 100px;
  margin-top: 350px;
`;

const Title = styled.div`
  font-family: Noto;
  font-weight: 700;
  font-size: 32px;
  color: #1e1e1e;
`;

const Description = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-family: Noto;
  p:first-child {
    font-weight: 700;
  }
  p:last-child {
    font-weight: 200;
  }
`;

const DesDiv = styled.div``;

const Middle = styled.div`
  margin-top: 400px;
  width: 100%;
  height: 700px;
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;

const ProductItem = styled.div`
  display: block;
  border: 1px solid #c7c7c7;
  padding: 10px;

  img {
    width: 100%;
  }

  p {
    font-family: Noto;
    font-weight: 200;
  }
`;

export default Main;
