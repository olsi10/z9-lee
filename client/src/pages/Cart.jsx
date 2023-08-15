import React, { useEffect, useState } from "react";

const Cart = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 로그인 후 서버에서 유저 정보를 가져오는 함수 호출
    fetchUserInfoFromServer()
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
      });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>안녕하세요 {user.nickname}님</p>
          <p>전화번호: {user.phone}</p>
          {/* 등등 다른 정보 */}
        </div>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}
    </div>
  );
};

export default Cart;

// 로그인 후 서버에서 유저 정보를 가져오는 함수
const fetchUserInfoFromServer = async () => {
  try {
    const res = await fetch("http://localhost:3001/fetchUserInfo", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + 123, // 예시: JWT 토큰 등을 전송
      },
    });

    if (res.ok) {
      const userData = await res.json();
      return userData;
    } else {
      throw new Error("Failed to fetch user info");
    }
  } catch (error) {
    throw error;
  }
};
