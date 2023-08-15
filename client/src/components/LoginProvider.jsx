import React, { createContext, useContext, useState } from "react";

// 로그인 관련 컨텍스트 생성
const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 유저 정보 상태

  // 로그인 함수
  const login = (userData) => {
    setUser(userData);
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);
  };

  // 컨텍스트 값 제공
  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

// 커스텀 훅 생성
const useLogin = () => {
  return useContext(LoginContext);
};

export { LoginProvider, useLogin, LoginContext };
