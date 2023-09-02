const express = require("express");
const session = require("express-session");
const oracledb = require("oracledb");
const bodyParser = require("body-parser");
const moment = require("moment-timezone");
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
  const { name, nickname, phone, email, hire_date } = req.body;

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

    const desiredTimezone = "Asia/Seoul"; // 한국 시간대

    const currentDate = moment().tz(desiredTimezone).format("YYYY-MM-DD"); // 'YYYY-MM-DD' 형식의 날짜
    const insertBinds = {
      name,
      nickname,
      phone,
      email,
      hire_date: currentDate,
    };

    const insertQuery =
      "INSERT INTO USERS (name, nickname, phone, email, hire_date) VALUES (:name, :nickname, :phone, :email, :hire_date)";

    const insertResult = await connection.execute(insertQuery, insertBinds, {
      autoCommit: true,
    });

    // 유저 정보
    const User = {
      name,
      nickname,
      phone,
      email,
      hire_date,
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

      res.status(200).json({ message: "로그인 성공" });
    } else {
      console.log("로그인 실패");
      res.status(401).json({ message: "로그인 실패" });
    }

    await connection.close();
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Error logging in" });
  }
});

// 상품 데이터 가져오기
app.get("/products", async (req, res) => {
  try {
    // 정렬 옵션 파라미터 가져오기
    const { sort } = req.query;

    // 정렬에 사용할 컬럼명
    let orderBy = "id"; // 기본은 id로 정렬

    if (sort === "price") {
      orderBy = "price";
    } else if (sort === "priced") {
      orderBy = "price DESC";
    } else if (sort === "inventory") {
      orderBy = "inventory";
    } else if (sort === "inventoryd") {
      orderBy = "inventory DESC";
    } else if (sort === "id") {
      orderBy = "id";
    } else if (sort === "idd") {
      orderBy = "id DESC";
    }

    // 데이터베이스 연결
    const connection = await oracledb.getConnection(dbConfig);

    // products 테이블에서 데이터 가져오기
    const result = await connection.execute(
      `SELECT * FROM products ORDER BY ${orderBy}`
    );

    console.log(result);

    const cnt = await connection.execute("SELECT COUNT(*) FROM PRODUCTS");

    const products = result.rows;
    const totalCount = cnt.rows[0][0]; // 상품 개수 값

    // 결과를 클라이언트로 전송
    res.json({ products, totalCount });

    // 연결 닫기
    await connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "안된다" });
  }
});

// // 상품 추가
app.post("/product", async (req, res) => {
  try {
    const { name, price, inventory, description, imageUrl } = req.body;

    const connection = await oracledb.getConnection(dbConfig);

    const query = `
      INSERT INTO products (name, price, inventory, description, image_url)
      VALUES (:name, :price, :inventory, :description, :imageUrl)
    `;

    const binds = {
      name,
      price,
      inventory,
      description,
      imageUrl,
    };

    // 새로운 상품 추가 후 전체 상품 조회
    await connection.execute(query, binds, { autoCommit: true });
    const updated = await connection.execute("SELECT * FROM products");

    await connection.close();

    res.status(200).json({ message: "상품 추가 완료", products: updated.rows });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "에러 발생" });
  }
});

// 상품 수정
app.put("/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, price, inventory, description, imageUrl } = req.body;

    const connection = await oracledb.getConnection(dbConfig);

    const query = `
      UPDATE products
      SET name = :name, price = :price, inventory = :inventory, description = :description, image_url = :imageUrl
      WHERE id = :productId
    `;

    const binds = {
      productId,
      name,
      price,
      inventory,
      description,
      imageUrl,
    };

    await connection.execute(query, binds, { autoCommit: true });
    await connection.close();

    res.status(200).json({ message: "상품 수정 완료" });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "에러 발생" });
  }
});

// 상품 삭제
app.delete("/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const connection = await oracledb.getConnection(dbConfig);

    const query = `
      DELETE FROM products
      WHERE id = :productId
    `;

    const binds = { productId };

    await connection.execute(query, binds, { autoCommit: true });
    const updated = await connection.execute("SELECT * FROM products");

    await connection.close();

    res.status(200).json({ message: "상품 삭제 완료", products: updated });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "에러 발생" });
  }
});

// 개별 상품 정보 가져오기
app.get("/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const connection = await oracledb.getConnection(dbConfig);

    const query = "SELECT * FROM products WHERE id = :productId";
    const binds = { productId };
    const result = await connection.execute(query, binds);

    await connection.close();

    if (result.rows.length === 0) {
      res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "에러 발생" });
  }
});

// 장바구니 데이터 추가
app.post("/cart/add", (req, res) => {
  const productId = parseInt(req.body.productId);
  const productToAdd = products.find((product) => product[0] === productId);

  if (productToAdd) {
    cartItems.push(productToAdd);
    res.status(201).json({ message: "Item added to cart" });
  } else {
    res.status(404).json({ message: "Product not found" });
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
