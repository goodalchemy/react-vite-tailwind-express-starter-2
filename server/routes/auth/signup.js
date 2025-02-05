const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../../lib/db");

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingAccount = await pool.query(
      "SELECT * FROM account WHERE email = $1",
      [email]
    );

    if (existingAccount.rows.length > 0) {
      return res.status(409).json({ error: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const { rows } = await pool.query(
      "INSERT INTO account (email, password) VALUES ($1, $2) RETURNING id, email",
      [email, hashedPassword]
    );
    const newAccount = rows[0];

    const token = jwt.sign({ userId: newAccount.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
