import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import login from "../assets/login/login.png";
import signup from "../assets/login/signup.png";

const User = () => {
  return (
    <Container>
      <Link to="/login">
        <Box>
          <p>로그인</p>
          <img src={login} alt="" />
        </Box>
      </Link>
      <Link to="/signup">
        <Box>
          <p>회원가입</p>
          <img src={signup} alt="" />
        </Box>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 100vh;
  margin: 200px auto;
  background: rgb(115, 189, 110);
  background: linear-gradient(
    0deg,
    rgba(115, 189, 110, 1) 0%,
    rgba(234, 240, 234, 1) 75%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const Box = styled.div`
  width: 320px;
  height: 320px;
  font-family: Noto;
  font-size: 24px;
  border: 1px solid #000000;
  border-radius: 20px;
  margin: 20px;
  padding: 20px;

  &:hover {
    background-color: #eaf0ea;
    transition: all 0.3s;
  }

  p {
    text-align: center;
  }

  img {
    width: 50%;
    margin-left: 80px;
  }
`;

export default User;
