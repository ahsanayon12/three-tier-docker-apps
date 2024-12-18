const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "dockerdb",
  password: "postgres",
  port: 5432,
});

// API endpoint
app.get("/api/username", async (req, res) => {
  try {
    const result = await pool.query("SELECT username FROM users LIMIT 1");
    res.json({ username: result.rows[0]?.username || "Guest" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database query failed" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
