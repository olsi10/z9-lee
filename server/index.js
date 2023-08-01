const express = require("express");
const oracledb = require("oracledb");
const cors = require("cors");
const app = express();

app.use(cors());

const dbConfig = {
  user: "ZGOOLEE",
  password: "1234",
  connectString: "localhost:1521/xe",
};

app.get("/api/user", async (req, res) => {
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
