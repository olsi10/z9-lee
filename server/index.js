const express = require("express");
const app = express();
const oracledb = require("oracledb");
const cors = require("cors");
const dotenv = require("dotenv"); //.env 파일에 접근 가능한 모듈
dotenv.config();

// 모든 도메인으로부터의 요청을 허용합니다.
app.use(cors());

const dbConfig = {
  user: "ZGOOLEE",
  password: "1234",
  connectString: "localhost:1521/xe",
  externalAuth: false,
};

// 오라클 DB 연결 함수
async function connectToDB() {
  try {
    await oracledb.createPool(dbConfig);
    console.log("Connected to DB!");
  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
}

// 서버 구동 함수
async function startServer() {
  await connectToDB();
  app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
  });
}

startServer();

// GET /api/products - 모든 상품 목록 가져오기 API
app.get("/api/user", async (req, res) => {
  try {
    // 오라클 DB에 연결하여 상품 목록 조회
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      "SELECT USERNAME, TO_CHAR(HIREDATE, 'YY/MM/DD') FROM TABLE1;"
    );
    await connection.close();

    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST /api/products - 새로운 상품 추가 API
app.post("/api/products", async (req, res) => {
  try {
    // 클라이언트로부터 받은 상품 정보를 오라클 DB에 추가
    const { name, price } = req.body;
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      "INSERT INTO TABLE1 (USERNAME, HIREDATE) VALUES (:USERNAME, :HIREDATE)",
      [name, price]
    );
    await connection.commit();
    await connection.close();

    res.json({ message: "Product added successfully" });
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
