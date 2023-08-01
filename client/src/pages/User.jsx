import React, { useState } from "react";
import styled from "styled-components";
import TrueUser from "../components/TrueUser";
import FalseUser from "../components/FalseUser";

const User = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 사용자가 이미 등록된 회원인지 확인합니다.
  const isUserRegistered = formData.email === "1234";

  return (
    <Container>
      {isUserRegistered ? (
        <TrueUser formData={formData} handleChange={handleChange} />
      ) : (
        <FalseUser formData={formData} handleChange={handleChange} />
      )}
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
    margin-top: 8px;
  }
`;

export default User;
