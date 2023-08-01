import React from "react";
import styled from "styled-components";

const TrueUser = ({ formData, handleChange }) => {
  return (
    <Container>
      <h1>회원</h1>
      <form>
        <Box>
          <label>
            <span>*</span>
            이름:
            <input type="text" value={formData.name} onChange={handleChange} />
          </label>
        </Box>
        <Box>
          <label>
            <span>*</span>
            전화번호:
            <input type="text" value={formData.phone} onChange={handleChange} />
          </label>
        </Box>
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
            가입 자격:
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="">자격 선택</option>
              <option value="admin">관리자</option>
              <option value="seller">판매자</option>
              <option value="user">일반 회원</option>
            </select>
          </label>
        </Box>
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
    margin-top: 8px;
  }
`;

export default TrueUser;
