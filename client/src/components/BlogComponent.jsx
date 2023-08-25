import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { getPostByNo } from "../json/Data";
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import blog4 from "../assets/blog/blog4.png";
import blog5 from "../assets/blog/blog5.png";
import blog6 from "../assets/blog/blog6.png";
import underImg from "../assets/blog/blog-under1.png";

const BlogComponent = ({ history, location, match }) => {
  const [data, setData] = useState({});
  const { id } = useParams(); // 구조분해할당
  const navigate = useNavigate();

  useEffect(() => {
    setData(getPostByNo(id));
  }, []);

  const imgArr = [blog1, blog2, blog3, blog4, blog5, blog6];
  // 해당 블로그의 인덱스를 구합니다.
  const index = data.id ? parseInt(data.id, 10) - 1 : 0;
  // 이미지 배열에서 해당 블로그에 맞는 이미지 URL을 가져옵니다.
  const imageUrl = imgArr[index] || "";

  return (
    <div>
      <div className="post-view-wrapper">
        {data ? (
          <Container>
            <Top>
              <img src={imageUrl} alt="" />
            </Top>
            <Title>
              <p>{data.title}</p>
              <span>{data.createDate}</span>
            </Title>
            <MainText>
              <div>
                <span>{data.content}</span>
              </div>
              <div>
                <img src={imageUrl} alt="" />
              </div>
            </MainText>
            <Footer>
              <img src={underImg} alt="" />
              <span>{data.sub}</span>
            </Footer>

            <button>삭제</button>
            <button>수정</button>
            <button>신고</button>
          </Container>
        ) : (
          "해당 게시글을 찾을 수 없습니다."
        )}
        <button className="post-view-go-list-btn" onClick={() => navigate(-1)}>
          목록으로 돌아가기
        </button>
      </div>
    </div>
  );
};

const Container = styled.div`
  width: 70%;
  margin: 200px auto;
  justify-content: center;
`;

const Top = styled.div`
  width: 100%;
  height: 425px;
  margin-bottom: 36px;
  overflow: hidden;

  img {
    width: 100%;
    transform: translate(50% -50%);
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
    padding: 0;
    font-size: 27px;
    font-weight: 700;
    font-family: Noto;
  }
  span {
    font-size: 20px;
    font-family: inter;
    font-weight: 500;
    color: #515151;
    letter-spacing: 2px;
  }
`;

const MainText = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 6fr 4fr;
  margin: 70px auto 0px auto;
  gap: 100px;

  img {
    filter: brightness(60%);
  }

  span {
    white-space: pre-line;
    line-height: 2;
    margin-right: 20px;
    font-family: Noto;
    font-weight: 200;
    font-size: 18px;
  }
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  margin: 170px auto;
  gap: 100px;

  span {
    white-space: pre-line;
    font-family: inter;
    font-weight: 500;
    font-size: 24px;
  }
`;

export default BlogComponent;
