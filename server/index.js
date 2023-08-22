const express = require("express");
const oracledb = require("oracledb");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const dbConfig = {
  user: "ZGOOLEE",
  password: "1234",
  connectString: "localhost:1521/xe",
};

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 유저 회원가입 (등록)
app.post("/signup", async (req, res) => {
  const { name, nickname, phone, email, role, hire_date } = req.body;

  try {
    const connection = await oracledb.getConnection(dbConfig);

    // 중복 체크를 위한 쿼리
    const duplicateCheckQuery =
      "SELECT COUNT(*) FROM USERS WHERE nickname = :nickname OR email = :email";
    const duplicateCheckBinds = { nickname, email };
    const duplicateCheckResult = await connection.execute(
      duplicateCheckQuery,
      duplicateCheckBinds
    );

    // nickname 또는 email 중 하나라도 이미 존재하는 경우
    if (duplicateCheckResult.rows[0][0] > 0) {
      console.log("이미 존재합니다.");
      return res.status(400).json({ message: "이미 존재합니다." });
    }

    const insertQuery =
      "INSERT INTO USERS (name, nickname, phone, email, role, hire_date) VALUES (:name, :nickname, :phone, :email, :role, TO_DATE(:hire_date, 'YYYY-MM-DD'))";
    const insertBinds = { name, nickname, phone, email, role, hire_date };

    const insertResult = await connection.execute(insertQuery, insertBinds, {
      autoCommit: true,
    });

    // 유저 정보
    const User = {
      name,
      nickname,
      phone,
      email,
      role,
    };

    console.log("유저 등록 성공");
    res.status(201).json({ message: "유저 등록 성공", user: User });

    connection.close();

    console.log("User registered:", insertResult);
  } catch (error) {
    console.log("유저 등록 실패");
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
});

// 로그인 처리
app.post("/login", async (req, res) => {
  const { email, phone } = req.body;

  try {
    const connection = await oracledb.getConnection(dbConfig);

    // 이메일과 비밀번호를 이용하여 사용자 정보를 조회하는 쿼리
    const query = "SELECT * FROM users WHERE email = :email AND phone = :phone";
    const binds = { email, phone };
    const result = await connection.execute(query, binds);

    console.log("유저 정보 : ", result);

    if (result.rows.length === 1) {
      console.log("로그인 성공"); // 유저 정보를 담고 있는 객체를 json응답으로 반환
      res.status(200).json({ message: "로그인 성공", user: result.rows[0] });
    } else {
      console.log("로그인 실패");
      res.status(401).json({ message: "로그인 실패" });
    }

    connection.close();
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Error logging in" });
  }
});

app.get("/user", async (req, res) => {
  try {
    const connection = await oracledb.getConnection(dbConfig);

    const query = "SELECT * FROM TABLE1";
    const result = await connection.execute(query);

    await connection.close();

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
