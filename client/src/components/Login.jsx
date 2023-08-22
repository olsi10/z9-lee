import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  // 중복 체크 확인하는 state변수
  const [errorVisible, setErrorVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // 서버로 전송
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        console.log("로그인 성공");
        navigate(`/cart?`);
      } else if (res.status === 401) {
        setErrorVisible(true);
      } else {
        console.error("로그인 실패 실패");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Container>
      <h1>로그인</h1>
      {errorVisible && (
        <span
          style={{
            color: "red",
            fontFamily: "noto",
            fontWeight: 500,
            margin: 0,
            padding: 0,
          }}
        >
          이메일 또는 비밀번호가 틀렸습니다.
        </span>
      )}
      <form onSubmit={handleSubmit}>
        <Box>
          <label>
            <span>*</span>
            이메일:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </Box>
        <Box>
          <label>
            <span>*</span>
            전화번호:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </Box>
        <input type="submit" value="로그인하기" />
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;

  input {
    font-family: "Noto Sans KR", "Noto Sans Korean", "Nanum Gothic", sans-serif !important;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border: 0;
    outline: none;
    font-size: 10px;
  }

  input::placeholder {
    color: #d9d9d9;
  }
  input::placeholder {
    color: #d9d9d9;
  }
`;

const Box = styled.div`
  width: 50%;
  margin: 20px auto;
  position: relative;

  label {
    display: inline-block;
    top: -5px;
    left: 14px;
    padding: 10px;
    background: white;
    font-size: 14px;
    color: #888;
    font-weight: bold;
  }

  span {
    color: #da4841;
    vertical-align: -1px;
    margin-right: 3px;
  }

  input {
    width: 100%;
    border: 1px solid #dddddd !important;
    font-size: 1rem;
    line-height: 1.45;
    letter-spacing: -0.04rem;
    border-radius: 8px;
    padding: 16px;
    margin-top: 12px;
  }

  select {
    width: 164px;
    height: 58px;
    border-radius: 8px;
    border: 1px solid #dddddd !important;
    margin-top: 8px !important;
  }
`;

export default Login;
