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
  const { name, nickname, phone, email, role } = req.body;

  try {
    const connection = await oracledb.getConnection(dbConfig);
    const insertQuery =
      "INSERT INTO users (name, nickname, phone, email, role) VALUES (:name, :nickname, :phone, :email, :role)";
    const binds = { name, nickname, phone, email, role };

    const result = await connection.execute(insertQuery, binds, {
      autoCommit: true,
    });
    connection.close();

    console.log("User registered:", result);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user" });
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
