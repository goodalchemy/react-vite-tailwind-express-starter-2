const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5000",
  "http://localhost:5173",
];

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      console.log("Not allowed by CORS", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

const clientPath = path.join(__dirname, "./client/dist");
app.use(express.static(clientPath));

app.get("*", (req, res) => {
  const indexPath = path.join(clientPath, "index.html");
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
