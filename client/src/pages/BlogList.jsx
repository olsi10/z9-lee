import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { postList } from "../json/Data";
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import blog4 from "../assets/blog/blog4.png";
import blog5 from "../assets/blog/blog5.png";
import blog6 from "../assets/blog/blog6.png";

const BlogList = (props) => {
  const [dataList, setDataList] = useState([]);

  const imgArr = [blog1, blog2, blog3, blog4, blog5, blog6];

  useEffect(() => {
    setDataList(postList);
  }, []);

  return (
    <Box>
      {dataList
        ? dataList.map((item, index) => {
            return (
              <Link to={`/blogView/${item.id}`}>
                <Container key={index}>
                  {/* <img src={image1} alt="" /> */}
                  <img src={imgArr[index]} alt="" />
                  <p>{item.createDate}</p>
                  <span>{item.title}</span>
                  {/* <p>{item.readCount}</p> */}
                </Container>
              </Link>
            );
          })
        : ""}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 200px auto;

  @media (max-width: 700px) {
    /* 가로 크기가 700px 이하일 때 한 줄로 표시 */
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 640px;
  margin: 0px 30px 90px 30px;
  padding: 10px;

  p {
    display: flex;
    padding: 0;
    margin: 10px auto;
    font-size: 20px;
    font-family: inter;
    font-weight: 500;
    color: #515151;
    letter-spacing: 2px;
  }
  img {
    width: 100%;
  }
  span {
    font-size: 30px;
    font-family: Noto;
    font-weight: 700;
  }

  &:hover {
    width: 670px;
    box-shadow: 0 0 20px 10px #dadadadc;
    transition: all 0.5s ease;
  }
`;

export default BlogList;
