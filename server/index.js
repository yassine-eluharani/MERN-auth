require("dotenv").config();
const { User } = require("./models/user");
const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(cors());
connection();

// app.post("/register", (req, res) => {
//   res.json(req.body.password);
// });

app.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log(`Listen to port 3000`);
});
