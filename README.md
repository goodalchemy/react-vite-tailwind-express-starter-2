# React + Vite + Tailwind + Express Starter

## Overview

This is a **starter template** for building web apps with **React, Vite, TailwindCSS, and Express**. It provides flexibility without the constraints of frameworks like Next.js or Remix. Serve your frontend and API from a single Express server for easier deployment.

## Benefits

- **No Framework Lock-in** – Customize your app structure without Next.js or Remix constraints.
- **Unified Full-Stack Setup** – Serve frontend and API from the same Express server.
- **Efficient Development** – Vite ensures fast builds and hot reloading.
- **TailwindCSS for Styling** – Quickly create responsive designs.
- **No TypeScript** – This project sticks to JavaScript for simplicity, speed, and fewer dependencies. TypeScript can add unnecessary overhead for small to medium projects, but you're free to add it if needed.
- **Simple Deployment** – Easily deploy to a single server or separate services as needed.

## API Development with Express

Define routes under `src/routes/`. Example:

```js
// src/routes/hello.js
const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

module.exports = router;
```

### Deployment Options

- **VPS (DigitalOcean, Linode, AWS EC2)**
- **Heroku** – Use a single **Procfile**
- **Railway, Fly.io, Render.com**

As of right now, we highly recommend Render.com for their ease of use, reliability, and strong range of offerings - especially their Postgres plans. This is not an ad, we just really like them.

## Conclusion

This setup keeps things simple and flexible. Modify as needed and deploy where it suits you.
