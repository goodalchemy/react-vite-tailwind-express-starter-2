const { Pool } = require("pg");

const pool = new Pool({
  user: "",
  password: "",
  host: "",
  port: "",
  database: "",
});

pool.query("SELECT NOW()", (err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected successfully");
  }
});

module.exports = pool;
