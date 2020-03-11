const express = require("express");
const postsRouter = require("./posts/posts-router.js");
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());
server.use("/api/posts", postsRouter);

const port = 9000;
server.listen(port, () => {
  console.log(
    `Server Running on http://localhost:${port} what 9000 that cannot be right`
  );
});