const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
// console.log(PORT)
// console.log("hii")
// console.log(PORT)

require("./db/conn");
app.use(express.json());
const User = require("./model/userSchema");
// Linking the router file
app.use(require("./router/auth"));

const middleware = (req, res, next) => {
  console.log("I called the middleware");
  next();
};
app.get("/", (req, res) => {
  res.send("Hello from home page");
});
// app.listen(PORT).on((error) => {
//   if (error.code === "EACCESS") {
//     console.log("Can't run on port 80. Please, run me as a sudo!");
//   }
//   //console.log(`server is running at port no ${PORT} `);
//   console.log(error);
// });

app.listen(PORT, (err) => {
  console.log(`server is running at port no ${PORT} `);
});
